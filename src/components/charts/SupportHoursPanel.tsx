import { site } from '@/data/site'
import { cn } from '@/lib/cn'

/**
 * Weekly support coverage, drawn from the hours the site actually publishes.
 * Real information rather than decoration: a visitor can see at a glance which
 * days someone will answer.
 */

const WEEK = [
  { label: 'Mon', covered: true, height: 'h-16' },
  { label: 'Tue', covered: true, height: 'h-16' },
  { label: 'Wed', covered: true, height: 'h-16' },
  { label: 'Thu', covered: true, height: 'h-16' },
  { label: 'Fri', covered: true, height: 'h-16' },
  { label: 'Sat', covered: false, height: 'h-5' },
  { label: 'Sun', covered: false, height: 'h-5' },
] as const

export function SupportHoursPanel() {
  return (
    <div className="rounded-2xl border border-hero-border bg-hero-surface p-6">
      <p className="font-display text-xs font-semibold tracking-[0.16em] text-brand-300 uppercase">
        Support Coverage
      </p>

      <div className="mt-6 flex items-end gap-1.5" aria-hidden="true">
        {WEEK.map((day) => (
          <div key={day.label} className="flex flex-1 flex-col items-center gap-2">
            <span
              className={cn(
                'w-full rounded-md',
                day.height,
                day.covered ? 'bg-brand-500/30' : 'bg-hero-border',
              )}
            />
            <span
              className={cn('text-[10px]', day.covered ? 'text-hero-muted' : 'text-hero-muted/50')}
            >
              {day.label}
            </span>
          </div>
        ))}
      </div>

      <dl className="mt-6 space-y-2 border-t border-hero-border pt-5 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-hero-muted">Weekdays</dt>
          <dd className="text-hero-fg">8:00am – 8:00pm AEST</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-hero-muted">Weekends</dt>
          <dd className="text-hero-muted">Closed</dd>
        </div>
      </dl>

      <p className="mt-4 text-xs leading-relaxed text-hero-muted">
        Compliance enquiries are answered within two business days. Markets trade outside these
        hours; the support desk does not. Times shown are {site.timezone}.
      </p>
    </div>
  )
}
