import { site } from '@/data/site'
import { usePageMeta } from '@/lib/usePageMeta'
import { Callout } from '@/components/ui/Callout'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { DarkPageHero } from '@/components/sections/DarkPageHero'
import { EnquiryForm } from '@/components/forms/EnquiryForm'

const included = [
  'One account across four asset classes',
  'No account opening or inactivity fee',
  'Two-factor authentication enabled from first login',
  'AUD funding by bank transfer',
  'Statement export as CSV or PDF',
]

export default function SignUp() {
  usePageMeta({
    title: 'Sign Up',
    description:
      'Open a Skyward Invexa account. Submit your details to begin identity verification and get access to digital assets, ASX-listed equities, foreign exchange and commodities.',
    path: '/sign-up',
  })

  return (
    <>
      <DarkPageHero
        eyebrow="Sign up"
        title="Sign Up for a Skyward Invexa Account"
        lead="Submit your details to begin identity verification. Opening an account and holding one cost nothing, so you only pay when you trade."
        aside={
          <div className="rounded-2xl border border-hero-border bg-hero-surface p-6">
            <p className="font-display text-xs font-semibold tracking-[0.16em] text-brand-300 uppercase">
              What Your Account Includes
            </p>
            <ul className="mt-5 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-hero-muted">
                  <Icon name="check" className="mt-0.5 size-4 shrink-0 text-brand-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div className="hairline elevate rounded-card bg-ink-900 p-6 sm:p-8">
              <EnquiryForm />
            </div>

            <aside className="space-y-6">

              <Callout tone="warn" title="Before You Apply">
                Only commit capital you can afford to lose. Nothing in the sign-up process assesses
                whether trading is suitable for your circumstances; that assessment is yours to
                make. Read the{' '}
                <a href="/risk-disclosure" className="font-medium text-warn-600 hover:underline">
                  Risk Disclosure Statement
                </a>
                .
              </Callout>

              <Callout tone="neutral" title="What Happens Next">
                We review your details, then contact you to complete identity verification. You can
                fund the account once that clears. Replies come during{' '}
                {site.supportHours}.
              </Callout>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  )
}
