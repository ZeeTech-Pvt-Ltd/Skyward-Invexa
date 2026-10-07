/**
 * The shape every marketing page in `src/data/pages/` is written in.
 *
 * These are long SEO landing pages that all share one skeleton: a navy hero
 * with a panel beside it, a run of content blocks, a closing call to action
 * with the registration form, and a FAQ. Writing that skeleton once - in
 * `components/pages/LandingPage.tsx` - means a page is a data file, and no two
 * pages can drift apart in spacing, heading level or schema.
 *
 * House rules that apply to every string in here:
 *
 * 1. Headings are Title Case. Body copy is sentence case.
 * 2. Plain hyphens, never em dashes.
 * 3. No invented figures, no bracketed `[PLACEHOLDER]` tokens, no licensing
 *    claims about the platform or its broker. A detail that cannot be
 *    confirmed is left out entirely rather than left vague.
 * 4. Any third-party number keeps the source that published it, inline.
 */

import type { IconName } from './content'

export type Block =
  /** Plain paragraphs. The default block. */
  | { kind: 'prose'; heading: string; body: string[] }
  /** A list of points. `tone: 'cross'` renders them as cautions, not ticks. */
  | {
      kind: 'bullets'
      heading: string
      intro?: string
      items: string[]
      tone?: 'check' | 'cross' | 'plain'
    }
  /** A numbered process. */
  | { kind: 'steps'; heading: string; intro?: string; items: { title: string; body: string }[] }
  /** A grid of titled cards, used for benefits, values and audiences. */
  | {
      kind: 'cards'
      heading: string
      intro?: string
      items: { title: string; body: string; icon?: IconName }[]
      columns?: 2 | 3
    }
  /** A data table. Renders as a panel, and as cards below `sm`. */
  | {
      kind: 'table'
      heading: string
      intro?: string
      columns: string[]
      rows: string[][]
      note?: string
    }
  /** Two opposed lists side by side: pros and cons, can and cannot. */
  | {
      kind: 'split'
      heading: string
      intro?: string
      left: { title: string; items: string[] }
      right: { title: string; items: string[] }
    }
  /** A single highlighted note. */
  | { kind: 'callout'; tone: 'warn' | 'info' | 'neutral'; title: string; body: string }
  /** A term-and-meaning list. */
  | { kind: 'glossary'; heading: string; items: { term: string; meaning: string }[] }
  /** A list of things to check before acting. */
  | { kind: 'checklist'; heading: string; intro?: string; items: string[] }
  /** Short inline links to the pages this one sits beside. */
  | { kind: 'links'; heading?: string; items: { label: string; href: string }[] }

/** Which panel sits beside the hero copy. See the registry in LandingPage. */
export type VisualKey =
  | 'terminal'
  | 'showcase'
  | 'support'
  | 'questions'
  | 'candlesLight'
  | 'candlesDark'
  | 'sparks'
  | 'markets'

export type PageFaq = { question: string; answer: string }

export type MarketingPage = {
  /** Route path, e.g. `/ai-forex-trading`. */
  path: string
  meta: {
    /** Without the brand suffix - usePageMeta appends it. */
    title: string
    description: string
  }
  hero: {
    eyebrow: string
    /** Must contain "Skyward Invexa" - a deliberate site-wide SEO constraint. */
    heading: string
    lead: string
    bullets: string[]
    /** Label for the hero button. Defaults to the standard sign-up label. */
    cta?: string
    visual: VisualKey
  }
  sections: Block[]
  faqs: PageFaq[]
  cta: { title: string; body: string }
  /** Shown under the closing CTA. Defaults to true. */
  showForm?: boolean
}
