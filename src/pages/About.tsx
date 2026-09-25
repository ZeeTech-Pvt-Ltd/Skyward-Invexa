import { milestones, principles, teamFunctions } from '@/data/content'
import { usePageMeta } from '@/lib/usePageMeta'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { CandlestickChart } from '@/components/charts/CandlestickChart'
import { HeroShowcase } from '@/components/charts/HeroShowcase'
import { DarkPageHero } from '@/components/sections/DarkPageHero'
import { CtaBand } from '@/components/sections/CtaBand'

export default function About() {
  usePageMeta({
    title: 'About',
    description:
      'Skyward Invexa builds multi-asset trading and execution software for Australian investors. Our principles, our structure and how we describe what we do.',
    path: '/about',
  })

  return (
    <>
      <DarkPageHero
        eyebrow="About"
        title="About Skyward Invexa: A Software Company, Not a Fund Manager"
        lead="Skyward Invexa builds execution software for Australian investors. We do not pool client money, we do not run a strategy, and we do not tell you what to buy."
        aside={<HeroShowcase />}
      />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Principles"
            title="Four Rules We Hold Ourselves To"
            lead="These are constraints on how we build and what we publish, not aspirations."
          />

          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <li key={principle.title}>
                <Card className="h-full">
                  <span className="font-mono text-xs tracking-[0.2em] text-brand-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-heading">
                    {principle.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-300">{principle.body}</p>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="raised" divided>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 font-display text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase">
                What we build
              </p>
              <h2 className="text-2xl leading-tight font-semibold sm:text-3xl lg:text-4xl">
                Execution Software, Not Investment Advice
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-400">
                The platform gives you a way to reach markets and see what an order will cost. It
                does not pick instruments, run a strategy, or move money without an instruction from
                you.
              </p>
            </div>

            <PanelFrame
              badge="Risk Controls"
              icon="shield"
            >
              <CandlestickChart seed={42} count={48} start={84283} surface="light" />
            </PanelFrame>
          </div>
        </Container>
      </Section>

      <Section divided>
        <Container>
          <SectionHeading
            eyebrow="History"
            title="How the Platform Got Here"
            lead="Four years from research to public launch, in the order things actually happened."
          />

          <ol className="mt-12 space-y-px overflow-hidden rounded-card border border-ink-700 bg-ink-700">
            {milestones.map((milestone) => (
              <li
                key={milestone.year}
                className="grid gap-2 bg-ink-900 p-6 sm:grid-cols-[7rem_1fr] sm:gap-8 sm:p-7"
              >
                <span className="font-display text-lg font-semibold text-brand-600">
                  {milestone.year}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-heading">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{milestone.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section divided>
        <Container>
          <SectionHeading
            eyebrow="How we are organised"
            title="Four Functions, Named by What They Do"
            lead="We list the functions that run the platform rather than publishing individual profiles. Named biographies and photographs are added by the people themselves, with their consent, and only once they are accurate."
          />

          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {teamFunctions.map((fn) => (
              <li key={fn.role}>
                <Card className="h-full">
                  <Icon name="check" className="size-5 text-mint-600" />
                  <h3 className="mt-4 font-display text-base font-semibold text-heading">{fn.role}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{fn.focus}</p>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        title="Questions About How We Operate?"
        body="Compliance and corporate enquiries are answered within two business days."
        primaryLabel="Contact us"
        secondaryLabel="Read the FAQ"
        secondaryTo="/faq"
      />
    </>
  )
}
