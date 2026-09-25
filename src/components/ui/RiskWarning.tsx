import { riskWarning } from '@/data/site'
import { cn } from '@/lib/cn'
import { Container } from './Container'
import { Icon } from './Icon'

type RiskWarningProps = {
  className?: string
  /** Full-width band with its own container, or a bare block for use inside a page. */
  standalone?: boolean
}

export function RiskWarning({ className, standalone = false }: RiskWarningProps) {
  const block = (
    <div
      className={cn(
        'rounded-card border border-warn-400/30 bg-warn-400/[0.05] p-6 sm:p-7',
        className,
      )}
    >
      <div className="flex items-start gap-4">
        <Icon name="alert" className="mt-0.5 size-5 shrink-0 text-warn-600" />
        <div>
          <h2 className="font-display text-base font-semibold text-warn-600">
            {riskWarning.heading}
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-ink-300">{riskWarning.body}</p>
        </div>
      </div>
    </div>
  )

  if (!standalone) return block

  return (
    <section className="border-t border-ink-800 bg-ink-950 py-12">
      <Container>{block}</Container>
    </section>
  )
}
