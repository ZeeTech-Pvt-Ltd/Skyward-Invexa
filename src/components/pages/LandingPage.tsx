import type { ReactNode } from 'react'
import type { Block, MarketingPage, VisualKey } from '@/data/pageTypes'
import { usePageMeta } from '@/lib/usePageMeta'
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
import { MarketMiniPanel, SparkPanel } from '@/components/charts/PageVisuals'

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
}

/* ------------------------------------------------------------------ */
/* Blocks                                                              */
/* ------------------------------------------------------------------ */

function BlockBody({ block }: { block: Block }) {
  switch (block.kind) {
    case 'prose':
      return (
        <>
          <SectionHeading title={block.heading} />
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
          <SectionHeading title={block.heading} lead={block.intro} />
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

    case 'steps':
      return (
        <>
          <SectionHeading title={block.heading} lead={block.intro} />
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {block.items.map((item, index) => (
              <li key={item.title}>
                <Card className="h-full">
                  <span className="font-mono text-xs font-semibold text-brand-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold text-heading">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{item.body}</p>
                </Card>
              </li>
            ))}
          </ol>
        </>
      )

    case 'cards':
      return (
        <>
          <SectionHeading title={block.heading} lead={block.intro} />
          <ul
            className={cn(
              'mt-10 grid gap-5',
              (block.columns ?? 3) === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3',
            )}
          >
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

    case 'table':
      return (
        <>
          <SectionHeading title={block.heading} lead={block.intro} />
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
      const sides = [
        { ...block.left, tone: 'mint' as const },
        { ...block.right, tone: 'warn' as const },
      ]
      return (
        <>
          <SectionHeading title={block.heading} lead={block.intro} />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {sides.map((side) => (
              <div key={side.title} className="hairline rounded-card bg-ink-850 p-6">
                <h3
                  className={cn(
                    'font-display text-base font-semibold',
                    side.tone === 'mint' ? 'text-brand-700' : 'text-warn-600',
                  )}
                >
                  {side.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {side.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-300">
                      <Icon
                        name={side.tone === 'mint' ? 'check' : 'close'}
                        className={cn(
                          'mt-0.5 size-4 shrink-0',
                          side.tone === 'mint' ? 'text-mint-600' : 'text-warn-600',
                        )}
                      />
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

    case 'glossary':
      return (
        <>
          <SectionHeading title={block.heading} />
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
          <SectionHeading title={block.heading} lead={block.intro} />
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
  usePageMeta({
    title: page.meta.title,
    description: page.meta.description,
    path: page.path,
  })

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

        <div className="mt-9">
          <Button href="#register" variant="light" size="lg">
            {page.hero.cta ?? 'Create My Free Account'}
          </Button>
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
