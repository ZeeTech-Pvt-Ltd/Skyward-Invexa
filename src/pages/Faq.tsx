import { faqs } from '@/data/content'
import { site } from '@/data/site'
import { usePageMeta } from '@/lib/usePageMeta'
import { Callout } from '@/components/ui/Callout'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { DarkPageHero } from '@/components/sections/DarkPageHero'
import { JsonLd } from '@/components/seo/JsonLd'
import { QuestionIndexPanel } from '@/components/charts/QuestionIndexPanel'
import { FaqSection } from '@/components/sections/FaqSection'
import { CtaBand } from '@/components/sections/CtaBand'

export default function Faq() {
  usePageMeta({
    title: 'Frequently asked questions',
    description:
      'What Skyward Invexa is, how onboarding, funding and withdrawals work, what the risks are, and the limits of what the platform will do on your behalf.',
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
          mainEntity: faqs.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />

      <DarkPageHero
        eyebrow="FAQ"
        title="Skyward Invexa FAQ: Straight Answers, Including the Ones That Are Not Flattering"
        lead="If a question is not answered here, ask us directly. We would rather answer it before you open an account than after."
        aside={<QuestionIndexPanel />}
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr] lg:gap-16">
            <FaqSection items={faqs} idPrefix="faq" />

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
        title="Ready When You Are"
        body="Opening an account takes a few minutes. Placing an order is entirely your decision."
      />
    </>
  )
}
