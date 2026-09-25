import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/cn'

type DarkPageHeroProps = {
  eyebrow: string
  title: string
  lead: string
  /**
   * Optional panel beside the copy. A hero with a panel uses the two-column
   * layout; one without falls back to a single measured column.
   */
  aside?: ReactNode
  children?: ReactNode
}

/**
 * The navy hero used on inner pages, matching the home and about bands: same
 * glow, same blueprint grid, same type scale. Pages that carried only the pale
 * text hero did not read as heroes at all.
 */
export function DarkPageHero({ eyebrow, title, lead, aside, children }: DarkPageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-hero-border bg-hero-bg">
      <div className="glow-hero pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />

      <Container className="relative py-16 sm:py-20 lg:flex lg:min-h-[34rem] lg:items-center lg:py-24">
        <div
          className={cn(
            'grid w-full items-center gap-12',
            Boolean(aside) && 'lg:grid-cols-[1.15fr_0.85fr] lg:gap-16',
          )}
        >
          <div>
            <p className="font-display text-xs font-semibold tracking-[0.18em] text-brand-300 uppercase">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-3xl leading-[1.1] font-semibold tracking-tight text-hero-fg sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-hero-muted sm:text-lg">
              {lead}
            </p>
            {children}
          </div>

          {aside}
        </div>
      </Container>
    </section>
  )
}
