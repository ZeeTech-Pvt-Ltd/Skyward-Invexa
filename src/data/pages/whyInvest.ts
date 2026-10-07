import type { MarketingPage } from '../pageTypes'

/**
 * Why invest with Skyward Invexa.
 *
 * The source copy leaned on naming a broker and its licence for the
 * investor-protection section. Nothing of the sort can be confirmed from the
 * site itself, so that section keeps only the facts that stay true without a
 * licence claim: funds sit with the broker, the ASIC Professional Register is
 * where a licence gets checked, and nobody legitimate asks for passwords or
 * remote access.
 */
export const whyInvest: MarketingPage = {
  path: '/why-invest',
  meta: {
    title: 'Why Invest with Skyward Invexa? 7 AI Trading Benefits',
    description:
      'Why invest with Skyward Invexa? Seven benefits of AI trading for Australians, from 24/7 scanning and emotion-free trades to a low AU$250 start.',
  },
  hero: {
    eyebrow: 'Why Invest',
    heading: 'Why Invest with Skyward Invexa? Smarter Trading, Built for Australians',
    lead: 'Markets never sleep, but you have to. Skyward Invexa gives everyday Australians an AI that watches the markets around the clock, spots opportunities fast and trades inside the limits you choose. Here is why more Australians are moving from guesswork to AI-assisted investing, and what to check before you start.',
    bullets: [
      'Watches crypto, forex, stocks, gold and indices',
      'Rule-based decisions, without fear or FOMO',
      'Start from AU$250',
      'A dedicated account manager on Australian hours',
    ],
    cta: 'Start Free in Two Minutes',
    visual: 'showcase',
  },
  sections: [
    {
      kind: 'prose',
      heading: 'Why Australians Are Turning to AI Trading',
      body: [
        'Investing has changed. A record 33% of Australians now hold cryptocurrency, according to the Independent Reserve Cryptocurrency Index 2026. At the same time, markets move faster than ever, and most people simply do not have hours each day to watch charts.',
        'That is where AI trading comes in. Instead of reacting late or trading on gut feeling, AI tools process large amounts of market data in seconds and turn it into clear, rule-based decisions. The platform does the watching and the maths; you keep control of the limits and the money.',
      ],
    },
    {
      kind: 'cards',
      heading: '7 Reasons to Invest with Skyward Invexa',
      intro: 'The benefits that come up most often, in plain terms.',
      columns: 3,
      items: [
        {
          title: 'Trades Without Emotion',
          body: 'Fear and greed cause many trading mistakes, like panic selling or chasing a hype coin. The platform follows data and your rules, not emotions.',
          icon: 'shield',
        },
        {
          title: 'Watches the Markets 24/7',
          body: 'Crypto trades all day, every day, and forex runs around the clock on weekdays. Scanning continues while you work, sleep or spend time with family.',
          icon: 'clock',
        },
        {
          title: 'Faster Than Manual Trading',
          body: 'Prices, volume, trends and news are analysed in seconds, which helps you act on moves a person might spot too late.',
          icon: 'bolt',
        },
        {
          title: 'Start Small with AU$250',
          body: 'You do not need a large portfolio. A minimum deposit of AU$250 lets you test AI trading with an amount you are comfortable with.',
          icon: 'wallet',
        },
        {
          title: 'Diversify Across Five Markets',
          body: 'Trade crypto, forex, stocks, commodities like gold, and indices like the ASX 200, all from one account. Spreading your trades can reduce reliance on any single market.',
          icon: 'globe',
        },
        {
          title: 'You Stay in Full Control',
          body: 'Set your stop-loss, take-profit and daily limits. Choose Automated or Signal mode, and pause trading any time with one click.',
          icon: 'sliders',
        },
        {
          title: 'Real People, Australian Focus',
          body: 'Every investor gets a dedicated account manager, support on Australian hours and deposits in AUD.',
          icon: 'key',
        },
      ],
    },
    {
      kind: 'table',
      heading: 'Manual Trading vs Investing with Skyward Invexa AI',
      intro: 'The same markets, handled in very different ways.',
      columns: ['', 'Manual trading', 'Skyward Invexa AI'],
      rows: [
        ['Market watching', 'Only when you are free', '24/7, automatically'],
        ['Speed', 'Minutes to hours', 'Seconds'],
        ['Emotion', 'Fear and greed can creep in', 'Rule-based decisions'],
        ['Data analysed', 'A few charts at a time', 'Thousands of data points'],
        ['Time needed', 'Hours each day', 'A few minutes a day'],
        ['Risk limits', 'Easy to ignore', 'Applied to every trade'],
      ],
    },
    {
      kind: 'split',
      heading: 'What Skyward Invexa Can and Cannot Do',
      intro: 'Honest expectations make better investors, so here is the truth in plain terms.',
      left: {
        title: 'What It Can Do',
        items: [
          'Save you hours of research and chart-watching',
          'Help you avoid emotional, impulsive trades',
          'Apply your risk rules to every single trade',
          'Give beginners a simple, guided way to start',
        ],
      },
      right: {
        title: 'What It Cannot Do',
        items: [
          'Guarantee profits. No AI or person can.',
          'Remove market risk. Some trades will lose money.',
          'Replace personal financial advice.',
        ],
      },
    },
    {
      kind: 'bullets',
      heading: 'How Your Money and Your Data Are Handled',
      intro:
        'Skyward Invexa is the platform; the broker executes your trades and holds your funds. That split matters, so check the broker yourself before you deposit.',
      tone: 'check',
      items: [
        'Your funds are held by the broker, not by Skyward Invexa.',
        'Look the broker up on the ASIC Professional Register. It is public and free to search, and it shows whether a firm holds an Australian Financial Services Licence.',
        'If your broker sits under Australian rules for retail clients, leverage limits, negative balance protection and standard margin close-out rules cap what a market move can cost you. If it does not, those protections may not apply.',
        'Your connection and the personal details you send are encrypted with 256-bit SSL.',
        'We will never ask for your password, bank PIN or remote access to your computer. If anyone does, it is not us.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Five Smart Ways to Start Investing with AI',
      intro: 'Five habits that keep a first year of trading calm and affordable.',
      items: [
        {
          title: 'Start with the Minimum',
          body: 'Begin with AU$250 and grow only when you are comfortable.',
        },
        {
          title: 'Always Set a Stop-Loss',
          body: 'Decide how much you are willing to lose before every trade.',
        },
        {
          title: 'Spread Your Trades',
          body: 'Do not put everything into one market or one coin.',
        },
        {
          title: 'Try Signal Mode First',
          body: 'Approve trades yourself while you learn how the platform thinks.',
        },
        {
          title: 'Review Weekly',
          body: 'Check your results and adjust your settings with your account manager.',
        },
      ],
    },
    {
      kind: 'cards',
      heading: 'Who Is Skyward Invexa Best For?',
      columns: 2,
      items: [
        {
          title: 'Beginners',
          body: 'People who want simple, guided trade ideas and a patient walkthrough at setup.',
          icon: 'book',
        },
        {
          title: 'Busy Professionals',
          body: 'Anyone who cannot watch markets all day but wants their limits applied around the clock.',
          icon: 'clock',
        },
        {
          title: 'Crypto Investors',
          body: 'Holders looking for a smarter, 24/7 approach to a market that never closes.',
          icon: 'globe',
        },
        {
          title: 'Experienced Traders',
          body: 'Traders who want faster data, automation and a second set of eyes on their own rules.',
          icon: 'chart',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Trading Carries Risk',
      body: 'Trading crypto, forex and CFDs involves high risk and may not suit every investor. You could lose some or all of your deposit, and past performance does not guarantee future results. Skyward Invexa does not provide personal financial advice. Read the Risk Disclosure and the Terms before you trade.',
    },
    {
      kind: 'links',
      heading: 'Also Explore',
      items: [
        { label: 'Read Our Full Review', href: '/review' },
        { label: 'How Skyward Invexa Works', href: '/how-it-works' },
        { label: 'Risk Management Tools', href: '/risk-management-tools' },
        { label: 'AI Trading for Beginners', href: '/ai-trading-for-beginners' },
      ],
    },
  ],
  faqs: [
    {
      question: 'Why invest with Skyward Invexa instead of trading myself?',
      answer:
        'The platform takes over the watching, so you do not have to. It scans markets 24/7, analyses data in seconds and follows your rules without emotion, which saves time and helps you stay disciplined.',
    },
    {
      question: 'Is AI trading worth it in Australia?',
      answer:
        'For many people it is a useful tool, especially if they are short on time. It is not a shortcut to guaranteed profit, so start small and set clear limits.',
    },
    {
      question: 'Is Skyward Invexa good for beginners?',
      answer:
        'Yes. The dashboard is simple, and every new user gets an account manager to help with setup.',
    },
    {
      question: 'How much should I invest?',
      answer: 'Start with an amount you can afford to lose. The minimum deposit is AU$250.',
    },
    {
      question: 'Can I lose money with Skyward Invexa?',
      answer:
        'Yes. All trading carries risk. Stop-loss settings and negative balance protection help limit losses, but they cannot remove risk.',
    },
    {
      question: 'What markets can I trade?',
      answer:
        'Crypto, forex, stocks, commodities like gold and indices like the ASX 200, all from one account.',
    },
  ],
  cta: {
    title: 'Ready to Invest Smarter?',
    body: 'Register free in about two minutes, fund your account from AU$250, then set your limits and choose your mode. Your account manager will help you through every step.',
  },
}
