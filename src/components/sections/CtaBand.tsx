import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

type CtaBandProps = {
  title?: string
  body?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}

/**
 * Navy band carrying the angular emerald wedge from the brand's card design,
 * so the closing call to action reads as part of the same identity as the hero.
 */
export function CtaBand({
  title = 'Open an Account with Skyward Invexa',
  body = 'Verification, funding and your first order can all be completed from the same dashboard. Support is on hand during AEST business hours if you get stuck.',
  primaryLabel = 'Open an Account',
  primaryTo = '/contact',
  secondaryLabel = 'Ask a Question First',
  secondaryTo = '/contact',
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-hero-bg">
      <div className="glow-hero pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="wedge-accent pointer-events-none absolute inset-0" aria-hidden="true" />

      <Container className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl leading-tight font-semibold text-hero-fg sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-hero-muted">{body}</p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button to={primaryTo} size="lg">
              {primaryLabel}
            </Button>
            <Button to={secondaryTo} variant="outlineLight" size="lg">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
