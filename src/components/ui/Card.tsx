import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type CardProps = {
  children: ReactNode
  className?: string
  interactive?: boolean
}

export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <div
      className={cn(
        'hairline elevate rounded-card bg-ink-850 p-6',
        interactive && 'transition-colors duration-150 hover:border-brand-500/50',
        className,
      )}
    >
      {children}
    </div>
  )
}
