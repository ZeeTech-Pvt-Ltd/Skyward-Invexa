import { milestones, principles, teamFunctions } from '@/data/content'
import {
  aboutFacts,
  aboutFaqs,
  aboutMission,
  aboutPromise,
  aboutProtections,
} from '@/data/about'
import { usePageMeta } from '@/lib/usePageMeta'
import { Callout } from '@/components/ui/Callout'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TBody, TD, TH, THead, TR, Table } from '@/components/ui/Table'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { CandlestickChart } from '@/components/charts/CandlestickChart'
import { HeroShowcase } from '@/components/charts/HeroShowcase'
import { DarkPageHero } from '@/components/sections/DarkPageHero'
import { FaqSection } from '@/components/sections/FaqSection'
import { CtaBand } from '@/components/sections/CtaBand'
import { EnquiryForm } from '@/components/forms/EnquiryForm'
import { JsonLd } from '@/components/seo/JsonLd'

export default function About() {
  usePageMeta({
    title: 'About Skyward Invexa | Multi-Asset Trading for Australia',
    description:
      'Skyward Invexa builds multi-asset trading and execution software for Australian investors. Our principles, our structure and how we describe what we do.',
    path: '/about',
  })

  return (
    <>
      <DarkPageHero
        eyebrow="About"
        title="About Skyward Invexa: A Software Company, Not a Fund Manager"
        lead="Skyward Invexa builds AI trading software for Australian investors. We do not pool client money, we do not run a strategy of our own, and we do not tell you what to buy."
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
                AI Trading Software, Not Investment Advice
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

      {/* Mission. Placed after the structure sections so it reads as a summary
          of the commitments above rather than a slogan at the top. */}
      <Section tone="raised" divided>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <SectionHeading title={aboutMission.heading} lead={aboutMission.body} />
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {aboutProtections.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <Icon name="shield" className="mt-0.5 size-4 shrink-0 text-brand-600" />
                  <span>
                    <span className="block text-sm font-medium text-heading">{item.title}</span>
                    <span className="mt-0.5 block text-sm leading-relaxed text-ink-300">
                      {item.body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section divided>
        <Container>
          <SectionHeading
            eyebrow="Scams"
            title="Our Stand Against Investment Scams"
            lead="Fake websites and callers sometimes copy a trusted brand name. Being clear about that is more useful than pretending it does not happen."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Callout tone="warn" title="The Scale of It">
              Australians reported $2.18 billion in scam losses in 2025, and investment scams were
              the biggest single category at $837.7 million, according to the ACCC.
            </Callout>
            <Callout tone="info" title="How to Check It Is Us">
              Only use skywardinvexa-au.com, only trust addresses ending in that domain, and if a
              call feels wrong, end it and reach us through the details published on this site.
              Report suspected scams to Scamwatch at scamwatch.gov.au.
            </Callout>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <h3 className="font-display text-lg font-semibold text-heading">Our Promise to You</h3>
              <ul className="mt-5 space-y-3 border-l-2 border-brand-500 pl-6">
                {aboutPromise.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-300">
                    <Icon name="check" className="mt-0.5 size-4 shrink-0 text-mint-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-heading">
                Skyward Invexa at a Glance
              </h3>
              <div className="mt-5">
                <Table caption="Skyward Invexa at a glance">
                  <THead>
                    <TH>Detail</TH>
                    <TH>Information</TH>
                  </THead>
                  <TBody>
                    {aboutFacts.map(([label, value]) => (
                      <TR key={label}>
                        <TD label="Detail" className="font-medium text-heading">
                          {label}
                        </TD>
                        <TD label="Information">{value}</TD>
                      </TR>
                    ))}
                  </TBody>
                </Table>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="raised" divided>
        <Container>
          <SectionHeading
            eyebrow="Get started"
            title="Open Your Free Account Today"
            lead="Registration is free and takes about two minutes. An account manager will help you with the next steps, and there is no charge to open or hold an account."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div className="hairline elevate rounded-card bg-ink-850 p-6 sm:p-8">
              <EnquiryForm />
            </div>
            <aside className="space-y-5">
              <Callout tone="neutral" title="What happens after you submit">
                An account manager calls you, usually during the next support window. They explain
                the platform, check your goals and help you complete identity verification. Nothing
                is traded until you have funded the account and set your own limits.
              </Callout>
            </aside>
          </div>
        </Container>
      </Section>

      {/* About-specific questions. Each page keeps its own set, and the schema
          here is built from the questions this page actually renders. */}
      <JsonLd
        id="about-faq-schema"
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: aboutFaqs.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />

      <Section divided>
        <Container>
          <SectionHeading
            eyebrow="Questions"
            title="About Skyward Invexa: FAQs"
            lead="The questions this page raises most often."
          />
          <div className="mt-12">
            <FaqSection items={aboutFaqs} idPrefix="about-faq" />
          </div>
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
