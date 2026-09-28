import { Link } from 'react-router-dom'
import { site } from '@/data/site'
import { usePageMeta } from '@/lib/usePageMeta'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { DarkPageHero } from '@/components/sections/DarkPageHero'
import { SupportHoursPanel } from '@/components/charts/SupportHoursPanel'
import { EnquiryForm } from '@/components/forms/EnquiryForm'

export default function Contact() {
  usePageMeta({
    title: 'Contact Skyward Invexa | Support, Sales and Enquiries',
    description:
      'Contact Skyward Invexa for general enquiries, account support, compliance questions and media requests, with support hours in AEST.',
    path: '/contact',
  })

  return (
    <>
      <DarkPageHero
        eyebrow="Contact"
        title="Contact Skyward Invexa"
        lead="Questions about the platform, your account, or the fee schedule. Support, compliance and media enquiries all reach a human during Australian business hours."
        aside={<SupportHoursPanel />}
      />

      <Section>
        <Container>

          <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
            <div className="hairline elevate rounded-card bg-ink-900 p-6 sm:p-8">
              <EnquiryForm />
            </div>

            <aside className="space-y-6">
              <div className="hairline elevate rounded-card bg-ink-850 p-6">
                <h2 className="font-display text-lg font-semibold text-heading">Get in Touch</h2>
                <p className="mt-1 font-display text-sm font-medium text-brand-700">
                  We Are Here Around The Clock
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-400">
                  Email us any time, day or night. A real person reads every message and replies
                  within one business day.
                </p>

                <dl className="mt-6 space-y-5 border-t border-ink-700 pt-5 text-sm">
                  <div>
                    <dt className="flex items-center gap-2 font-medium text-heading">
                      <Icon name="mail" className="size-4 shrink-0 text-brand-600" />
                      Email Us
                    </dt>
                    <dd className="mt-1.5 leading-relaxed text-ink-400">
                      Write to us and we reply within one business day.{' '}
                      <a
                        href={`mailto:${site.emails.support}`}
                        className="text-brand-700 transition-colors hover:text-brand-500"
                      >
                        {site.emails.support}
                      </a>
                    </dd>
                  </div>

                  <div>
                    <dt className="flex items-center gap-2 font-medium text-heading">
                      <Icon name="clock" className="size-4 shrink-0 text-brand-600" />
                      Support Hours
                    </dt>
                    <dd className="mt-1.5 leading-relaxed text-ink-400">
                      Our professional support team is available 24 hours a day, 7 days a week.
                    </dd>
                  </div>

                  <div>
                    <dt className="flex items-center gap-2 font-medium text-heading">
                      <Icon name="globe" className="size-4 shrink-0 text-brand-600" />
                      Availability
                    </dt>
                    <dd className="mt-1.5 leading-relaxed text-ink-400">
                      Skyward Invexa is now available in Australia, with more regions coming soon.
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 border-t border-ink-700 pt-5 text-sm text-ink-400">
                  Looking for a quick answer?{' '}
                  <Link to="/faq" className="font-medium text-brand-700 hover:text-brand-500">
                    Check the FAQs
                  </Link>
                  .
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  )
}
