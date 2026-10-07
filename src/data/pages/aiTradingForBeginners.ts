import type { MarketingPage } from '../pageTypes'

/**
 * Guide page: AI trading for beginners.
 *
 * The step-by-step bridge between the What Is AI Trading explainer and the
 * sign-up form. Position sizes are shown as plain arithmetic on the reader's
 * own balance, never as a return, and the table carries a note saying so.
 */
export const aiTradingForBeginners: MarketingPage = {
  path: '/ai-trading-for-beginners',
  meta: {
    title: 'AI Trading for Beginners: A 7-Step Guide | Skyward Invexa',
    description:
      'New to AI trading? Learn how to start safely in 7 steps: how much money you need, which markets suit beginners, and the mistakes to avoid.',
  },
  hero: {
    eyebrow: 'Getting Started',
    heading: 'AI Trading for Beginners: Start Safely with Skyward Invexa',
    lead: 'You do not need a finance degree or coding skills to start trading with AI. But you do need a plan. This guide walks you through everything a beginner should know, from your first deposit to your first trade, without the hype.',
    bullets: [
      'Start with as little as AU$250',
      'Set a stop-loss and a daily limit first',
      'Signal mode, so you approve every trade',
      'An account manager to guide the first weeks',
    ],
    cta: 'Start Free: Register in 2 Minutes',
    visual: 'sparks',
  },
  sections: [
    {
      kind: 'prose',
      heading: 'Is AI Trading Good for Beginners?',
      body: [
        'Yes, AI trading can be a good starting point for beginners, because the AI does the heavy research and follows its rules without emotion. The key is to start small, use a stop-loss on every trade, approve trades yourself at first and choose a licensed, transparent platform. AI makes trading easier, but it does not remove risk.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Your 7-Step Roadmap to Start AI Trading',
      intro:
        'Seven steps, in order. The order is what keeps the risk small, so do not skip one because it looks slow.',
      items: [
        {
          title: 'Learn the Basics',
          body: 'Get to know a few key terms first: signal, stop-loss, take-profit and leverage. The What Is AI Trading guide explains them in plain English.',
        },
        {
          title: 'Decide How Much You Can Afford to Lose',
          body: 'Only trade money you could lose without it affecting your bills, savings or lifestyle. On Skyward Invexa, you can start with AU$250.',
        },
        {
          title: 'Choose a Licensed, Transparent Platform',
          body: 'Check that the broker holds an Australian Financial Services Licence (AFSL) on the ASIC Professional Register, and avoid anyone promising guaranteed profits.',
        },
        {
          title: 'Start in Signal Mode',
          body: 'Let the AI suggest trades while you approve each one. You will learn how it thinks before handing over more control.',
        },
        {
          title: 'Set Your Risk Limits',
          body: 'Set a stop-loss on every trade, a daily loss limit and a small risk per trade. The Risk Management Tools page covers the settings.',
        },
        {
          title: 'Pick 1-2 Markets',
          body: 'Focus on markets you understand. Spreading across too many markets too soon makes it harder to learn.',
        },
        {
          title: 'Review Weekly, Then Adjust',
          body: 'Check your results once a week. Talk to your account manager before changing settings or switching to Automated mode.',
        },
      ],
    },
    {
      kind: 'table',
      heading: 'How Much Money Do You Need to Start?',
      intro:
        'You can start with AU$250, and many traders follow the 1-2% rule: never risk more than 1-2% of your balance on a single trade. Here is what that looks like on a small account.',
      columns: ['Account balance', 'Risk per trade at 1%', 'Risk per trade at 2%'],
      rows: [
        ['AU$250', 'AU$2.50', 'AU$5.00'],
        ['AU$500', 'AU$5.00', 'AU$10.00'],
        ['AU$1,000', 'AU$10.00', 'AU$20.00'],
      ],
      note: 'Simple arithmetic on your own balance, not a forecast or a promise of returns. Losses are still possible on every trade.',
    },
    {
      kind: 'callout',
      tone: 'info',
      title: 'How the 1-2% Rule Protects Your Account',
      body: 'Small risk per trade means a few losses in a row will not wipe out your account, giving you time to learn. It also keeps one bad trade from undoing weeks of careful work.',
    },
    {
      kind: 'table',
      heading: 'Which Markets Suit Beginners?',
      intro:
        'Every market has its own personality. These are the five most common starting points, with honest notes on each.',
      columns: ['Market', 'Volatility', 'Hours', 'Beginner notes'],
      rows: [
        ['Major forex (AUD/USD)', 'Lower to medium', '24/5', 'Steady, with lots of learning material'],
        ['Gold (XAU/USD)', 'Medium', 'Around 24/5', 'Popular, reacts to clear news events'],
        ['Indices (ASX 200)', 'Medium', 'Market hours', 'Spreads risk across many companies'],
        ['Shares', 'Medium to high', 'Market hours', 'Watch out for earnings gaps'],
        ['Crypto', 'High', '24/7', 'Big swings, so start very small'],
      ],
    },
    {
      kind: 'links',
      heading: 'Explore Each Market',
      items: [
        { label: 'AI Forex Trading', href: '/ai-forex-trading' },
        { label: 'AI Gold Trading', href: '/ai-gold-trading' },
        { label: 'AI Stock Trading', href: '/ai-stock-trading' },
        { label: 'AI Crypto Trading', href: '/ai-crypto-trading' },
      ],
    },
    {
      kind: 'table',
      heading: 'Your First Week: A Simple Plan',
      intro: 'Nothing here is complicated. It is a week of small, useful steps.',
      columns: ['Day', 'What to do'],
      rows: [
        ['Day 1', 'Register, verify your ID and meet your account manager'],
        ['Day 2', 'Explore the dashboard and choose the markets you want to watch'],
        ['Day 3', 'Deposit, then set your stop-loss, daily limit and risk per trade'],
        ['Day 4', 'Turn on Signal mode for 1-2 markets'],
        ['Day 5', 'Approve your first small trade and watch how it is managed'],
        ['Day 6-7', 'Review every trade: why it opened, how it closed and what you learned'],
      ],
    },
    {
      kind: 'bullets',
      heading: '7 Beginner Mistakes to Avoid',
      intro: 'None of these are exotic. They catch almost every beginner at some point.',
      tone: 'cross',
      items: [
        'Trading money you cannot afford to lose.',
        'Skipping the stop-loss "just this once".',
        'Using high leverage before you understand it.',
        'Chasing losses by trading bigger to win them back.',
        'Switching on full automation on day one.',
        'Checking every five minutes and reacting emotionally.',
        'Trusting "signal groups" or "AI bots" that promise guaranteed profits. ASIC has warned about these repeatedly.',
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Set Realistic Expectations',
      body: 'Trading is risky, and ASIC research shows most retail clients lose money trading CFDs. AI can help you stay disciplined and save time, but it cannot promise profits. Treat your first months as learning time: success early on means following your plan and protecting your balance, not making big gains.',
    },
    {
      kind: 'checklist',
      heading: 'Beginner Checklist Before Your First Trade',
      intro: 'If you cannot tick every line, you are not ready yet. That is fine. Fix the gaps first.',
      items: [
        'I am only using money I can afford to lose',
        'I have checked that my broker holds an ASIC licence (AFSL)',
        'I have a stop-loss set',
        'I am risking 1-2% or less per trade',
        'I have set a daily loss limit',
        'I know how to pause trading',
      ],
    },
    {
      kind: 'links',
      heading: 'Also Explore',
      items: [
        { label: 'What Is AI Trading?', href: '/what-is-ai-trading' },
        { label: 'Risk Management Tools', href: '/risk-management-tools' },
        { label: 'Automated Trading', href: '/automated-trading' },
        { label: 'AI Trading Signals', href: '/ai-trading-signals' },
      ],
    },
  ],
  faqs: [
    {
      question: 'Can a Complete Beginner Use AI Trading?',
      answer:
        'Yes. AI trading works best on platforms built for new traders, with guided setup, Signal mode and a dedicated account manager.',
    },
    {
      question: 'What Is the Best AI Trading Platform for Beginners in Australia?',
      answer:
        'Look for a broker with the right ASIC licence, a low minimum deposit, simple risk controls, real human support and marketing that promises nothing.',
    },
    {
      question: 'How Much Should a Beginner Invest?',
      answer: 'Only what you can afford to lose. Many beginners start with the AU$250 minimum and grow slowly.',
    },
    {
      question: 'How Long Does It Take to Learn?',
      answer:
        'Most people understand the basics in a few weeks, but building good habits takes months. Review your trades weekly.',
    },
    {
      question: 'Should Beginners Use Automated Trading?',
      answer:
        'Start with Signal mode so you learn how the AI works, then consider Automated mode once you are comfortable with your settings.',
    },
    {
      question: 'What Is the 1-2% Rule?',
      answer:
        'It means never risking more than 1-2% of your balance on one trade. At a balance of AU$250, that is AU$2.50 to AU$5.00 per trade.',
    },
  ],
  cta: {
    title: 'Start Your AI Trading Journey Today',
    body: 'Create your free account in about two minutes. Your account manager will help you set safe limits and place your first trade with confidence.',
  },
}
