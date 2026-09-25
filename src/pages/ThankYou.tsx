import { site } from '@/data/site'
import { usePageMeta } from '@/lib/usePageMeta'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

const nextSteps = [
  {
    title: 'We Read Your Message',
    body: 'A member of the client operations team picks it up during the next support window and replies from an address ending in the domain shown on this site.',
    icon: 'mail' as const,
  },
  {
    title: 'We May Ask for Verification',
    body: 'If your enquiry concerns an account, we may ask you to confirm your identity before discussing any account detail. That request will never ask for a password or a two-factor code.',
    icon: 'shield' as const,
  },
  {
    title: 'Nothing Is Traded in the Meantime',
    body: 'Sending a message does not open an account, fund anything, or place an order. No position is created until you complete onboarding and place an instruction yourself.',
    icon: 'check' as const,
  },
]

export default function ThankYou() {
  usePageMeta({
    title: 'Thank You',
    description:
      'Thank you for contacting Skyward Invexa. Here is what happens next, and where to find the answers you need in the meantime.',
    path: '/thank-you',
    noindex: true,
  })

  return (
    <>
      <section className="glow-brand relative overflow-hidden border-b border-ink-700">
        <Container className="py-16 text-center sm:py-20">
          <span className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-mint-400/40 bg-mint-200/50">
            <Icon name="check" className="size-8 text-mint-600" />
          </span>

          <h1 className="mt-7 text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
            Thank You for Contacting Skyward Invexa
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-400 sm:text-lg">
            Your message has been composed and is on its way. Support operates{' '}
            {site.supportHours}, and compliance enquiries are answered within two business days.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button to="/" size="lg">
              Back to Home
            </Button>
            <Button to="/faq" variant="secondary" size="lg">
              Read the FAQ
            </Button>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeading
            align="center"
            eyebrow="What happens next"
            title="What Happens After You Send a Message"
            lead="Three things to expect, and one thing that will not happen."
          />

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {nextSteps.map((step) => (
              <li key={step.title}>
                <Card className="h-full">
                  <Icon name={step.icon} className="size-5 text-brand-600" />
                  <h3 className="mt-4 font-display text-base font-semibold text-heading">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-400">{step.body}</p>
                </Card>
              </li>
            ))}
          </ul>

          <div className="mt-12 rounded-card border border-ink-700 bg-ink-900 p-6 text-center sm:p-8">
            <h2 className="font-display text-lg font-semibold text-heading">
              Did Not Receive a Reply?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-400">
              Check your spam folder first, then email us directly at{' '}
              <a
                href={`mailto:${site.emails.support}`}
                className="font-medium text-brand-700 hover:text-brand-500"
              >
                {site.emails.support}
              </a>
              . Please do not resend anything containing account credentials.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
