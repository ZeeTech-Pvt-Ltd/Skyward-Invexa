import { assetClasses } from '@/data/content'
import { Icon } from '@/components/ui/Icon'
import { Sparkline } from './Sparkline'

/**
 * Two compact navy panels used beside the copy on the inner marketing pages.
 * Both are built from the site's own data, and both sit on the dark hero
 * surface, so they use the dark end of the emerald ramp.
 */

/** A stack of labelled trend shapes. Every line is generated, not market data. */
export function SparkPanel({
  title,
  items,
  footnote,
}: {
  title: string
  items: { label: string; seed: number; value: string }[]
  footnote?: string
}) {
  return (
    <div className="rounded-2xl border border-hero-border bg-hero-surface p-6">
      <p className="font-display text-xs font-semibold tracking-[0.16em] text-brand-300 uppercase">
        {title}
      </p>

      <ul className="mt-5 space-y-4">
        {items.map((item) => (
          <li key={item.label}>
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-sm font-medium text-hero-fg">{item.label}</span>
              <span className="font-mono text-xs text-hero-muted">{item.value}</span>
            </div>
            <Sparkline seed={item.seed} count={30} surface="dark" className="mt-1.5 h-8 w-full" />
          </li>
        ))}
      </ul>

      {footnote ? (
        <p className="mt-5 border-t border-hero-border pt-4 text-xs leading-relaxed text-hero-muted">
          {footnote}
        </p>
      ) : null}
    </div>
  )
}

/** The five markets, condensed for a hero column. */
export function MarketMiniPanel({ title = 'Coverage' }: { title?: string }) {
  return (
    <div className="rounded-2xl border border-hero-border bg-hero-surface p-6">
      <p className="font-display text-xs font-semibold tracking-[0.16em] text-brand-300 uppercase">
        {title}
      </p>

      <ul className="mt-5 space-y-3">
        {assetClasses.map((assetClass) => (
          <li key={assetClass.id} className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="size-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: assetClass.colour }}
            />
            <span className="min-w-0 flex-1 truncate text-sm font-medium text-hero-fg">
              {assetClass.name}
            </span>
            <span className="shrink-0 font-mono text-[11px] text-hero-muted">
              {assetClass.instruments[0]}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-5 flex items-center gap-2 border-t border-hero-border pt-4 text-xs text-hero-muted">
        <Icon name="globe" className="size-3.5 shrink-0 text-brand-300" />
        One account, five markets
      </p>
    </div>
  )
}
