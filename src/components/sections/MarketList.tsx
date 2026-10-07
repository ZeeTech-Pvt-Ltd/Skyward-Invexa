import { assetClasses } from '@/data/content'
import { Icon } from '@/components/ui/Icon'
import { Sparkline } from '@/components/charts/Sparkline'
import { cn } from '@/lib/cn'

/**
 * The five markets as panels on the navy band.
 *
 * Each panel carries the market's own colour, an illustrative shape generated
 * from a fixed seed, the session hours and the one thing the engine weighs up
 * before it will trade that market. The band breaks the run of white card grids
 * the home page otherwise runs, and the panels are sized 3-then-2 so the last
 * row fills rather than leaving a hole.
 */
export function MarketList() {
  const last = assetClasses.length - 1

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
      {assetClasses.map((assetClass, index) => (
        <li
          key={assetClass.id}
          className={cn(
            'lg:col-span-2',
            index === last - 1 && 'lg:col-span-3',
            index === last && 'sm:col-span-2 lg:col-span-3',
          )}
        >
          <article className="flex h-full flex-col rounded-2xl border border-hero-border bg-hero-surface p-6 transition-colors hover:border-brand-400/45">
            <div className="flex items-start gap-3.5">
              <span
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${assetClass.colour}22`, color: assetClass.colour }}
              >
                <Icon name={assetClass.icon} className="size-5" />
              </span>

              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold text-hero-fg">
                  {assetClass.name}
                </h3>
                <p className="mt-1 flex items-start gap-1.5 text-xs leading-snug text-hero-muted">
                  <Icon name="clock" className="mt-px size-3.5 shrink-0" />
                  <span>{assetClass.session}</span>
                </p>
              </div>
            </div>

            {/* Decorative: the same shape is described in words underneath. */}
            <Sparkline
              seed={assetClass.seed}
              count={32}
              surface="dark"
              className="mt-5 h-11 w-full"
            />

            <p className="mt-4 text-sm leading-relaxed text-hero-muted">{assetClass.summary}</p>

            <ul className="mt-5 mb-5 flex flex-wrap gap-2">
              {assetClass.instruments.map((instrument) => (
                <li
                  key={instrument}
                  className="rounded-full border border-hero-border bg-hero-bg/60 px-3 py-1 text-xs text-hero-fg"
                >
                  {instrument}
                </li>
              ))}
            </ul>

            <p className="mt-auto flex items-start gap-2 border-t border-hero-border pt-4 text-xs leading-relaxed text-hero-muted">
              <Icon name="info" className="mt-0.5 size-3.5 shrink-0 text-brand-300" />
              <span>{assetClass.considers}</span>
            </p>
          </article>
        </li>
      ))}
    </ul>
  )
}
