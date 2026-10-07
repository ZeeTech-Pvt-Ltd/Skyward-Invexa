import { trustBar } from '@/data/content'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'

/**
 * A slim strip of product facts directly under the ticker.
 *
 * Every item has to be something the platform actually does. No partner
 * claims, no licensing claims and no guarantee language, because none of those
 * can be verified from here.
 */
export function TrustBar() {
  return (
    <section className="border-b border-ink-700 bg-ink-900">
      <Container className="py-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustBar.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-ink-400">
              <Icon name="check" className="size-4 shrink-0 text-brand-600" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
