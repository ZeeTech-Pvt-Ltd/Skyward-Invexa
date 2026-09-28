/**
 * Verifies the per-route head at runtime.
 *
 * usePageMeta writes the tags from a useEffect, so server-side rendering never
 * sees them and the smoke test cannot cover this. A browser can.
 *
 * Checks the title, description, canonical, robots directive, social card and
 * that every JSON-LD block on the page parses.
 *
 * Run: npm run check:meta
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
  ['/sign-up', null],
  ['/thank-you', 'noindex, nofollow'],
  ['/this-path-does-not-exist', 'noindex, nofollow'],
]

const browser = await chromium.launch({ channel: 'chrome' })
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })

let failures = 0

for (const [path, expectedRobots] of ROUTES) {
  await page.goto(`${BASE}${path}`, { waitUntil: 'load' })
  await page.waitForTimeout(700)

  const meta = await page.evaluate(() => {
    const content = (selector) =>
      document.head.querySelector(selector)?.getAttribute('content') ?? null

    const blocks = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
    let ldValid = true
    const ldTypes = []
    for (const block of blocks) {
      try {
        const parsed = JSON.parse(block.textContent || '{}')
        const nodes = parsed['@graph'] ?? [parsed]
        for (const node of nodes) if (node['@type']) ldTypes.push(node['@type'])
      } catch {
        ldValid = false
      }
    }

    return {
      robots: content('meta[name="robots"]'),
      canonical:
        document.head.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? null,
      title: document.title,
      description: content('meta[name="description"]'),
      ogImage: content('meta[property="og:image"]'),
      ogTitle: content('meta[property="og:title"]'),
      twitterCard: content('meta[name="twitter:card"]'),
      ldValid,
      ldTypes,
    }
  })

  const problems = []

  if (expectedRobots && meta.robots !== expectedRobots) {
    problems.push(`robots is ${meta.robots ?? 'absent'}, expected "${expectedRobots}"`)
  }
  if (!expectedRobots && meta.robots) {
    problems.push(`robots should be absent, found "${meta.robots}"`)
  }
  if (expectedRobots && meta.canonical) {
    problems.push(`canonical should be omitted, found ${meta.canonical}`)
  }
  if (!expectedRobots && !meta.canonical) {
    problems.push('canonical is missing')
  }

  if (!meta.title || meta.title.length < 15) problems.push('title is missing or too short')
  if (!meta.description || meta.description.length < 50) {
    problems.push('description is missing or too short')
  }
  if (!meta.twitterCard) problems.push('twitter:card is missing')
  if (!meta.ldValid) problems.push('a JSON-LD block does not parse')

  // A noindex page deliberately drops its share card; an indexable one must have it.
  if (!expectedRobots) {
    if (!meta.ogImage) problems.push('og:image is missing')
    if (!meta.ogTitle) problems.push('og:title is missing')
  } else if (meta.ogImage) {
    problems.push('og:image should be omitted on a noindex page')
  }

  if (problems.length) {
    failures += 1
    console.log(`  FAIL ${path.padEnd(26)} ${problems.join('; ')}`)
  } else {
    const state = meta.robots ? 'noindex' : 'indexable'
    const card = meta.ogImage ? 'yes' : 'no'
    console.log(
      `  ok   ${path.padEnd(26)} ${state.padEnd(10)} card:${card.padEnd(4)} ld:[${meta.ldTypes.join(',') || '-'}]`,
    )
  }
}

await browser.close()

if (failures) {
  console.error(`\n${failures} of ${ROUTES.length} routes have head problems.`)
  process.exit(1)
}
console.log(`\nAll ${ROUTES.length} routes have the expected head.`)
