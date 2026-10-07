import type { MarketingPage } from '../pageTypes'

/**
 * Market hub: AI forex trading.
 *
 * The editor notes that came with this copy are honoured throughout: the
 * broker is never named and no licence claim is made, the ASIC limits are
 * described as regulation rather than as a claim about us, and signals stay
 * framed as general information, not personal advice.
 */
export const aiForexTrading: MarketingPage = {
  path: '/ai-forex-trading',
  meta: {
    title: 'AI Forex Trading in Australia | Trade with Skyward Invexa',
    description:
      'Trade AUD/USD, EUR/USD and more with an AI that watches every session, even while you sleep. Built-in risk limits and a low AU$250 start. Register free.',
  },
  hero: {
    eyebrow: 'Forex',
    heading: 'AI Forex Trading in Australia: Trade Currencies Smarter with Skyward Invexa',
    lead: 'The biggest forex moves often happen while Australia sleeps, when London and New York are open. The Skyward Invexa AI watches every session, reads economic news in real time and trades currency pairs inside the limits you set, so you wake up to results, not missed chances.',
    bullets: [
      'AUD/USD, EUR/USD, USD/JPY and more',
      'Covers the London and New York sessions overnight',
      'Start from AU$250',
      'Stop-loss and daily limits on every trade',
    ],
    cta: 'Start Trading Forex with AI',
    visual: 'sparks',
  },
  sections: [
    {
      kind: 'prose',
      heading: 'What Is AI Forex Trading?',
      body: [
        'AI forex trading uses artificial intelligence to analyse currency markets and place or suggest trades. The AI studies price charts, interest rates, economic data and news, then spots patterns in pairs like AUD/USD. It can trade automatically, or send you signals to approve.',
      ],
    },
    {
      kind: 'bullets',
      heading: 'Why the Forex Market Suits AI',
      intro:
        'Forex is the largest financial market in the world, with about US$9.6 trillion traded every day, according to the 2025 BIS Triennial Survey. In Australia alone, daily turnover hit US$201 billion, and AUD/USD made up 41% of it (RBA, 2025). That size and speed make forex a natural fit for AI:',
      items: [
        'It runs 24 hours, 5 days a week, and an AI never needs a break.',
        'News moves prices fast. RBA, US Fed and jobs data can shift a pair in seconds.',
        'Many pairs, many signals. The AI can track dozens of pairs at once.',
        'Small moves add up. The AI reacts to price changes too quick for most people to catch.',
      ],
    },
    {
      kind: 'table',
      heading: 'Forex Market Hours in Australia (AEST)',
      intro:
        'The forex market opens at about 8am AEST on Monday and closes at about 8am AEST on Saturday. Here is when each session runs.',
      columns: ['Session', 'Approx. hours (AEST)', 'What to expect'],
      rows: [
        ['Sydney', '8:00am – 5:00pm', 'Quieter start, AUD and NZD pairs active'],
        ['Tokyo', '10:00am – 7:00pm', 'JPY pairs active, overlaps with Sydney'],
        ['London', '6:00pm – 3:00am', 'Highest volatility of the day'],
        ['New York', '11:00pm – 8:00am', 'Big US data releases, USD pairs move'],
      ],
      note: 'The busiest window is 11pm to 3am AEST, when London and New York overlap. That is exactly when most Australians are asleep, and when the Skyward Invexa AI keeps working. Times shift slightly with daylight saving.',
    },
    {
      kind: 'steps',
      heading: 'How the Skyward Invexa AI Trades Forex',
      intro: 'Every scan runs the same five steps, in the same order.',
      items: [
        {
          title: 'Tracks the economic calendar',
          body: 'Watches RBA rate decisions, US Fed meetings, CPI and jobs reports.',
        },
        {
          title: 'Reads price action',
          body: 'Looks for trends, support and resistance levels across every session.',
        },
        {
          title: 'Measures market mood',
          body: 'Scans news headlines for risk-on or risk-off sentiment.',
        },
        {
          title: 'Applies your rules',
          body: 'Filters every idea through your stop-loss, take-profit and daily limits.',
        },
        {
          title: 'Acts or alerts',
          body: 'Trades automatically in Automated mode, or sends you a signal in Signal mode.',
        },
      ],
    },
    {
      kind: 'table',
      heading: 'Currency Pairs You Can Trade',
      intro: 'A sample of the pairs the platform scans. The full list is shown in your dashboard.',
      columns: ['Pair', 'Why traders watch it'],
      rows: [
        ['AUD/USD', 'The local benchmark pair, tied to commodities and RBA policy'],
        ['EUR/USD', 'The most traded pair in the world, with deep liquidity'],
        ['USD/JPY', 'Moves on interest rate gaps between the US and Japan'],
        ['GBP/USD', 'Volatile and active during the London session'],
        ['NZD/USD', 'Closely linked to AUD, active in the Sydney session'],
        ['AUD/JPY', 'A popular risk sentiment pair in Asian hours'],
      ],
    },
    {
      kind: 'table',
      heading: 'Forex Strategies the AI Uses',
      intro: 'The same account can apply any of these, depending on what the market is doing.',
      columns: ['Strategy', 'What it does', 'Best for'],
      rows: [
        ['Trend following', 'Rides strong moves in one direction', 'Clear, steady trends'],
        ['Breakout', 'Enters when price breaks a key level', 'Session opens, big news'],
        ['Range trading', 'Buys near support, sells near resistance', 'Quiet, sideways markets'],
        ['News and event trading', 'Reacts to data like CPI or rate decisions', 'High-impact news days'],
        [
          'Carry analysis',
          'Weighs interest rate differences between currencies',
          'Longer-term positions',
        ],
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Most Retail CFD Clients Lose Money',
      body: 'ASIC research shows most retail CFD clients lose money. Leverage grows losses as quickly as it grows gains, which is why the Skyward Invexa AI always works within strict risk limits. Never risk money you cannot afford to lose.',
    },
    {
      kind: 'table',
      heading: 'Forex Leverage in Australia: ASIC Limits Explained',
      intro:
        'Leverage lets you control a bigger trade with a smaller deposit. It can grow profits, but it grows losses just as fast. To protect retail traders, ASIC caps leverage on CFDs at these levels.',
      columns: ['Asset', 'Max leverage (retail)'],
      rows: [
        ['Major currency pairs', '30:1'],
        ['Minor pairs, gold, major indices', '20:1'],
        ['Other commodities, minor indices', '10:1'],
        ['Shares', '5:1'],
        ['Crypto', '2:1'],
      ],
      note: 'Retail clients of ASIC-licensed brokers also get negative balance protection, so you cannot lose more than the money in your account.',
    },
    {
      kind: 'bullets',
      heading: 'Risks of Trading Forex with AI (and How to Manage Them)',
      intro: 'An AI can help, but forex is still a high-risk market. Know these before you start.',
      tone: 'cross',
      items: [
        'Leverage risk. Use low leverage, especially when you are starting out.',
        'News spikes. Prices can jump on surprise data, so set a stop-loss on every trade.',
        'Weekend gaps. Prices can open far from where they closed on Friday, so consider closing trades before the weekend.',
        'No AI is perfect. A strategy that worked in the past may not work in the future.',
        'Scams. Avoid any forex robot that promises fixed or guaranteed profits. Our Review page explains how to spot fakes.',
      ],
    },
    {
      kind: 'prose',
      heading: 'Is AI Forex Trading Legal in Australia?',
      body: [
        'Yes. Australians can legally trade forex with AI tools. Forex brokers offering CFDs to Australians must hold an Australian Financial Services Licence (AFSL) from ASIC, and anyone giving personal financial advice, including through AI, must hold the right licence too.',
        'Your funds are held by the broker, not by Skyward Invexa. You can check the licence of any broker on the ASIC Professional Register before you deposit. Signals are general information, not personal advice.',
      ],
    },
    {
      kind: 'links',
      heading: 'Also Explore',
      items: [
        { label: 'How Skyward Invexa Works', href: '/how-it-works' },
        { label: 'AI Crypto Trading', href: '/ai-crypto-trading' },
        { label: 'AI Gold Trading', href: '/ai-gold-trading' },
        { label: 'Why Invest with Skyward Invexa', href: '/why-invest' },
        { label: 'Skyward Invexa Review', href: '/review' },
      ],
    },
  ],
  faqs: [
    {
      question: 'Does AI forex trading work?',
      answer:
        'AI can analyse more data, faster, and trade without emotion, which helps with discipline. It cannot predict every move, though, and losses still happen.',
    },
    {
      question: 'What is the best time to trade forex in Australia?',
      answer:
        'The London and New York overlap, roughly 11pm to 3am AEST, is usually the busiest window. The Skyward Invexa AI can trade through those hours while you sleep.',
    },
    {
      question: 'How much do I need to start forex trading with Skyward Invexa?',
      answer: 'The minimum deposit is AU$250.',
    },
    {
      question: 'What leverage can I use in Australia?',
      answer:
        'ASIC limits leverage for retail clients to 30:1 on major currency pairs and 20:1 on minor pairs.',
    },
    {
      question: 'Is a forex trading bot the same as AI trading?',
      answer:
        'Not quite. Many bots follow fixed rules, while AI trading uses machine learning to adapt as market conditions change.',
    },
    {
      question: 'Do I pay tax on forex profits in Australia?',
      answer:
        'Generally, yes. Forex gains may be taxed as income or as capital gains depending on your situation, so speak with a registered tax agent.',
    },
  ],
  cta: {
    title: 'Start Trading Forex with AI',
    body: 'Register free in about two minutes, fund your account from AU$250, then choose your pairs and set your limits. An account manager will help you through the first steps.',
  },
}
