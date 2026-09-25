/**
 * Screen-capture helper.
 *
 * Drives the system Chrome via playwright-core — no browser download. Powers
 * the dev server first (`npm run dev`) and then run:
 *
 *   node scripts/shots.mjs [route] [width]
 *
 * Writes numbered PNGs to .shots/ so a section can be reviewed one screen at a
 * time rather than as one unreadable full-page strip.
 */
import { chromium } from 'playwright-core'
import { mkdirSync, rmSync } from 'node:fs'

const ROUTE = process.argv[2] ?? '/'
const WIDTH = Number(process.argv[3] ?? 1440)
const HEIGHT = Number(process.argv[4] ?? 900)
const BASE = process.env.SHOT_BASE ?? 'http://localhost:5180'

const OUT = '.shots'
rmSync(OUT, { recursive: true, force: true })
mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch({ channel: 'chrome' })
const page = await browser.newPage({ viewport: { width: WIDTH, height: HEIGHT } })

await page.goto(`${BASE}${ROUTE}`, { waitUntil: 'load' })
// Let the ticker settle and any font swap finish before capturing.
await page.waitForTimeout(1500)

const total = await page.evaluate(() => document.body.scrollHeight)
const screens = Math.min(Math.ceil(total / HEIGHT), 8)

for (let i = 0; i < screens; i += 1) {
  const y = i * HEIGHT
  await page.evaluate((top) => window.scrollTo(0, top), y)
  await page.waitForTimeout(450)

  const name = `${OUT}/${String(i).padStart(2, '0')}-${ROUTE.replace(/\W+/g, '') || 'home'}.png`
  await page.screenshot({ path: name })
  console.log(`${name}  (scroll ${y}px)`)
}

console.log(`\npage height ${total}px, ${screens} screens at ${WIDTH}x${HEIGHT}`)
await browser.close()
