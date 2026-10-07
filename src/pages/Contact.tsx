import { Link } from 'react-router-dom'
import { site } from '@/data/site'
import { usePageMeta } from '@/lib/usePageMeta'
import { Callout } from '@/components/ui/Callout'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TBody, TD, TH, THead, TR, Table } from '@/components/ui/Table'
import { DarkPageHero } from '@/components/sections/DarkPageHero'
import { FaqSection } from '@/components/sections/FaqSection'
import { SupportHoursPanel } from '@/components/charts/SupportHoursPanel'
import { EnquiryForm } from '@/components/forms/EnquiryForm'
import { JsonLd } from '@/components/seo/JsonLd'

/** The channels we actually publish. No phone number, because there is not one. */
const channels: [string, string, string][] = [
  ['General support', site.emails.support, 'Account questions, funding and withdrawals'],
  ['Compliance', site.emails.compliance, 'Formal correspondence and complaints'],
  ['Media', site.emails.press, 'Press and partnership enquiries'],
]

const contactFaqs = [
  {
    question: 'How Fast Will Skyward Invexa Reply?',
    answer:
      'Messages that arrive during support hours are picked up that day. Messages that arrive outside them are answered in the next support window.',
  },
  {
    question: 'How Do I Make a Complaint?',
    answer: `Email ${site.emails.compliance} with your account details and what happened. If you are not satisfied with our response, the Australian Financial Complaints Authority (AFCA) is a free, independent service for financial complaints: afca.org.au.`,
  },
  {
    question: 'How Do I Know It Is Really Skyward Invexa?',
    answer: `We only contact people from addresses ending in ${site.domain}. We will never ask for your password, your bank PIN, remote access to your device, or payment in gift cards or crypto to a personal wallet.`,
  },
  {
    question: 'Someone Used the Skyward Invexa Name to Contact Me. What Now?',
    answer: `Email ${site.emails.support} with "Scam report" in the subject line. You can also report it to Scamwatch at scamwatch.gov.au, and contact your bank straight away if you have sent money.`,
  },
]

export default function Contact() {
  usePageMeta({
    title: 'Contact Skyward Invexa | Talk to an Australian Support Team',
    description:
      'Contact the Skyward Invexa support team by email or a callback request. Help with sign-up, deposits, withdrawals and account questions, on AEST hours.',
    path: '/contact',
  })

  return (
    <>
      <JsonLd
        id="contact-faq-schema"
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: contactFaqs.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />

      <DarkPageHero
        eyebrow="Contact"
        title="Contact Skyward Invexa: Talk to a Real Person"
        lead="Questions about getting started, your account or a withdrawal? Leave your details and an account manager will call you back, or email us directly. Support runs on Australian hours."
        aside={<SupportHoursPanel />}
      />

      <Section id="register" className="scroll-mt-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
            <div className="hairline elevate rounded-card bg-ink-850 p-6 sm:p-8">
              <EnquiryForm />
            </div>

            <aside className="space-y-6">
              <div className="hairline elevate rounded-card bg-ink-850 p-6">
                <h2 className="font-display text-lg font-semibold text-heading">Ways to Reach Us</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  Every message reaches a person, not a ticket queue. We do not use sales scripts,
                  and nobody will push you to deposit more than you are comfortable with.
                </p>

                <div className="mt-6">
                  <Table caption="Ways to reach Skyward Invexa">
                    <THead>
                      <TH>Channel</TH>
                      <TH>Details</TH>
                    </THead>
                    <TBody>
                      {channels.map(([label, email, best]) => (
                        <TR key={email}>
                          <TD label="Channel" className="font-medium text-heading">
                            {label}
                          </TD>
                          <TD label="Details">
                            <a
                              href={`mailto:${email}`}
                              className="text-brand-700 transition-colors hover:text-brand-500"
                            >
                              {email}
                            </a>
                            <span className="mt-1 block text-xs text-ink-400">{best}</span>
                          </TD>
                        </TR>
                      ))}
                    </TBody>
                  </Table>
                </div>

                <p className="mt-5 flex items-start gap-2.5 border-t border-ink-700 pt-5 text-sm text-ink-300">
                  <Icon name="clock" className="mt-0.5 size-4 shrink-0 text-brand-600" />
                  <span>
                    {site.supportHours}. Messages that arrive outside these hours are answered in
                    the next support window.
                  </span>
                </p>
              </div>

              <Callout tone="info" title="Looking for a quick answer?">
                Sign-up, verification, deposits and withdrawals are all covered in the{' '}
                <Link to="/faq" className="font-medium text-brand-700 hover:text-brand-500">
                  FAQ
                </Link>
                . How the platform makes its decisions is on the{' '}
                <Link to="/how-it-works" className="font-medium text-brand-700 hover:text-brand-500">
                  How It Works
                </Link>{' '}
                page.
              </Callout>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="raised" divided>
        <Container>
          <SectionHeading
            eyebrow="What happens next"
            title="After You Get in Touch"
            lead="No pressure, and no obligation to deposit. Here is the sequence."
          />
          <ol className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              {
                title: 'We Confirm Receipt',
                body: 'You get an email confirming your message arrived, so you are not left wondering.',
              },
              {
                title: 'A Person Replies',
                body: 'Someone from the client operations team answers during the next support window, or calls at the time you asked for.',
              },
              {
                title: 'We Solve It',
                body: 'You get an answer or a clear next step. If your question needs your account manager, we hand it to them by name.',
              },
            ].map((step, index) => (
              <li key={step.title} className="hairline rounded-card bg-ink-850 p-6">
                <span className="font-mono text-xs font-semibold text-brand-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-heading">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section divided>
        <Container>
          <SectionHeading
            eyebrow="Security"
            title="How to Know It Is Really Us"
            lead="Impersonation is common in this industry, so it is worth knowing what we will and will not do."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Callout tone="warn" title="We Will Never Ask You To">
              Send funds to a personal account, move money to a &ldquo;safe holding&rdquo; account,
              share a two-factor code, install remote-access software, or pay a fee to release a
              withdrawal.
            </Callout>
            <Callout tone="info" title="Verify Before You Act">
              We only contact people from addresses ending in @{site.domain}. If something feels
              wrong, end the contact and reach us through the details published on this site rather
              than the ones in the message you received.
            </Callout>
          </div>
        </Container>
      </Section>

      <Section tone="raised" divided>
        <Container>
          <SectionHeading
            eyebrow="Questions"
            title="Contact Skyward Invexa: FAQs"
            lead="The questions we are asked most often about reaching us."
          />
          <div className="mt-12">
            <FaqSection items={contactFaqs} idPrefix="contact-faq" />
          </div>
        </Container>
      </Section>
    </>
  )
}
