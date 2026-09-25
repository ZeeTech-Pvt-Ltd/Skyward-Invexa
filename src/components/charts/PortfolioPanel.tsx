import { ASSETS } from '@/data/assets'
import { CoinBadge } from './CoinBadge'
import { cn } from '@/lib/cn'

/**
 * A holdings list, styled after the client's reference card.
 *
 * Badge colours are the assets' own brand colours, the same way the country
 * picker uses real flag colours: they identify the instrument, they are not
 * part of the site's palette.
 *
 * The values are generated and the panel that contains this says so. They are
 * not account data and not a projection of returns.
 */
export function PortfolioPanel({
  title = 'Portfolio',
  className,
  limit,
}: {
  title?: string
  className?: string
  /** Show only the first N holdings. Omit for the full list. */
  limit?: number
}) {
  const holdings = typeof limit === 'number' ? ASSETS.slice(0, limit) : ASSETS

  return (
    <div className={cn('min-w-0', className)}>
      <div className="mb-2 flex items-center justify-between">
        <p className="font-display text-[11px] font-semibold tracking-wide text-ink-400 uppercase">
          {title}
        </p>
        <span aria-hidden="true" className="font-mono text-[11px] text-ink-400">
          AUD
        </span>
      </div>

      <ul className="space-y-1.5">
        {holdings.map((asset) => (
          <li key={asset.ticker} className="flex items-center gap-2.5">
            <CoinBadge ticker={asset.ticker} colour={asset.colour} />

            <span className="min-w-0 flex-1">
              <span className="block truncate text-xs font-medium text-heading">{asset.name}</span>
              <span className="block font-mono text-[10px] text-ink-400">{asset.ticker}</span>
            </span>

            <span className="shrink-0 text-right">
              <span className="block font-mono text-[11px] text-heading">{asset.holding}</span>
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
