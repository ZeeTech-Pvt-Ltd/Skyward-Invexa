import { Link } from 'react-router-dom'
import { usePageMeta } from '@/lib/usePageMeta'
import { Callout } from '@/components/ui/Callout'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { DarkPageHero } from '@/components/sections/DarkPageHero'
import { SupportHoursPanel } from '@/components/charts/SupportHoursPanel'
import { EnquiryForm } from '@/components/forms/EnquiryForm'

export default function Contact() {
  usePageMeta({
    title: 'Contact',
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

              <Callout tone="warn" title="Never Send Credentials">
                Our team will never ask for your password or a two-factor code, by email or by phone.
                Do not include either in a message through this form.
              </Callout>

              <Callout tone="neutral" title="New to the Platform?">
                The{' '}
                <Link to="/faq" className="font-medium text-brand-700 hover:text-brand-500">
                  frequently asked questions
                </Link>{' '}
                cover onboarding, funding, withdrawals and how the risk engine behaves.
              </Callout>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  )
}
