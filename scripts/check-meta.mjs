/**
 * Verifies the per-route head at runtime.
 *
 * `usePageMeta` writes the tags from a useEffect, so server-side rendering
 * never sees them and the smoke test cannot cover this. A browser can.
 */
import { chromium } from 'playwright-core'

const BASE = process.env.SHOT_BASE ?? 'http://localhost:5180'

/** path -> expected robots directive, or null when it should be indexable. */
const ROUTES = [
  ['/', null],
  ['/about', null],
  ['/contact', null],
  ['/faq', null],
  ['/terms', null],
  ['/privacy', null],
  ['/risk-disclosure', null],
  ['/cookie-policy', null],
  ['/thank-you', 'noindex, nofollow'],
  ['/this-path-does-not-exist', 'noindex, nofollow'],
]

const browser = await chromium.launch({ channel: 'chrome' })
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })

let failures = 0

for (const [path, expectedRobots] of ROUTES) {
  await page.goto(`${BASE}${path}`, { waitUntil: 'load' })
  await page.waitForTimeout(700)

  const meta = await page.evaluate(() => ({
    robots: document.head.querySelector('meta[name="robots"]')?.getAttribute('content') ?? null,
    canonical: document.head.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? null,
    title: document.title,
  }))

  const problems = []
  if (expectedRobots && meta.robots !== expectedRobots) {
    problems.push(`robots is ${meta.robots ?? 'absent'}, expected "${expectedRobots}"`)
  }
  if (!expectedRobots && meta.robots) {
    problems.push(`robots should be absent, found "${meta.robots}"`)
  }
  // A canonical on a noindex page contradicts the noindex.
  if (expectedRobots && meta.canonical) {
    problems.push(`canonical should be omitted, found ${meta.canonical}`)
  }
  if (!expectedRobots && !meta.canonical) {
    problems.push('canonical is missing')
  }

  if (problems.length) {
    failures += 1
    console.log(`  FAIL ${path.padEnd(26)} ${problems.join('; ')}`)
  } else {
    console.log(
      `  ok   ${path.padEnd(26)} ${meta.robots ? `robots="${meta.robots}" no canonical` : 'indexable, canonical set'}`,
    )
  }
}

await browser.close()

if (failures) {
  console.error(`\n${failures} of ${ROUTES.length} routes have head problems.`)
  process.exit(1)
}
console.log(`\nAll ${ROUTES.length} routes have the expected head.`)
