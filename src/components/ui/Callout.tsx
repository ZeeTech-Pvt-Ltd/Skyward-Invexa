import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Icon } from './Icon'

type CalloutProps = {
  children: ReactNode
  title?: string
  tone?: 'warn' | 'info' | 'neutral'
  className?: string
}

const tones = {
  warn: {
    wrap: 'border-warn-400/35 bg-warn-400/[0.06]',
    title: 'text-warn-600',
    icon: 'text-warn-600',
    glyph: 'alert' as const,
  },
  info: {
    wrap: 'border-brand-500/35 bg-brand-600/[0.06]',
    title: 'text-brand-700',
    icon: 'text-brand-600',
    glyph: 'info' as const,
  },
  neutral: {
    wrap: 'border-ink-600 bg-ink-900/70',
    title: 'text-heading',
    icon: 'text-ink-400',
    glyph: 'info' as const,
  },
}

export function Callout({ children, title, tone = 'info', className }: CalloutProps) {
  const style = tones[tone]

  return (
    <div className={cn('flex gap-4 rounded-card border p-5', style.wrap, className)}>
      <Icon name={style.glyph} className={cn('mt-0.5 size-5 shrink-0', style.icon)} />
      <div className="text-sm leading-relaxed text-ink-300">
        {title ? <p className={cn('mb-1.5 font-display font-semibold', style.title)}>{title}</p> : null}
        {children}
      </div>
    </div>
  )
}
