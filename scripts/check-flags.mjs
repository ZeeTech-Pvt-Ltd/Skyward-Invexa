/**
 * Checks every flag in the phone country picker.
 *
 * The picker renders each flag as /flags/<ISO>.svg, so this opens the picker,
 * reads the country list, then requests each flag file and confirms it exists
 * and actually contains drawing instructions. A missing file renders as a
 * broken image, which is what this is here to catch.
 *
 * Run: npm run check:flags
 */
import { chromium } from 'playwright-core'

const BASE = process.env.SHOT_BASE ?? 'http://localhost:5180'

const browser = await chromium.launch({ channel: 'chrome' })
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })

// The form is on the contact page; the picker lives inside the phone field.
await page.goto(`${BASE}/contact`, { waitUntil: 'load' })
await page.waitForTimeout(900)

await page.click('button[aria-controls$="-country-list"]')
await page.waitForTimeout(400)

const options = await page.evaluate(() =>
  Array.from(document.querySelectorAll('[role="option"]')).map((option) => ({
    label: (option.textContent ?? '').trim().replace(/\s*\+\d+$/, ''),
    src: option.querySelector('img')?.getAttribute('src') ?? '',
  })),
)

if (options.length === 0) {
  console.error('opened the picker but found no options - did the selector change?')
  process.exit(1)
}

// Request each flag through the page so it goes to the same origin the app uses.
const results = await page.evaluate(async (srcs) => {
  const out = []
  for (const src of srcs) {
    try {
      const response = await fetch(src)
      const body = response.ok ? await response.text() : ''
      // A real flag has path/rect/polygon/circle drawing in it.
      const drawn = /<(path|rect|polygon|circle|g)\b/i.test(body)
      out.push({ ok: response.ok, drawn, bytes: body.length })
    } catch {
      out.push({ ok: false, drawn: false, bytes: 0 })
    }
  }
  return out
}, options.map((o) => o.src))

await browser.close()

const rows = options.map((option, index) => ({ ...option, ...results[index] }))
const broken = rows.filter((r) => !r.ok || !r.drawn)

console.log(`countries in the picker : ${rows.length}`)
console.log(`flags fetched and drawn : ${rows.length - broken.length}`)
console.log(`broken or missing       : ${broken.length}`)

if (broken.length) {
  console.log('\nbroken:')
  for (const row of broken) {
    console.log(`  ${row.label.padEnd(24)} ${row.src || '(no src)'}  ${row.ok ? '' : 'HTTP fail '}${row.drawn ? '' : 'empty'}`)
  }
}

// Sanity check on one flag that must carry an emblem rather than plain bands.
const pk = rows.find((r) => r.src.endsWith('/PK.svg'))
console.log(
  `\nPakistan flag bytes     : ${pk ? pk.bytes : 'not in the picker'} (needs its crescent and star)`,
)

console.log(`\n${broken.length} of ${rows.length} flags are broken.`)
process.exit(broken.length ? 1 : 0)
