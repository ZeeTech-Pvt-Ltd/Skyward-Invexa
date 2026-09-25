import { Badge } from '@/components/ui/Badge'
import { Icon } from '@/components/ui/Icon'
import type { IconName } from '@/data/content'
import { CandlestickChart } from './CandlestickChart'
import { cn } from '@/lib/cn'

/**
 * The trading terminal, on the same navy as the hero band.
 *
 * Deliberately a different composition to the light panel: an icon rail down
 * the left, one wide chart, and a metric strip along the bottom. Every figure
 * is generated from a fixed seed.
 */

const RAIL: { icon: IconName; label: string; active?: boolean }[] = [
  { icon: 'chart', label: 'Charts', active: true },
  { icon: 'wallet', label: 'Portfolio' },
  { icon: 'sliders', label: 'Order tools' },
  { icon: 'shield', label: 'Risk' },
  { icon: 'book', label: 'Learn' },
]

const TIMEFRAMES = ['1H', '4H', '1D', '1W'] as const

const METRICS = [
  { label: 'Equity', value: 'A$0.00' },
  { label: 'Margin Used', value: 'A$0.00' },
  { label: 'Free Margin', value: 'A$0.00' },
  { label: 'Open Positions', value: '4' },
  { label: 'Working Orders', value: '2' },
]

type Props = {
  className?: string
  seed?: number
  symbol?: string
}

export function TerminalDark({ className, seed = 21, symbol = 'BTC / AUD' }: Props) {
  return (
    <figure
      className={cn(
        'overflow-hidden rounded-2xl border border-hero-border bg-hero-bg shadow-[0_30px_70px_-28px_rgba(8,28,45,0.7)]',
        className,
      )}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b border-hero-border bg-hero-surface px-4 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-warn-400/70" />
          <span className="size-2.5 rounded-full bg-brand-400/70" />
          <span className="size-2.5 rounded-full bg-hero-border" />
        </div>
        <span className="hidden min-w-0 flex-1 truncate rounded-md border border-hero-border px-3 py-1 font-mono text-[11px] text-hero-muted sm:block">
          app.skywardinvexa-au.com
        </span>
        <Badge tone="brandOnDark">Preview</Badge>
      </div>

      <div className="flex">
        {/* Icon rail */}
        <nav
          aria-hidden="true"
          className="hidden w-14 shrink-0 flex-col items-center gap-1 border-r border-hero-border bg-hero-surface py-3 sm:flex"
        >
          {RAIL.map((item) => (
            <span
              key={item.label}
              className={cn(
                'flex size-9 items-center justify-center rounded-lg transition-colors',
                item.active
                  ? 'bg-brand-500/20 text-brand-300'
                  : 'text-hero-muted hover:text-hero-fg',
              )}
            >
              <Icon name={item.icon} className="size-4" />
            </span>
          ))}
        </nav>

        <div className="min-w-0 flex-1">
          {/* Symbol toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hero-border px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="font-display text-sm font-semibold text-hero-fg">{symbol}</span>
              <span className="font-mono text-sm text-hero-muted">84,283.99</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-500/15 px-2 py-0.5 font-mono text-[11px] font-medium text-brand-300">
                <Icon name="chevronDown" className="size-3 rotate-180" />
                0.12%
              </span>
            </div>

            <div className="flex items-center gap-1">
              {TIMEFRAMES.map((frame, index) => (
                <span
                  key={frame}
                  className={cn(
                    'rounded-md px-2 py-1 font-mono text-[11px]',
                    index === 2 ? 'bg-brand-500/20 text-brand-300' : 'text-hero-muted',
                  )}
                >
                  {frame}
                </span>
              ))}
            </div>
          </div>

          {/* Chart */}
          <div className="px-3 pt-3">
            <CandlestickChart seed={seed} surface="dark" count={46} start={84283} />
          </div>

          {/* Metric strip */}
          <dl className="mt-3 grid grid-cols-2 gap-px border-t border-hero-border bg-hero-border sm:grid-cols-5">
            {METRICS.map((metric) => (
              <div key={metric.label} className="bg-hero-surface px-4 py-3">
                <dt className="text-[10px] tracking-wide text-hero-muted uppercase">
                  {metric.label}
                </dt>
                <dd className="mt-1 font-mono text-sm font-medium text-hero-fg">{metric.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

    </figure>
  )
}
