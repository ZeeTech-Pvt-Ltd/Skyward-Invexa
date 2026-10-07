/**
 * Render every route to a string in Node and assert on the output.
 *
 * Compiling proves the types line up; this proves each page actually renders
 * AND that the content we expect is present — a page that renders an empty
 * shell still "succeeds" without the markers below.
 *
 * Run with: npm run smoke
 */
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import App from '../src/App'

type RouteCheck = {
  path: string
  /** Substrings that must appear in the rendered HTML. */
  must: string[]
}

/**
 * Every marketing page is rendered by one template, so these three markers
 * prove the hero, the FAQ and the registration form all survived. A page that
 * renders only its shell would still pass on them, so each route adds a marker
 * from its own copy on top.
 */
const PAGE_MARKERS = ['Skyward Invexa', 'Frequently Asked Questions', 'Open Your Free Account Today']

const routes: RouteCheck[] = [
  {
    path: '/',
    must: [
      'Smarter Trading Starts with Skyward Invexa',
      'Create My Free Account',
      'What Is Skyward Invexa',
      'Automated Trading or Manual Signals',
      'Is Skyward Invexa Safe and Legit',
      // The coverage band: the heading, the per-market detail underneath it,
      // and the label that keeps the generated shapes from reading as prices.
      'Markets You Can Trade with Skyward Invexa',
      'Sunday 22:00 to Friday 22:00 AEST',
      'Illustrative shapes',
      'Frequently Asked Questions',
      // The home page form must be present, with the shared field set.
      'Open Your Free Account Today',
      'First Name',
      'Last Name',
      'Phone Number',
      // The risk wording now lives inside the form, so this marker is what
      // catches it being dropped in an edit.
      'Trading carries risk',
    ],
  },
  { path: '/about', must: ['Skyward Invexa', 'Four Rules'] },
  { path: '/faq', must: ['Skyward Invexa', 'Does Skyward Invexa Guarantee Profits', 'Deposits and Withdrawals'] },
  {
    path: '/contact',
    must: [
      'Contact Skyward Invexa',
      'First Name',
      'Last Name',
      'Email Address',
      'Phone Number',
      'Get Started',
      'Privacy Policy',
      'Support Coverage',
    ],
  },
  { path: '/sign-up', must: ['Sign Up', 'First Name', 'Email Address'] },
  { path: '/thank-you', must: ['Thank You'] },
  { path: '/risk-disclosure', must: ['Risk Disclosure'] },
  { path: '/privacy', must: ['Privacy Policy'] },
  { path: '/cookie-policy', must: ['Cookie Policy'] },
  { path: '/terms', must: ['Terms of Use', 'Risk Disclosure'] },

  // Marketing pages. Each one is a data file rendered by the same template, so
  // the shared markers come first and a page-specific one follows. A page that
  // renders its hero but loses its body would still pass on the shared markers
  // alone, which is why every entry names something from its own copy.
  {
    path: '/ai-crypto-trading',
    must: [...PAGE_MARKERS, 'What Is AI Crypto Trading'],
  },
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

  { path: '/this-route-does-not-exist', must: ['404'] },
]

let failures = 0

for (const route of routes) {
  try {
    const html = renderToString(
      <MemoryRouter initialEntries={[route.path]}>
        <App />
      </MemoryRouter>,
    )

    if (html.length < 500) {
      throw new Error(`rendered only ${html.length} characters — page is probably blank`)
    }

    const missing = route.must.filter((marker) => !html.includes(marker))
    if (missing.length > 0) {
      throw new Error(`missing expected content: ${missing.map((m) => JSON.stringify(m)).join(', ')}`)
    }

    console.log(`  ok   ${route.path.padEnd(30)} ${html.length} chars`)
  } catch (error) {
    failures += 1
    console.error(`  FAIL ${route.path}`)
    console.error(`       ${error instanceof Error ? error.message : String(error)}`)
  }
}

if (failures > 0) {
  console.error(`\n${failures} of ${routes.length} routes failed.`)
  process.exit(1)
}

console.log(`\nAll ${routes.length} routes rendered with expected content.`)
