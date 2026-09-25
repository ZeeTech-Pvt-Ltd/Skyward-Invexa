import { heroFacts } from '@/data/content'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'

/**
 * The four product facts, on their own band below the hero rather than inside
 * it. Dividers are drawn with a one-pixel grid gap over a border-coloured
 * background, which avoids double borders where the cells meet.
 */
export function StatStrip() {
  return (
    <section className="border-b border-ink-700 bg-ink-950">
      <Container className="py-10 sm:py-12">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-ink-700 bg-ink-700 sm:grid-cols-4">
          {heroFacts.map((fact) => (
            <div key={fact.label} className="bg-ink-850 px-6 py-7">
              <Icon name={fact.icon} className="size-5 text-brand-600" />
              <dt className="sr-only">{fact.label}</dt>
              <dd>
                <span className="mt-4 block font-display text-3xl font-semibold text-heading">
                  {fact.value}
                </span>
                <span className="mt-2 block text-sm leading-snug text-ink-400">{fact.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
