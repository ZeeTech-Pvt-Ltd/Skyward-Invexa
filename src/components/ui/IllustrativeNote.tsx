import { cn } from '@/lib/cn'
import { Icon } from './Icon'

/**
 * Marks any figure on the page that is a sample rather than a published fact.
 * Kept deliberately visible. An unflagged placeholder is how placeholder data
 * ends up shipped to production.
 */
export function IllustrativeNote({
  children = 'Figures shown are illustrative examples, not published rates or results. Confirm current values in your account agreement.',
  className,
}: {
  children?: string
  className?: string
}) {
  return (
    <p
      className={cn(
        'flex items-start gap-2.5 text-xs leading-relaxed text-ink-400',
        className,
      )}
    >
      <Icon name="info" className="mt-0.5 size-4 shrink-0 text-ink-400" />
      <span>{children}</span>
    </p>
  )
}
