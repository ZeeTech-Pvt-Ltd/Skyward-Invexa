import { useId, useState } from 'react'
import { cn } from '@/lib/cn'
import { Icon } from './Icon'

export type AccordionEntry = {
  question: string
  answer: string
}

type AccordionProps = {
  items: AccordionEntry[]
  /** Index open on first render. Defaults to all closed. */
  defaultOpen?: number | null
  /** When set, each item is given an id of the form "<prefix>-<index>". */
  idPrefix?: string
  className?: string
}

export function Accordion({ items, defaultOpen = null, idPrefix, className }: AccordionProps) {
  // One panel at a time: opening a question closes whichever was open, so the
  // list never grows long enough to push the next section off screen.
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen)
  const baseId = useId()

  return (
    <div
      className={cn(
        'divide-y divide-ink-700 overflow-hidden rounded-card border border-ink-700 bg-ink-900/60',
        className,
      )}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `${baseId}-panel-${index}`
        const buttonId = `${baseId}-button-${index}`

        return (
          <div key={item.question} id={idPrefix ? `${idPrefix}-${index}` : undefined} className="scroll-mt-28">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-ink-800/60 sm:px-6"
              >
                <span className="font-display text-base font-medium text-heading sm:text-lg">
                  {item.question}
                </span>
                <Icon
                  name="chevronDown"
                  className={cn(
                    'size-5 shrink-0 text-brand-600 transition-transform duration-200',
                    isOpen && 'rotate-180',
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-6 sm:px-6"
            >
              <p className="max-w-3xl leading-relaxed text-ink-300">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
