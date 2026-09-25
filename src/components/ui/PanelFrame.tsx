import type { ReactNode } from 'react'
import type { IconName } from '@/data/content'
import { Icon } from './Icon'
import { cn } from '@/lib/cn'

type PanelFrameProps = {
  children: ReactNode
  /** Corner label describing what the panel shows. Two words reads best. */
  badge: string
  icon: IconName
  /** Sits under the panel in small type. Use it to say data is generated. */
  caption?: string
  className?: string
  /** Drop the inner padding when the child draws its own chrome. */
  flush?: boolean
}

/**
 * Frames a generated visual the way a bezel frames a screen: an outer border, a
 * gap, then an inner border. Used instead of photography everywhere on the
 * site, so every section shows interface rather than a stock image.
 */
export function PanelFrame({
  children,
  badge,
  icon,
  caption,
  className,
  flush = false,
}: PanelFrameProps) {
  return (
    <figure className={cn('relative', className)}>
      <div className="rounded-2xl border border-ink-700 bg-ink-850 p-2 shadow-[0_24px_60px_-24px_rgba(8,28,45,0.45)]">
        <div
          className={cn(
            'overflow-hidden rounded-xl border border-ink-700 bg-ink-850',
            !flush && 'p-3 sm:p-4',
          )}
        >
          {children}
        </div>
      </div>

      <span className="absolute -top-3.5 right-5 flex items-center gap-1.5 rounded-lg border border-brand-600 bg-brand-500 px-3 py-1.5 shadow-lg">
        <Icon name={icon} className="size-3.5 text-on-brand" />
        <span className="text-[11px] font-semibold text-on-brand">{badge}</span>
      </span>

      {caption ? (
        <figcaption className="mt-3 text-xs leading-relaxed text-ink-400">{caption}</figcaption>
      ) : null}
    </figure>
  )
}
