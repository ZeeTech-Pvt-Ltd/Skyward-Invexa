import type { MarketingPage } from '../pageTypes'

/**
 * Market hub: AI crypto trading.
 *
 * The ASIC note that came with this copy is honoured throughout: signals are
 * described as general information, never as personal advice, and the page
 * makes no claim about anyone's licence.
 */
export const aiCryptoTrading: MarketingPage = {
  path: '/ai-crypto-trading',
  meta: {
    title: 'Trade Bitcoin 24/7 with AI | Skyward Invexa Australia',
    description:
      'Trade Bitcoin, Ethereum and more with an AI platform built for Australians. 24/7 market scanning, built-in risk controls and a low AU$250 start.',
  },
  hero: {
    eyebrow: 'Crypto',
    heading: 'AI Crypto Trading in Australia: Trade Bitcoin and Altcoins Smarter',
    lead: 'Crypto never closes. Prices can jump or crash at 3am on a Sunday. The Skyward Invexa AI watches the crypto market around the clock, spots trading setups in seconds and acts inside the limits you set, so you do not have to stare at charts all day.',
    bullets: [
      'Bitcoin, Ethereum, Solana and more',
      'AI market scanning, 24 hours a day',
      'Start from AU$250',
      'Built-in stop-loss and daily limits',
    ],
    cta: 'Start Trading Crypto with AI',
    visual: 'sparks',
  },
  sections: [
    {
      kind: 'prose',
      heading: 'What Is AI Crypto Trading?',
      body: [
        'AI crypto trading uses artificial intelligence to analyse cryptocurrency markets and place or suggest trades. The AI studies price charts, trading volume, market news and social sentiment, then looks for patterns and turns them into buy or sell signals. It can trade automatically, or alert you so that you decide.',
      ],
    },
    {
      kind: 'bullets',
      heading: 'Why AI and Crypto Are a Strong Match',
      intro:
        'Crypto is now mainstream in Australia, with a record 33% of Australians holding crypto according to the Independent Reserve Cryptocurrency Index 2026. It is also one of the hardest markets to trade by hand.',
      items: [
        'It runs 24 hours a day, every day of the year. No person can watch it all the time, and an AI does not need to sleep.',
        'It moves fast. Prices can swing 10% in a few hours, and the AI reacts in seconds.',
        'There is a flood of data: thousands of coins, charts and news posts. The AI reads them all at once.',
        'Emotions run high. FOMO and panic selling are common. An AI follows rules, not feelings.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the Skyward Invexa AI Trades Crypto',
      intro: 'Every scan runs the same five steps, in the same order.',
      items: [
        {
          title: 'Scans the market',
          body: 'Tracks live prices, volume and order flow across the major coins.',
        },
        {
          title: 'Reads sentiment',
          body: 'Checks news and market mood for signs of hype or fear.',
        },
        {
          title: 'Finds a setup',
          body: 'Looks for trends, breakouts and reversals using machine learning.',
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
      heading: 'Crypto Trading Strategies the AI Uses',
      intro: 'The same account can apply any of these, depending on what the market is doing.',
      columns: ['Strategy', 'What it does', 'Best for'],
      rows: [
        ['Trend following', 'Rides strong upward or downward moves', 'Clear bull or bear markets'],
        ['Breakout and momentum', 'Enters when price breaks a key level', 'Fast, news-driven moves'],
        ['Range (grid) trading', 'Buys low and sells high inside a price range', 'Sideways, choppy markets'],
        ['Dollar-cost averaging', 'Buys in small amounts over time', 'Long-term, lower-stress investing'],
        ['Sentiment analysis', 'Reads news and market mood', 'Spotting hype or fear early'],
      ],
    },
    {
      kind: 'cards',
      heading: 'Cryptocurrencies You Can Trade with AI',
      intro: 'A sample of the majors the platform scans. The full list is shown in your dashboard.',
      columns: 2,
      items: [
        { title: 'Bitcoin (BTC)', body: 'The largest and most traded cryptocurrency.', icon: 'bolt' },
        { title: 'Ethereum (ETH)', body: 'Powers DeFi, NFTs and smart contracts.', icon: 'globe' },
        {
          title: 'Solana (SOL)',
          body: 'A fast, low-fee network with high trading volume.',
          icon: 'chart',
        },
        { title: 'XRP', body: 'Widely used for payments and cross-border transfers.', icon: 'wallet' },
      ],
    },
    {
      kind: 'table',
      heading: 'Skyward Invexa vs a DIY Crypto Trading Bot',
      intro:
        'Many crypto bots need coding skills, exchange API keys and hours of setup. This is built to be simpler.',
      columns: ['', 'DIY crypto trading bot', 'Skyward Invexa'],
      rows: [
        ['Setup', 'API keys, settings, sometimes code', 'Register and go, with guided setup'],
        ['Strategy', 'You build or buy one', 'The AI chooses based on market conditions'],
        ['Support', 'Forums and help documents', 'A dedicated account manager'],
        ['Risk controls', 'Easy to misconfigure', 'Built in and simple to set'],
        ['Markets', 'Usually crypto only', 'Crypto plus forex, stocks, gold and indices'],
      ],
    },
    {
      kind: 'bullets',
      heading: 'Risks of Trading Crypto with AI (and How to Manage Them)',
      intro:
        'An AI can help, but crypto is still a high-risk market. These are the things to know before you start.',
      tone: 'cross',
      items: [
        'Extreme volatility. Prices can fall sharply in minutes, so always use a stop-loss.',
        'Flash crashes. Sudden drops can trigger losses before markets recover. Keep position sizes small.',
        'No AI is perfect. A strategy that worked in the past may not work in the future.',
        'Scams. Fake AI crypto bots promising guaranteed returns are common. Our Review page explains how to spot them.',
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Crypto Tax in Australia: A Quick Guide',
      body: 'The ATO treats crypto as property for Capital Gains Tax. Selling crypto for Australian dollars is a taxable event, and so is swapping one coin for another. Investors who hold a coin for more than 12 months may qualify for a 50% CGT discount, and frequent traders may be treated as running a business and taxed on income. This is general information, not tax advice. Speak with a registered tax agent about your own situation.',
    },
    {
      kind: 'prose',
      heading: 'Is AI Crypto Trading Legal in Australia?',
      body: [
        'Yes. Using AI to trade crypto is legal in Australia. Crypto exchanges must register with AUSTRAC, and anyone giving personal financial advice, including through AI, must hold the right licence from ASIC. Before using any platform, check who holds your funds and what licences they hold. You can look up any broker on the ASIC Professional Register.',
      ],
    },
    {
      kind: 'links',
      heading: 'Also explore',
      items: [
        { label: 'AI Forex Trading', href: '/ai-forex-trading' },
        { label: 'AI Gold Trading', href: '/ai-gold-trading' },
        { label: 'Why Invest with Skyward Invexa', href: '/why-invest' },
      ],
    },
  ],
  faqs: [
    {
      question: 'Does AI crypto trading really work?',
      answer:
        'An AI can analyse data faster and trade without emotion, which helps many traders stay disciplined. It cannot predict the market perfectly, and losses still happen.',
    },
    {
      question: 'Is trading crypto with AI good for beginners?',
      answer:
        'Yes, if you start small. Signal mode lets you approve every trade while you learn how the platform thinks.',
    },
    {
      question: 'How much do I need to start?',
      answer: 'You can start with AU$250.',
    },
    {
      question: 'Is a crypto trading bot the same as AI trading?',
      answer:
        'Not always. Basic bots follow fixed rules. AI trading uses machine learning, so it can adapt as market conditions change.',
    },
    {
      question: 'Can the AI trade crypto while I sleep?',
      answer: 'Yes. In Automated mode it trades around the clock, inside the limits you set.',
    },
    {
      question: 'Do I pay tax on crypto trading profits in Australia?',
      answer:
        'Generally, yes. Gains are subject to capital gains tax or income tax depending on your situation. Speak with a registered tax agent.',
    },
  ],
  cta: {
    title: 'Start Trading Crypto with AI',
    body: 'Register free in about two minutes, fund your account from AU$250, then choose your coins and set your limits. An account manager will help you through the first steps.',
  },
}
