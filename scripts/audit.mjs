/**
 * Finds dead code and unused assets.
 *
 *   node scripts/audit.mjs
 *
 * Reports source files nothing imports, assets nothing references, and data
 * exports nothing consumes. Run it before a release; the build will happily
 * ship all of it.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { basename, extname, join, relative } from 'node:path'

const walk = (dir, out = []) => {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) walk(full, out)
    else out.push(full)
  }
  return out
}

const sourceFiles = walk('src').filter((f) => /\.(ts|tsx)$/.test(f))
const allSource = sourceFiles.map((f) => readFileSync(f, 'utf8')).join('\n')

// Files that exist purely as an entry point or a type barrel.
const ENTRY = new Set(['src/main.tsx', 'src/App.tsx', 'src/vite-env.d.ts'])

console.log('=== source files nothing imports ===')
const orphans = []
for (const file of sourceFiles) {
  if (ENTRY.has(file.replace(/\\/g, '/'))) continue
  const name = basename(file, extname(file))
  // Imported by path (@/components/ui/Card) or by name from a barrel.
  const byPath = allSource.includes(name) && !readFileSync(file, 'utf8').includes(`name: '${name}'`)
  const referenced = new RegExp(`[/']${name}['"]`).test(allSource) || allSource.includes(`/${name}'`)
  if (!referenced && !byPath) orphans.push(file)
}
if (orphans.length === 0) console.log('  (none)')
for (const f of orphans) console.log('  ' + f.replace(/\\/g, '/'))

console.log('\n=== public/ assets nothing references ===')
const publicFiles = walk('public')
const indexHtml = readFileSync('index.html', 'utf8')
const unusedAssets = []
for (const file of publicFiles) {
  const urlPath = '/' + relative('public', file).replace(/\\/g, '/')
  const name = basename(file)
  // Flags and the manifest are referenced by construction, and by wildcard.
  if (urlPath.startsWith('/flags/')) continue
  if (indexHtml.includes(urlPath) || allSource.includes(urlPath) || allSource.includes(name)) continue
  unusedAssets.push({ file: urlPath, kb: Math.round(statSync(file).size / 1024) })
}
if (unusedAssets.length === 0) console.log('  (none)')
for (const a of unusedAssets) console.log(`  ${a.file}  (${a.kb} KB)`)

console.log('\n=== data exports nothing consumes ===')
const dataFiles = sourceFiles.filter((f) => f.includes('data') || f.includes('lib'))
for (const file of dataFiles) {
  const source = readFileSync(file, 'utf8')
  for (const match of source.matchAll(/export (?:const|function|type) (\w+)/g)) {
    const name = match[1]
    // Count uses outside the file that declares it.
    const elsewhere = sourceFiles
      .filter((f) => f !== file)
      .some((f) => new RegExp(`\\b${name}\\b`).test(readFileSync(f, 'utf8')))
    if (!elsewhere) console.log(`  ${name}  (${file.replace(/\\/g, '/')})`)
  }
}

console.log('\n=== decorative assets still present ===')
for (const f of publicFiles) {
  const kb = Math.round(statSync(f).size / 1024)
  if (kb > 40) console.log(`  ${relative('public', f).replace(/\\/g, '/')}  ${kb} KB`)
}
if (!existsSync('public/flags')) console.log('  (no flags directory)')
