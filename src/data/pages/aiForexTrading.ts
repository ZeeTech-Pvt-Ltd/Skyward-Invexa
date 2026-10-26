import type { MarketingPage } from '../pageTypes'

/**
 * Market hub: AI forex trading.
 *
 * The sections alternate between a visual and a run of structured blocks, so
 * the page reads as a designed sequence rather than a column of prose. The
 * order is deliberate:
 *
 *   hero, what it is, market size, what the AI does about it, the process,
 *   the analysis, the features, the trading day, why it beats doing it by
 *   hand, the strategies, leverage, risks, the legal position, the boundary,
 *   then the FAQ and the closing call to action.
 *
 * The editor notes that came with this copy are honoured throughout: the broker
 * is never named and no licence claim is made, the ASIC limits are described as
 * regulation rather than as a claim about us, and signals stay framed as
 * general information, not personal advice.
 */
export const aiForexTrading: MarketingPage = {
  path: '/ai-forex-trading',
  meta: {
    title: 'AI Forex Trading in Australia | Trade with Skyward Invexa',
    description:
      'Trade AUD/USD, EUR/USD and more with an AI that watches every session, even while you sleep. Built-in risk limits and a low AU$250 start. Register free.',
  },
  hero: {
    eyebrow: 'AI Forex Trading',
    heading: 'AI Forex Trading in Australia: Trade Currencies Smarter with Skyward Invexa',
    lead: 'The biggest forex moves happen while Australia sleeps, when London and New York are both open. The Skyward Invexa AI watches every session, reads economic news in real time and trades currency pairs inside the limits you set, so you wake up to results, not missed chances.',
    bullets: [
      'AUD/USD, EUR/USD, USD/JPY and more',
      'Covers the London and New York sessions overnight',
      'Start from AU$250',
      'Stop-loss and daily limits on every trade',
    ],
    cta: 'Start Trading Forex with AI',
    secondaryCta: { label: 'See How It Works', href: '/how-it-works' },
    visual: 'forexPairs',
  },
  sections: [
    /* 1. What it is. Copy left, an interface panel right. */
    {
      kind: 'media',
      eyebrow: 'Overview',
      heading: 'What Is AI Forex Trading?',
      intro:
        'A forex pair moves when two economies change relative to each other. Doing that reading by hand, across dozens of pairs and four sessions, is a full-time job.',
      body: [
        'AI forex trading uses artificial intelligence to analyse currency markets and place or suggest trades. The AI studies price charts, interest rates, economic data and news, then looks for patterns in pairs like AUD/USD.',
        'It can trade automatically inside your limits, or send you a signal to approve. Nothing is placed that has not first passed your stop-loss, take-profit and daily limits.',
      ],
      visual: 'forexTerminal',
      side: 'right',
    },

    /* 2. The size of the market, as figures rather than a sentence. */
    {
      kind: 'stats',
      eyebrow: 'Market Size',
      heading: 'Forex Is the Largest Market in the World',
      intro:
        'Size is why it suits an AI. The volume, the speed and the number of instruments together are more than a person can watch without help.',
      items: [
        {
          value: 'US$9.6tn',
          label: 'Traded on the forex market every single day',
          source: '2025 BIS Triennial Survey',
        },
        {
          value: 'US$201bn',
          label: 'Australia’s daily forex turnover',
          source: 'Reserve Bank of Australia, 2025',
        },
        {
          value: '41%',
          label: 'Of Australian turnover runs through AUD/USD',
          source: 'Reserve Bank of Australia, 2025',
        },
      ],
    },

    /* 3. Why the AI suits this market, as four cards. */
    {
      kind: 'cards',
      eyebrow: 'Why It Fits',
      heading: 'Why the Forex Market Suits an AI',
      intro: 'Four properties of the currency market that a machine handles better than a person.',
      items: [
        {
          title: 'It Never Closes',
          body: 'Forex runs 24 hours a day, five days a week. An AI does not need a break, and it does not sleep through the Sydney open.',
          icon: 'clock',
        },
        {
          title: 'News Moves Prices Fast',
          body: 'RBA decisions, US Fed meetings and jobs data can shift a pair before you have finished reading the headline.',
          icon: 'bolt',
        },
        {
          title: 'Dozens of Pairs at Once',
          body: 'Majors, minors and crosses all move together. The AI tracks them in the same pass rather than one at a time.',
          icon: 'globe',
        },
        {
          title: 'Small Moves Add Up',
          body: 'Most of the profit in a pair comes from moves too quick for a person to catch by watching a chart.',
          icon: 'chart',
        },
      ],
    },

    /* 4. The process. */
    {
      kind: 'steps',
      eyebrow: 'The Process',
      heading: 'How the Skyward Invexa AI Trades Forex',
      intro: 'Every scan runs the same five steps, in the same order, before anything is placed.',
      items: [
        {
          title: 'Tracks the Economic Calendar',
          body: 'Watches RBA rate decisions, US Fed meetings, CPI releases and jobs reports as they approach.',
        },
        {
          title: 'Reads Price Action',
          body: 'Looks for trends, support and resistance levels across every session, not just the one you are awake for.',
        },
        {
          title: 'Measures Market Mood',
          body: 'Scans news headlines and scores them for risk-on or risk-off sentiment.',
        },
        {
          title: 'Applies Your Rules',
          body: 'Filters every idea through your stop-loss, take-profit and daily limits before it goes any further.',
        },
        {
          title: 'Acts or Alerts',
          body: 'Places the trade automatically in Automated mode, or sends you a signal to approve in Signal mode.',
        },
      ],
    },

    /* 5. The analysis layer. Panel left, copy and three points right. */
    {
      kind: 'media',
      eyebrow: 'Intelligence',
      heading: 'The Four Things the AI Reads Before Every Trade',
      intro:
        'A signal is not a guess. It is the output of four inputs being checked against each other in the same pass.',
      points: [
        'Price and volume across dozens of pairs, read together rather than one chart at a time.',
        'The economic calendar: RBA rate decisions, US Fed meetings, CPI and jobs reports.',
        'News headlines, scored for risk-on or risk-off mood rather than read one by one.',
        'Your own limits, checked before an idea is allowed to become a trade.',
      ],
      visual: 'forexPairs',
      side: 'left',
    },

    /* 6. What the account gives you. */
    {
      kind: 'cards',
      eyebrow: 'Features',
      heading: 'What You Get on Every Account',
      intro: 'The same account covers all of it, whichever market you point it at.',
      items: [
        {
          title: 'Automated or Signal Mode',
          body: 'Let the AI place trades inside your limits, or approve every idea yourself. Switch at any time.',
          icon: 'sliders',
        },
        {
          title: 'Stop-Loss on Every Trade',
          body: 'A stop is attached before the trade opens, not added afterwards when it is already going wrong.',
          icon: 'shield',
        },
        {
          title: 'Daily Loss Limits',
          body: 'Set the amount you are willing to lose in a day. Trading pauses automatically when it is reached.',
          icon: 'clock',
        },
        {
          title: 'Overnight Coverage',
          body: 'The AI keeps working through the London and New York sessions, which run across the Australian night.',
          icon: 'globe',
        },
        {
          title: 'Multi-Pair Scanning',
          body: 'Majors, minors and crosses are scanned in the same pass, so a setup in AUD/JPY is not missed.',
          icon: 'bolt',
        },
        {
          title: 'Browser-Based, No Download',
          body: 'Runs on any device through your web browser. There is no app to install and nothing to update.',
          icon: 'devices',
        },
      ],
    },

    /* 7. The trading day. The page's own hours, drawn. */
    {
      kind: 'media',
      eyebrow: 'Market Hours',
      heading: 'Forex Market Hours in Australia (AEST)',
      intro:
        'The market opens at about 8am AEST on Monday and closes at about 8am AEST on Saturday. Four sessions run inside that window.',
      body: [
        'The busiest stretch of the day is 11pm to 3am AEST, when London and New York overlap. It is also when most Australians are asleep, which is exactly why this page leads with overnight coverage.',
        'Times shift slightly with daylight saving.',
      ],
      points: [
        'Sydney and Tokyo run through your working day, with AUD, NZD and JPY pairs most active.',
        'London takes over in the evening and brings the highest volatility of the day.',
        'New York runs overnight, carrying the US data releases that move USD pairs.',
      ],
      visual: 'forexSessions',
      side: 'right',
    },

    /* 8. Why the approach, as a straight comparison. */
    {
      kind: 'split',
      eyebrow: 'Why This Approach',
      heading: 'Trading Forex by Hand vs Trading with an AI',
      intro:
        'Neither column is a promise about returns. The difference is coverage, consistency and how quickly a decision gets made.',
      left: {
        title: 'Trading Forex by Hand',
        tone: 'negative',
        items: [
          'Only while you are awake and watching a screen',
          'Four sessions to track across a 24-hour day',
          'Decisions made in seconds, under pressure',
          'Rules that are easy to break once a trade turns',
        ],
      },
      right: {
        title: 'Trading Forex with an AI',
        tone: 'positive',
        items: [
          'Watches every session, including the overnight ones',
          'Reads dozens of pairs in the same pass',
          'Applies your limits every time, without emotion',
          'Acts in seconds, or waits for your approval',
        ],
      },
    },

    /* 9. How it decides what kind of trade this is. */
    {
      kind: 'table',
      eyebrow: 'Strategies',
      heading: 'Forex Strategies the AI Applies',
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

    /* 10. Leverage, as published regulation. */
    {
      kind: 'table',
      eyebrow: 'Leverage',
      heading: 'Forex Leverage in Australia: ASIC Limits',
      intro:
        'Leverage lets you control a bigger trade with a smaller deposit. It grows profits, and it grows losses just as fast. To protect retail traders, ASIC caps leverage on CFDs at these levels.',
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

    /* 11. The risks, stated plainly. */
    {
      kind: 'bullets',
      eyebrow: 'Risk',
      heading: 'Risks of Trading Forex with AI, and How to Manage Them',
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

    /* 12. The legal position. */
    {
      kind: 'prose',
      eyebrow: 'Legal',
      heading: 'Is AI Forex Trading Legal in Australia?',
      body: [
        'Yes. Australians can legally trade forex with AI tools. Forex brokers offering CFDs to Australians must hold an Australian Financial Services Licence from ASIC, and anyone giving personal financial advice, including through AI, must hold the right licence too.',
        'Your funds are held by the broker, not by Skyward Invexa. You can check the licence of any broker on the ASIC Professional Register before you deposit. Signals are general information, not personal advice.',
      ],
    },

    /* 13. The boundary, stated once, in its own card. */
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Before You Trade Forex with AI',
      body: 'Forex and CFDs are complex products and come with a high risk of losing money rapidly because of leverage. ASIC research shows most retail CFD clients lose money. You could lose some or all of your deposit, and past performance does not guarantee future results. Skyward Invexa does not provide financial or tax advice. Read the Risk Disclosure Statement and the Terms of Use before you trade, and never risk money you cannot afford to lose.',
    },

    {
      kind: 'links',
      heading: 'Also Explore',
      items: [
        { label: 'How Skyward Invexa Works', href: '/how-it-works' },
        { label: 'AI Crypto Trading', href: '/ai-crypto-trading' },
        { label: 'AI Gold Trading', href: '/ai-gold-trading' },
        { label: 'Risk Management Tools', href: '/risk-management-tools' },
        { label: 'Why Invest with Skyward Invexa', href: '/why-invest' },
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
