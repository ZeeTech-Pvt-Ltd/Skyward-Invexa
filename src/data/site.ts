/**
 * Single source of truth for brand, contact and navigation data.
 * Nothing in the UI should hard-code the domain or support addresses.
 */

export const site = {
  name: 'Skyward Invexa',
  shortName: 'Invexa',
  domain: 'skywardinvexa-au.com',
  url: 'https://skywardinvexa-au.com',
  tagline: 'Multi-asset market access, built for clarity.',
  description:
    'Skyward Invexa is a multi-asset trading platform built for Australian investors, spanning crypto, ASX-listed equities, foreign exchange and commodities.',
  market: 'Australia',
  locale: 'en-AU',
  timezone: 'AEST (UTC+10)',
  abn: '00 000 000 000',
  registeredOffice: 'Level 0, 000 Example Street, Sydney NSW 2000, Australia',
  emails: {
    support: 'support@skywardinvexa-au.com',
    compliance: 'compliance@skywardinvexa-au.com',
    press: 'media@skywardinvexa-au.com',
  },
  supportHours: 'Monday to Friday, 8:00am – 8:00pm AEST',
} as const

export type NavItem = {
  label: string
  href: string
}

/** A link inside a dropdown, with the one-line description shown beneath it. */
export type NavLink = NavItem & { blurb: string }

/**
 * The header menu. Pages are grouped by what a visitor is trying to do rather
 * than listed flat: the site carries four market hubs, four platform pages and
 * four learning pages, and a single row of twelve links is unreadable.
 */
export type NavEntry =
  | { label: string; href: string; items?: never }
  | { label: string; href?: never; items: NavLink[] }

export const primaryNav: NavEntry[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Markets',
    items: [
      {
        label: 'AI Crypto Trading',
        href: '/ai-crypto-trading',
        blurb: 'Bitcoin and altcoins, scanned around the clock',
      },
      {
        label: 'AI Forex Trading',
        href: '/ai-forex-trading',
        blurb: 'Currency pairs, including the overnight sessions',
      },
      {
        label: 'AI Gold Trading',
        href: '/ai-gold-trading',
        blurb: 'XAU/USD and XAU/AUD, without the vault',
      },
      {
        label: 'AI Stock Trading',
        href: '/ai-stock-trading',
        blurb: 'ASX and US shares, earnings seasons included',
      },
    ],
  },
  {
    label: 'Platform',
    items: [
      {
        label: 'How It Works',
        href: '/how-it-works',
        blurb: 'Sign-up to first trade, step by step',
      },
      {
        label: 'Automated Trading',
        href: '/automated-trading',
        blurb: 'Set your rules and let the AI run them',
      },
      {
        label: 'AI Trading Signals',
        href: '/ai-trading-signals',
        blurb: 'Entry, stop-loss and target on every idea',
      },
      {
        label: 'Risk Management Tools',
        href: '/risk-management-tools',
        blurb: 'Stops, daily limits and the kill switch',
      },
    ],
  },
  {
    label: 'Learn',
    items: [
      {
        label: 'What Is AI Trading?',
        href: '/what-is-ai-trading',
        blurb: 'A plain-English guide, including the risks',
      },
      {
        label: 'Trading for Beginners',
        href: '/ai-trading-for-beginners',
        blurb: 'How to start safely in seven steps',
      },
      {
        label: 'Why Invest',
        href: '/why-invest',
        blurb: 'What the platform can and cannot do',
      },
      {
        label: 'Our Review',
        href: '/review',
        blurb: 'Is Skyward Invexa legit? Check for yourself',
      },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About Us', href: '/about', blurb: 'Who we are and what we stand for' },
      { label: 'FAQ', href: '/faq', blurb: 'Deposits, withdrawals, safety and tax' },
      { label: 'Contact', href: '/contact', blurb: 'Talk to a real person in Australia' },
    ],
  },
]

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: 'Markets',
    items: [
      { label: 'AI Crypto Trading', href: '/ai-crypto-trading' },
      { label: 'AI Forex Trading', href: '/ai-forex-trading' },
      { label: 'AI Gold Trading', href: '/ai-gold-trading' },
      { label: 'AI Stock Trading', href: '/ai-stock-trading' },
    ],
  },
  {
    heading: 'Platform',
    items: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Automated Trading', href: '/automated-trading' },
      { label: 'AI Trading Signals', href: '/ai-trading-signals' },
      { label: 'Risk Management Tools', href: '/risk-management-tools' },
    ],
  },
  {
    heading: 'Learn',
    items: [
      { label: 'What Is AI Trading?', href: '/what-is-ai-trading' },
      { label: 'Trading for Beginners', href: '/ai-trading-for-beginners' },
      { label: 'Why Invest', href: '/why-invest' },
      { label: 'Our Review', href: '/review' },
    ],
  },
  {
    heading: 'Company',
    items: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Sign Up', href: '/sign-up' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    heading: 'Legal',
    items: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Risk Disclosure', href: '/risk-disclosure' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
    ],
  },
]

/**
 * Standalone risk disclosure. Reused in the footer and on product pages so the
 * wording stays identical everywhere it appears.
 */
export const riskWarning = {
  heading: 'Risk warning',
  body: 'Trading and investing carry risk. The value of investments can fall as well as rise, and you may get back less than you put in. Derivative and leveraged products are high risk and are not suitable for everyone. Nothing on this website is personal financial product advice, and no content should be read as a promise or forecast of future performance. Consider your own circumstances, read the relevant product disclosure material, and seek independent advice from a licensed adviser before acting.',
} as const
