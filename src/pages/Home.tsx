import { coverage, faqs, features, whatIs } from '@/data/content'
import { usePageMeta } from '@/lib/usePageMeta'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Audiences } from '@/components/sections/Audiences'
import { CtaBand } from '@/components/sections/CtaBand'
import { FaqSection } from '@/components/sections/FaqSection'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import { Hero } from '@/components/sections/Hero'
import { HomeSignUp } from '@/components/sections/HomeSignUp'
import { MarketTicker } from '@/components/sections/MarketTicker'
import { MarketList } from '@/components/sections/MarketList'
import { ModesSection } from '@/components/sections/ModesSection'
import { SecuritySection } from '@/components/sections/SecuritySection'
import { StepsSection } from '@/components/sections/StepsSection'
import { TrustBar } from '@/components/sections/TrustBar'
import { TerminalDark } from '@/components/charts/TerminalDark'

/**
 * Section order:
 *
 *   Hero, Ticker, Trust strip, What it is, How it works, Why choose us,
 *   Coverage, Modes, Security, Audiences, Register, FAQ, CTA.
 *
 * Two deliberate departures from the house brief:
 *
 * 1. The brief puts a risk band between the last section and the form. That
 *    band was removed by request. The risk wording now sits inside the form
 *    itself, just above the submit button, so a reader still meets the downside
 *    before handing over a phone number, and the footer carries the full
 *    warning on every page.
 * 2. The brief puts the FAQ teaser before the form. The page runs it after.
 *
 * Every section still carries a visual, so nothing reads as filler between two
 * panels.
 */
export default function Home() {
  usePageMeta({
    title: 'Skyward Invexa | AI Trading Platform for Australians',
    description:
      'Skyward Invexa is an AI trading platform built for Australians. It scans markets 24/7, shows trade signals and runs in your browser, with no app needed.',
    path: '/',
  })

  return (
    <>
      <Hero />

      <MarketTicker />

      <TrustBar />

      {/* What is it. The terminal sits on the left so the section opens with
          the product rather than a wall of text. */}
      <Section divided>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="min-w-0">
              <TerminalDark seed={9} />
            </div>

            <div className="min-w-0">
              <SectionHeading eyebrow="What it is" title={whatIs.heading} />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-400">
                {whatIs.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section tone="raised" divided>
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="How Skyward Invexa Works: Three Simple Steps"
            lead="Three steps, and an account manager to guide you through the first two."
          />
          <div className="mt-12">
            <StepsSection />
          </div>
        </Container>
      </Section>

      {/* Why choose */}
      <Section divided>
        <Container>
          <SectionHeading
            eyebrow="Why Australia chooses us"
            title="Why Australians Choose Skyward Invexa"
            lead="Six things the platform does, from the scanning engine to the human on the other end of the phone."
          />
          <div className="mt-12">
            <FeatureGrid features={features} />
          </div>
        </Container>
      </Section>

      {/* Coverage. The dark band breaks the run of light card grids, and every
          shape in it is generated and labelled as such. */}
      <section className="border-y border-hero-border bg-hero-bg">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-display text-xs font-semibold tracking-[0.18em] text-brand-300 uppercase">
                {coverage.eyebrow}
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-hero-border bg-hero-surface px-2.5 py-1 text-[11px] font-medium text-hero-muted">
                <Icon name="info" className="size-3 shrink-0" />
                {coverage.chartLabel}
              </span>
            </div>
            <h2 className="mt-3 text-3xl leading-tight font-semibold text-hero-fg sm:text-4xl">
              {coverage.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-hero-muted">{coverage.lead}</p>
          </div>

          <div className="mt-10">
            <MarketList />
          </div>
        </Container>
      </section>

      {/* Automated or manual */}
      <ModesSection />

      {/* Security */}
      <Section divided>
        <Container>
          <SectionHeading
            eyebrow="Trust"
            title="Is Skyward Invexa Safe and Legit?"
            lead="How the platform protects your account and your money."
          />
          <div className="mt-12">
            <SecuritySection />
          </div>
        </Container>
      </Section>

      {/* Who it is for */}
      <Section tone="raised" divided>
        <Container>
          <SectionHeading
            eyebrow="Who it is for"
            title="Who Is Skyward Invexa For?"
            lead="Four kinds of people tend to get the most out of it."
          />
          <div className="mt-12">
            <Audiences />
          </div>
        </Container>
      </Section>

      {/* Register */}
      <HomeSignUp />

      {/* FAQ */}
      <Section tone="raised" divided>
        <Container>
          <SectionHeading
            eyebrow="Questions"
            title="Frequently Asked Questions"
            lead="The questions we are asked most often, answered without marketing language."
          />
          <div className="mt-12">
            <FaqSection items={faqs} idPrefix="home-faq" />
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Start Trading in Minutes"
        body="Join Australians using AI to make smarter trading decisions. Registration is free and takes under 2 minutes."
      />
    </>
  )
}
