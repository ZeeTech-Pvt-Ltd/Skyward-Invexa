import type { MarketingPage } from '../pageTypes'

/**
 * The explainer page: how the platform works, end to end.
 *
 * Every bracketed detail in the source copy, the account manager call time,
 * the verification window, the deposit methods, the withdrawal timeframe and
 * the broker name, is left out rather than rendered as a token. What the
 * source states plainly is kept: the AU$250 minimum, withdrawals requested
 * any time from the dashboard, and funds held by the broker rather than by
 * Skyward Invexa. No licence or company detail is claimed.
 */
export const howItWorks: MarketingPage = {
  path: '/how-it-works',
  meta: {
    title: 'How Does Skyward Invexa Work? AI Trading in 4 Simple Steps',
    description:
      'See how Skyward Invexa works, from sign-up to your first AI trade. Learn what the AI does, how to set risk limits and how deposits and withdrawals work.',
  },
  hero: {
    eyebrow: 'Getting Started',
    heading: 'How Does Skyward Invexa Work? AI Trading Made Simple',
    lead: 'Skyward Invexa does the hard part of trading for you: it watches the markets, studies the data and spots possible trades. You stay in control of your money, your limits and every setting. Here is exactly how Skyward Invexa works, step by step.',
    bullets: [
      'Registration is free and takes under 2 minutes',
      'An account manager will call you',
      'Automated mode or Signal mode',
      'Start from AU$250',
    ],
    cta: 'Register Free in 2 Minutes',
    visual: 'markets',
  },
  sections: [
    {
      kind: 'steps',
      heading: 'Getting Started with Skyward Invexa in 4 Steps',
      intro: 'From the short sign-up form to your first trade, this is the whole journey.',
      items: [
        {
          title: 'Create Your Free Account',
          body: 'Fill in the short form with your name, email and Australian phone number. Registration is free and takes under 2 minutes.',
        },
        {
          title: 'Get a Call from Your Account Manager',
          body: 'A Skyward Invexa account manager will call you to explain how the platform works, ask about your goals and how much risk you are comfortable with, and help you verify your identity.',
        },
        {
          title: 'Fund Your Account',
          body: 'Deposit a minimum of AU$250. Your money is held by the broker in your own trading account, not by Skyward Invexa.',
        },
        {
          title: 'Choose a Mode and Start Trading',
          body: 'Pick Automated mode or Signal mode, set your risk limits, and the AI gets to work. You can track every trade from your dashboard.',
        },
      ],
    },
    {
      kind: 'bullets',
      heading: 'What the Skyward Invexa AI Does Behind the Scenes',
      intro:
        'Here is what happens every time the AI looks for a trade. The loop runs 24/7, so the platform keeps watching the markets even when you are not.',
      items: [
        'Collects data: live prices, charts, volume and market news from across crypto, forex, stocks and commodities.',
        'Analyses patterns: machine learning models look for trends, momentum and price patterns.',
        'Checks your rules: every idea is filtered through your risk limits and chosen markets.',
        'Creates a signal: a clear buy or sell idea with a suggested entry, stop-loss and take-profit.',
        'Acts or alerts: in Automated mode it places the trade. In Signal mode it waits for your approval.',
      ],
    },
    {
      kind: 'table',
      heading: 'Automated Mode vs Signal Mode',
      intro: 'One account, two ways to trade. Switch between them whenever you like.',
      columns: ['', 'Automated mode', 'Signal mode'],
      rows: [
        ['Who places trades', 'The AI, within your limits', 'You, after reviewing the signal'],
        ['Time needed', 'Very little', 'A few minutes a day'],
        ['Best for', 'Busy people and beginners', 'People who want full control'],
        ['Can you switch?', 'Yes, at any time', 'Yes, at any time'],
      ],
    },
    {
      kind: 'bullets',
      heading: 'You Stay in Control of Risk',
      intro: 'The AI only works inside the rules you set. You can adjust these at any time:',
      tone: 'check',
      items: [
        'Stop-loss: closes a trade if the price moves too far against you.',
        'Take-profit: locks in gains when a price target is hit.',
        'Daily limit: caps how much can be traded each day.',
        'Market choice: turn markets on or off, such as crypto only.',
        'Pause button: stop all automated trading with one click.',
      ],
    },
    {
      kind: 'cards',
      heading: 'Your Skyward Invexa Dashboard',
      intro: 'Everything is in one simple, browser-based dashboard. No app download needed.',
      columns: 2,
      items: [
        { title: 'Live Trade View', body: 'Open and closed trades in real time.', icon: 'chart' },
        {
          title: 'Balance and History',
          body: 'Account balance and trade history.',
          icon: 'wallet',
        },
        {
          title: 'Signals and Settings',
          body: 'Current AI signals and settings.',
          icon: 'sliders',
        },
        {
          title: 'Deposits and Withdrawals',
          body: 'Deposit and withdrawal requests.',
          icon: 'devices',
        },
      ],
    },
    {
      kind: 'table',
      heading: 'How Deposits and Withdrawals Work',
      intro: 'The essentials, without the small print.',
      columns: ['Item', 'Details'],
      rows: [
        ['Minimum deposit', 'AU$250'],
        [
          'Where funds are held',
          'With the broker, in your own trading account, not with Skyward Invexa',
        ],
        ['Withdrawals', 'Request any time from your dashboard'],
      ],
    },
    {
      kind: 'checklist',
      heading: 'What You Need to Get Started',
      items: [
        'Be 18 or older and live in Australia.',
        'A valid photo ID, such as a driver licence or passport.',
        'Proof of address, such as a recent bill or bank statement.',
        'A minimum deposit of AU$250.',
        'A device with a web browser.',
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Risk Disclosure',
      body: 'Trading crypto, forex and CFDs involves high risk and may not suit every investor. You could lose some or all of your deposit. Past performance does not guarantee future results. Skyward Invexa does not provide financial advice. Please read our Risk Disclosure and Terms before trading.',
    },
    {
      kind: 'links',
      heading: 'Also Explore',
      items: [
        { label: 'Automated Trading', href: '/automated-trading' },
        { label: 'Risk Management Tools', href: '/risk-management-tools' },
        { label: 'AI Crypto Trading', href: '/ai-crypto-trading' },
        { label: 'Skyward Invexa Review', href: '/review' },
      ],
    },
  ],
  faqs: [
    {
      question: 'How does Skyward Invexa work?',
      answer:
        'Skyward Invexa uses AI to scan markets 24/7 and create trade signals. You either approve each trade yourself or let the platform trade automatically within your limits.',
    },
    {
      question: 'Do I need trading experience?',
      answer:
        'No. The platform is built for beginners, and your account manager helps you set everything up.',
    },
    {
      question: 'How long does it take to start?',
      answer:
        'Registration takes about 2 minutes. Your account manager then helps you verify your identity so you can start trading.',
    },
    {
      question: 'Can I stop the AI at any time?',
      answer:
        'Yes. You can pause automated trading or switch to Signal mode whenever you want.',
    },
    {
      question: 'Does the AI always make profitable trades?',
      answer:
        'No. AI improves speed and analysis, but some trades will lose money. Always set limits and only trade what you can afford to lose.',
    },
    {
      question: 'How do I withdraw my money?',
      answer:
        'You can request a withdrawal any time from your dashboard. Your funds are held by the broker in your own trading account.',
    },
  ],
  cta: {
    title: 'Ready to See How Skyward Invexa Works for You?',
    body: 'Sign up free, talk to your account manager, and decide if AI trading fits your goals. There is no cost to register.',
  },
}
