import { site } from '@/data/site'
import { faqGroupNames, faqGroups } from '@/data/faq'
import { usePageMeta } from '@/lib/usePageMeta'
import { Callout } from '@/components/ui/Callout'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Accordion } from '@/components/ui/Accordion'
import { DarkPageHero } from '@/components/sections/DarkPageHero'
import { JsonLd } from '@/components/seo/JsonLd'
import { QuestionIndexPanel } from '@/components/charts/QuestionIndexPanel'
import { CtaBand } from '@/components/sections/CtaBand'

/** The list is grouped, so a jump link points at the first question in a group. */
const indexOfGroup = (name: string) => faqGroups.findIndex((entry) => entry.group === name)

export default function Faq() {
  usePageMeta({
    title: 'Skyward Invexa FAQ | Deposits, Withdrawals and Safety',
    description:
      'Answers to the most common Skyward Invexa questions: how to sign up, the AU$250 deposit, withdrawals, how the AI trades, fees, tax and staying safe.',
    path: '/faq',
  })

  return (
    <>
      {/* FAQPage structured data, built from the questions the page renders. */}
      <JsonLd
        id="faq-schema"
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqGroups.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />

      <DarkPageHero
        eyebrow="FAQ"
        title="Skyward Invexa FAQ: Straight Answers, Including the Ones That Are Not Flattering"
        lead="Every question we are asked before someone opens an account, grouped by topic. If yours is not here, ask us directly. We would rather answer it before you sign up than after."
        aside={<QuestionIndexPanel items={faqGroups} />}
      >
        <nav aria-label="Jump to a topic" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {faqGroupNames.map((name) => (
              <li key={name}>
                <a
                  href={`#faq-${indexOfGroup(name)}`}
                  className="inline-flex items-center rounded-full border border-hero-border bg-hero-surface px-3.5 py-1.5 text-xs font-medium text-hero-muted transition-colors hover:border-brand-400/40 hover:text-hero-fg"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </DarkPageHero>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr] lg:gap-16">
            {/* One accordion for the whole page, so the one-panel-open rule
                holds across every group rather than restarting in each. */}
            <Accordion items={faqGroups} idPrefix="faq" />

            <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              <div className="hairline rounded-card bg-ink-850/70 p-6">
                <h2 className="font-display text-base font-semibold text-heading">Get in Touch</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <Icon name="mail" className="mt-0.5 size-4 shrink-0 text-ink-400" />
                    <a
                      href={`mailto:${site.emails.support}`}
                      className="text-ink-300 transition-colors hover:text-brand-700"
                    >
                      {site.emails.support}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="shield" className="mt-0.5 size-4 shrink-0 text-ink-400" />
                    <a
                      href={`mailto:${site.emails.compliance}`}
                      className="text-ink-300 transition-colors hover:text-brand-700"
                    >
                      {site.emails.compliance}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="clock" className="mt-0.5 size-4 shrink-0 text-ink-400" />
                    <span className="text-ink-300">{site.supportHours}</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="raised" divided>
        <Container>
          <SectionHeading
            eyebrow="One more thing"
            title="If Someone Contacts You Claiming to Be Us"
            lead="Impersonation is common in this industry. Here is how to tell the difference."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Callout tone="warn" title="We Will Never Ask You To">
              Send funds to a personal account, transfer money to a &ldquo;safe holding&rdquo;
              account, share a two-factor code, install remote-access software, or pay a fee to
              release a withdrawal.
            </Callout>
            <Callout tone="info" title="Verify Before You Act">
              Check that correspondence comes from an @{site.domain} address, and confirm any
              request by contacting support through the details published on this site rather than
              the ones in the message you received.
            </Callout>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Still Have a Question?"
        body="Send it to us, or create your free account and your account manager will answer everything on your first call."
      />
    </>
  )
}
