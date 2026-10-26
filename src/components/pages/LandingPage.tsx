import type { ReactNode } from 'react'
import type { Block, MarketingPage, VisualKey } from '@/data/pageTypes'
import { cn } from '@/lib/cn'
import { Callout } from '@/components/ui/Callout'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TBody, TD, TH, THead, TR, Table } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'
import { DarkPageHero } from '@/components/sections/DarkPageHero'
import { FaqSection } from '@/components/sections/FaqSection'
import { CtaBand } from '@/components/sections/CtaBand'
import { EnquiryForm } from '@/components/forms/EnquiryForm'
import { JsonLd } from '@/components/seo/JsonLd'
import { CandlestickChart } from '@/components/charts/CandlestickChart'
import { HeroShowcase } from '@/components/charts/HeroShowcase'
import { SupportHoursPanel } from '@/components/charts/SupportHoursPanel'
import { QuestionIndexPanel } from '@/components/charts/QuestionIndexPanel'
import { TerminalDark } from '@/components/charts/TerminalDark'
import {
  ForexSessionsPanel,
  MarketMiniPanel,
  ModesPanel,
  PairPanel,
  RiskStackPanel,
  SparkPanel,
} from '@/components/charts/PageVisuals'

/* ------------------------------------------------------------------ */
/* Hero visuals                                                        */
/* ------------------------------------------------------------------ */

/**
 * One panel per page, chosen by name in the page's data file. Keeping the
 * registry here means a data file never imports a component, so the pages stay
 * plain data and cannot drift in how a visual is framed.
 */
const VISUALS: Record<VisualKey, ReactNode> = {
  terminal: <TerminalDark />,
  showcase: <HeroShowcase />,
  support: <SupportHoursPanel />,
  questions: <QuestionIndexPanel />,
  candlesLight: (
    <div className="rounded-2xl border border-hero-border bg-hero-surface p-3">
      <CandlestickChart seed={42} count={44} start={84283} surface="dark" />
    </div>
  ),
  candlesDark: <TerminalDark seed={31} symbol="XAU / AUD" />,
  sparks: (
    <SparkPanel
      title="Scanning"
      items={[
        { label: 'Crypto', seed: 11, value: '24 hours' },
        { label: 'Forex', seed: 23, value: '24 / 5' },
        { label: 'Gold', seed: 52, value: '24 / 5' },
      ]}
      footnote="Shapes are illustrative, generated for layout, not live prices."
    />
  ),
  markets: <MarketMiniPanel />,
  forexSessions: <ForexSessionsPanel />,
  forexPairs: <PairPanel />,
  /* A forex-priced terminal. The default symbol is a Bitcoin pair, which reads
     as the wrong market on a currency page. */
  forexTerminal: <TerminalDark seed={44} symbol="AUD / USD" price="0.6584" start={0.6584} />,
  riskStack: <RiskStackPanel />,
  modes: <ModesPanel />,
}

/* ------------------------------------------------------------------ */
/* Blocks                                                              */
/* ------------------------------------------------------------------ */

function BlockBody({ block }: { block: Block }) {
  switch (block.kind) {
    case 'prose':
      return (
        <>
          <SectionHeading eyebrow={block.eyebrow} title={block.heading} />
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-ink-300">
            {block.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </>
      )

    case 'bullets': {
      const tone = block.tone ?? 'check'
      const glyph = tone === 'cross' ? 'close' : tone === 'check' ? 'check' : null
      const colour = tone === 'cross' ? 'text-warn-600' : 'text-mint-600'
      return (
        <>
          <SectionHeading eyebrow={block.eyebrow} title={block.heading} lead={block.intro} />
          <ul className="mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">
            {block.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-300">
                {glyph ? (
                  <Icon name={glyph} className={cn('mt-0.5 size-4 shrink-0', colour)} />
                ) : (
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-ink-500" />
                )}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      )
    }

    case 'steps': {
      /**
       * A connected process rail rather than a card grid. Five steps in a
       * three-column grid leaves the second row half empty, and the page
       * already runs card grids either side of this, so a rail keeps the
       * sequence readable and the rhythm varied.
       *
       * The connector is decorative, so it is hidden from assistive tech and
       * disappears when the steps stack below `lg`.
       */
      const count = block.items.length
      const railClass =
        count === 4 ? 'lg:grid-cols-4' : count === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-5'

      return (
        <>
          <SectionHeading eyebrow={block.eyebrow} title={block.heading} lead={block.intro} />
          <ol className={cn('relative mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2', railClass)}>
            <span
              aria-hidden="true"
              className="absolute top-4.5 right-0 left-0 hidden h-px bg-ink-700 lg:block"
            />
            {block.items.map((item, index) => (
              <li key={item.title} className="relative">
                <span className="relative z-10 flex size-9 items-center justify-center rounded-full border border-brand-500/30 bg-brand-100 font-mono text-xs font-semibold text-brand-700">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {/* Two lines reserved: a rail this narrow wraps most titles,
                    and without it the copy below starts at a different height
                    in every column. */}
                <h3 className="mt-5 min-h-[2.75rem] font-display text-base leading-snug font-semibold text-heading">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-300">{item.body}</p>
              </li>
            ))}
          </ol>
        </>
      )
    }

    case 'cards': {
      // Four cards in a three-column grid leaves the fourth alone on a row with
      // two empty cells, so the count follows the content unless it is set.
      const count =
        block.columns ?? (block.items.length === 2 ? 2 : block.items.length % 4 === 0 ? 4 : 3)
      const gridClass = {
        2: 'sm:grid-cols-2',
        3: 'sm:grid-cols-2 lg:grid-cols-3',
        4: 'sm:grid-cols-2 lg:grid-cols-4',
      }[count]

      return (
        <>
          <SectionHeading eyebrow={block.eyebrow} title={block.heading} lead={block.intro} />
          <ul className={cn('mt-10 grid gap-5', gridClass)}>
            {block.items.map((item) => (
              <li key={item.title}>
                <Card className="h-full">
                  <span className="flex size-10 items-center justify-center rounded-xl border border-brand-500/25 bg-brand-100">
                    <Icon name={item.icon ?? 'check'} className="size-5 text-brand-700" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-heading">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{item.body}</p>
                </Card>
              </li>
            ))}
          </ul>
        </>
      )
    }

    case 'table':
      return (
        <>
          <SectionHeading eyebrow={block.eyebrow} title={block.heading} lead={block.intro} />
          {/* A data panel, not decoration: every row is the site's own content. */}
          <div className="mt-8">
            <Table caption={block.heading}>
              <THead>
                {block.columns.map((column) => (
                  <TH key={column}>{column}</TH>
                ))}
              </THead>
              <TBody>
                {block.rows.map((row) => (
                  <TR key={row.join('|')}>
                    {row.map((cell, cellIndex) => (
                      <TD
                        key={`${cell}-${cellIndex}`}
                        label={block.columns[cellIndex]}
                        className={cellIndex === 0 ? 'font-medium text-heading' : undefined}
                      >
                        {cell}
                      </TD>
                    ))}
                  </TR>
                ))}
              </TBody>
            </Table>
          </div>
          {block.note ? (
            <p className="mt-4 max-w-3xl text-xs leading-relaxed text-ink-400">{block.note}</p>
          ) : null}
        </>
      )

    case 'split': {
      // Pros against cons unless the page says otherwise.
      const sides = [
        { ...block.left, tone: block.left.tone ?? 'positive' },
        { ...block.right, tone: block.right.tone ?? 'negative' },
      ]
      const glyph = { positive: 'check', negative: 'close', neutral: 'check' } as const
      const colour = {
        positive: 'text-mint-600',
        negative: 'text-warn-600',
        neutral: 'text-ink-400',
      } as const

      return (
        <>
          <SectionHeading eyebrow={block.eyebrow} title={block.heading} lead={block.intro} />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {sides.map((side) => (
              <div key={side.title} className="hairline rounded-card bg-ink-850 p-6">
                <h3
                  className={cn(
                    'font-display text-base font-semibold',
                    side.tone === 'negative' ? 'text-warn-600' : 'text-brand-700',
                  )}
                >
                  {side.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {side.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-300">
                      {side.tone === 'neutral' ? (
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-ink-500"
                        />
                      ) : (
                        <Icon
                          name={glyph[side.tone]}
                          className={cn('mt-0.5 size-4 shrink-0', colour[side.tone])}
                        />
                      )}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      )
    }

    case 'callout':
      return (
        <Callout tone={block.tone} title={block.title} className="max-w-4xl">
          {block.body}
        </Callout>
      )

    case 'stats':
      return (
        <>
          <SectionHeading eyebrow={block.eyebrow} title={block.heading} lead={block.intro} />
          <dl className="mt-10 grid gap-px overflow-hidden rounded-card border border-ink-700 bg-ink-700 sm:grid-cols-3">
            {block.items.map((item) => (
              <div key={item.label} className="bg-ink-850 p-6">
                <dd className="font-display text-3xl leading-none font-semibold text-brand-700 sm:text-4xl">
                  {item.value}
                </dd>
                <dt className="mt-3 text-sm leading-relaxed text-ink-300">{item.label}</dt>
                {item.source ? (
                  <p className="mt-2 text-xs text-ink-400">{item.source}</p>
                ) : null}
              </div>
            ))}
          </dl>
        </>
      )

    case 'media': {
      const visual = VISUALS[block.visual]
      const text = (
        <div className="min-w-0">
          <SectionHeading eyebrow={block.eyebrow} title={block.heading} lead={block.intro} />
          {block.body ? (
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-300">
              {block.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}
          {block.points?.length ? (
            <ul className="mt-7 space-y-4">
              {block.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-ink-300">
                  <Icon name="check" className="mt-0.5 size-4 shrink-0 text-mint-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      )

      return (
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {block.side === 'left' ? (
            <>
              <div className="min-w-0">{visual}</div>
              {text}
            </>
          ) : (
            <>
              {text}
              <div className="min-w-0">{visual}</div>
            </>
          )}
        </div>
      )
    }

    case 'glossary':
      return (
        <>
          <SectionHeading eyebrow={block.eyebrow} title={block.heading} />
          <dl className="mt-8 grid gap-x-10 gap-y-5 border-t border-ink-700 pt-8 sm:grid-cols-2">
            {block.items.map((item) => (
              <div key={item.term}>
                <dt className="font-display text-sm font-semibold text-heading">{item.term}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink-300">{item.meaning}</dd>
              </div>
            ))}
          </dl>
        </>
      )

    case 'checklist':
      return (
        <>
          <SectionHeading eyebrow={block.eyebrow} title={block.heading} lead={block.intro} />
          <ul className="mt-8 grid max-w-3xl gap-3 border-l-2 border-brand-500 pl-6">
            {block.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-300">
                <Icon name="check" className="mt-0.5 size-4 shrink-0 text-mint-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      )

    case 'links':
      return (
        <div className="flex flex-wrap items-center gap-3">
          {block.heading ? (
            <span className="font-display text-xs font-semibold tracking-[0.16em] text-ink-400 uppercase">
              {block.heading}
            </span>
          ) : null}
          {block.items.map((item) => (
            <Button key={item.href} to={item.href} variant="secondary" size="sm">
              {item.label}
            </Button>
          ))}
        </div>
      )

    default:
      return null
  }
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

/**
 * The one template every marketing page is rendered from. A page supplies data;
 * this supplies the hero, the band rhythm, the FAQ schema, the registration
 * form and the closing call to action, so no two pages can disagree about any
 * of them.
 */
export function LandingPage({ page }: { page: MarketingPage }) {
  const showForm = page.showForm ?? true

  return (
    <>
      <JsonLd
        id={`${page.path.replace(/\W+/g, '-')}-faq`}
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: page.faqs.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />

      <DarkPageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.heading}
        lead={page.hero.lead}
        aside={VISUALS[page.hero.visual]}
      >
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {page.hero.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2.5 text-sm text-hero-muted">
              <Icon name="check" className="mt-0.5 size-4 shrink-0 text-brand-300" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Button href="#register" variant="light" size="lg">
            {page.hero.cta ?? 'Create My Free Account'}
          </Button>
          {page.hero.secondaryCta ? (
            <Button to={page.hero.secondaryCta.href} variant="outlineLight" size="lg">
              {page.hero.secondaryCta.label}
            </Button>
          ) : null}
        </div>
      </DarkPageHero>

      {page.sections.map((block, index) => (
        <Section
          key={`${block.kind}-${index}`}
          divided={index > 0}
          tone={index % 2 === 1 ? 'raised' : 'base'}
        >
          <Container>
            <BlockBody block={block} />
          </Container>
        </Section>
      ))}

      {showForm ? (
        <Section id="register" divided tone="raised" className="scroll-mt-24">
          <Container>
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
              <div>
                <SectionHeading title={page.cta.title} lead={page.cta.body} />
              </div>
              <div className="hairline elevate rounded-card bg-ink-850 p-6 sm:p-8">
                <EnquiryForm />
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      <Section divided={showForm} tone={showForm ? 'base' : 'base'}>
        <Container>
          <SectionHeading
            eyebrow="Questions"
            title="Frequently Asked Questions"
            lead="The questions this page raises most often, answered without marketing language."
          />
          <div className="mt-12">
            <FaqSection items={page.faqs} idPrefix="faq" />
          </div>
        </Container>
      </Section>

      <CtaBand title={page.cta.title} body={page.cta.body} />
    </>
  )
}
