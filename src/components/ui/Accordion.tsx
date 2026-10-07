import { useId, useState } from 'react'
import { cn } from '@/lib/cn'
import { Icon } from './Icon'

export type AccordionEntry = {
  question: string
  answer: string
  /**
   * Optional section label. The entry carrying it opens a group inside the
   * same list, so a long FAQ stays one accordion (and keeps the one-panel-open
   * rule) instead of becoming seven independent ones.
   */
  group?: string
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

  // Question level follows the group headers: with them the outline needs
  // h3 for a group and h4 for a question, without them h3 is right.
  const grouped = items.some((item) => item.group)
  const QuestionTag = grouped ? 'h4' : 'h3'

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
            {item.group ? (
              <h3 className="bg-ink-900 px-5 pt-6 pb-2 font-display text-xs font-semibold tracking-[0.16em] text-brand-600 uppercase sm:px-6">
                {item.group}
              </h3>
            ) : null}
            <QuestionTag>
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
            </QuestionTag>
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
