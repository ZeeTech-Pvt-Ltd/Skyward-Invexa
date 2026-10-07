import type { MarketingPage } from '../pageTypes'

/**
 * Market hub: AI gold trading.
 *
 * The broker is never named and no licence claim is made; the gold price
 * levels are the client-supplied figures from the October 2026 content
 * snapshot; ASIC rules are described as regulation, not as a claim about us.
 */
export const aiGoldTrading: MarketingPage = {
  path: '/ai-gold-trading',
  meta: {
    title: 'AI Gold Trading in Australia | Trade with Skyward Invexa',
    description:
      'Gold hit record highs in 2026, then fell 26%. Trade the swings with an AI that tracks rates, the US dollar and news 24/5. Start from AU$250.',
  },
  hero: {
    eyebrow: 'Gold',
    heading: 'AI Gold Trading in Australia: Trade Gold Smarter with Skyward Invexa',
    lead: 'Gold has had a wild 2026. It hit a record of around US$5,595 an ounce in January, then fell about 26% by October. Moves like that bring opportunity and risk in both directions. The Skyward Invexa AI tracks the forces behind gold, from interest rates to the US dollar to world news, and trades inside the limits you set.',
    bullets: [
      'Trade gold in USD (XAU/USD) or AUD (XAU/AUD)',
      'The AI looks for setups when prices rise or fall',
      'Start from AU$250, with no vault or storage needed',
      'Stop-loss and daily limits on every trade',
    ],
    cta: 'Start Trading Gold with AI',
    visual: 'candlesDark',
  },
  sections: [
    {
      kind: 'prose',
      heading: 'What Is AI Gold Trading?',
      body: [
        'AI gold trading uses artificial intelligence to analyse the gold market and place or suggest trades. The AI studies gold prices, interest rates, the US dollar, inflation data and news, then spots patterns and creates buy or sell signals. You trade price moves without buying or storing physical gold.',
      ],
    },
    {
      kind: 'bullets',
      heading: 'Why Gold Is in the Spotlight',
      items: [
        'Big price swings. Gold hit a record high in January 2026, then fell about 26% by October. Volatility like that creates trading opportunities in both directions.',
        'Central bank buying. Central banks bought 289 tonnes of gold in Q2 2026, up 62% on a year earlier (World Gold Council).',
        'A safe-haven asset. Investors often turn to gold during market stress, inflation or conflict.',
        'An Australian story. Australia is among the biggest gold producers in the world and holds some of the largest known reserves, so many local investors already follow the market.',
      ],
    },
    {
      kind: 'table',
      heading: 'What Moves the Gold Price?',
      intro: 'Gold reacts to several forces at once. That is hard for a person to track, but easy for AI.',
      columns: ['Driver', 'Typical effect on gold'],
      rows: [
        ['US interest rates', 'Higher rates often pressure gold; rate cuts can lift it'],
        ['US dollar', 'A stronger USD usually weighs on gold prices'],
        ['Inflation', 'High inflation tends to support gold demand'],
        ['Geopolitical risk', 'Wars and crises often push investors toward gold'],
        ['Central bank buying', 'Large purchases support long-term demand'],
        ['AUD/USD (for Australians)', 'A weaker AUD can raise the gold price in AUD terms'],
      ],
    },
    {
      kind: 'steps',
      heading: 'How the Skyward Invexa AI Trades Gold',
      intro: 'Every scan runs the same five steps, in the same order.',
      items: [
        {
          title: 'Tracks key data',
          body: 'Watches US Fed decisions, inflation reports, jobs data and the US dollar index.',
        },
        {
          title: 'Reads the chart',
          body: 'Looks for trends, support and resistance, and momentum across timeframes.',
        },
        {
          title: 'Watches the news',
          body: 'Follows geopolitical events and market mood, risk-on or risk-off.',
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
      heading: 'Gold Markets You Can Trade',
      intro: 'A sample of the instruments the platform scans. The full list is shown in your dashboard.',
      columns: ['Instrument', 'What it means'],
      rows: [
        ['XAU/USD', 'Gold priced in US dollars, the global benchmark'],
        ['XAU/AUD', 'Gold priced in Australian dollars'],
        ['XAG/USD (silver)', 'The more volatile little brother of gold'],
      ],
    },
    {
      kind: 'table',
      heading: 'Ways to Invest in Gold in Australia: Compared',
      columns: ['', 'Physical gold', 'ASX gold ETF', 'Gold mining shares', 'Trading gold with AI (CFD)'],
      rows: [
        ['Own real gold?', 'Yes', 'Indirectly', 'No', 'No'],
        ['Storage needed?', 'Yes', 'No', 'No', 'No'],
        ['Profit if price falls?', 'No', 'No', 'No', 'Possible'],
        ['Trading hours', 'Dealer hours', 'ASX hours', 'ASX hours', 'Nearly 24/5'],
        ['Leverage', 'No', 'No', 'No', 'Yes (higher risk)'],
        ['Best for', 'Long-term holding', 'Simple exposure', 'Company growth', 'Active trading'],
      ],
      note: 'There is no single best way. Physical gold and ETFs suit long-term holders. Trading gold with AI suits people who want to trade price moves actively, and who understand the higher risk that comes with leverage.',
    },
    {
      kind: 'prose',
      heading: 'Gold Trading Hours in Australia (AEST)',
      body: [
        'Gold trades almost 24 hours a day, Monday to Friday, much like forex. The most active time is usually 11pm to 3am AEST, when the London and New York sessions overlap and big US data is released. The Skyward Invexa AI keeps watching through these hours while you sleep.',
        'Times shift slightly with daylight saving.',
      ],
    },
    {
      kind: 'callout',
      tone: 'info',
      title: 'Gold Leverage in Australia: ASIC Limits',
      body: 'ASIC limits leverage on gold CFDs for retail clients to 20:1. That means a AU$250 deposit can control a position worth up to AU$5,000, so gains and losses both grow faster. Retail clients of ASIC-licensed brokers also get negative balance protection, so you cannot lose more than the money in your account. ASIC research shows most retail CFD clients lose money.',
    },
    {
      kind: 'bullets',
      heading: 'Risks of Trading Gold with AI (and How to Manage Them)',
      intro: 'An AI can help, but gold can still move sharply against you. Know these before you start.',
      tone: 'cross',
      items: [
        'Sharp reversals. Gold fell about 26% from its 2026 peak, so always set a stop-loss.',
        'News shocks. Fed decisions or world events can move gold in minutes, so keep position sizes small.',
        'Leverage risk. Use lower leverage while you learn.',
        'No AI is perfect. A strategy that worked in the past may not work in the future.',
        'Scams. Avoid any gold bot that promises guaranteed profit. Our Review page explains how to spot fakes.',
      ],
    },
    {
      kind: 'prose',
      heading: 'Is AI Gold Trading Legal in Australia?',
      body: [
        'Yes. Australians can legally trade gold using AI tools. Brokers offering gold CFDs to Australians must hold an Australian Financial Services Licence (AFSL) from ASIC.',
        'Your funds are held by the broker, not by Skyward Invexa. You can check the licence of any broker on the ASIC Professional Register before you deposit. Signals are general information, not personal advice.',
      ],
    },
    {
      kind: 'links',
      heading: 'Also Explore',
      items: [
        { label: 'How Skyward Invexa Works', href: '/how-it-works' },
        { label: 'AI Crypto Trading', href: '/ai-crypto-trading' },
        { label: 'AI Forex Trading', href: '/ai-forex-trading' },
        { label: 'Why Invest with Skyward Invexa', href: '/why-invest' },
        { label: 'Skyward Invexa Review', href: '/review' },
      ],
    },
  ],
  faqs: [
    {
      question: 'Is AI gold trading profitable?',
      answer:
        'It can be, but it is never guaranteed. AI helps with speed and discipline, yet gold can move sharply against any trade, so always use a stop-loss.',
    },
    {
      question: 'Do I own physical gold when I trade with Skyward Invexa?',
      answer:
        'No. You trade gold price movements through CFDs, so you do not own, store or insure any physical gold.',
    },
    {
      question: 'How much do I need to start trading gold?',
      answer: 'The minimum deposit is AU$250.',
    },
    {
      question: 'What is XAU/USD?',
      answer:
        'XAU/USD is the price of one ounce of gold in US dollars, and it is the main global benchmark for gold.',
    },
    {
      question: 'What is the best time to trade gold in Australia?',
      answer: 'Usually 11pm to 3am AEST, when London and New York overlap and trading volume peaks.',
    },
    {
      question: 'Do I pay tax on gold trading profits in Australia?',
      answer:
        'Generally, yes. Gains may be taxed as income or as capital gains depending on your situation, so speak with a registered tax agent.',
    },
  ],
  cta: {
    title: 'Start Trading Gold with AI',
    body: 'Register free in about two minutes, fund your account from AU$250, then choose XAU/USD or XAU/AUD and set your limits. An account manager will help you through the first steps.',
  },
}
