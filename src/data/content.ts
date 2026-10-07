/**
 * All site copy lives here so pages stay presentational.
 *
 * House rules for this file:
 *
 * 1. Headings are Title Case. Anything rendered inside an <h1>-<h4> or a card
 *    title is capitalised as a title; body copy and form labels stay in
 *    sentence case.
 * 2. This is the approved platform copy. It describes an automated trading
 *    product, so the FAQ, About and Terms pages have to agree with it. Those
 *    pages previously described an execution-only platform and contradicted
 *    the positioning here.
 */

export type Feature = {
  id: string
  title: string
  body: string
  icon: IconName
}

export type IconName =
  | 'globe'
  | 'chart'
  | 'shield'
  | 'sliders'
  | 'book'
  | 'devices'
  | 'bolt'
  | 'wallet'
  | 'key'
  | 'clock'

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: 'Skyward Invexa · Built for Australia',
  heading: 'Smarter Trading Starts with Skyward Invexa',
  sub: 'An automated trading platform that reads the markets for you: crypto, forex, stocks and commodities. Built for Australians, and it runs in your browser.',
  bullets: [
    'AI market scanning, 24/7',
    'Start with AU$250',
    'No app download needed',
    'Free registration in under 2 minutes',
  ],
  cta: 'Create My Free Account',
  micro: 'Free to register. A dedicated account manager will call you to help set things up.',
} as const

/* ------------------------------------------------------------------ */
/* Trust strip                                                         */
/* ------------------------------------------------------------------ */

export const trustBar = [
  'Australian-focused support',
  'Encrypted data (SSL)',
  'Partnered with regulated brokers',
  'Demo mode available',
] as const

/* ------------------------------------------------------------------ */
/* What is it                                                          */
/* ------------------------------------------------------------------ */

export const whatIs = {
  heading: 'What Is Skyward Invexa?',
  paragraphs: [
    'Skyward Invexa is an AI trading platform made for everyday Australians. It uses machine learning to study price charts, news and market trends in real time. Then it turns that data into simple trade signals you can act on, or let run automatically.',
    'You do not need years of trading experience. You set your budget and risk level, and the AI handles the heavy research work.',
  ],
} as const

/* ------------------------------------------------------------------ */
/* Feature grid — Why Australians Choose Skyward Invexa                */
/* ------------------------------------------------------------------ */

export const features: Feature[] = [
  {
    id: 'always-on',
    title: 'AI That Never Sleeps',
    body: 'Markets move 24/7. Skyward Invexa scans thousands of data points every second, so you do not miss a move while you sleep or work.',
    icon: 'bolt',
  },
  {
    id: 'risk',
    title: 'Built-In Risk Controls',
    body: 'Set your own stop-loss, take-profit and daily limits. The AI works inside the rules you choose.',
    icon: 'shield',
  },
  {
    id: 'browser',
    title: 'Browser-Based, No App Needed',
    body: 'Skyward Invexa works on any device through your web browser: desktop, laptop, tablet or phone. Nothing to download.',
    icon: 'devices',
  },
  {
    id: 'dashboard',
    title: 'Beginner-Friendly Dashboard',
    body: 'Clean charts, plain-English signals and a simple layout. No confusing jargon.',
    icon: 'chart',
  },
  {
    id: 'support',
    title: 'Real Human Support',
    body: 'Every new user gets a dedicated account manager for setup and ongoing help.',
    icon: 'clock',
  },
  {
    id: 'coverage',
    title: 'Multi-Asset Access',
    body: 'Trade crypto, forex, stocks, gold and indices from one account.',
    icon: 'globe',
  },
]

/* ------------------------------------------------------------------ */
/* How it works                                                        */
/* ------------------------------------------------------------------ */

export const steps = [
  {
    step: '01',
    title: 'Register Free',
    body: 'Fill in the short form. It takes less than 2 minutes.',
    detail: 'Free registration in under 2 minutes',
  },
  {
    step: '02',
    title: 'Fund Your Account',
    body: 'Start with a minimum deposit of AU$250 through a partner broker. Your account manager will guide you.',
    detail: 'Minimum deposit of AU$250',
  },
  {
    step: '03',
    title: 'Trade with AI',
    body: 'Choose manual signals or automated trading. Set your limits, then track every trade on your dashboard.',
    detail: 'Track every trade on your dashboard',
  },
] as const

/* ------------------------------------------------------------------ */
/* Markets                                                             */
/* ------------------------------------------------------------------ */

/** Section copy for the Coverage band. */
export const coverage = {
  eyebrow: 'Coverage',
  heading: 'Markets You Can Trade with Skyward Invexa',
  lead: 'Five markets behind one account, from Bitcoin and major currency pairs to ASX 200 index exposure.',
  /**
   * Chip beside the eyebrow. The page runs a live price ticker directly above
   * this band, so without a label the generated shapes below read as live
   * market data too.
   */
  chartLabel: 'Illustrative shapes',
} as const

export type AssetClass = {
  id: string
  name: string
  icon: IconName
  /** The market's own accent colour, the way the coin badges carry theirs. */
  colour: string
  summary: string
  instruments: string[]
  session: string
  considers: string
  /** Fixed chart seed, so each market keeps the same illustrative shape. */
  seed: number
}

export const assetClasses: AssetClass[] = [
  {
    id: 'crypto',
    name: 'Crypto',
    icon: 'bolt',
    colour: '#f7931a',
    summary:
      'Major cryptocurrency pairs quoted around the clock, with spot exposure and signal coverage.',
    instruments: ['Bitcoin', 'Ethereum', 'Solana'],
    session: 'Continuous, 24 hours',
    considers: 'High volatility and weekend gaps on some pairs',
    seed: 11,
  },
  {
    id: 'forex',
    name: 'Forex',
    icon: 'globe',
    colour: '#627eea',
    summary:
      'Major and minor currency pairs with the margin requirement displayed before you commit.',
    instruments: ['AUD/USD', 'EUR/USD', 'GBP/USD'],
    session: 'Sunday 22:00 to Friday 22:00 AEST',
    considers: 'Leverage magnifies both gains and losses',
    seed: 23,
  },
  {
    id: 'stocks',
    name: 'Stocks',
    icon: 'chart',
    colour: '#10b981',
    summary:
      'Share exposure to large listed companies, with corporate actions reflected in your statement.',
    instruments: ['Tesla', 'Apple', 'BHP'],
    session: 'Reference-market hours',
    considers: 'Dividend dates and corporate actions',
    seed: 37,
  },
  {
    id: 'commodities',
    name: 'Commodities',
    icon: 'wallet',
    colour: '#b08828',
    summary: 'Precious-metal and energy exposure priced off the underlying reference market.',
    instruments: ['Gold', 'Silver', 'Oil'],
    session: 'Reference-market hours',
    considers: 'Contracts are CFD-based and do not deliver the physical asset',
    seed: 52,
  },
  {
    id: 'indices',
    name: 'Indices',
    icon: 'sliders',
    colour: '#8b5cf6',
    summary: 'Broad market exposure through index contracts, tracking the headline benchmarks.',
    instruments: ['ASX 200', 'S&P 500', 'NASDAQ'],
    session: 'Reference-market hours',
    considers: 'Index contracts are CFD-based and do not deliver the underlying shares',
    seed: 68,
  },
]

/* ------------------------------------------------------------------ */
/* Automated or manual                                                 */
/* ------------------------------------------------------------------ */

export const modes = {
  heading: 'Automated Trading or Manual Signals: You Decide',
  lead: 'Two ways to use the same account. Switch between them whenever you like, from the same dashboard.',
  items: [
    {
      title: 'Automated Mode',
      body: 'The AI opens and closes trades based on your settings. Good for busy people.',
    },
    {
      title: 'Signal Mode',
      body: 'The AI suggests the trade and you approve it. Good if you want full control.',
    },
  ],
  note: 'You can switch between modes at any time.',
} as const

/* ------------------------------------------------------------------ */
/* Security                                                            */
/* ------------------------------------------------------------------ */

export const securityMeasures = [
  {
    title: 'Data Security',
    body: '256-bit SSL encryption on every page, with stored records encrypted at rest. Production access is role-based and logged.',
  },
  {
    title: 'Regulated Broker Partners',
    body: 'Your funds are held by the broker, not by Skyward Invexa.',
  },
  {
    title: 'Transparent Fees',
    body: 'No hidden charges for registration. The fee schedule is published in full.',
  },
  {
    title: 'Full Control',
    body: 'Withdraw or pause trading whenever you want, from the dashboard.',
  },
]

/* ------------------------------------------------------------------ */
/* Who it is for                                                       */
/* ------------------------------------------------------------------ */

export const audiences = [
  {
    title: 'Beginners',
    body: 'People who want to try trading without learning complex charts first.',
  },
  {
    title: 'Busy Professionals',
    body: 'Those who cannot watch markets all day and want the analysis done for them.',
  },
  {
    title: 'Experienced Traders',
    body: 'Traders who want faster data and automation on top of what they already know.',
  },
  {
    title: 'Australian Investors',
    body: 'Anyone looking for a local-focused platform with real support.',
  },
]

/* ------------------------------------------------------------------ */
/* About page                                                          */
/* ------------------------------------------------------------------ */

export const principles = [
  {
    title: 'Say What the Product Does',
    body: 'We describe features and fees precisely, and we do not publish return figures or accuracy percentages of any kind.',
  },
  {
    title: 'Price in the Open',
    body: 'Every cost a client can incur appears in one schedule. If a fee varies by market conditions, the range is published.',
  },
  {
    title: 'Risk Tooling Is Not Optional',
    body: 'Stops and limits are a first-class part of the dashboard, not an advanced setting hidden three menus deep.',
  },
  {
    title: 'Education Is Part of the Product',
    body: 'Explainers are written for people early in their investing life and are reviewed on the same cycle as the platform itself.',
  },
]

export const milestones = [
  {
    year: '2023',
    title: 'Research and Design',
    body: 'The initial team mapped Australian retail trading workflows and the gaps in existing tooling.',
  },
  {
    year: '2024',
    title: 'Platform Build',
    body: 'The signal engine, the automation layer and the market data feed were built and tested against historical market data.',
  },
  {
    year: '2025',
    title: 'Controlled Access',
    body: 'A limited group of users tested onboarding, funding, automated trading and withdrawals end to end.',
  },
  {
    year: '2026',
    title: 'Public Launch',
    body: 'Skyward Invexa opened to Australian residents, with the fee schedule and risk disclosures published alongside the product.',
  },
] as const

/** Role-based only. No invented names, photographs or biographies. */
export const teamFunctions = [
  {
    role: 'Platform engineering',
    focus: 'Signal engine, automation layer and market connectivity.',
  },
  {
    role: 'Risk and compliance',
    focus: 'Client onboarding, suitability checks and regulatory reporting.',
  },
  {
    role: 'Client operations',
    focus: 'Account managers, funding queries and account maintenance.',
  },
  {
    role: 'Education and content',
    focus: 'Explainers, product documentation and the published fee schedule.',
  },
]

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export type FaqItem = {
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    question: 'What Is Skyward Invexa?',
    answer:
      'Skyward Invexa is an AI trading platform for Australians. It analyses markets and gives trade signals, or runs automated trades on your behalf.',
  },
  {
    question: 'Is There a Skyward Invexa App?',
    answer: 'No download is needed. Skyward Invexa runs fully in your web browser on any device.',
  },
  {
    question: 'How Much Do I Need to Start?',
    answer: 'The minimum deposit is AU$250.',
  },
  {
    question: 'Is Skyward Invexa Available in Australia?',
    answer: 'Yes. Skyward Invexa is built for Australian users only.',
  },
  {
    question: 'Do I Need Trading Experience?',
    answer: 'No. The platform is beginner-friendly, and an account manager helps you get started.',
  },
  {
    question: 'Can I Withdraw My Money?',
    answer: 'Yes. You can request a withdrawal from your dashboard at any time.',
  },
  {
    question: 'Does AI Trading Guarantee Profits?',
    answer:
      'No. AI improves speed and analysis, but all trading carries risk. Only trade what you can afford to lose.',
  },
]

/* ------------------------------------------------------------------ */
/* Cookie policy                                                       */
/* ------------------------------------------------------------------ */

export type CookieCategory = {
  name: string
  purpose: string
  examples: string
  /** Whether the category can be switched off by the visitor. */
  optional: boolean
}

export const cookieCategories: CookieCategory[] = [
  {
    name: 'Strictly Necessary',
    purpose:
      'Required for the site to work. These remember your place in a form, keep the navigation state and protect against cross-site request forgery.',
    examples: 'Session identifier, form progress, CSRF token',
    optional: false,
  },
  {
    name: 'Preferences',
    purpose:
      'Remember choices you have made so you do not have to repeat them on every visit, such as a dismissed notice or a selected region.',
    examples: 'Dismissed banner, region selection',
    optional: true,
  },
  {
    name: 'Analytics',
    purpose:
      'Help us understand which pages are used and where visitors get stuck. Set by Google Analytics, and only in aggregate.',
    examples: 'Page views, referral source, session duration',
    optional: true,
  },
  {
    name: 'Marketing',
    purpose:
      'Used to measure whether an advertising campaign led to a visit. Not currently set on this site; listed here so the policy stays accurate if that changes.',
    examples: 'Campaign attribution, conversion pixel',
    optional: true,
  },
]
