import { Link } from 'react-router-dom'
import { site } from '@/data/site'
import { cn } from '@/lib/cn'

/**
 * A bold angular up-arrow, folded along its centre line. The flat shoulders and
 * the hard diagonal echo the wedge shapes in the brand's card design; the fold
 * gives it depth without a gradient.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn('shrink-0', className)}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="invexa-mark" x1="0" y1="64" x2="64" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#124a3b" />
          <stop offset="0.5" stopColor="#1f7a63" />
          <stop offset="1" stopColor="#3a9c7e" />
        </linearGradient>
      </defs>

      <rect width="64" height="64" rx="12" fill="url(#invexa-mark)" />

      {/* Arrow, whole shape */}
      <path d="M32 11 L54 35 H39 V53 H25 V35 H10 Z" fill="#f5f7fa" />
      {/* Right half folded a shade darker, so the mark reads as faceted */}
      <path d="M32 11 L54 35 H39 V53 H32 Z" fill="#a9cfc2" />
    </svg>
  )
}

type LogoProps = {
  className?: string
  /** Renders light-on-dark, for when the navbar floats over the hero. */
  inverted?: boolean
}

export function Logo({ className, inverted = false }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label={`${site.name} home`}
      className={cn('group inline-flex items-center gap-2.5', className)}
    >
      <LogoMark className="size-9" />

      <span
        className={cn(
          'font-display text-[1.05rem] leading-none font-semibold tracking-tight',
          inverted ? 'text-hero-fg' : 'text-heading',
        )}
      >
        Skyward
        <span
          className={cn(
            'ml-1 transition-colors',
            inverted
              ? 'text-brand-300 group-hover:text-brand-200'
              : 'text-brand-600 group-hover:text-brand-500',
          )}
        >
          Invexa
        </span>
      </span>
    </Link>
  )
}
