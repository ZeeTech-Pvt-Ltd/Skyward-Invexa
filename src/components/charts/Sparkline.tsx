import { useId } from 'react'
import { normalise, spark } from '@/lib/chartData'
import { cn } from '@/lib/cn'

const W = 120
const H = 36

type Props = {
  seed?: number
  count?: number
  up?: boolean
  className?: string
  /** Hides the filled area, leaving just the line. */
  lineOnly?: boolean
}

/**
 * A trend line with a filled area underneath. Generated from a fixed seed, so
 * it renders identically on every pass and hydrates without a mismatch.
 */
export function Sparkline({ seed = 3, count = 24, up = true, className, lineOnly = false }: Props) {
  const gradientId = useId()
  const values = normalise(spark(seed, count))

  const stroke = up ? 'var(--color-brand-500)' : 'var(--color-warn-400)'

  const points = values
    .map((value, index) => `${(index / (count - 1)) * W},${H - 3 - value * (H - 8)}`)
    .join(' ')

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={cn('h-9', className ?? 'w-full')}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
    >
      {!lineOnly ? (
        <>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={stroke} stopOpacity="0.28" />
              <stop offset="100%" stopColor={stroke} stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <polygon points={`0,${H} ${points} ${W},${H}`} fill={`url(#${gradientId})`} />
        </>
      ) : null}

      <polyline
        points={points}
        fill="none"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
