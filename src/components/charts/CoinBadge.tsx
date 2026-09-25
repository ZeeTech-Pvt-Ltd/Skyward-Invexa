import { cn } from '@/lib/cn'

type Props = {
  ticker: string
  colour: string
  className?: string
}

/** Round badge carrying the asset's initial, in its own brand colour. */
export function CoinBadge({ ticker, colour, className }: Props) {
  return (
    <span
      className={cn(
        'flex size-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white',
        className,
      )}
      style={{ backgroundColor: colour }}
      aria-hidden="true"
    >
      {ticker.charAt(0)}
    </span>
  )
}
