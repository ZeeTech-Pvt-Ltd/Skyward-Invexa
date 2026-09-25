import { Badge } from '@/components/ui/Badge'
import { Icon } from '@/components/ui/Icon'

/**
 * A static representation of the order ticket. It shows the fields a trader
 * fills in, deliberately not a profit figure, balance or result.
 */
export function OrderTicketMock({ className }: { className?: string }) {
  const rows = [
    { label: 'Instrument', value: 'BTC / AUD', muted: false },
    { label: 'Order type', value: 'Limit', muted: false },
    { label: 'Quantity', value: '0.0150 BTC', muted: false },
    { label: 'Limit price', value: 'A$0.00', muted: true },
    { label: 'Estimated cost', value: 'A$0.00', muted: true },
    { label: 'Stop-loss', value: 'Attached', muted: false },
  ]

  return (
    <div
      className={`elevate hairline overflow-hidden rounded-card bg-ink-850 ${className ?? ''}`}
    >
      <div className="flex items-center justify-between border-b border-ink-700 bg-ink-900 px-5 py-4">
        <div className="flex items-center gap-2.5">
          <Icon name="bolt" className="size-4 text-brand-600" />
          <span className="font-display text-sm font-semibold text-heading">Order Ticket</span>
        </div>
        <Badge tone="brand">Preview</Badge>
      </div>

      <dl className="divide-y divide-ink-700">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-6 px-5 py-3.5">
            <dt className="text-sm text-ink-400">{row.label}</dt>
            <dd
              className={
                row.muted
                  ? 'font-mono text-sm text-ink-400 italic'
                  : 'font-mono text-sm font-medium text-heading'
              }
            >
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="border-t border-ink-700 p-5">
        <div className="flex items-center justify-between rounded-xl border border-brand-500/30 bg-brand-100/60 px-4 py-3">
          <span className="flex items-center gap-2 text-xs text-brand-700">
            <Icon name="shield" className="size-4" />
            Risk check
          </span>
          <span className="text-xs font-medium text-brand-700">Within your limit</span>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-ink-400">
          Blank values are entered by the trader. The ticket shows your estimated cost and risk
          check before you confirm. It never predicts an outcome.
        </p>
      </div>
    </div>
  )
}
