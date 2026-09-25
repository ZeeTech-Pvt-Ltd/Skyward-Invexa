import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { EnquiryForm } from '@/components/forms/EnquiryForm'

const reassurance = [
  'No account opening or inactivity fee',
  'Fund with a bank transfer in Australian dollars',
  'Two-factor authentication on from the first login',
]

/**
 * Sign-up block on the home page. Sits directly under the hero so a visitor who
 * is already convinced does not have to go hunting for the form.
 */
export function HomeSignUp() {
  return (
    <Section id="register" tone="raised" divided className="scroll-mt-24">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="font-display text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase">
              Get started
            </p>
            <h2 className="mt-3 text-3xl leading-tight font-semibold sm:text-4xl">
              Join Skyward Invexa
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-400">
              Send us your details and we will get in touch to complete identity verification. It
              takes a few minutes, and there is no charge to open or hold an account.
            </p>

            <ul className="mt-8 space-y-3">
              {reassurance.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-300">
                  <Icon name="check" className="mt-0.5 size-4 shrink-0 text-mint-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 flex items-start gap-2 text-xs leading-relaxed text-ink-400">
              <Icon name="alert" className="mt-0.5 size-3.5 shrink-0 text-warn-600" />
              <span>
                Trading involves risk of loss. Nothing on this page is personal financial advice, and
                no figure here is a projection of what you might earn.
              </span>
            </p>
          </div>

          <div className="hairline elevate rounded-card bg-ink-850 p-6 sm:p-8">
            <EnquiryForm />
          </div>
        </div>
      </Container>
    </Section>
  )
}
