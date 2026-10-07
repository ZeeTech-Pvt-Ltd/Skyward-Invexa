import type { MarketingPage } from '../pageTypes'

/**
 * Review page.
 *
 * The source is written to read like an independent review. It is not one, so
 * the page says who publishes it, keeps only the facts a reader can verify,
 * and carries no star rating, testimonials or figures. No broker is named and
 * no licence is claimed; the ASIC Professional Register gets pointed at
 * instead. Every fee and timeframe row that was a placeholder in the source
 * has been dropped rather than guessed at.
 */
export const review: MarketingPage = {
  path: '/review',
  meta: {
    title: 'Is Skyward Invexa Scam or Legit? Our Honest 2026 Review',
    description:
      'Is Skyward Invexa scam or legit? Our honest review covers how it works, the AU$250 minimum deposit, pros and cons, and how to spot fake sites.',
  },
  hero: {
    eyebrow: 'Review',
    heading: 'Skyward Invexa Review 2026: An Honest Look at the AI Trading Platform',
    lead: 'Thinking about trying Skyward Invexa? This page answers the questions most Australians ask before signing up: what it is, how it works, what it costs and how to check it is safe. Because we publish this page ourselves, we also cover the downsides. Trading always carries risk, and you deserve the full picture.',
    bullets: [
      'What the platform does, and what it does not',
      'Free registration and a minimum deposit of AU$250',
      'How to check any broker on the ASIC Professional Register',
      'How to spot fake sites and impersonators',
    ],
    cta: 'Register Free with Skyward Invexa',
    visual: 'questions',
  },
  sections: [
    {
      kind: 'table',
      heading: 'Skyward Invexa at a Glance',
      intro: 'The quick facts, before the detail.',
      columns: ['Feature', 'Details'],
      rows: [
        ['Platform type', 'Browser-based AI trading platform'],
        ['Available in', 'Australia only'],
        ['Minimum deposit', 'AU$250'],
        ['Markets', 'Crypto, forex, stocks, commodities and indices'],
        ['Trading modes', 'Automated mode and Signal mode'],
        ['App needed?', 'No, it runs in any web browser'],
        ['Support', 'A dedicated account manager'],
        ['Registration fee', 'Free'],
      ],
      note: 'We publish this page ourselves, so there is no star rating here. Every row above is something you can check on the site or with the broker.',
    },
    {
      kind: 'prose',
      heading: 'What Is Skyward Invexa?',
      body: [
        'Skyward Invexa is an AI trading platform built for Australians. It uses machine learning to scan price charts, market news and trends around the clock, then turns that data into clear trade signals.',
        'You can act on those signals yourself, or let the platform place trades automatically within limits you set. Trades are placed through a broker, which holds your funds. This page is published by Skyward Invexa itself, so where something cannot be checked from the site, we say so rather than ask you to take our word for it.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Does Skyward Invexa Work?',
      items: [
        {
          title: 'Register for Free',
          body: 'Fill in a short form with your name, email and phone number.',
        },
        {
          title: 'Speak with Your Account Manager',
          body: 'A team member calls to explain the platform, check your goals and help with verification.',
        },
        {
          title: 'Fund Your Account',
          body: 'Deposit a minimum of AU$250 with the broker.',
        },
        {
          title: 'Choose Your Mode and Set Limits',
          body: 'Pick Automated or Signal mode, then set your stop-loss, take-profit and daily limits.',
        },
        {
          title: 'Track and Adjust',
          body: 'Watch every trade on your dashboard. Pause, change settings or request a withdrawal at any time.',
        },
      ],
    },
    {
      kind: 'cards',
      heading: 'Key Features of Skyward Invexa',
      columns: 2,
      items: [
        {
          title: '24/7 AI Market Scanning',
          body: 'The platform keeps watching markets while you work or sleep, so you get alerts on moves you might otherwise miss.',
          icon: 'clock',
        },
        {
          title: 'Two Ways to Trade',
          body: 'Automated mode suits busy people. Signal mode suits those who want to approve every trade.',
          icon: 'sliders',
        },
        {
          title: 'Risk Controls You Set',
          body: 'Stop-loss, take-profit and daily limits keep the platform inside your comfort zone.',
          icon: 'shield',
        },
        {
          title: 'No App Download',
          body: 'It works on desktop, tablet and phone through your browser.',
          icon: 'devices',
        },
        {
          title: 'Human Support',
          body: 'Every user gets a dedicated account manager for setup and questions.',
          icon: 'book',
        },
      ],
    },
    {
      kind: 'split',
      heading: 'Skyward Invexa Pros and Cons',
      intro: 'Both sides of the ledger, because a review with only one side is an advertisement.',
      left: {
        title: 'Pros',
        items: [
          'Free registration',
          'Low AU$250 starting deposit',
          'Automated and Signal modes, so you choose how much control to keep',
          'Beginner-friendly dashboard',
          'A dedicated account manager',
        ],
      },
      right: {
        title: 'Cons',
        items: [
          'Trading can lose money, even with AI',
          'Australian users only',
          'No native mobile app, it is browser only',
          'Signals are not guaranteed to be right',
          'Broker spreads and fees apply to trades',
        ],
      },
    },
    {
      kind: 'table',
      heading: 'Skyward Invexa Fees and Minimum Deposit',
      columns: ['Item', 'Cost'],
      rows: [
        ['Registration', 'Free'],
        ['Minimum deposit', 'AU$250'],
      ],
      note: 'Trading costs, withdrawal fees and withdrawal times are set by the broker that executes your trades. Ask your account manager for the current fee schedule, and read it before you deposit.',
    },
    {
      kind: 'bullets',
      heading: 'Is Skyward Invexa Scam or Legit?',
      intro:
        'Many people search for scam checks before signing up, and for good reason: online trading has many fake platforms, and checking before you deposit is smart. This page is published by us, so instead of asking you to just trust us, here is how the platform works and how you can check every point yourself.',
      tone: 'check',
      items: [
        'Funds are held by the broker, not by Skyward Invexa. Look the broker up on the ASIC Professional Register: it is public, free to search and shows whether a firm holds an Australian Financial Services Licence.',
        'No guaranteed profits. Any platform that promises guaranteed returns is a red flag, and Skyward Invexa does not promise them.',
        'Start small. Begin with the AU$250 minimum and test a withdrawal before you add more money.',
        'Your connection and the data you send are encrypted with 256-bit SSL.',
        'We will never ask for your passwords, bank PINs or remote access to your computer. If anyone does, hang up and contact us through the details on this site.',
      ],
    },
    {
      kind: 'bullets',
      heading: 'Scam Warning Signs: Fake Sites and Impersonators',
      intro:
        'Popular brand names often get copied. Scammers may build clone websites, run fake ads or call people while pretending to be from Skyward Invexa. Watch for these red flags:',
      tone: 'cross',
      items: [
        'A website address that is a lookalike, misspelt or unrelated to the one you registered through.',
        'Anyone promising guaranteed or fixed daily profits.',
        'Pressure to deposit more money quickly, or before an offer ends.',
        'Requests for remote access to your computer, such as AnyDesk or TeamViewer.',
        'Payment requests in gift cards, or crypto sent to a personal wallet.',
        'A Skyward Invexa app on the App Store or Google Play. We do not have one.',
      ],
    },
    {
      kind: 'steps',
      heading: 'What to Do If You Spot a Fake Site',
      items: [
        {
          title: 'Stop All Contact',
          body: 'Do not send any more money, and do not share documents or verification codes.',
        },
        {
          title: 'Call Your Bank',
          body: 'Contact your bank straight away if you have already paid.',
        },
        {
          title: 'Report It',
          body: 'Report the site to Scamwatch (scamwatch.gov.au) and ReportCyber (cyber.gov.au).',
        },
        {
          title: 'Tell Us',
          body: 'Let us know through the contact details on this site so we can warn other users.',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'info',
      title: 'Is There a Skyward Invexa App?',
      body: 'No. There is no app to download from the App Store or Google Play, and the platform runs fully in your web browser. If you see an app using the Skyward Invexa name, it is not ours. Only use the official website.',
    },
    {
      kind: 'split',
      heading: 'Who Should Use Skyward Invexa?',
      left: {
        title: 'It May Suit You If You',
        items: [
          'Are new to trading and want simple, guided signals',
          'Are busy and cannot watch markets all day',
          'Want to start small with AU$250',
        ],
      },
      right: {
        title: 'It May Not Suit You If You',
        items: [
          'Cannot afford to lose the money you deposit',
          'Want guaranteed or fixed returns',
          'Live outside Australia',
        ],
      },
    },
    {
      kind: 'prose',
      heading: 'Skyward Invexa in Australia',
      body: [
        'Skyward Invexa is built for Australian users only. Deposits are in AUD, support runs on Australian hours, and the markets include local favourites like the ASX 200 and the AUD/USD pair.',
      ],
    },
    {
      kind: 'checklist',
      heading: 'How to Sign Up with Skyward Invexa',
      items: [
        'Go to the homepage and fill in the registration form.',
        'Wait for a call from your account manager.',
        'Verify your identity and deposit AU$250 or more with the broker.',
        'Set your risk limits and pick a trading mode.',
      ],
    },
    {
      kind: 'prose',
      heading: 'Final Verdict: Our Skyward Invexa Review',
      body: [
        'Skyward Invexa offers an easy way for Australians to try AI-assisted trading: a low starting deposit, browser-based access and a choice between Automated and Signal mode. The main thing to remember is that no AI can remove risk. Start small, set your limits, test a withdrawal, and only ever trade money you can afford to lose.',
      ],
    },
    {
      kind: 'links',
      heading: 'Also Explore',
      items: [
        { label: 'Why Invest with Skyward Invexa', href: '/why-invest' },
        { label: 'How It Works', href: '/how-it-works' },
        { label: 'Automated Trading', href: '/automated-trading' },
        { label: 'AI Trading Signals', href: '/ai-trading-signals' },
        { label: 'What Is AI Trading?', href: '/what-is-ai-trading' },
      ],
    },
  ],
  faqs: [
    {
      question: 'Is Skyward Invexa a scam?',
      answer:
        'No, and you do not have to take our word for it, because this page is published by us. Verify the key points yourself instead: your funds are held by the broker rather than by Skyward Invexa, no profits are guaranteed, and you can start with AU$250 and test a withdrawal before adding more. Only use the official website, check the broker on the ASIC Professional Register, and never share your passwords or give remote access to your computer.',
    },
    {
      question: 'Is Skyward Invexa legit?',
      answer:
        'The platform is real and runs in your browser, but the money side deserves more of your attention. Look up the broker that holds your funds on the ASIC Professional Register, start with a small deposit, and test a withdrawal before you commit more.',
    },
    {
      question: 'How much do I need to start?',
      answer: 'The minimum deposit is AU$250, and registration is free.',
    },
    {
      question: 'Can I withdraw my money?',
      answer:
        'Yes. You can request a withdrawal from your dashboard at any time, and it is worth testing a small one early so you know the process works before adding more funds.',
    },
    {
      question: 'Is Skyward Invexa available outside Australia?',
      answer: 'No. Skyward Invexa currently serves Australian users only.',
    },
    {
      question: 'Does Skyward Invexa guarantee profits?',
      answer: 'No. AI helps with speed and analysis, but all trading carries the risk of loss.',
    },
  ],
  cta: {
    title: 'Register Free with Skyward Invexa',
    body: 'Registration is free and takes about two minutes. Fund your account from AU$250, set your limits and choose your mode, and your account manager will help you through the first steps.',
  },
}
