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

/** Every block carries a small label above its heading, for hierarchy. */
type BlockBase = {
  eyebrow?: string
}

/**
 * `positive` ticks the items in brand green, `negative` crosses them in rust,
 * and `neutral` leaves them unmarked for a plain list of facts.
 */
export type SplitTone = 'positive' | 'negative' | 'neutral'

export type Block = BlockBase &
  (
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
    /** A grid of titled cards, used for benefits, features and values. */
    | {
        kind: 'cards'
        heading: string
        intro?: string
        items: { title: string; body: string; icon?: IconName }[]
        /** Overrides the automatic count, which fills the row for 3, 4 or 6. */
        columns?: 2 | 3 | 4
      }
    /** A row of large figures, each with the source that published it. */
    | {
        kind: 'stats'
        heading: string
        intro?: string
        items: { value: string; label: string; source?: string }[]
      }
    /**
     * A visual beside a run of copy. The single most useful block for breaking
     * a page that would otherwise be a column of text, so it is worth reaching
     * for early. `side` decides which column the panel takes.
     */
    | {
        kind: 'media'
        heading: string
        intro?: string
        body?: string[]
        points?: string[]
        visual: VisualKey
        side?: 'left' | 'right'
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
    /**
     * Two lists side by side. Defaults to pros against cons, so the left column
     * ticks and the right column crosses. Set `tone` when both columns are
     * legitimate options and one is simply not the other.
     */
    | {
        kind: 'split'
        heading: string
        intro?: string
        left: { title: string; items: string[]; tone?: SplitTone }
        right: { title: string; items: string[]; tone?: SplitTone }
      }
    /** A single highlighted note. */
    | { kind: 'callout'; tone: 'warn' | 'info' | 'neutral'; title: string; body: string }
    /** A term-and-meaning list. */
    | { kind: 'glossary'; heading: string; items: { term: string; meaning: string }[] }
    /** A list of things to check before acting. */
    | { kind: 'checklist'; heading: string; intro?: string; items: string[] }
    /** Short inline links to the pages this one sits beside. */
    | { kind: 'links'; heading?: string; items: { label: string; href: string }[] }
  )

/** Which panel a hero or a `media` block renders. See the registry in LandingPage. */
export type VisualKey =
  | 'terminal'
  | 'showcase'
  | 'support'
  | 'questions'
  | 'candlesLight'
  | 'candlesDark'
  | 'sparks'
  | 'markets'
  | 'forexSessions'
  | 'forexPairs'
  | 'forexTerminal'
  | 'riskStack'
  | 'modes'

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
    /** Optional quieter second button, for readers who want the detail first. */
    secondaryCta?: { label: string; href: string }
    visual: VisualKey
  }
  sections: Block[]
  faqs: PageFaq[]
  cta: { title: string; body: string }
  /** Shown under the closing CTA. Defaults to true. */
  showForm?: boolean
}
