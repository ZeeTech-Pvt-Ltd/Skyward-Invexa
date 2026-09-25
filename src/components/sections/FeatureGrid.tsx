import type { Feature } from '@/data/content'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'

type FeatureGridProps = {
  features: Feature[]
  columns?: 2 | 3
}

export function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  return (
    <ul
      className={
        columns === 2
          ? 'grid gap-5 sm:grid-cols-2'
          : 'grid gap-5 sm:grid-cols-2 lg:grid-cols-3'
      }
    >
      {features.map((feature) => (
        <li key={feature.id}>
          <Card className="h-full" interactive>
            <span className="inline-flex size-11 items-center justify-center rounded-xl border border-brand-500/25 bg-brand-600/10">
              <Icon name={feature.icon} className="size-5 text-brand-600" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-heading">{feature.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-300">{feature.body}</p>
          </Card>
        </li>
      ))}
    </ul>
  )
}
