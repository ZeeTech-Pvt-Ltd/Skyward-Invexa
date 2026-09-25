/**
 * All site copy lives here so pages stay presentational.
 *
 * Two house rules for this file:
 *
 * 1. Headings are Title Case. Anything rendered inside an <h1>-<h4> or a card
 *    title is capitalised as a title; body copy and form labels stay in
 *    sentence case.
 * 2. Describe what the platform *does*, never what it *returns*. No performance
 *    figures, no accuracy percentages, no review scores, no invented customer
 *    names. Anything numeric that is not a product fact is flagged and rendered
 *    with a visible label.
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

/** Product facts only. No performance or popularity claims. */
export const heroFacts = [
  { value: '4', label: 'Asset classes in one account', icon: 'globe' },
  { value: '1', label: 'AUD funding workflow', icon: 'wallet' },
  { value: '24/5', label: 'Support coverage, AEST hours', icon: 'clock' },
  { value: '2FA', label: 'Mandatory on every login', icon: 'key' },
] as const satisfies ReadonlyArray<{ value: string; label: string; icon: IconName }>

/* ------------------------------------------------------------------ */
/* Feature grid                                                        */
/* ------------------------------------------------------------------ */

export const features: Feature[] = [
  {
    id: 'coverage',
    title: 'Several Markets, One Login',
    body: 'Crypto pairs, ASX-listed equities, major foreign-exchange pairs and commodities sit behind a single account and a consistent order ticket.',
    icon: 'globe',
  },
  {
    id: 'execution',
    title: 'Order Tooling That Explains Itself',
    body: 'Market, limit and stop orders, with the estimated cost of each shown before you confirm rather than after.',
    icon: 'chart',
  },
  {
    id: 'risk',
    title: 'Risk Controls You Set in Advance',
    body: 'Stop-loss, take-profit and position-size limits can be attached when the order is placed, so the plan exists before the position does.',
    icon: 'shield',
  },
  {
    id: 'fees',
    title: 'A Published Fee Schedule',
    body: 'Spreads, commissions and funding costs are listed in one table. Where a fee varies, the range is stated rather than buried in a footnote.',
    icon: 'sliders',
  },
  {
    id: 'education',
    title: 'Education Before Product',
    body: 'Plain-language explainers on margin, leverage, volatility and settlement, written for people who are early in their investing life.',
    icon: 'book',
  },
  {
    id: 'access',
    title: 'Desktop and Mobile Parity',
    body: 'The web terminal and the mobile app share the same account, watchlists and alerts. Nothing is desktop-only.',
    icon: 'devices',
  },
]

/* ------------------------------------------------------------------ */
/* How it works                                                        */
/* ------------------------------------------------------------------ */

export const steps = [
  {
    step: '01',
    title: 'Verify Your Identity',
    body: 'Complete an Australian identity and suitability check. Verification status is shown in your account dashboard, and you can fund the account as soon as it clears.',
    detail: 'Australian ID and proof of address accepted',
  },
  {
    step: '02',
    title: 'Fund in Australian Dollars',
    body: 'Move money in by bank transfer from an Australian account. Funds settle to your trading balance and remain visible as a separate line from open positions.',
    detail: 'No platform access fee to open an account',
  },
  {
    step: '03',
    title: 'Trade the Markets You Chose',
    body: 'Screen instruments, size a position against your own limit, attach a stop, then place the order. Every fill, fee and adjustment stays in your statement export.',
    detail: 'Order history exportable at any time',
  },
] as const

/* ------------------------------------------------------------------ */
/* Markets                                                             */
/* ------------------------------------------------------------------ */

export type AssetClass = {
  id: string
  name: string
  summary: string
  instruments: string[]
  session: string
  considers: string
}

export const assetClasses: AssetClass[] = [
  {
    id: 'crypto',
    name: 'Digital Assets',
    summary:
      'Major cryptocurrency pairs quoted against the Australian dollar and against stablecoins, with spot exposure and no leverage applied by default.',
    instruments: ['BTC/AUD', 'ETH/AUD', 'SOL/AUD', 'XRP/AUD', 'Stablecoin pairs'],
    session: 'Continuous, 24 hours',
    considers: 'High volatility and weekend gaps on some pairs',
  },
  {
    id: 'equities',
    name: 'ASX-Listed Equities',
    summary:
      'Cash equities listed on the Australian Securities Exchange, held in your account with corporate actions and dividend records reflected in your statement.',
    instruments: ['ASX 200 constituents', 'Selected mid-caps', 'Listed ETFs'],
    session: 'ASX trading hours, 10:00 to 16:00 AEST',
    considers: 'Dividend dates, franking and corporate actions',
  },
  {
    id: 'fx',
    name: 'Foreign Exchange',
    summary:
      'Major and minor currency pairs with the margin requirement displayed on the order ticket before you commit.',
    instruments: ['AUD/USD', 'EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD crosses'],
    session: 'Sunday 22:00 to Friday 22:00 AEST',
    considers: 'Leverage magnifies both gains and losses',
  },
  {
    id: 'commodities',
    name: 'Commodities',
    summary:
      'Precious-metal and energy exposure delivered as contracts for difference, priced off the underlying reference market.',
    instruments: ['Gold', 'Silver', 'Brent crude', 'Natural gas'],
    session: 'Reference-market hours',
    considers: 'Contracts are CFD-based and do not deliver the physical asset',
  },
]

/* ------------------------------------------------------------------ */
/* Security                                                            */
/* ------------------------------------------------------------------ */

export const securityMeasures = [
  {
    title: 'Two-Factor Authentication',
    body: 'Required at every login and again before a withdrawal address is changed. Authenticator apps and hardware keys are supported.',
  },
  {
    title: 'Withdrawal Allowlists',
    body: 'New bank or wallet destinations are locked for a cooling-off period after being added, and both events are emailed to you.',
  },
  {
    title: 'Session Transparency',
    body: 'Active sessions are listed with device and approximate location, and can be revoked individually from account settings.',
  },
  {
    title: 'Encryption in Transit and at Rest',
    body: 'Traffic is encrypted with TLS, and stored records are encrypted at rest. Access to production systems is role-based and logged.',
  },
]

/* ------------------------------------------------------------------ */
/* About page                                                          */
/* ------------------------------------------------------------------ */

export const principles = [
  {
    title: 'Say What the Product Does',
    body: 'We describe features and fees precisely, and we do not publish return figures, accuracy percentages or performance promises of any kind.',
  },
  {
    title: 'Price in the Open',
    body: 'Every cost a client can incur appears in one schedule. If a fee varies by market conditions, the range is published.',
  },
  {
    title: 'Risk Tooling Is Not Optional',
    body: 'Stops and limits are a first-class part of the order ticket, not an advanced setting hidden three menus deep.',
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
    body: 'The initial team mapped Australian retail trading workflows and the gaps in existing order and risk tooling.',
  },
  {
    year: '2024',
    title: 'Platform Build',
    body: 'Order management, the risk engine and the market data layer were built and tested against historical market data.',
  },
  {
    year: '2025',
    title: 'Controlled Access',
    body: 'A limited group of users tested onboarding, funding, order placement and statement export end to end.',
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
    focus: 'Order management, market connectivity and the risk engine.',
  },
  {
    role: 'Risk and compliance',
    focus: 'Client onboarding, suitability checks and regulatory reporting.',
  },
  {
    role: 'Client operations',
    focus: 'Support, funding queries and account maintenance during AEST hours.',
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
    question: 'What Exactly Is Skyward Invexa?',
    answer:
      'Skyward Invexa is a multi-asset trading platform. It gives Australian residents one account through which they can place orders in digital assets, ASX-listed equities, foreign exchange and commodity contracts for difference. We provide the technology and the market access; we do not manage money on your behalf and we do not offer personal financial advice.',
  },
  {
    question: 'Is Skyward Invexa Regulated?',
    answer:
      'Specific licensing, authorisation and disclosure details are set out in your account agreement and product disclosure documentation, which you receive during onboarding and can request at any time. If you need confirmation of the current authorisations held, contact our compliance team before you open an account.',
  },
  {
    question: 'What Are the Risks?',
    answer:
      'Trading carries the risk of losing money. Prices move against positions, leveraged products lose faster than unleveraged ones, and some markets can gap over weekends or outside trading hours. Nothing on this site is a forecast. Only commit capital you can afford to lose, and consider speaking to a licensed adviser.',
  },
  {
    question: 'How Much Do I Need to Start?',
    answer:
      'There is no charge to open or maintain an account. The practical minimum depends on the market you want to trade and the position size you intend to take, since the order ticket shows the margin requirement before you confirm. There is no minimum deposit imposed by the platform itself.',
  },
  {
    question: 'How Do I Put Money Into the Account?',
    answer:
      'You fund with a bank transfer from an Australian account. Funds appear on your balance once they settle, listed separately from any open position. Your sending bank may charge its own transfer fee, which we do not control and cannot refund.',
  },
  {
    question: 'How Do I Take Money Out?',
    answer:
      'Withdrawals are requested from your account dashboard and are returned to a bank account or wallet destination you have nominated in advance. New destinations are held for a cooling-off period before their first withdrawal, and the request is confirmed by email. Identity re-verification may be required before a first withdrawal.',
  },
  {
    question: 'Does the Platform Use Automated or AI Trading?',
    answer:
      'No automated strategy trades on your behalf. Any alerting, screening or signal tooling in the platform supports your own decisions and does not place orders without an explicit instruction from you. We do not sell trading signals and we do not publish accuracy claims for any strategy.',
  },
  {
    question: 'What Are Your Support Hours?',
    answer:
      'Client support operates Monday to Friday, 8:00am to 8:00pm AEST, excluding public holidays. Markets trade outside those hours, but the support desk does not. Compliance enquiries are answered within two business days.',
  },
  {
    question: 'Can I Export My Records?',
    answer:
      'Yes. Order history, fee summaries and annual statements can be downloaded as CSV or PDF from your account at any time. Exports include realised and unrealised results, every fee applied and the timestamp of each fill.',
  },
  {
    question: 'What Happens If I Want to Close My Account?',
    answer:
      'You can request closure from account settings once open positions are closed and your balance is withdrawn. We retain records for the period required by Australian record-keeping obligations, and you can request a copy of your data before closure.',
  },
]

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export const educationTopics = [
  {
    title: 'What Leverage Actually Does',
    body: 'A worked example showing how leverage changes both the size of a move and the speed at which a position is closed out.',
    level: 'Foundation',
  },
  {
    title: 'Reading an Order Ticket',
    body: 'What each field means, why the estimated cost differs from the fill price, and when a limit order fills at a better price than requested.',
    level: 'Foundation',
  },
  {
    title: 'Spread, Commission and Funding',
    body: 'The three ways a trade can cost money, how they interact, and how to work out your total cost before placing an order.',
    level: 'Intermediate',
  },
  {
    title: 'Volatility and Market Gaps',
    body: 'Why some instruments move further overnight, and why a stop-loss is a request rather than a guarantee of price.',
    level: 'Intermediate',
  },
]

/* ------------------------------------------------------------------ */
/* Forms                                                               */
/* ------------------------------------------------------------------ */

/** Dial codes offered beside the phone field. Australia first. */
export const dialCodes = [
  { value: '+61', label: '+61 Australia', country: 'AU' },
  { value: '+64', label: '+64 New Zealand', country: 'NZ' },
  { value: '+44', label: '+44 United Kingdom', country: 'GB' },
  { value: '+1', label: '+1 United States', country: 'US' },
  { value: '+65', label: '+65 Singapore', country: 'SG' },
] as const

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
      'Help us understand which pages are used and where visitors get stuck. Only set if you consent, and only in aggregate, never used to identify you personally.',
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
