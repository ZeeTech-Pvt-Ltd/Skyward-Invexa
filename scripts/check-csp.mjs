/**
 * Checks that the Content-Security-Policy allows every origin the site
 * actually contacts.
 *
 * This exists because a CSP that is missing an endpoint blocks the request in
 * production while every local check still passes - there is no CSP on the dev
 * server. A missing entry looks exactly like a working feature until it is
 * deployed.
 *
 * Run: npm run check:csp
 */
import { readFileSync } from 'node:fs'
import { chromium } from 'playwright-core'

const BASE = process.env.SHOT_BASE ?? 'http://localhost:5180'
const ROUTES = ['/', '/about', '/contact', '/faq', '/sign-up', '/privacy']

const { headers } = JSON.parse(readFileSync('vercel.json', 'utf8'))
const cspHeader = headers
  .flatMap((h) => h.headers)
  .find((h) => h.key === 'Content-Security-Policy')

if (!cspHeader) {
  console.error('no Content-Security-Policy found in vercel.json')
  process.exit(1)
}

/** Parse "directive a b; directive2 c" into a map. */
const directives = new Map()
for (const part of cspHeader.value.split(';')) {
  const [name, ...values] = part.trim().split(/\s+/)
  if (name) directives.set(name, values)
}

const list = (name) => directives.get(name) ?? directives.get('default-src') ?? []

/** Does the policy allow this origin for this directive? */
function allows(directive, origin) {
  const values = list(directive)
  if (values.includes('*')) return true
  if (values.includes(origin)) return true
  // Wildcard subdomains, e.g. https://*.google-analytics.com
  return values.some((value) => {
    if (!value.includes('*')) return false
    const [scheme, host] = value.split('://')
    const [targetScheme, targetHost] = origin.split('://')
    if (scheme !== targetScheme || !host || !targetHost) return false
    return targetHost.endsWith(host.replace('*.', ''))
  })
}

/** Which directive governs a request of this type? */
function directiveFor(type) {
  if (type === 'script') return 'script-src'
  if (type === 'stylesheet') return 'style-src'
  if (type === 'image') return 'img-src'
  if (type === 'font') return 'font-src'
  return 'connect-src'
}

const browser = await chromium.launch({ channel: 'chrome' })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })

/** origin -> directive it was first seen under. */
const external = new Map()

page.on('request', (request) => {
  const url = request.url()
  if (url.startsWith(BASE) || url.startsWith('data:') || url.startsWith('blob:')) return
  const origin = new URL(url).origin
  if (!external.has(origin)) external.set(origin, directiveFor(request.resourceType()))
})

for (const route of ROUTES) {
  await page.goto(`${BASE}${route}`, { waitUntil: 'load' })
  await page.waitForTimeout(2500)
}

await browser.close()

console.log(`CSP directives : ${[...directives.keys()].join(', ')}\n`)
console.log('external origins the site contacts:')

let blocked = 0
for (const [origin, directive] of external) {
  const ok = allows(directive, origin)
  if (!ok) blocked += 1
  console.log(`  ${ok ? 'allowed' : 'BLOCKED'}  ${directive.padEnd(12)} ${origin}`)
}

if (blocked) {
  console.error(
    `\n${blocked} origin(s) are not permitted by the CSP. Those requests will fail in production.`,
  )
  process.exit(1)
}

console.log(`\nAll ${external.size} external origins are permitted by the CSP.`)
