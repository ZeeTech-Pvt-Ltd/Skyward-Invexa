import { faqs, features } from '@/data/content'
import { usePageMeta } from '@/lib/usePageMeta'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CandlestickChart } from '@/components/charts/CandlestickChart'
import { TerminalDark } from '@/components/charts/TerminalDark'
import { WatchlistPanel } from '@/components/charts/WatchlistPanel'
import { CtaBand } from '@/components/sections/CtaBand'
import { EducationTopics } from '@/components/sections/EducationTopics'
import { FaqSection } from '@/components/sections/FaqSection'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import { FeaturePanel } from '@/components/sections/FeaturePanel'
import { Hero } from '@/components/sections/Hero'
import { HomeSignUp } from '@/components/sections/HomeSignUp'
import { MarketCards } from '@/components/sections/MarketCards'
import { MarketTicker } from '@/components/sections/MarketTicker'
import { OrderTicketMock } from '@/components/sections/OrderTicketMock'
import { SecuritySection } from '@/components/sections/SecuritySection'
import { StatStrip } from '@/components/sections/StatStrip'
import { StepsSection } from '@/components/sections/StepsSection'

/**
 * Section order: the form sits high, right after the trust strip, so a visitor
 * who is already convinced does not have to scroll to act. The three feature
 * panels below carry drawn interfaces rather than photography.
 */
export default function Home() {
  usePageMeta({
    title: 'Skyward Invexa | Multi-Asset Market Access for Australian Investors',
    description:
      'One account for digital assets, ASX-listed equities, foreign exchange and commodities. Published fees, order-ticket risk controls, and no performance promises.',
    path: '/',
  })

  return (
    <>
      <Hero />

      <MarketTicker />

      <StatStrip />

      <HomeSignUp />

      {/* Features */}
      <Section divided>
        <Container>
          <SectionHeading
            eyebrow="What it is"
            title="Why Skyward Invexa Exists"
            lead="Most platforms advertise outcomes. We would rather show you the mechanics: what an order costs, what happens when it fills, and what the risk check does before it is accepted."
          />
          <div className="mt-12">
            <FeatureGrid features={features} />
          </div>
        </Container>
      </Section>

      {/* Order ticket */}
      <Section tone="raised" divided>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 font-display text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase">
                The order ticket
              </p>
              <h2 className="text-2xl leading-tight font-semibold sm:text-3xl lg:text-4xl">
                Every Cost Visible Before You Confirm
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-400">
                The ticket shows your estimated cost, the margin the position requires and whether
                the order sits inside the limits you set. Nothing is deducted or filled without that
                check running first.
              </p>
            </div>

            <OrderTicketMock />
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section divided>
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="From Verified to Your First Order"
            lead="Three steps, no platform access fee, and nothing that requires a phone call to complete."
          />
          <div className="mt-12">
            <StepsSection />
          </div>
        </Container>
      </Section>

      {/* Markets */}
      <Section tone="raised" divided>
        <Container>
          <SectionHeading
            eyebrow="Markets"
            title="Four Asset Classes, One Order Ticket"
            lead="Each market has its own session, margin treatment and cost structure. All four are reachable from the same account and the same order screen."
          />
          <div className="mt-12">
            <MarketCards />
          </div>
        </Container>
      </Section>

      {/* Terminal */}
      <Section divided>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 font-display text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase">
                Inside the platform
              </p>
              <h2 className="text-2xl leading-tight font-semibold sm:text-3xl lg:text-4xl">
                A Terminal That Shows Its Working
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-400">
                Live pricing, contract specifications and your open positions sit on one screen
                beside the order panel. There is no separate mode to learn and no feature held back
                for a higher account tier.
              </p>

              <ul className="mt-7 space-y-3">
                {[
                  'Chart, order panel and open positions on one screen',
                  'Contract specifications shown before you commit to a trade',
                  'Working orders stay amendable until they fill or are cancelled',
                  'One account and one watchlist across the terminal and the app',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-300">
                    <Icon name="check" className="mt-0.5 size-4 shrink-0 text-mint-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navy, matching the hero band. Already draws its own chrome, so it is
                not wrapped in a frame. */}
            <TerminalDark seed={21} />
          </div>
        </Container>
      </Section>

      {/* Security */}
      <Section tone="raised" divided>
        <Container>
          <SectionHeading
            eyebrow="Security"
            title="Controls That Default to On"
            lead="Account security should not depend on the client finding a settings page. These protections are enabled by default and described in plain language."
          />
          <div className="mt-12">
            <SecuritySection />
          </div>
        </Container>
      </Section>

      {/* Access */}
      <Section divided>
        <Container>
          <FeaturePanel
            visual={<WatchlistPanel />}
            badge="Any Screen"
            icon="devices"
            eyebrow="Access"
            title="The Same Account on Every Screen"
            body="Your watchlists, alerts and open positions follow you between the web terminal and the mobile app. Nothing is desktop-only, and nothing is mobile-only."
            flip
          />
        </Container>
      </Section>

      {/* Learning */}
      <Section tone="raised" divided>
        <Container>
          <FeaturePanel
            visual={<CandlestickChart seed={42} count={48} start={84283} surface="light" />}
            badge="Reading Price"
            icon="book"
            eyebrow="Learning centre"
            title="Understand the Product Before You Use It"
            body="Short, plainly written explainers on the mechanics that catch new investors out: margin, leverage, spreads, and why a stop-loss is a request rather than a guarantee of price."
          />
          <div className="mt-14">
            <EducationTopics />
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section divided>
        <Container>
          <SectionHeading
            eyebrow="Questions"
            title="Answers Before You Open an Account"
            lead="The questions we are asked most often, answered without marketing language."
          />
          <div className="mt-12">
            <FaqSection items={faqs.slice(0, 5)} />
          </div>
        </Container>
      </Section>


      <CtaBand />
    </>
  )
}
