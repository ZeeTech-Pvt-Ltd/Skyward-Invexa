import { cn } from '@/lib/cn'

/**
 * Country flags.
 *
 * Served as individual SVG files from /flags/, copied out of the
 * `country-flag-icons` package by `npm run sync:flags`. Serving them as files
 * rather than bundling them keeps roughly 250KB of flag markup out of the
 * JavaScript, and the browser then fetches only the flags on screen and caches
 * them.
 *
 * Self-hosting is deliberate: pulling flags from a CDN such as flagcdn.com
 * would hand a third party every visitor's IP for a decorative element, which
 * is the same problem as an IP geolocation lookup and would make the privacy
 * policy untrue. An earlier version drew flags from a stripe table instead,
 * which was wrong - a stripes-only Pakistan has no crescent or star, and many
 * flags are not stripes at all.
 */

type FlagProps = {
  code: string
  className?: string
  /** Announce the country. Off by default: the name is shown beside it. */
  label?: string
}

export function Flag({ code, className, label }: FlagProps) {
  const iso = String(code ?? '').toUpperCase()
  const isIso = /^[A-Z]{2}$/.test(iso)

  const classes = cn('h-3.5 w-5 shrink-0 rounded-[2px] ring-1 ring-inset ring-black/10', className)

  if (!isIso) {
    return <span className={cn(classes, 'inline-block bg-ink-600')} aria-hidden="true" />
  }

  return (
    <img
      src={`/flags/${iso}.svg`}
      alt={label ?? ''}
      aria-hidden={label ? undefined : true}
      width={20}
      height={14}
      loading="lazy"
      decoding="async"
      className={cn(classes, 'object-cover')}
    />
  )
}
