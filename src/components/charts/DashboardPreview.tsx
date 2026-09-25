import { Badge } from '@/components/ui/Badge'
import { Icon } from '@/components/ui/Icon'
import { CandlestickChart } from './CandlestickChart'
import { DepthLadder } from './DepthLadder'
import { PortfolioPanel } from './PortfolioPanel'
import { cn } from '@/lib/cn'

/**
 * A trading terminal, drawn rather than photographed.
 *
 * Every figure here is generated from a fixed seed and the caption says so. It
 * reads as a real interface because the layout, the order book and the chart
 * are real UI, not because the numbers are real market data.
 */

const TIMEFRAMES = ['1H', '4H', '1D', '1W'] as const

const STATS = [
  { label: 'Equity', value: 'A$0.00' },
  { label: 'Margin Used', value: 'A$0.00' },
  { label: 'Free Margin', value: 'A$0.00' },
  { label: 'Open Positions', value: '4' },
]

type Props = {
  className?: string
  /** Chart seed, so two panels on one page are not identical. */
  seed?: number
  symbol?: string
  /** Trims the chart and the holdings list to keep the panel shorter. */
  compact?: boolean
}

export function DashboardPreview({ className, seed = 7, symbol = 'BTC / AUD', compact = false }: Props) {
  return (
    <figure
      className={cn(
        'overflow-hidden rounded-2xl border border-ink-700 bg-ink-850 shadow-[0_28px_70px_-26px_rgba(8,28,45,0.55)]',
        className,
      )}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b border-ink-700 bg-ink-900 px-4 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-warn-400/70" />
          <span className="size-2.5 rounded-full bg-brand-400/70" />
          <span className="size-2.5 rounded-full bg-ink-600" />
        </div>
        <span className="hidden min-w-0 flex-1 truncate rounded-md border border-ink-700 bg-ink-950 px-3 py-1 font-mono text-[11px] text-ink-400 sm:block">
          app.skywardinvexa-au.com
        </span>
        <Badge tone="brand">Preview</Badge>
      </div>

      {/* Symbol toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-700 px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="font-display text-sm font-semibold text-heading">{symbol}</span>
          <span className="font-mono text-sm text-ink-300">84,283.99</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-100 px-2 py-0.5 font-mono text-[11px] font-medium text-brand-700">
            <Icon name="chevronDown" className="size-3 rotate-180" />
            0.12%
          </span>
        </div>

        <div className="flex items-center gap-1" aria-hidden="true">
          {TIMEFRAMES.map((frame, index) => (
            <span
              key={frame}
              className={cn(
                'rounded-md px-2 py-1 font-mono text-[11px]',
                index === 2 ? 'bg-ink-800 text-heading' : 'text-ink-400',
              )}
            >
              {frame}
            </span>
          ))}
        </div>
      </div>

      {/* Chart + order book */}
      <div className="grid lg:grid-cols-[1.65fr_1fr]">
        <div className="p-3">
          <CandlestickChart seed={seed} surface="light" count={compact ? 38 : 52} start={84283} />
        </div>

        <div className="border-t border-ink-700 p-4 lg:border-t-0 lg:border-l">
          <DepthLadder seed={seed + 3} />
          <PortfolioPanel className="mt-5" limit={compact ? 3 : undefined} />
        </div>
      </div>

      {/* Account stats */}
      <dl className="grid grid-cols-2 gap-px border-t border-ink-700 bg-ink-700 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-ink-850 px-4 py-3">
            <dt className="text-[10px] tracking-wide text-ink-400 uppercase">{stat.label}</dt>
            <dd className="mt-1 font-mono text-sm font-medium text-heading">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <figcaption className="border-t border-ink-700 bg-ink-900 px-4 py-2.5 text-[10px] leading-relaxed text-ink-400">
        Illustrative interface with generated data. Not live market data and not a projection of
        returns.
      </figcaption>
    </figure>
  )
}
