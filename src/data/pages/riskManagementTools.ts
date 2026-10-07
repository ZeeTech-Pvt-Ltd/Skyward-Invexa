import type { MarketingPage } from '../pageTypes'

/**
 * Trust page: trading risk management tools.
 *
 * The tools the source flagged for confirmation, the trailing stop, max open
 * trades and the news filter, are left out rather than described as features
 * that may not exist. The example settings table is presented as examples to
 * discuss, per the source note, not as platform presets. The ASIC regulation
 * notes are kept, phrased as rules that apply to retail clients generally,
 * and no broker, licence or client-money claim is made.
 */
export const riskManagementTools: MarketingPage = {
  path: '/risk-management-tools',
  meta: {
    title: 'Trading Risk Management Tools | Skyward Invexa Australia',
    description:
      'See the risk management tools from Skyward Invexa: stop-loss, take-profit, daily loss limits and a one-click kill switch. Trade with AI, on your terms.',
  },
  hero: {
    eyebrow: 'Risk Management',
    heading: 'Skyward Invexa Risk Management Tools: Stay in Control of Every Trade',
    lead: 'Great trading is not about winning every trade. It is about making sure the losing ones stay small. Skyward Invexa gives you simple, powerful trading risk management tools, and the AI follows them on every single trade.',
    bullets: [
      'Stop-loss and take-profit on every trade',
      'Daily loss limits that pause trading automatically',
      'One-click kill switch',
      'Position sizing done for you',
    ],
    cta: 'Start Trading with Built-In Protection',
    visual: 'sparks',
  },
  sections: [
    {
      kind: 'prose',
      heading: 'Why Risk Management Matters',
      body: [
        'ASIC research shows most retail clients lose money trading CFDs. When ASIC brought in stronger protections such as leverage limits and negative balance protection, aggregate retail losses fell by 91% in the first six months. The lesson is simple: good risk controls make a real difference.',
        'That is why trading risk management tools are built into Skyward Invexa from the start, not added as an extra.',
      ],
    },
    {
      kind: 'table',
      heading: 'Your Risk Management Toolkit',
      intro: 'What each tool does, and why it matters.',
      columns: ['Tool', 'What it does', 'Why it helps'],
      rows: [
        [
          'Stop-loss',
          'Closes a trade at a set price if it moves against you',
          'Caps the loss on each trade',
        ],
        [
          'Take-profit',
          'Closes a trade when your target is reached',
          'Locks in gains before they disappear',
        ],
        [
          'Risk per trade',
          'Limits how much of your balance each trade can risk',
          'Stops one bad trade from hurting your account',
        ],
        [
          'Daily loss limit',
          'Pauses trading once losses hit your set amount',
          'Prevents a bad day turning into a bad month',
        ],
        [
          'Leverage control',
          'Lets you choose lower leverage than the maximum',
          'Reduces the size of swings',
        ],
        ['Kill switch', 'Stops all automated trading in one click', 'Full control, any time'],
      ],
    },
    {
      kind: 'table',
      heading: 'How Position Sizing Works',
      intro:
        'Position sizing means deciding how big each trade should be based on how much you are willing to lose. Many traders follow the 1% rule: never risk more than 1% of their balance on a single trade.',
      columns: ['Example', 'Value'],
      rows: [
        ['Account balance', 'AU$1,000'],
        ['Risk per trade (1%)', 'AU$10'],
        ['Distance to stop-loss', '2%'],
        ['Position size', 'AU$500'],
      ],
      note: 'Skyward Invexa does this maths for you. Set your risk per trade, and the AI sizes every position to match.',
    },
    {
      kind: 'callout',
      tone: 'info',
      title: 'Understanding Risk and Reward',
      body: 'Every Skyward Invexa trade has a planned risk, set by the stop-loss, and a planned reward, set by the take-profit. With a 1:2 risk/reward, you aim to make AU$20 for every AU$10 you risk. You do not need to win every trade to stay on track, though results are never guaranteed and costs apply.',
    },
    {
      kind: 'table',
      heading: 'Example Risk Settings to Start From',
      intro:
        'Not sure where to start? Use one of these example settings as a guide, then adjust with your account manager.',
      columns: ['Setting', 'Conservative', 'Balanced', 'Active'],
      rows: [
        ['Risk per trade', '0.5%', '1%', '2%'],
        ['Daily loss limit', '2% of balance', '3% of balance', '5% of balance'],
        ['Leverage', 'Low', 'Medium', 'Higher (within ASIC limits)'],
        ['Mode', 'Signal mode', 'Signal or Automated', 'Automated'],
      ],
    },
    {
      kind: 'bullets',
      heading: 'Protections Built Into Your Account',
      tone: 'check',
      items: [
        'ASIC leverage limits: retail leverage is capped, for example 30:1 on major forex pairs, 20:1 on gold, 5:1 on shares and 2:1 on crypto.',
        'Negative balance protection: under ASIC rules, retail CFD clients cannot lose more than the money in their account.',
        'Full trade log: see why every trade was opened and how it was managed.',
      ],
    },
    {
      kind: 'prose',
      heading: 'Spread Your Risk',
      body: [
        'Do not rely on one market. Crypto, forex, gold and shares often react differently to the same news. Trading a mix, in small sizes, can help smooth out the ups and downs.',
      ],
    },
    {
      kind: 'checklist',
      heading: 'Risk Checklist Before You Switch On Automation',
      items: [
        'Stop-loss is set on every trade.',
        'Risk per trade is 1-2% or less.',
        'A daily loss limit is in place.',
        'Leverage is set to a level you understand.',
        'You know where the kill switch is.',
        'Review your results at least once a week.',
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Risk Disclosure',
      body: 'Trading crypto, forex, shares and CFDs involves high risk and may not suit every investor. Most retail clients lose money trading CFDs. You could lose some or all of your deposit. Past performance does not guarantee future results. Skyward Invexa does not provide financial advice. Please read our Risk Disclosure and Terms before trading.',
    },
    {
      kind: 'links',
      heading: 'Also Explore',
      items: [
        { label: 'Automated Trading', href: '/automated-trading' },
        { label: 'How It Works', href: '/how-it-works' },
        { label: 'AI Trading Signals', href: '/ai-trading-signals' },
        { label: 'Why Invest with Skyward Invexa', href: '/why-invest' },
      ],
    },
  ],
  faqs: [
    {
      question: 'What are the most important trading risk management tools?',
      answer:
        'A stop-loss, a sensible risk per trade and a daily loss limit. Together, they keep single losses small and stop a bad day from snowballing.',
    },
    {
      question: 'Can I lose more than I deposit?',
      answer:
        'No. Retail clients of ASIC-licensed brokers have negative balance protection, so losses cannot go beyond the money in your account.',
    },
    {
      question: 'Does a stop-loss always close at my exact price?',
      answer:
        'Not always. In fast markets or price gaps, a trade can close at a worse price. This is called slippage.',
    },
    {
      question: 'Can I change my risk settings later?',
      answer:
        'Yes. You can update your limits any time from your dashboard, and your account manager can help.',
    },
    {
      question: 'What is the 1% rule in trading?',
      answer:
        'It means never risking more than 1% of your account balance on one trade, so a string of losses does not wipe you out.',
    },
    {
      question: 'Do the tools work with automated trading?',
      answer:
        'Yes. The AI follows your limits on every trade, and trading pauses automatically when your daily loss limit is reached.',
    },
  ],
  cta: {
    title: 'Trade with AI, on Your Terms',
    body: 'Create a free account and your account manager will help you set up your risk limits before your first trade.',
  },
}
