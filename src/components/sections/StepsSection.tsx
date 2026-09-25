import { steps } from '@/data/content'
import { Icon } from '@/components/ui/Icon'

export function StepsSection() {
  return (
    <ol className="grid gap-px overflow-hidden rounded-card border border-ink-700 bg-ink-700 sm:grid-cols-3">
      {steps.map((step) => (
        <li key={step.step} className="flex flex-col bg-ink-900 p-7">
          <span className="font-mono text-xs font-medium tracking-[0.2em] text-brand-600">
            {step.step}
          </span>
          <h3 className="mt-4 font-display text-lg font-semibold text-heading">{step.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-300">{step.body}</p>
          <p className="mt-6 flex items-start gap-2 border-t border-ink-800 pt-5 text-xs text-ink-400">
            <Icon name="check" className="mt-0.5 size-4 shrink-0 text-mint-600" />
            <span>{step.detail}</span>
          </p>
        </li>
      ))}
    </ol>
  )
}
