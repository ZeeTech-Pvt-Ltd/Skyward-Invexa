import type { MarketingPage } from '../pageTypes'

/**
 * Automation hub: automated trading.
 *
 * The editor note that came with this copy asked for every automation setting
 * to be checked against the platform before publishing. The settings it named,
 * risk per trade, max open trades, trading hours and a news filter, are left
 * out here rather than described as features that may not exist. The ASIC
 * regulation notes are kept and phrased as rules that apply to retail clients
 * generally, and no broker, licence or company detail is claimed.
 */
export const automatedTrading: MarketingPage = {
  path: '/automated-trading',
  meta: {
    title: 'Automated Trading Platform for Australians | Skyward Invexa',
    description:
      'Skyward Invexa is an automated trading platform for Australians. Set your rules, let AI trade crypto, forex and gold 24/7, and stop it with one click.',
  },
  hero: {
    eyebrow: 'Automated Trading',
    heading: 'The Skyward Invexa Automated Trading Platform That Works While You Sleep',
    lead: 'Big investors stopped clicking "buy" and "sell" by hand years ago. Today, around 85% of share trading volume on the ASX is driven by algorithms, according to ASIC. Skyward Invexa brings that same automation to everyday Australians: you set the rules, the AI does the watching and trading, and you can switch it off with one click.',
    bullets: [
      'Fully automated or semi-automated trading',
      'Your rules, your limits, every trade',
      'One-click kill switch',
      'Start from AU$250',
    ],
    cta: 'Start Automated Trading Free',
    visual: 'terminal',
  },
  sections: [
    {
      kind: 'prose',
      heading: 'What Is an Automated Trading Platform?',
      body: [
        'An automated trading platform is software that opens, manages and closes trades for you based on set rules. You decide the conditions, such as how much to risk and which markets to trade. The platform then watches the market and places trades automatically when those conditions are met, without you needing to click.',
      ],
    },
    {
      kind: 'table',
      heading: 'The Pros Already Automate. Now You Can Too.',
      columns: ['Fact', 'Source'],
      rows: [
        ['Around 85% of ASX equities volume is algorithmic', 'ASIC estimate, 2025'],
        ['Up to 94% of SPI 200 futures volume is algorithmic', 'ASIC estimate, 2025'],
        [
          'Global algorithmic trading market to reach US$42.99 billion by 2030',
          'Grand View Research',
        ],
        [
          'Short-term and retail traders are the fastest-growing segment',
          'Grand View Research',
        ],
      ],
      note: 'Automation is no longer just for hedge funds. With AI, everyday traders can now use the same kind of rule-based, always-on approach.',
    },
    {
      kind: 'table',
      heading: 'Types of Automated Trading: Compared',
      intro: 'Three common approaches, side by side.',
      columns: ['', 'Rule-based bot or EA', 'Copy trading', 'AI automated trading (Skyward Invexa)'],
      rows: [
        [
          'How trades are chosen',
          'Fixed "if-this-then-that" rules',
          'Copies another trader',
          'Machine learning reads live data',
        ],
        [
          'Adapts to the market?',
          'No, rules stay the same',
          'Depends on the trader',
          'Yes, it adjusts as conditions change',
        ],
        ['Skill needed', 'Setup, sometimes coding', 'Picking the right trader', 'Low, guided setup'],
        ['Your control', 'Edit the code or settings', 'Limited', 'Full risk settings and kill switch'],
        ['Main risk', 'Rules stop working', 'Trader has a bad run', 'No AI is right every time'],
      ],
    },
    {
      kind: 'steps',
      heading: 'What Happens During an Automated Trade',
      intro: 'Every automated trade moves through the same five stages.',
      items: [
        {
          title: 'You Set the Rules',
          body: 'Your markets, your daily limits and the conditions a trade must pass.',
        },
        {
          title: 'The AI Finds a Setup',
          body: 'It scans prices, trends and news across your chosen markets.',
        },
        {
          title: 'The Trade Opens',
          body: 'Only if it passes every one of your rules.',
        },
        {
          title: 'The Trade Is Managed',
          body: 'Stop-loss and take-profit are set at entry.',
        },
        {
          title: 'The Trade Closes and Is Logged',
          body: 'Every result appears on your dashboard with the reason it was opened.',
        },
      ],
    },
    {
      kind: 'table',
      heading: 'Your Automation, Your Rules',
      intro:
        'Automation does not mean giving up control. These are the settings you can adjust at any time:',
      columns: ['Setting', 'What it controls', 'Example'],
      rows: [
        ['Daily loss limit', 'Pauses trading if losses hit a set amount', 'Stop after AU$50 loss'],
        ['Markets', 'Which assets the AI can trade', 'Gold and AUD/USD only'],
        ['Kill switch', 'Stops all automated trading instantly', 'One click'],
      ],
    },
    {
      kind: 'bullets',
      heading: 'Built-In Safeguards on Every Account',
      tone: 'check',
      items: [
        'One-click kill switch: stop all automated trading instantly. ASIC now expects brokers and trading firms to have kill switches on their own algorithms by 2028. On Skyward Invexa, you have one from day one.',
        'Automatic pause: trading stops when your daily loss limit is reached.',
        'ASIC rules on leverage and protection: retail leverage is capped, and ASIC requires negative balance protection for retail CFD clients, so losses cannot exceed the money in the account.',
        'Full trade log: see what the AI did and why, so nothing happens in a black box.',
      ],
    },
    {
      kind: 'split',
      heading: 'Automated Trading: Pros and Cons',
      left: {
        title: 'Pros',
        items: [
          'Trades 24/7 without you watching',
          'Removes fear and greed from decisions',
          'Reacts in seconds',
          'Follows your rules every time',
          'Saves hours each week',
        ],
      },
      right: {
        title: 'Cons',
        items: [
          'Losses can happen while you are away',
          'Needs sensible settings to work well',
          'Sudden news can still cause slippage',
          'Past results do not guarantee future returns',
          'Not a "set and forget" money machine',
        ],
      },
    },
    {
      kind: 'split',
      heading: 'Is Automated Trading Right for You?',
      left: {
        title: 'It May Suit You',
        items: [
          'You have little time to watch markets.',
          'You find it hard to stick to a trading plan.',
          'You want to trade overnight sessions while you sleep.',
          'You are happy to start small and review results weekly.',
        ],
      },
      right: {
        title: 'It May Not Suit You',
        items: [
          'You cannot afford to lose the money you deposit.',
          'You expect fixed or guaranteed returns.',
          'You never want to check on your account.',
        ],
      },
    },
    {
      kind: 'bullets',
      heading: '5 Automated Trading Mistakes to Avoid',
      tone: 'cross',
      items: [
        '"Set and forget": check your dashboard at least once a week.',
        'Too much leverage: start low and increase only with experience.',
        'No daily limit: always set a loss limit before switching automation on.',
        'Too many markets at once: start with 1-3 markets you understand.',
        'Believing guaranteed-profit bots: any automated system promising fixed returns is a red flag. Our review page explains how to spot fakes.',
      ],
    },
    {
      kind: 'prose',
      heading: 'Is Automated Trading Legal in Australia?',
      body: [
        'Yes. Automated and algorithmic trading is legal in Australia and widely used. Brokers offering CFDs to retail clients must hold an AFSL from ASIC, and ASIC also sets rules for how market firms govern their trading algorithms. Always check who holds your funds and what licence the firm holds.',
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Risk Disclosure',
      body: 'Automated trading of crypto, forex and CFDs involves high risk and may not suit every investor. Most retail clients lose money trading CFDs. You could lose some or all of your deposit, including while automation runs without your supervision. Past performance does not guarantee future results. Skyward Invexa does not provide financial advice. Please read our Risk Disclosure and Terms before trading.',
    },
    {
      kind: 'links',
      heading: 'Also Explore',
      items: [
        { label: 'How It Works', href: '/how-it-works' },
        { label: 'Risk Management Tools', href: '/risk-management-tools' },
        { label: 'AI Crypto Trading', href: '/ai-crypto-trading' },
        { label: 'AI Forex Trading', href: '/ai-forex-trading' },
        { label: 'AI Gold Trading', href: '/ai-gold-trading' },
        { label: 'Skyward Invexa Review', href: '/review' },
      ],
    },
  ],
  faqs: [
    {
      question: 'Is automated trading profitable?',
      answer:
        'It can be, but profit is never guaranteed. Automation helps you trade with discipline and speed, but results depend on market conditions and your settings.',
    },
    {
      question: 'What is the best automated trading platform in Australia?',
      answer:
        'The best platform for you is one that uses an ASIC-licensed broker, gives you full risk controls and a kill switch, shows clear fees, offers real support and never promises guaranteed profits.',
    },
    {
      question: 'Can I start automated trading with AU$250?',
      answer:
        'Yes. AU$250 is the minimum deposit on Skyward Invexa. Start small so your balance can handle the normal ups and downs of trading.',
    },
    {
      question: 'Is automated trading the same as algorithmic trading?',
      answer:
        'They are closely related. Algorithmic trading uses computer rules to place trades. Automated trading is the wider term, and AI trading adds machine learning so the rules can adapt.',
    },
    {
      question: 'Does automated trading run 24/7?',
      answer:
        'Crypto trades around the clock. Forex, gold and indices trade around 24 hours on weekdays, so activity pauses when those markets close.',
    },
    {
      question: 'Can I turn automation off?',
      answer:
        'Yes. Use the kill switch to stop all automated trading at once, or switch to Signal mode to approve each trade yourself.',
    },
  ],
  cta: {
    title: 'Switch On Automated Trading in 3 Steps',
    body: 'Register free in 2 minutes, fund your account from AU$250, then set your rules, switch on Automated mode and let the AI work.',
  },
}
