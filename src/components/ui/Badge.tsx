import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type BadgeProps = {
  children: ReactNode
  tone?: 'brand' | 'brandOnDark' | 'mint' | 'warn' | 'neutral'
  className?: string
}

const tones = {
  brand: 'border-brand-500/40 bg-brand-600/10 text-brand-700',
  /* For badges placed on the navy hero or terminal. */
  brandOnDark: 'border-brand-400/40 bg-brand-500/20 text-brand-300',
  mint: 'border-mint-400/40 bg-mint-400/10 text-mint-600',
  warn: 'border-warn-400/40 bg-warn-400/10 text-warn-600',
  neutral: 'border-ink-600 bg-ink-800 text-ink-300',
} as const

export function Badge({ children, tone = 'neutral', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
