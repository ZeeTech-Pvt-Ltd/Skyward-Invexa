import type { FaqItem } from '@/data/content'
import { Accordion } from '@/components/ui/Accordion'

type FaqSectionProps = {
  items: FaqItem[]
  /** Index open on first render. */
  defaultOpen?: number | null
  /** Anchor prefix, so a hero index can link to each question. */
  idPrefix?: string
}

export function FaqSection({ items, defaultOpen = null, idPrefix }: FaqSectionProps) {
  return <Accordion items={items} defaultOpen={defaultOpen} idPrefix={idPrefix} />
}
