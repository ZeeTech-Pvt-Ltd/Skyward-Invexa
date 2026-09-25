import { securityMeasures } from '@/data/content'
import { Callout } from '@/components/ui/Callout'
import { Icon } from '@/components/ui/Icon'

export function SecuritySection() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
      <ul className="grid gap-px overflow-hidden rounded-card border border-ink-700 bg-ink-700 sm:grid-cols-2">
        {securityMeasures.map((measure) => (
          <li key={measure.title} className="bg-ink-900 p-6">
            <Icon name="lock" className="size-5 text-mint-600" />
            <h3 className="mt-4 font-display text-base font-semibold text-heading">
              {measure.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">{measure.body}</p>
          </li>
        ))}
      </ul>

      <div className="space-y-5">
        <Callout tone="info" title="What we will never ask you for">
          We will not ask for your password, your two-factor code, or for remote access to your
          device. Support staff will never ask you to move money to a &ldquo;safe&rdquo; account.
          Treat any such request as fraudulent and report it to us immediately.
        </Callout>

        <Callout tone="neutral" title="Reporting a concern">
          If you believe your account has been accessed without your permission, change your
          password, revoke active sessions from account settings, and contact support during AEST
          business hours. We will also ask you to report the matter to ReportCyber.
        </Callout>
      </div>
    </div>
  )
}
