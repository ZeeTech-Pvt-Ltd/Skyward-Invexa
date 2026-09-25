import { ASSETS, FEATURED, type Asset } from '@/data/assets'
import { CoinBadge } from './CoinBadge'
import { Sparkline } from './Sparkline'
import { cn } from '@/lib/cn'

/**
 * The hero visual: asset cards with area charts beside a portfolio list.
 *
 * Laid out after the client's reference card. Every figure is generated and
 * the caption underneath says so, because a reader could otherwise take the
 * numbers for a live account.
 */

const card = 'rounded-2xl border border-ink-700 bg-ink-850 shadow-[0_18px_44px_-22px_rgba(8,28,45,0.5)]'

function AssetCard({ asset }: { asset: Asset }) {
  return (
    <div className={cn(card, 'p-4')}>
      <div className="flex items-center gap-2.5">
        <CoinBadge ticker={asset.ticker} colour={asset.colour} />
        <span className="min-w-0">
          <span className="block truncate text-xs font-semibold text-heading">{asset.name}</span>
          <span className="block font-mono text-[10px] text-ink-400">{asset.ticker}</span>
        </span>
      </div>

      <p className="mt-3 font-display text-lg leading-none font-semibold text-heading">
        {asset.price}
      </p>

      <span
        className={cn(
          'mt-1.5 inline-block rounded-md px-1.5 py-0.5 font-mono text-[10px] font-medium',
          asset.up ? 'bg-brand-100 text-brand-700' : 'bg-warn-200 text-warn-600',
        )}
      >
        {asset.change}
      </span>

      <Sparkline seed={asset.seed} up={asset.up} className="mt-1" />
    </div>
  )
}

export function HeroShowcase({ className }: { className?: string }) {
  return (
    <figure className={cn('relative', className)}>
      <div className="grid gap-3 sm:grid-cols-[1fr_0.92fr]">
        {/* Portfolio */}
        <div className={cn(card, 'p-4')}>
          <div className="mb-3 flex items-center justify-between">
            <span className="font-display text-xs font-semibold text-heading">My Portfolio</span>
            <span aria-hidden="true" className="flex gap-0.5">
              <span className="size-1 rounded-full bg-ink-600" />
              <span className="size-1 rounded-full bg-ink-600" />
              <span className="size-1 rounded-full bg-ink-600" />
            </span>
          </div>

          <ul className="space-y-2.5">
            {ASSETS.map((asset) => (
              <li key={asset.ticker} className="flex items-center gap-2.5">
                <CoinBadge ticker={asset.ticker} colour={asset.colour} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-xs font-medium text-heading">
                    {asset.name}
                  </span>
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

        {/* Two featured assets */}
        <div className="grid content-start gap-3">
          {FEATURED.map((asset) => (
            <AssetCard key={asset.ticker} asset={asset} />
          ))}
        </div>
      </div>

    </figure>
  )
}
