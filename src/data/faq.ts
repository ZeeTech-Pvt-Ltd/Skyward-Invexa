import type { AccordionEntry } from '@/components/ui/Accordion'
import { site } from './site'

/**
 * The full FAQ, grouped the way a visitor arrives at it: before signing up,
 * while setting up, while funding, while trading, and when something worries
 * them.
 *
 * Every answer leads with a direct sentence, because these are the answers an
 * AI assistant is most likely to quote back at someone.
 *
 * Details that could not be confirmed are left out rather than filled with a
 * plausible-sounding value. That is why there is no demo account question, no
 * withdrawal fee question, no reply-time promise and no phone number here.
 */

export const faqGroups: AccordionEntry[] = [
  {
    group: 'Getting Started',
    question: 'What Is Skyward Invexa?',
    answer:
      'Skyward Invexa is a browser-based AI trading platform for Australians. It scans crypto, forex, stock, gold and index markets around the clock and turns the data into trade signals, which you can approve yourself or let run automatically inside the limits you set.',
  },
  {
    group: 'Getting Started',
    question: 'Who Can Join Skyward Invexa?',
    answer:
      'Anyone aged 18 or over who lives in Australia can apply. You will need a valid photo ID and proof of address to finish verification.',
  },
  {
    group: 'Getting Started',
    question: 'How Do I Sign Up?',
    answer:
      'Fill in the short form on our homepage with your name, email and phone number. It takes about two minutes, and an account manager will call you to help with the next steps.',
  },
  {
    group: 'Getting Started',
    question: 'Do I Need Trading Experience?',
    answer:
      'No. The platform is designed for beginners. Signal mode lets you approve every trade while you learn, and your account manager can walk you through the dashboard.',
  },
  {
    group: 'Getting Started',
    question: 'Is There a Skyward Invexa App?',
    answer:
      'No. There is no app to download. Skyward Invexa runs in any web browser on your phone, tablet or computer. Any app using our name in an app store is not ours.',
  },

  {
    group: 'Account and Verification',
    question: 'How Do I Log In?',
    answer:
      'Use the email address and password you set up when you registered. Always check the web address in your browser before you enter your details.',
  },
  {
    group: 'Account and Verification',
    question: 'What Documents Do I Need to Verify My Account?',
    answer:
      'A photo ID such as a driver licence or passport, and a proof of address dated within the last three months, such as a utility bill or bank statement.',
  },
  {
    group: 'Account and Verification',
    question: 'Why Do I Need to Verify My Identity?',
    answer:
      'Australian anti-money-laundering rules require it. Verification protects your account from fraud and stops criminals from misusing the platform.',
  },
  {
    group: 'Account and Verification',
    question: 'How Long Does Verification Take?',
    answer:
      'It varies with the documents supplied. Your account manager will keep you updated while yours is being processed.',
  },
  {
    group: 'Account and Verification',
    question: 'Can I Have More Than One Account?',
    answer:
      'No. Each person can hold one account. That keeps every account secure and the records accurate.',
  },
  {
    group: 'Account and Verification',
    question: 'How Do I Close My Account?',
    answer:
      'Contact your account manager. We will help you withdraw any remaining balance before the account is closed.',
  },

  {
    group: 'Deposits and Withdrawals',
    question: 'What Is the Minimum Deposit?',
    answer:
      'The minimum deposit is AU$250. You can start with that amount and add more later only if you choose to.',
  },
  {
    group: 'Deposits and Withdrawals',
    question: 'How Can I Deposit Money?',
    answer:
      'All deposits are made in Australian dollars. Your account manager will confirm the methods available for your account before you fund it.',
  },
  {
    group: 'Deposits and Withdrawals',
    question: 'Who Holds My Money?',
    answer:
      'Your funds are held by the broker, in your own trading account. Skyward Invexa does not hold client money.',
  },
  {
    group: 'Deposits and Withdrawals',
    question: 'How Do I Make a Withdrawal?',
    answer:
      'Open your dashboard and request a withdrawal. Funds are paid back to the same method you used to deposit.',
  },
  {
    group: 'Deposits and Withdrawals',
    question: 'How Long Do Withdrawals Take?',
    answer:
      'Withdrawal requests are processed from your dashboard. Your bank may take a little longer to show the funds in your account.',
  },

  {
    group: 'AI and Trading',
    question: 'How Does the AI Decide When to Trade?',
    answer:
      'It studies live prices, chart patterns, economic data and news. When it finds a setup that fits your risk settings, it creates a signal.',
  },
  {
    group: 'AI and Trading',
    question: 'What Is the Difference Between Automated and Signal Mode?',
    answer:
      'In Automated mode the AI places trades for you inside your limits. In Signal mode you receive the trade idea and decide whether to place it. You can switch at any time.',
  },
  {
    group: 'AI and Trading',
    question: 'What Can I Trade?',
    answer:
      'Crypto such as Bitcoin and Ethereum, forex pairs such as AUD/USD, stocks, gold and silver, and indices such as the ASX 200.',
  },
  {
    group: 'AI and Trading',
    question: 'Can I Set My Own Risk Limits?',
    answer:
      'Yes. You choose your stop-loss, your take-profit, your daily limit and which markets the AI is allowed to trade.',
  },
  {
    group: 'AI and Trading',
    question: 'Can I Stop the AI at Any Time?',
    answer:
      'Yes. One click pauses all automated trading. Open trades stay visible on your dashboard so you can manage them yourself.',
  },
  {
    group: 'AI and Trading',
    question: 'Does Skyward Invexa Guarantee Profits?',
    answer:
      'No. No platform can honestly guarantee profits. AI helps with speed and discipline, but some trades will lose money.',
  },
  {
    group: 'AI and Trading',
    question: 'What Leverage Is Used?',
    answer:
      'Leverage depends on the asset and follows the ASIC limits for retail clients, for example up to 30:1 on major currency pairs and 2:1 on crypto. Lower leverage means lower risk.',
  },

  {
    group: 'Safety and Regulation',
    question: 'Is Skyward Invexa Legit or a Scam?',
    answer:
      'Skyward Invexa is a technology platform. Funds are held and trades are placed by the broker, not by us, and we never promise guaranteed returns. Check the broker’s licence on the ASIC Professional Register before you deposit.',
  },
  {
    group: 'Safety and Regulation',
    question: 'Is Skyward Invexa Regulated?',
    answer:
      'Skyward Invexa is a technology platform, not a broker. Trades are placed and funds are held by the broker. We encourage you to verify the broker’s licence yourself on the ASIC Professional Register.',
  },
  {
    group: 'Safety and Regulation',
    question: 'How Is My Data Protected?',
    answer:
      'Data is protected with 256-bit SSL encryption, and your documents are stored securely. Our Privacy Policy sets out what we collect and how it is handled.',
  },
  {
    group: 'Safety and Regulation',
    question: 'How Can I Spot a Fake Website or Caller?',
    answer: `Only use ${site.domain}. We will never ask for your passwords, your bank PIN or remote access to your computer, and we never ask for payment in gift cards or crypto to a personal wallet.`,
  },
  {
    group: 'Safety and Regulation',
    question: 'Someone Contacted Me Claiming to Be From Skyward Invexa. What Should I Do?',
    answer:
      'If you are unsure, end the contact and reach us through the details published on this site. If you think it was a scam, report it to Scamwatch at scamwatch.gov.au.',
  },

  {
    group: 'Fees and Tax',
    question: 'Does It Cost Anything to Join?',
    answer:
      'No. Registration is free. Trading costs, such as spreads, are charged by the broker on each trade.',
  },
  {
    group: 'Fees and Tax',
    question: 'What Trading Fees Will I Pay?',
    answer:
      'Trading costs are charged by the broker and are shown in your dashboard before you place a trade. Nothing is charged for holding an account.',
  },
  {
    group: 'Fees and Tax',
    question: 'Do I Pay Tax on My Trading Profits?',
    answer:
      'Generally, yes. Profits may be taxed as capital gains or as income depending on your situation. You can download your trade history to share with a registered tax agent.',
  },

  {
    group: 'Support',
    question: 'How Do I Contact Skyward Invexa?',
    answer: `Email ${site.emails.support}, or use the form on our Contact page.`,
  },
  {
    group: 'Support',
    question: 'What Are Your Support Hours?',
    answer: `Our team is available ${site.supportHours}.`,
  },
  {
    group: 'Support',
    question: 'What Does My Account Manager Do?',
    answer:
      'Your account manager helps you set up, explains the dashboard, answers questions and reviews your settings with you. They will never pressure you to deposit more.',
  },
]

/** The group labels in the order they first appear, for the jump links. */
export const faqGroupNames = faqGroups.reduce<string[]>((names, entry) => {
  if (entry.group && !names.includes(entry.group)) names.push(entry.group)
  return names
}, [])
