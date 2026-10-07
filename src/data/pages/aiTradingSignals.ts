import type { MarketingPage } from '../pageTypes'

/**
 * Product page: AI trading signals.
 *
 * The ASIC framing that came with this copy is honoured throughout: signals
 * are described as general information, never as personal advice, and the
 * page makes no licence claim at all. The sample signal card is an
 * illustration, and the table says so in its note.
 */
export const aiTradingSignals: MarketingPage = {
  path: '/ai-trading-signals',
  meta: {
    title: 'AI Trading Signals for Australians | Skyward Invexa',
    description:
      'AI trading signals for crypto, forex and gold, each with a clear entry, stop-loss and take-profit, sent to your private dashboard. Start from AU$250.',
  },
  hero: {
    eyebrow: 'Signals',
    heading: 'AI Trading Signals from Skyward Invexa, Straight to Your Dashboard',
    lead: 'Most traders do not fail from a lack of ideas. They fail from unclear ideas and no plan for risk. Every Skyward Invexa signal comes with an entry, a stop-loss, a take-profit and the reason behind it. Signals go straight to your secure dashboard, not a random chat group, and you decide what happens next.',
    bullets: [
      'Signals for crypto, forex, gold and indices',
      'Entry, stop-loss and take-profit on every signal',
      'Act in one click, or let the AI trade for you',
      'Start from AU$250',
    ],
    cta: 'Start Receiving Signals Free',
    visual: 'terminal',
  },
  sections: [
    {
      kind: 'prose',
      heading: 'What Are AI Trading Signals?',
      body: [
        'AI trading signals are trade ideas created by artificial intelligence. The AI analyses prices, chart patterns, economic data and market news, then suggests when to buy or sell an asset. A good signal includes an entry price, a stop-loss to limit losses and a take-profit target.',
      ],
    },
    {
      kind: 'table',
      heading: 'Anatomy of a Skyward Invexa Signal',
      intro: 'Here is what a signal looks like on your dashboard.',
      columns: ['Field', 'Example'],
      rows: [
        ['Market', 'XAU/USD (Gold)'],
        ['Direction', 'Buy'],
        ['Entry', '4,150.00'],
        ['Stop-loss', '4,120.00'],
        ['Take-profit', '4,210.00'],
        ['Risk / reward', '1 : 2'],
        ['AI confidence', 'Medium'],
        ['Why', 'Price broke above resistance after softer US jobs data'],
        ['Valid until', '4 hours from issue'],
      ],
      note: 'Illustrative example only. This is a sample of the signal layout, not a real trade, a recommendation or live market data.',
    },
    {
      kind: 'bullets',
      heading: 'How to Read a Trading Signal',
      intro: 'Six fields, and what each one is telling you.',
      tone: 'plain',
      items: [
        'Direction: buy means the AI expects the price to rise, sell means it expects a fall.',
        'Entry: the price level where the trade should open.',
        'Stop-loss: where the trade closes to cap your loss if the idea is wrong.',
        'Take-profit: where the trade closes to lock in gains if the idea is right.',
        'Risk / reward: 1:2 means you risk AU$10 to aim for AU$20.',
        'Confidence and reason: how strong the setup looks, and why. No black box.',
      ],
    },
    {
      kind: 'cards',
      heading: 'Where Our Signals Come From',
      intro: 'Each signal combines four layers of analysis.',
      columns: 2,
      items: [
        {
          title: 'Technical Analysis',
          body: 'Trends, support and resistance, momentum and volume.',
          icon: 'chart',
        },
        {
          title: 'Economic Calendar',
          body: 'RBA and US Fed decisions, inflation and jobs data.',
          icon: 'clock',
        },
        {
          title: 'Market Sentiment',
          body: 'News headlines and the risk-on or risk-off mood of the market.',
          icon: 'globe',
        },
        {
          title: 'Volatility Filter',
          body: 'Skips setups when markets are too wild or too thin to trade safely.',
          icon: 'shield',
        },
      ],
    },
    {
      kind: 'table',
      heading: 'Types of Signals You Will Receive',
      intro: 'Not every signal is a new trade. Some are there to close one, or to keep you out of trouble.',
      columns: ['Signal type', 'What it tells you'],
      rows: [
        ['Buy / sell signal', 'A new trade idea with entry, stop-loss and take-profit'],
        ['Breakout alert', 'Price has broken a key level'],
        ['Trend alert', 'A new trend may be forming'],
        ['Exit alert', 'The AI suggests closing or adjusting an open trade'],
        ['Risk alert', 'Big news or high volatility is coming up'],
      ],
    },
    {
      kind: 'cards',
      heading: 'Act on Signals Your Way',
      intro: 'Three ways to work with the same signals, depending on how hands-on you want to be.',
      columns: 3,
      items: [
        {
          title: 'Signal Mode: You Decide',
          body: 'Review each signal and place it with one click, change the size, or skip it.',
          icon: 'sliders',
        },
        {
          title: 'Automated Mode: The AI Acts',
          body: 'Let the AI place the trades automatically, inside the risk rules you set.',
          icon: 'bolt',
        },
        {
          title: 'Instant Alerts',
          body: 'Get notified the moment a new signal appears, so you can act while the setup is fresh.',
          icon: 'devices',
        },
      ],
    },
    {
      kind: 'table',
      heading: 'Skyward Invexa Signals vs Chat App Signal Groups',
      intro: 'ASIC has repeatedly warned Australians about fake trading groups on WhatsApp and Telegram. Scammers pose as expert traders, post fake wins and push people towards fake platforms or pump-and-dump shares. Here is how this platform is different.',
      columns: ['', 'Chat app signal groups', 'Skyward Invexa signals'],
      rows: [
        ['Where delivered', 'Public or private chat groups', 'Your secure, private dashboard'],
        ['Who is behind them', 'Often anonymous "star traders"', 'A named platform with support you can contact'],
        ['Risk controls', 'Rarely included', 'Stop-loss and take-profit on every signal'],
        ['Track record', 'Screenshots, easy to fake', 'Full trade log in your account'],
        ['Pressure to deposit', 'Common', 'Never'],
      ],
    },
    {
      kind: 'bullets',
      heading: 'Red Flags of Fake Signal Providers',
      intro: 'You can check any provider on the ASIC Professional Register, and report scams to Scamwatch. These are the warning signs to watch for.',
      tone: 'cross',
      items: [
        'Promises of guaranteed profits or a "90% win rate".',
        'Invites to WhatsApp or Telegram from strangers or "celebrities".',
        'Pressure to act fast, or a fee demanded before you can withdraw.',
        'No company name, no licence and no way to check who is really behind it.',
      ],
    },
    {
      kind: 'prose',
      heading: 'How Accurate Are AI Trading Signals?',
      body: [
        'No signal is right every time, and anyone who claims otherwise is not being honest. What matters is how the wins and the losses balance out. For example, with a 1:2 risk / reward, a trader can lose half their trades and still come out ahead before costs. That is why every Skyward Invexa signal includes a stop-loss and a clear target.',
        'Past results never guarantee future ones. Judge a signal service on its process: does it explain why, does it show every trade, and does it let you control your own risk?',
      ],
    },
    {
      kind: 'bullets',
      heading: '5 Tips for Using Trading Signals Well',
      intro: 'The signal is the easy part. These habits are the rest of it.',
      tone: 'check',
      items: [
        'Never skip the stop-loss. It is your safety net.',
        'Risk a small share per trade, such as 1-2% of your balance.',
        'Do not chase late signals. If the price has moved far past entry, let it go.',
        'Stick to markets you understand, and turn off the rest in settings.',
        'Review weekly, not every hour.',
      ],
    },
    {
      kind: 'prose',
      heading: 'Are Trading Signals Legal in Australia?',
      body: [
        'Yes. Trading signals are legal in Australia. General signals can be shared widely, but signals tailored to an individual financial situation count as personal advice and need a licence from ASIC. Skyward Invexa signals are general information only and do not consider your personal circumstances.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Start Getting AI Signals in 3 Steps',
      intro: 'From registration to your first signal, in one sitting.',
      items: [
        {
          title: 'Register Free',
          body: 'Create your account in about two minutes.',
        },
        {
          title: 'Fund Your Account',
          body: 'Deposit from AU$250.',
        },
        {
          title: 'Choose Your Markets',
          body: 'Pick the markets you want, and signals start arriving on your dashboard.',
        },
      ],
    },
    {
      kind: 'links',
      heading: 'Also Explore',
      items: [
        { label: 'AI Crypto Trading', href: '/ai-crypto-trading' },
        { label: 'AI Forex Trading', href: '/ai-forex-trading' },
        { label: 'AI Gold Trading', href: '/ai-gold-trading' },
        { label: 'Automated Trading', href: '/automated-trading' },
        { label: 'How It Works', href: '/how-it-works' },
        { label: 'Skyward Invexa Review', href: '/review' },
      ],
    },
  ],
  faqs: [
    {
      question: 'Do AI Trading Signals Really Work?',
      answer:
        'They can help you find clearer setups faster, but none are right every time. They work best with a stop-loss, small position sizes and a steady plan.',
    },
    {
      question: 'Are Skyward Invexa Signals Free?',
      answer:
        'Signals are included with your account. Registration is free, and the minimum deposit to trade is AU$250.',
    },
    {
      question: 'Which Markets Do You Send Signals For?',
      answer:
        'Crypto like Bitcoin and Ethereum, forex pairs like AUD/USD, gold and silver, and major indices.',
    },
    {
      question: 'How Many Signals Will I Get?',
      answer:
        'It depends on market conditions and the markets you choose. The AI only sends a signal when a setup meets its rules, so quiet days may have few or none.',
    },
    {
      question: 'Can I Get Signals Without Auto-Trading?',
      answer:
        'Yes. In Signal mode you receive every signal and decide whether to place the trade yourself.',
    },
    {
      question: 'Are Telegram Trading Signal Groups Safe?',
      answer:
        'Many are not. ASIC has repeatedly warned that scammers use chat app groups to promote fake platforms and pump-and-dump schemes. Always check the provider and its licence first.',
    },
  ],
  cta: {
    title: 'Start Getting AI Trading Signals',
    body: 'Register free in about two minutes, fund your account from AU$250, then pick your markets and start receiving signals on your dashboard.',
  },
}
