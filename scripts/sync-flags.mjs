/**
 * Copies the flag SVGs our country picker needs into public/flags/.
 *
 * Serving them as files rather than bundling them keeps the JavaScript bundle
 * free of ~150 flags and lets the browser fetch only the ones on screen, then
 * cache them. The files are self-hosted either way, so no visitor IP reaches a
 * flag CDN.
 *
 * Run after changing the country list:  npm run sync:flags
 */
import { copyFileSync, mkdirSync, readFileSync, readdirSync, rmSync } from 'node:fs'
import { join, resolve } from 'node:path'

const SRC = 'node_modules/country-flag-icons/3x2'
const OUT = 'public/flags'

// The country list is the single source of truth, so the two cannot drift.
const countriesSource = readFileSync('src/data/countries.ts', 'utf8')
const codes = [...countriesSource.matchAll(/\['([A-Z]{2})',\s*'/g)].map((m) => m[1])

if (codes.length < 100) {
  console.error(`only found ${codes.length} country codes - the parse is probably wrong`)
  process.exit(1)
}

rmSync(OUT, { recursive: true, force: true })
mkdirSync(OUT, { recursive: true })

const available = new Set(readdirSync(SRC).map((f) => f.replace(/\.svg$/, '')))
let copied = 0
const missing = []

for (const code of codes) {
  if (!available.has(code)) {
    missing.push(code)
    continue
  }
  copyFileSync(join(SRC, `${code}.svg`), join(resolve(OUT), `${code}.svg`))
  copied += 1
}

console.log(`flags copied : ${copied} of ${codes.length} countries -> ${OUT}/`)
if (missing.length) console.log(`no flag on file for: ${missing.join(', ')}`)
