import { depth } from '@/lib/chartData'
import { cn } from '@/lib/cn'

/**
 * Order-book depth ladder: asks stacked above the mid, bids below. Bar widths
 * come from a seeded generator, so the panel is stable rather than flickering
 * on every render.
 */

type Row = { label: string; size: number; price: string }

function ladder(seed: number, side: 'ask' | 'bid', base: number): Row[] {
  const sizes = depth(seed, 5)
  return sizes.map((size, index) => {
    const offset = (index + 1) * 7.5
    const price = side === 'ask' ? base + offset : base - offset
    return {
      label: `${side === 'ask' ? 'Ask' : 'Bid'} ${index + 1}`,
      size,
      price: price.toFixed(2),
    }
  })
}

type Props = {
  seed?: number
  mid?: number
  className?: string
}

export function DepthLadder({ seed = 11, mid = 84283.99, className }: Props) {
  const asks = ladder(seed, 'ask', mid).reverse()
  const bids = ladder(seed + 5, 'bid', mid)

  const row = (entry: Row, side: 'ask' | 'bid') => (
    <li key={entry.label} className="relative flex items-center justify-between py-[3px]">
      {/* Depth bar sits behind the text, widening with size. */}
      <span
        className={cn(
          'absolute inset-y-0 right-0 rounded-[3px]',
          side === 'ask' ? 'bg-warn-400/15' : 'bg-brand-500/15',
        )}
        style={{ width: `${Math.round(entry.size * 100)}%` }}
        aria-hidden="true"
      />
      <span className="relative font-mono text-[11px] text-ink-400">{entry.price}</span>
      <span
        className={cn(
          'relative font-mono text-[11px]',
          side === 'ask' ? 'text-warn-600' : 'text-brand-700',
        )}
      >
        {(entry.size * 4.2).toFixed(3)}
      </span>
    </li>
  )

  return (
    <div className={cn('min-w-0', className)}>
      <p className="mb-1.5 font-display text-[11px] font-semibold tracking-wide text-ink-400 uppercase">
        Order Book
      </p>

      <ul className="space-y-px">{asks.map((entry) => row(entry, 'ask'))}</ul>

      <div className="my-1.5 flex items-center justify-between border-y border-ink-700 py-1.5">
        <span className="font-mono text-xs font-semibold text-heading">
          {mid.toLocaleString('en-AU')}
        </span>
        <span className="text-[10px] text-ink-400">Spread 0.6</span>
      </div>

      <ul className="space-y-px">{bids.map((entry) => row(entry, 'bid'))}</ul>
    </div>
  )
}
