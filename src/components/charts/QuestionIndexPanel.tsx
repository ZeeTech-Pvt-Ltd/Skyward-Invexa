import { faqs } from '@/data/content'
import { Icon } from '@/components/ui/Icon'

/**
 * The FAQ hero panel: a question mark carrying the count, over a short index
 * of what is on the page. Deliberately no answer text, so it reads as a way
 * into the list below rather than a repeat of it.
 */
export function QuestionIndexPanel() {
  const shown = faqs.slice(0, 3)

  return (
    <div className="rounded-2xl border border-hero-border bg-hero-surface p-6">
      <div className="flex items-center gap-5">
        <span
          aria-hidden="true"
          className="flex size-20 shrink-0 items-center justify-center rounded-2xl border border-brand-400/30 bg-brand-500/15 font-display text-5xl leading-none font-bold text-brand-300"
        >
          ?
        </span>
        <div className="min-w-0">
          <p className="font-display text-2xl leading-none font-semibold text-hero-fg">
            {faqs.length} Questions
          </p>
          <p className="mt-2 text-sm leading-snug text-hero-muted">
            answered on this page, in plain language.
          </p>
        </div>
      </div>

      <ol className="mt-6 space-y-2 border-t border-hero-border pt-5">
        {shown.map((item, index) => (
          <li key={item.question}>
            <a
              href={`#faq-${index}`}
              className="flex items-start gap-3 rounded-xl border border-hero-border px-4 py-2.5 transition-colors hover:border-brand-400/40 hover:bg-hero-bg/40"
            >
              <span className="mt-1 font-mono text-[11px] text-brand-300">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="min-w-0 flex-1 text-sm text-balance text-hero-fg sm:truncate">{item.question}</span>
              <Icon name="chevronDown" className="mt-0.5 size-4 shrink-0 text-hero-muted" />
            </a>
          </li>
        ))}
      </ol>
    </div>
  )
}
