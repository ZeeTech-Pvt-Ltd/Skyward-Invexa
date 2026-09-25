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

const routes: RouteCheck[] = [
  {
    path: '/',
    must: [
      'Multi-Asset',
      'Asset classes in one account',
      'Order Ticket',
      // The home page form must be present, with the shared field set.
      'Join Skyward Invexa',
      'First Name',
      'Last Name',
      'Phone Number',
      'Sign Up',
    ],
  },
  { path: '/about', must: ['Skyward Invexa', 'Four Rules'] },
  { path: '/faq', must: ['Skyward Invexa', 'What Are the Risks'] },
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
