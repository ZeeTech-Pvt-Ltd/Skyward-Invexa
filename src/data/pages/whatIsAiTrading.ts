import type { MarketingPage } from '../pageTypes'

/**
 * Education hub: what AI trading is.
 *
 * The top-of-funnel explainer. It carries the definition, the comparison
 * against algorithmic and manual trading, the myths table, the glossary and
 * the platform checklist, so the money and signals pages can link here
 * instead of re-explaining the basics.
 *
 * House rules are honoured throughout: no licensing claims, no invented
 * figures of our own, and every third-party number keeps its source inline.
 */
export const whatIsAiTrading: MarketingPage = {
  path: '/what-is-ai-trading',
  meta: {
    title: 'What Is AI Trading? Guide, Pros and Risks | Skyward Invexa',
    description:
      'AI trading explained in plain English: how the technology works, how it differs from algorithmic trading, the real risks and how to pick a platform.',
  },
  hero: {
    eyebrow: 'Education',
    heading: 'What Is AI Trading? A Plain-English Guide from Skyward Invexa',
    lead: 'You have probably heard that AI is changing how people invest. But what does AI trading actually mean, how does it work, and is it right for you? This guide explains it all in simple terms, including the parts most platforms do not talk about.',
    bullets: [
      'What AI trading is, in plain English',
      'How it differs from algorithmic and manual trading',
      'The real risks, and the myths to ignore',
      'How to check a platform before you sign up',
    ],
    cta: 'Create My Free Account',
    visual: 'showcase',
  },
  sections: [
    {
      kind: 'prose',
      heading: 'What Is AI Trading?',
      body: [
        'AI trading is the use of artificial intelligence to analyse financial markets and make or suggest trades. AI models study large amounts of data, such as prices, news, economic reports and market sentiment, to find patterns. They then create trade signals or place trades automatically, based on rules the trader sets.',
        'In short: the AI does the research and the watching. You set the goals and the limits.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How Does AI Trading Work?',
      intro: 'Every cycle runs the same five stages, from raw data to a finished trade.',
      items: [
        {
          title: 'Data Collection',
          body: 'The AI gathers live prices, volume, company results, economic data and news.',
        },
        {
          title: 'Analysis',
          body: 'Machine learning models look for patterns that have often come before price moves.',
        },
        {
          title: 'Signal',
          body: 'When a setup appears, the AI creates a trade idea with an entry, a stop-loss and a target.',
        },
        {
          title: 'Execution',
          body: 'The trade is placed automatically, or sent to the trader to approve.',
        },
        {
          title: 'Learning',
          body: 'Results feed back into the model so it can adjust to changing markets.',
        },
      ],
    },
    {
      kind: 'table',
      heading: 'Types of AI Used in Trading',
      intro:
        'The AI behind a trading platform is not one single model. Different types do different jobs, and most platforms combine several.',
      columns: ['AI type', 'What it does in trading'],
      rows: [
        ['Machine learning', 'Finds patterns in past price and volume data'],
        [
          'Natural language processing (NLP)',
          'Reads news, reports and social posts to measure market mood',
        ],
        ['Deep learning', 'Handles very large, complex data sets with many layers of analysis'],
        ['Reinforcement learning', 'Learns by trial and error which actions lead to better results'],
        ['Large language models (LLMs)', 'Summarise news and explain market events in plain English'],
      ],
    },
    {
      kind: 'callout',
      tone: 'info',
      title: 'Algorithmic Trading Is Already the Norm',
      body: 'Algorithmic trading, where fixed computer rules place the trades, is already standard for professionals. ASIC estimates around 85% of ASX share trading volume is algorithmic. AI trading takes the next step: instead of fixed rules, machine learning models can learn and adapt as conditions change.',
    },
    {
      kind: 'table',
      heading: 'AI Trading vs Algorithmic Trading vs Manual Trading',
      intro:
        'The three approaches differ in who makes the decisions, and how quickly they react to something new.',
      columns: ['', 'Manual trading', 'Algorithmic trading', 'AI trading'],
      rows: [
        ['Who decides', 'The trader', 'Fixed computer rules', 'Machine learning models'],
        ['Adapts to new conditions?', 'Yes, but slowly', 'No, rules stay fixed', 'Yes, models can adjust'],
        ['Speed', 'Minutes to hours', 'Milliseconds', 'Seconds or faster'],
        ['Emotion', 'Fear and greed can creep in', 'None', 'None'],
        [
          'Data it can handle',
          'A few charts at a time',
          'Set data inputs',
          'Huge, mixed data: prices, news, sentiment',
        ],
      ],
    },
    {
      kind: 'cards',
      heading: 'Who Uses AI Trading Today?',
      intro:
        'AI trading is not a niche experiment. It runs from the largest institutions down to first-time retail investors.',
      columns: 3,
      items: [
        {
          title: 'Big Institutions',
          body: 'Banks, hedge funds and market makers use AI for speed and scale.',
          icon: 'globe',
        },
        {
          title: 'Retail Investors',
          body: 'In an April 2026 Investing.com survey, 62% of retail investors said they had used AI tools to help make investment decisions.',
          icon: 'chart',
        },
        {
          title: 'Young Australians',
          body: 'ASIC research in 2026 found 18% of Gen Z Australians rely on AI tools for money decisions, and ASIC urges them to sense-check what AI tells them.',
          icon: 'devices',
        },
      ],
    },
    {
      kind: 'split',
      heading: 'Benefits and Risks of AI Trading',
      intro: 'AI trading is a tool, not a guarantee. Here is both sides, honestly.',
      left: {
        title: 'Benefits',
        items: [
          'Watches markets 24/7, without getting tired',
          'Removes emotional decisions from the process',
          'Processes far more data than a person can read',
          'Reacts to news in seconds, not minutes',
          'Applies your risk rules on every single trade',
        ],
      },
      right: {
        title: 'Risks',
        items: [
          'Can lose money, sometimes quickly',
          'Models can fail when markets change suddenly',
          'Overfitting: looks great on past data, weak in live markets',
          'Leverage magnifies losses as well as gains',
          'Fake "AI bots" and scams are common',
        ],
      },
    },
    {
      kind: 'table',
      heading: 'AI Trading Myths vs Facts',
      intro: 'Search for AI trading and you will meet all of these. They are worth settling early.',
      columns: ['Myth', 'Fact'],
      rows: [
        [
          '"AI trading guarantees profits"',
          'No system can guarantee profits. Treat any such claim as a red flag.',
        ],
        ['"AI can predict the market"', 'AI finds probabilities, not certainties.'],
        ['"You need to be a coder"', 'Modern platforms let you use AI without writing any code.'],
        ['"It is set and forget"', 'You still need to set limits and review results regularly.'],
      ],
    },
    {
      kind: 'prose',
      heading: 'Is AI Trading Legit and Legal in Australia?',
      body: [
        'Yes. AI trading is legal in Australia and is used right across the market. But not every platform is legitimate. In 2025, Australians reported $837.7 million in investment scam losses according to the ACCC, and many of those scams use "AI trading" as the hook.',
      ],
    },
    {
      kind: 'bullets',
      heading: 'What a Legitimate Platform Should Show You',
      intro: 'These are the basics to check before you deposit anything.',
      tone: 'check',
      items: [
        'A broker with the right ASIC licence, which you can look up on the ASIC Professional Register.',
        'Company details you can verify, with a real support team behind the platform.',
        'No promises of guaranteed or fixed returns, ever.',
        'Risk limits you control, and the ability to withdraw your money.',
        'Fees and risks explained openly, before you sign up rather than after.',
      ],
    },
    {
      kind: 'checklist',
      heading: 'How to Choose an AI Trading Platform',
      intro: 'Work through this list before you commit any money.',
      items: [
        'Check the licence on the ASIC Professional Register',
        'Look for real risk controls: a stop-loss, daily limits and a kill switch',
        'Check transparency: can you see why each trade was made?',
        'Start small, so a low minimum deposit lets you test before committing more',
        'Test support: call or email before you sign up',
      ],
    },
    {
      kind: 'glossary',
      heading: 'AI Trading Glossary',
      items: [
        {
          term: 'Signal',
          meaning: 'A trade idea: buy or sell, with an entry, a stop-loss and a target.',
        },
        { term: 'Stop-loss', meaning: 'An order that closes a trade to limit your loss.' },
        { term: 'Take-profit', meaning: 'An order that closes a trade at your profit target.' },
        { term: 'Leverage', meaning: 'Using borrowed funds to open a bigger position.' },
        { term: 'Backtesting', meaning: 'Testing a strategy on past market data.' },
        {
          term: 'Overfitting',
          meaning: 'When a model fits past data too closely and then fails on live markets.',
        },
        {
          term: 'Sentiment analysis',
          meaning: 'Measuring market mood from news and social posts.',
        },
        {
          term: 'Slippage',
          meaning: 'The difference between the expected price of a trade and the price you actually get.',
        },
      ],
    },
    {
      kind: 'links',
      heading: 'Also Explore',
      items: [
        { label: 'AI Trading for Beginners', href: '/ai-trading-for-beginners' },
        { label: 'Risk Management Tools', href: '/risk-management-tools' },
        { label: 'How It Works', href: '/how-it-works' },
        { label: 'Skyward Invexa Review', href: '/review' },
      ],
    },
  ],
  faqs: [
    {
      question: 'What Is AI Trading in Simple Words?',
      answer:
        'It is when a computer program uses artificial intelligence to study the markets and suggest or place trades for you, based on rules you set.',
    },
    {
      question: 'Does AI Trading Actually Work?',
      answer:
        'It can help traders be faster and more disciplined, but it does not remove risk. Results vary, and losses are part of trading.',
    },
    {
      question: 'What Is the Difference Between AI Trading and a Trading Bot?',
      answer:
        'A basic trading bot follows fixed rules. AI trading uses machine learning, so it can adapt as market conditions change.',
    },
    {
      question: 'Can Beginners Use AI Trading?',
      answer:
        'Yes, as long as they start small, use a stop-loss on every trade and choose a licensed, transparent platform.',
    },
    {
      question: 'How Much Money Do I Need for AI Trading?',
      answer:
        'It depends on the platform. On Skyward Invexa, the minimum deposit is AU$250.',
    },
    {
      question: 'Is AI Trading Legal in Australia?',
      answer:
        'Yes. AI trading is legal in Australia. Platforms and advisers must meet ASIC rules, and anyone giving personal financial advice needs the right licence.',
    },
  ],
  cta: {
    title: 'Ready to Try AI Trading?',
    body: 'New to trading? Start with the step-by-step AI Trading for Beginners guide, or create a free Skyward Invexa account and an account manager will walk you through it.',
  },
}
