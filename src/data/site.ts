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

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export const footerNav: { heading: string; items: NavItem[] }[] = [
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
