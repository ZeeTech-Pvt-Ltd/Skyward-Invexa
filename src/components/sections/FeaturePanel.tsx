import type { ReactNode } from 'react'
import type { IconName } from '@/data/content'
import { PanelFrame } from '@/components/ui/PanelFrame'
import { cn } from '@/lib/cn'

type FeaturePanelProps = {
  /** The generated visual. Never a photograph. */
  visual: ReactNode
  badge: string
  icon: IconName
  /** Optional note under the panel. */
  caption?: string
  eyebrow: string
  title: string
  body: string
  /** Put the panel on the right instead of the left. */
  flip?: boolean
  /** Shown under the copy. */
  children?: ReactNode
  className?: string
}

/**
 * Two-column copy + panel block. Replaces the earlier photo-based block: the
 * brief rules out stock photography of a trading floor, so every one of these
 * carries a drawn interface instead.
 */
export function FeaturePanel({
  visual,
  badge,
  icon,
  caption,
  eyebrow,
  title,
  body,
  flip = false,
  children,
  className,
}: FeaturePanelProps) {
  return (
    <div className={cn('grid items-center gap-12 lg:grid-cols-2 lg:gap-16', className)}>
      <div className={cn(flip && 'lg:order-2')}>
        <PanelFrame badge={badge} icon={icon} caption={caption}>
          {visual}
        </PanelFrame>
      </div>

      <div className={cn(flip && 'lg:order-1')}>
        <p className="mb-3 font-display text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase">
          {eyebrow}
        </p>
        <h2 className="text-2xl leading-tight font-semibold sm:text-3xl lg:text-4xl">{title}</h2>
        <p className="mt-4 text-base leading-relaxed text-ink-400">{body}</p>
        {children ? <div className="mt-7">{children}</div> : null}
      </div>
    </div>
  )
}
