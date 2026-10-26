import { assetClasses } from '@/data/content'
import { Icon } from '@/components/ui/Icon'
import { Sparkline } from './Sparkline'

/**
 * Two compact navy panels used beside the copy on the inner marketing pages.
 * Both are built from the site's own data, and both sit on the dark hero
 * surface, so they use the dark end of the emerald ramp.
 */

/** A stack of labelled trend shapes. Every line is generated, not market data. */
export function SparkPanel({
  title,
  items,
  footnote,
}: {
  title: string
  items: { label: string; seed: number; value: string }[]
  footnote?: string
}) {
  return (
    <div className="rounded-2xl border border-hero-border bg-hero-surface p-6">
      <p className="font-display text-xs font-semibold tracking-[0.16em] text-brand-300 uppercase">
        {title}
      </p>

      <ul className="mt-5 space-y-4">
        {items.map((item) => (
          <li key={item.label}>
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-sm font-medium text-hero-fg">{item.label}</span>
              <span className="font-mono text-xs text-hero-muted">{item.value}</span>
            </div>
            <Sparkline seed={item.seed} count={30} surface="dark" className="mt-1.5 h-8 w-full" />
          </li>
        ))}
      </ul>

      {footnote ? (
        <p className="mt-5 border-t border-hero-border pt-4 text-xs leading-relaxed text-hero-muted">
          {footnote}
        </p>
      ) : null}
    </div>
  )
}

/**
 * The forex trading day, drawn from the hours the page publishes.
 *
 * A 24-hour track starting at 08:00 AEST, with each session as a bar and the
 * London and New York overlap called out, because that overlap landing in the
 * middle of the Australian night is the whole argument for the page.
 */
const SESSIONS = [
  { name: 'Sydney', hours: '8am – 5pm', start: 0, length: 9 },
  { name: 'Tokyo', hours: '10am – 7pm', start: 2, length: 9 },
  { name: 'London', hours: '6pm – 3am', start: 10, length: 9 },
  { name: 'New York', hours: '11pm – 8am', start: 15, length: 9 },
] as const

const AXIS = ['8am', '2pm', '8pm', '2am', '8am'] as const

export function ForexSessionsPanel() {
  const pct = (hours: number) => `${(hours / 24) * 100}%`

  return (
    <div className="rounded-2xl border border-hero-border bg-hero-surface p-6">
      <p className="font-display text-xs font-semibold tracking-[0.16em] text-brand-300 uppercase">
        The Trading Day, AEST
      </p>

      <div className="mt-6 space-y-3">
        {SESSIONS.map((session) => (
          <div key={session.name} className="grid grid-cols-[6.5rem_1fr] items-center gap-3">
            <span className="min-w-0">
              <span className="block text-xs font-medium text-hero-fg">{session.name}</span>
              <span className="block font-mono text-[10px] text-hero-muted">{session.hours}</span>
            </span>
            <span className="relative block h-6 rounded-md bg-hero-bg/70">
              <span
                className="absolute inset-y-0 rounded-md bg-brand-400/35 ring-1 ring-brand-300/40 ring-inset"
                style={{ left: pct(session.start), width: pct(session.length) }}
              />
            </span>
          </div>
        ))}
      </div>

      {/* The overlap is the point of the whole panel. */}
      <div className="mt-4 border-t border-hero-border pt-4">
        <div className="grid grid-cols-[5.5rem_1fr] items-center gap-3">
          <span className="text-xs font-semibold text-brand-300">Overlap</span>
          <span className="relative block h-2 rounded-full bg-hero-bg/70">
            <span
              className="absolute inset-y-0 rounded-full bg-brand-300"
              style={{ left: pct(15), width: pct(4) }}
            />
          </span>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-hero-muted">
          <span className="font-medium text-hero-fg">11pm to 3am AEST</span> is the busiest window of
          the day, when London and New York are both open. It is also when most Australians are
          asleep.
        </p>
      </div>

      <div className="mt-4 flex justify-between text-[10px] text-hero-muted">
        {AXIS.map((tick, index) => (
          <span key={`${tick}-${index}`}>{tick}</span>
        ))}
      </div>
    </div>
  )
}

/** The pairs the platform scans, each with its own generated shape. */
export function PairPanel({ title = 'Pairs Scanned' }: { title?: string }) {
  const pairs = [
    { pair: 'AUD/USD', seed: 23, move: '0.42%' },
    { pair: 'EUR/USD', seed: 37, move: '0.18%' },
    { pair: 'USD/JPY', seed: 52, move: '0.65%' },
    { pair: 'GBP/USD', seed: 68, move: '0.31%' },
    { pair: 'AUD/JPY', seed: 11, move: '0.54%' },
  ]

  return (
    <div className="rounded-2xl border border-hero-border bg-hero-surface p-6">
      <p className="font-display text-xs font-semibold tracking-[0.16em] text-brand-300 uppercase">
        {title}
      </p>

      <ul className="mt-5 space-y-4">
        {pairs.map((item) => (
          <li key={item.pair}>
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-mono text-xs font-medium text-hero-fg">{item.pair}</span>
              <span className="font-mono text-[11px] text-hero-muted">{item.move}</span>
            </div>
            <Sparkline seed={item.seed} count={28} surface="dark" className="mt-1.5 h-7 w-full" />
          </li>
        ))}
      </ul>

      <p className="mt-5 border-t border-hero-border pt-4 text-xs leading-relaxed text-hero-muted">
        Shapes are illustrative, generated for layout, not live prices.
      </p>
    </div>
  )
}

/** The risk controls, in the order a trade passes through them. */
export function RiskStackPanel() {
  const controls = [
    { label: 'Stop-loss', value: 'On every trade', icon: 'shield' as const },
    { label: 'Take-profit', value: 'Your target', icon: 'chart' as const },
    { label: 'Daily loss limit', value: 'Pauses trading', icon: 'clock' as const },
    { label: 'Kill switch', value: 'One click', icon: 'alert' as const },
  ]

  return (
    <div className="rounded-2xl border border-hero-border bg-hero-surface p-6">
      <p className="font-display text-xs font-semibold tracking-[0.16em] text-brand-300 uppercase">
        Applied to Every Trade
      </p>

      <ul className="mt-5 divide-y divide-hero-border">
        {controls.map((control) => (
          <li key={control.label} className="flex items-center gap-3.5 py-3.5 first:pt-0 last:pb-0">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
              <Icon name={control.icon} className="size-4" />
            </span>
            <span className="min-w-0 flex-1 text-sm font-medium text-hero-fg">{control.label}</span>
            <span className="shrink-0 text-xs text-hero-muted">{control.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** The two ways to use the account, as a visual rather than two paragraphs. */
export function ModesPanel() {
  return (
    <div className="grid gap-3">
      {[
        {
          icon: 'bolt' as const,
          title: 'Automated Mode',
          body: 'The AI places the trade inside your limits.',
          tag: 'Hands off',
        },
        {
          icon: 'sliders' as const,
          title: 'Signal Mode',
          body: 'You get the idea and approve it yourself.',
          tag: 'Full control',
        },
      ].map((mode) => (
        <div
          key={mode.title}
          className="flex items-start gap-4 rounded-2xl border border-hero-border bg-hero-surface p-5"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
            <Icon name={mode.icon} className="size-5" />
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-display text-sm font-semibold text-hero-fg">{mode.title}</span>
              <span className="rounded-full border border-hero-border px-2 py-0.5 text-[10px] text-hero-muted">
                {mode.tag}
              </span>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-hero-muted">{mode.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

/** The five markets, condensed for a hero column. */
export function MarketMiniPanel({ title = 'Coverage' }: { title?: string }) {
  return (
    <div className="rounded-2xl border border-hero-border bg-hero-surface p-6">
      <p className="font-display text-xs font-semibold tracking-[0.16em] text-brand-300 uppercase">
        {title}
      </p>

      <ul className="mt-5 space-y-3">
        {assetClasses.map((assetClass) => (
          <li key={assetClass.id} className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="size-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: assetClass.colour }}
            />
            <span className="min-w-0 flex-1 truncate text-sm font-medium text-hero-fg">
              {assetClass.name}
            </span>
            <span className="shrink-0 font-mono text-[11px] text-hero-muted">
              {assetClass.instruments[0]}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-5 flex items-center gap-2 border-t border-hero-border pt-4 text-xs text-hero-muted">
        <Icon name="globe" className="size-3.5 shrink-0 text-brand-300" />
        One account, five markets
      </p>
    </div>
  )
}
