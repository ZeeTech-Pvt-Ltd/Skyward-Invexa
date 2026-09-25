import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'light' | 'outlineLight'
type Size = 'sm' | 'md' | 'lg'

type ButtonProps = {
  children: ReactNode
  /** Internal route. Renders a react-router <Link>. */
  to?: string
  /** External URL or mailto. Renders an <a>. */
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  variant?: Variant
  size?: Size
  className?: string
  disabled?: boolean
  fullWidth?: boolean
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary: 'bg-brand-500 text-on-brand hover:bg-brand-600',
  secondary: 'hairline bg-ink-800/60 text-heading hover:bg-ink-700',
  ghost: 'text-ink-300 hover:text-heading',
  /* For use on the dark hero band only. */
  light: 'bg-hero-fg text-hero-bg hover:bg-white',
  outlineLight: 'border border-hero-border text-hero-fg hover:bg-hero-surface',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className)

  if (to && !disabled) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href && !disabled) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
