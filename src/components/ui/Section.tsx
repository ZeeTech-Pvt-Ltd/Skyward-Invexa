import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type SectionProps = {
  children: ReactNode
  className?: string
  id?: string
  /** Adds a hairline rule above the section. */
  divided?: boolean
  /** Tighter vertical rhythm, for a band that sits between two prose blocks. */
  size?: 'default' | 'tight'
  tone?: 'base' | 'raised'
}

export function Section({
  children,
  className,
  id,
  divided = false,
  size = 'default',
  tone = 'base',
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        size === 'tight' ? 'py-10 sm:py-12' : 'py-16 sm:py-20 lg:py-24',
        tone === 'raised' && 'bg-ink-900',
        divided && 'border-t border-ink-800',
        className,
      )}
    >
      {children}
    </section>
  )
}
