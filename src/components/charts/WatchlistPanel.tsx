import { ASSETS } from '@/data/assets'
import { CoinBadge } from './CoinBadge'
import { Sparkline } from './Sparkline'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/cn'

/**
 * Watchlist with per-instrument alerts. Stands in for the "same account on
 * every screen" section: a watchlist and its alerts are exactly what follows a
 * client between the terminal and the app.
 *
 * Generated data, labelled wherever it is shown.
 */

const ALERTS: Record<string, string> = {
  BTC: 'Above A$85,000',
  ETH: 'Below A$2,600',
  SOL: 'Move over 2%',
  XAU: 'Below A$3,400',
}

export function WatchlistPanel({ className }: { className?: string }) {
  return (
    <div className={cn('min-w-0', className)}>
      <div className="mb-3 flex items-center justify-between">
        <span className="font-display text-xs font-semibold text-heading">Watchlist</span>
        <span className="flex items-center gap-1.5 rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-medium text-brand-700">
          <Icon name="clock" className="size-3" />
          Synced
        </span>
      </div>

      <ul className="divide-y divide-ink-700">
        {ASSETS.slice(0, 4).map((asset) => (
          <li key={asset.ticker} className="flex items-center gap-2.5 py-2.5">
            <CoinBadge ticker={asset.ticker} colour={asset.colour} />

            <span className="min-w-0 flex-1">
              <span className="block truncate text-xs font-medium text-heading">{asset.name}</span>
              <span className="mt-0.5 flex items-center gap-1 text-[10px] text-ink-400">
                <Icon name="alert" className="size-2.5 shrink-0" />
                {ALERTS[asset.ticker] ?? 'No alert set'}
              </span>
            </span>

            <span className="hidden w-16 shrink-0 sm:block">
              <Sparkline seed={asset.seed} up={asset.up} lineOnly className="h-7 w-16" />
            </span>

            <span className="w-20 shrink-0 text-right">
              <span className="block font-mono text-[11px] text-heading">{asset.price}</span>
              <span
                className={cn(
                  'block font-mono text-[10px]',
                  asset.up ? 'text-brand-700' : 'text-warn-600',
                )}
              >
                {asset.change}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
