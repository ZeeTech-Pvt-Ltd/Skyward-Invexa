/**
 * Static verification of the built export. No browser, no server.
 *
 *   npm run build && npm run check:ssg
 *
 * This replaces the React Router smoke test the Vite build used. That one
 * rendered every route with MemoryRouter and asserted the markers were in the
 * string; this one asserts the same markers are in the HTML file that actually
 * ships, plus the head values that used to be checked in a browser.
 *
 * The failure modes this catches are the ones a static export can actually
 * have: a route that did not emit a file, a route that rendered an empty
 * shell, a noindex page that shipped a canonical anyway, and a marketing page
 * that lost its body.
 */
import { existsSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * Kept as a literal because this is a plain Node script: it cannot import the
 * TypeScript page registry without a loader. `check-ssg` fails if any of these
 * has no file, so a page that is deleted shows up here.
 */
const MARKETING_PATHS = [
  '/ai-crypto-trading',
  '/ai-forex-trading',
  '/ai-gold-trading',
  '/ai-stock-trading',
  '/how-it-works',
  '/automated-trading',
  '/ai-trading-signals',
  '/risk-management-tools',
  '/what-is-ai-trading',
  '/ai-trading-for-beginners',
  '/why-invest',
  '/review',
]

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'out')

let failures = 0

function check(label, condition, detail = '') {
  if (!condition) {
    failures += 1
    console.log(`  FAIL ${label}${detail ? `\n       ${detail}` : ''}`)
  } else {
    console.log(`  ok   ${label}`)
  }
}

function read(route) {
  const rel = route === '/' ? 'index.html' : `${route.replace(/^\//, '')}.html`
  const file = path.join(OUT, rel)
  if (!existsSync(file) || statSync(file).size === 0) return null
  return readFileSync(file, 'utf8')
}

const PAGE_MARKERS = [
  'Skyward Invexa',
  'Frequently Asked Questions',
  'Open Your Free Account Today',
]

/** Every route, with the content that proves the body rendered. */
const ROUTES = [
  {
    path: '/',
    must: [
      'Smarter Trading Starts with Skyward Invexa',
      'Create My Free Account',
      'What Is Skyward Invexa',
      'Automated Trading or Manual Signals',
      'Is Skyward Invexa Safe and Legit',
      'Markets You Can Trade with Skyward Invexa',
      'Illustrative shapes',
      'Open Your Free Account Today',
      'Trading carries risk',
    ],
  },
  { path: '/about', must: ['Four Rules', 'Our Promise to You'] },
  { path: '/faq', must: ['Does Skyward Invexa Guarantee Profits', 'Deposits and Withdrawals'] },
  {
    path: '/contact',
    must: ['Contact Skyward Invexa', 'Support Coverage', 'Ways to Reach Us'],
  },
  { path: '/sign-up', must: ['Sign Up', 'First Name', 'Email Address'] },
  { path: '/thank-you', must: ['Thank You'] },
  { path: '/risk-disclosure', must: ['Risk Disclosure'] },
  { path: '/privacy', must: ['Privacy Policy'] },
  { path: '/cookie-policy', must: ['Cookie Policy'] },
  { path: '/terms', must: ['Terms of Use', 'Risk Disclosure'] },
  { path: '/ai-crypto-trading', must: [...PAGE_MARKERS, 'What Is AI Crypto Trading'] },
  { path: '/ai-forex-trading', must: [...PAGE_MARKERS, 'AI Forex Trading'] },
  { path: '/ai-gold-trading', must: [...PAGE_MARKERS, 'AI Gold Trading'] },
  { path: '/ai-stock-trading', must: [...PAGE_MARKERS, 'AI Stock Trading'] },
  { path: '/how-it-works', must: [...PAGE_MARKERS, 'How Does'] },
  { path: '/automated-trading', must: [...PAGE_MARKERS, 'Automated Trading'] },
  { path: '/ai-trading-signals', must: [...PAGE_MARKERS, 'AI Trading Signals'] },
  { path: '/risk-management-tools', must: [...PAGE_MARKERS, 'Risk Management'] },
  { path: '/what-is-ai-trading', must: [...PAGE_MARKERS, 'What Is AI Trading'] },
  { path: '/ai-trading-for-beginners', must: [...PAGE_MARKERS, 'Beginners'] },
  { path: '/why-invest', must: [...PAGE_MARKERS, 'Why Invest'] },
  { path: '/review', must: [...PAGE_MARKERS, 'Review'] },
]

/** Routes that must carry a noindex and no canonical. */
const NOINDEX = ['/thank-you']

console.log('--- routes ---')
for (const route of ROUTES) {
  const html = read(route.path)
  check(`${route.path} emitted`, html !== null)

  if (!html) continue

  const missing = route.must.filter((marker) => !html.includes(marker))
  check(`${route.path} has its content`, missing.length === 0, `missing: ${missing.join(', ')}`)

  const title = (html.match(/<title>([^<]*)<\/title>/) ?? [])[1] ?? ''
  check(`${route.path} has a title`, title.length > 0, title || 'no <title>')

  const indexable = !NOINDEX.includes(route.path)
  const canonical = /<link rel="canonical" href="([^"]*)"/.exec(html)?.[1] ?? null

  if (indexable) {
    check(`${route.path} has a canonical`, canonical !== null)
    check(`${route.path} has an og:image`, html.includes('property="og:image"'))
  } else {
    check(`${route.path} is noindex`, html.includes('name="robots"') && html.includes('noindex'))
    check(`${route.path} has no canonical`, canonical === null)
  }
}

console.log('\n--- 404 ---')
const notFound = read('/404')
check('404.html emitted', notFound !== null)
check('404.html is noindex', Boolean(notFound?.includes('noindex')))
check('404.html has no canonical', Boolean(notFound && !notFound.includes('rel="canonical"')))

console.log('\n--- structured data ---')
const home = read('/')
check('site schema on the home page', Boolean(home?.includes('"@type":"Organization"')))
check('FAQ schema on the FAQ page', Boolean(read('/faq')?.includes('"@type":"FAQPage"')))
check(
  'FAQ schema on a marketing page',
  Boolean(read('/ai-forex-trading')?.includes('"@type":"FAQPage"')),
)

console.log('\n--- sitemap ---')
const sitemapPath = path.join(OUT, 'sitemap.xml')
check('sitemap.xml emitted', existsSync(sitemapPath))
if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, 'utf8')
  check(
    'sitemap lists every marketing page',
    MARKETING_PATHS.every((p) => sitemap.includes(p)),
  )
  check('sitemap excludes /thank-you', !sitemap.includes('/thank-you'))
  check('sitemap has no empty <loc>', !sitemap.includes('<loc></loc>'))
}

console.log('\n--- assets ---')
check('stylesheet emitted', existsSync(path.join(OUT, '_next', 'static')))
const cssLinked = ['index.html', 'ai-forex-trading.html'].every((file) => {
  const html = readFileSync(path.join(OUT, file), 'utf8')
  return /<link[^>]+rel="stylesheet"/.test(html)
})
check('stylesheet linked in the HTML', cssLinked)
check('no Google Fonts request', !readFileSync(path.join(OUT, 'index.html'), 'utf8').includes('fonts.googleapis.com'))

console.log(
  failures === 0
    ? `\nAll ${ROUTES.length} routes passed the static check.`
    : `\n${failures} check(s) failed.`,
)

process.exit(failures === 0 ? 0 : 1)
