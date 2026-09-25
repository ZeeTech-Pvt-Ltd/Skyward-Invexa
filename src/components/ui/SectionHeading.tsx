import { cn } from '@/lib/cn'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  lead?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <p className="mb-3 font-display text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">{title}</h2>
      {lead ? <p className="mt-4 text-base leading-relaxed text-ink-300 sm:text-lg">{lead}</p> : null}
    </div>
  )
}
