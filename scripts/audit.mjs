/**
 * Finds dead code and unused assets.
 *
 *   node scripts/audit.mjs
 *
 * Reports source files nothing imports, assets nothing references, and data
 * exports nothing consumes. Run it before a release; the build will happily
 * ship all of it.
 *
 * Since the move to Next, routes live in `app/` and the UI in `src/`. Every
 * file under `app/` is an entry point by definition - Next imports it from the
 * router, so nothing in the source tree refers to it by name.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { basename, extname, join, relative } from 'node:path'

const walk = (dir, out = []) => {
  if (!existsSync(dir)) return out
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) walk(full, out)
    else out.push(full)
  }
  return out
}

const norm = (f) => f.replace(/\\/g, '/')

const appFiles = walk('app').filter((f) => /\.(ts|tsx)$/.test(f))
const srcFiles = walk('src').filter((f) => /\.(ts|tsx)$/.test(f))
const sourceFiles = [...appFiles, ...srcFiles]

// Routes and the root layout are imported by Next's router, not by our code.
const ENTRY = new Set(appFiles.map(norm))

const allSource = sourceFiles.map((f) => readFileSync(f, 'utf8')).join('\n')

console.log('=== source files nothing imports ===')
const orphans = []
for (const file of sourceFiles) {
  if (ENTRY.has(norm(file))) continue
  const name = basename(file, extname(file))
  // Imported by path (@/components/ui/Card) or by name from a barrel.
  const byPath = allSource.includes(name) && !readFileSync(file, 'utf8').includes(`name: '${name}'`)
  const referenced = new RegExp(`[/']${name}['"]`).test(allSource) || allSource.includes(`/${name}'`)
  if (!referenced && !byPath) orphans.push(file)
}
if (orphans.length === 0) console.log('  (none)')
for (const f of orphans) console.log('  ' + norm(f))

console.log('\n=== public/ assets nothing references ===')
const publicFiles = walk('public')
const unusedAssets = []
for (const file of publicFiles) {
  const urlPath = '/' + relative('public', file).replace(/\\/g, '/')
  const name = basename(file)
  // Flags are referenced by construction, through the country list.
  if (urlPath.startsWith('/flags/')) continue
  if (allSource.includes(urlPath) || allSource.includes(name)) continue
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
    if (!elsewhere) console.log(`  ${name}  (${norm(file)})`)
  }
}

console.log('\n=== decorative assets still present ===')
for (const f of publicFiles) {
  const kb = Math.round(statSync(f).size / 1024)
  if (kb > 40) console.log(`  ${norm(relative('public', f))}  ${kb} KB`)
}
if (!existsSync('public/flags')) console.log('  (no flags directory)')
