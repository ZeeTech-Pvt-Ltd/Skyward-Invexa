import { assetClasses } from '@/data/content'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'

type MarketCardsProps = {
  /** Render only the first N asset classes. */
  limit?: number
}

export function MarketCards({ limit }: MarketCardsProps) {
  const shown = typeof limit === 'number' ? assetClasses.slice(0, limit) : assetClasses

  return (
    <ul className="grid gap-5 md:grid-cols-2">
      {shown.map((assetClass) => (
        <li key={assetClass.id}>
          <Card className="flex h-full flex-col">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-lg font-semibold text-heading">{assetClass.name}</h3>
              <Badge tone="neutral">CFD / Cash</Badge>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-ink-300">{assetClass.summary}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {assetClass.instruments.map((instrument) => (
                <li
                  key={instrument}
                  className="rounded-full border border-ink-700 bg-ink-900 px-2.5 py-1 font-mono text-xs text-ink-300"
                >
                  {instrument}
                </li>
              ))}
            </ul>

            <dl className="mt-6 space-y-3 border-t border-ink-800 pt-5 text-xs">
              <div className="flex items-start gap-2.5">
                <dt className="flex shrink-0 items-center gap-1.5 text-ink-400">
                  <Icon name="clock" className="size-3.5" />
                  Session
                </dt>
                <dd className="text-right text-ink-300">{assetClass.session}</dd>
              </div>
              <div className="flex items-start gap-2.5">
                <dt className="flex shrink-0 items-center gap-1.5 text-ink-400">
                  <Icon name="alert" className="size-3.5" />
                  Consider
                </dt>
                <dd className="text-right text-ink-300">{assetClass.considers}</dd>
              </div>
            </dl>
          </Card>
        </li>
      ))}
    </ul>
  )
}
