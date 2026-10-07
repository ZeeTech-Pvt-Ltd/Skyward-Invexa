import type { MarketingPage } from '../pageTypes'

/**
 * Market hub: AI stock trading.
 *
 * The editor notes that came with this copy are honoured throughout: shares
 * are described honestly as CFDs (no ownership, no direct dividends, no
 * voting rights), the broker is never named and no licence claim is made,
 * and signals stay framed as general information, not personal advice.
 */
export const aiStockTrading: MarketingPage = {
  path: '/ai-stock-trading',
  meta: {
    title: 'AI Stock Trading in Australia | Trade with Skyward Invexa',
    description:
      'Trade ASX and US shares like BHP, CBA, Apple and NVIDIA with AI that tracks earnings, news and price trends. Built-in risk limits and a low AU$250 start.',
  },
  hero: {
    eyebrow: 'Shares',
    heading: 'AI Stock Trading in Australia: Trade ASX and US Shares Smarter with Skyward Invexa',
    lead: 'Thousands of listed companies, four earnings seasons a year and news that moves prices in seconds. Keeping up by hand is close to impossible. The Skyward Invexa AI scans ASX and US shares for you, flags clear setups and trades inside the limits you set, including on Wall Street while Australia sleeps.',
    bullets: [
      'ASX blue chips and top US tech stocks',
      'AI that reads earnings, news and charts',
      'Start from AU$250',
      'Stop-loss and daily limits on every trade',
    ],
    cta: 'Start Trading Shares with AI',
    visual: 'candlesLight',
  },
  sections: [
    {
      kind: 'prose',
      heading: 'What Is AI Stock Trading?',
      body: [
        'AI stock trading uses artificial intelligence to analyse share markets and place or suggest trades. The AI studies price charts, company earnings, economic data and news sentiment, then spots patterns and creates buy or sell signals. It can trade automatically within your rules, or send you signals to approve.',
      ],
    },
    {
      kind: 'table',
      heading: 'Why Investors Are Turning to AI for Shares',
      columns: ['Fact', 'Source'],
      rows: [
        ['About 7.7 million Australians (38%) invest in ASX shares', 'ASX Australian Investor Study'],
        ['About 85% of ASX share trading volume is algorithmic', 'ASIC estimate, 2025'],
        [
          '62% of retail investors have used AI tools for investment decisions',
          'Investing.com survey, April 2026',
        ],
      ],
      note: 'Big institutions have used algorithms for years. AI now gives everyday Australians access to the same kind of fast, data-driven analysis.',
    },
    {
      kind: 'table',
      heading: 'Share Market Hours in Australian Time',
      columns: ['Market', 'Approx. trading hours (Sydney time)', 'Notes'],
      rows: [
        ['ASX', '10:00am – 4:00pm', 'Pre-open from 7:00am, closing auction about 4:10pm'],
        [
          'US (NYSE / Nasdaq)',
          'About 11:30pm – 6:00am, or 12:30am – 7:00am',
          'Shifts with US and Australian daylight saving',
        ],
      ],
      note: 'The US market opens while most Australians are asleep. The Skyward Invexa AI can watch and trade US shares overnight, inside your limits.',
    },
    {
      kind: 'steps',
      heading: 'How the Skyward Invexa AI Trades Shares',
      intro: 'Every scan runs the same five steps, in the same order.',
      items: [
        {
          title: 'Tracks earnings',
          body: 'Follows results, guidance and surprises during reporting season.',
        },
        {
          title: 'Reads the chart',
          body: 'Looks for trends, breakouts, support and resistance levels.',
        },
        {
          title: 'Watches sectors',
          body: 'Spots money moving between sectors like mining, banks and tech.',
        },
        {
          title: 'Reads the news',
          body: 'Follows company announcements, rate decisions and market mood.',
        },
        {
          title: 'Applies your rules',
          body: 'Filters every idea through your stop-loss, take-profit and daily limits.',
        },
      ],
    },
    {
      kind: 'table',
      heading: 'Popular Shares You Can Trade',
      intro: 'A sample of the shares the platform scans. The full list is shown in your dashboard.',
      columns: ['Market', 'Examples', 'Why traders watch them'],
      rows: [
        ['ASX', 'BHP, CBA, CSL, Woolworths', 'Big, liquid Australian companies'],
        ['US tech', 'Apple, NVIDIA, Microsoft, Tesla', 'High volume and big news-driven moves'],
        ['Indices', 'ASX 200, S&P 500, Nasdaq 100', 'Trade the whole market in one position'],
      ],
    },
    {
      kind: 'table',
      heading: 'Buying Shares vs Trading Shares with AI',
      columns: ['', 'Buying shares (broker / CHESS)', 'Share ETF', 'Trading shares with AI (CFD)'],
      rows: [
        ['Own the shares?', 'Yes', 'Yes (units in a fund)', 'No'],
        ['Dividends', 'Yes', 'Yes', 'Cash adjustment only'],
        ['Voting rights', 'Yes', 'No', 'No'],
        ['Profit if price falls?', 'No', 'No', 'Possible'],
        ['Leverage', 'No', 'No', 'Yes, up to 5:1 (higher risk)'],
        ['Best for', 'Long-term investing', 'Simple, diversified investing', 'Active, short-term trading'],
      ],
      note: 'There is no single best option. If you want to own companies for the long term, buying shares or ETFs may suit you better. Trading with AI suits people who want to act on shorter price moves and accept higher risk.',
    },
    {
      kind: 'callout',
      tone: 'info',
      title: 'Share Leverage in Australia: ASIC Limits',
      body: 'ASIC caps leverage on share CFDs for retail clients at 5:1, and at 20:1 on major indices like the ASX 200. Retail clients of ASIC-licensed brokers also get negative balance protection, so you cannot lose more than the money in your account. ASIC research shows most retail CFD clients lose money.',
    },
    {
      kind: 'bullets',
      heading: 'Risks of Trading Shares with AI (and How to Manage Them)',
      intro: 'An AI can help, but shares still carry real risk. Know these before you start.',
      tone: 'cross',
      items: [
        'Earnings surprises. A share can gap 10% or more overnight, so use a stop-loss and smaller positions around reporting dates.',
        'Overnight gaps. Prices can open far from where they closed, so think about your exposure before the close.',
        'Concentration risk. Do not put everything in one stock or sector.',
        'No AI is perfect. A strategy that worked in the past may not work in the future.',
        'Scams. Be wary of AI stock pick groups on WhatsApp or Telegram. ASIC warned in 2026 about pump-and-dump schemes, and our Review page explains how to spot them.',
      ],
    },
    {
      kind: 'prose',
      heading: 'Is AI Stock Trading Legal in Australia?',
      body: [
        'Yes. Using AI tools to trade shares is legal in Australia. Brokers offering share CFDs to Australians must hold an Australian Financial Services Licence (AFSL) from ASIC.',
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
        { label: 'AI Gold Trading', href: '/ai-gold-trading' },
        { label: 'Skyward Invexa Review', href: '/review' },
      ],
    },
  ],
  faqs: [
    {
      question: 'Can AI predict stock prices?',
      answer:
        'No AI can predict prices perfectly. It can analyse far more data than a person and spot patterns faster, which helps with discipline and timing, but losses still happen.',
    },
    {
      question: 'Can I trade US stocks from Australia with Skyward Invexa?',
      answer:
        'Yes. You can trade popular US shares like Apple and NVIDIA, and the AI can trade them overnight Australian time.',
    },
    {
      question: 'Do I get dividends?',
      answer:
        'If you trade share CFDs, you do not own the shares, so you do not receive dividends directly. Instead, positions may get a cash dividend adjustment.',
    },
    {
      question: 'How much do I need to start?',
      answer: 'The minimum deposit on Skyward Invexa is AU$250.',
    },
    {
      question: 'Is AI stock trading good for beginners?',
      answer:
        'It can be, if you start small, use Signal mode to approve trades and always set a stop-loss.',
    },
    {
      question: 'Do I pay tax on share trading profits in Australia?',
      answer:
        'Generally, yes. Profits may be taxed as income or as capital gains depending on your situation, so speak with a registered tax agent.',
    },
  ],
  cta: {
    title: 'Start Trading Shares with AI',
    body: 'Register free in about two minutes, fund your account from AU$250, then pick your shares and set your limits. An account manager will help you through the first steps.',
  },
}
