/**
 * Copy for the About page.
 *
 * Entity details that could not be confirmed - registered company name, ABN,
 * address, broker name, licence number, team names and photographs - are left
 * out rather than filled with a stand-in. The page names the functions that
 * run the platform instead of publishing biographies nobody has approved.
 */

export const aboutMission = {
  heading: 'Our Mission',
  body: 'To make smart, AI-assisted trading simple, transparent and accessible for every Australian. That means a low AU$250 starting point, plain-English signals, clear fees and real people you can talk to.',
} as const

export const aboutProtections = [
  {
    title: 'Identity Checks',
    body: 'Every account is verified under Australian anti-money-laundering rules before it can trade.',
  },
  {
    title: 'Bank-Level Encryption',
    body: '256-bit SSL across the entire platform, with stored records encrypted at rest.',
  },
  {
    title: 'Funds Held by the Broker',
    body: 'Your money sits in your own trading account with the broker, not with us.',
  },
  {
    title: 'No Pressure Selling',
    body: 'Our team will never push you to deposit more than you are comfortable with.',
  },
  {
    title: 'We Never Ask for Credentials',
    body: 'Not your password, not your bank PIN, and never remote access to your device.',
  },
  {
    title: 'Plain Risk Disclosure',
    body: 'The downside is published next to the product, not buried in a document nobody opens.',
  },
] as const

export const aboutPromise = [
  'We will always tell you the risks before you invest.',
  'We will never promise guaranteed profits.',
  'We will make withdrawals simple and clear.',
  'We will treat your data and money with care.',
] as const

export const aboutFacts: [string, string][] = [
  ['Markets', 'Crypto, forex, stocks, commodities and indices'],
  ['Minimum deposit', 'AU$250'],
  ['Trading modes', 'Automated or Signal mode, switchable at any time'],
  ['Access', 'Any modern web browser, no app to download'],
  ['Support', 'Monday to Friday, 8:00am to 8:00pm AEST'],
  ['Serves', 'Australian residents only'],
]

export const aboutFaqs = [
  {
    question: 'Who Is Behind Skyward Invexa?',
    answer:
      'Skyward Invexa is run by a team covering platform engineering, risk and compliance, client operations, and education. The functions are listed on this page. We do not publish named biographies without the consent of the people concerned.',
  },
  {
    question: 'Where Is Skyward Invexa Based?',
    answer:
      'Skyward Invexa serves Australian residents only. Support runs on Australian hours and deposits are made in Australian dollars.',
  },
  {
    question: 'Is Skyward Invexa Regulated?',
    answer:
      'Skyward Invexa is a technology platform. Trades are placed and funds are held by the broker, not by us. We encourage you to check the broker’s licence on the ASIC Professional Register before you deposit.',
  },
  {
    question: 'How Can I Contact Skyward Invexa?',
    answer:
      'Email support@skywardinvexa-au.com, or use the form on our Contact page. Compliance enquiries go to compliance@skywardinvexa-au.com.',
  },
  {
    question: 'Does Skyward Invexa Give Financial Advice?',
    answer:
      'No. The platform provides AI tools and general information only. Nothing on this site is personal financial product advice. Consider speaking with a licensed adviser before investing.',
  },
]
