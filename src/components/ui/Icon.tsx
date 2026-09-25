import type { SVGProps } from 'react'
import type { IconName } from '@/data/content'

/**
 * Inline stroke-based icon set. Keeping icons as local JSX avoids an icon
 * dependency and keeps the bundle free of unused glyphs.
 */
const paths: Record<IconName | ExtraIconName, string[]> = {
  globe: [
    'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z',
    'M3 12h18',
    'M12 3c2.5 2.5 3.8 5.6 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.6-3.8-9S9.5 5.5 12 3Z',
  ],
  chart: ['M4 20V4', 'M4 16l5-5 3.5 3L20 7'],
  shield: ['M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3Z', 'M9 12l2 2 4-4'],
  sliders: [
    'M4 7h9',
    'M18 7h2',
    'M15 5v4',
    'M4 17h3',
    'M12 17h8',
    'M9 15v4',
  ],
  book: [
    'M4 4h6a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5H4Z',
    'M20 4h-6a3 3 0 0 0-3 3v13a2.5 2.5 0 0 1 2.5-2.5H20Z',
  ],
  devices: [
    'M2 6h14v9H2z',
    'M6 19h9',
    'M16 10h4a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 20 20h-4z',
  ],
  bolt: ['M13 3 5 14h6l-1 7 8-11h-6l1-7Z'],
  wallet: ['M3 7.5A2.5 2.5 0 0 1 5.5 5H18v3', 'M3 7.5v9A2.5 2.5 0 0 0 5.5 19H19a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H5.5A2.5 2.5 0 0 1 3 7.5Z', 'M16.5 14h.01'],
  key: ['M11 8a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z', 'M11 8h10', 'M18 8v3', 'M15 8v2'],
  lock: ['M5 10h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z', 'M8 10V7a4 4 0 0 1 8 0v3'],
  alert: ['M12 3 2.5 20h19L12 3Z', 'M12 9.5v4.5', 'M12 17.2h.01'],
  info: ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z', 'M12 11v6', 'M12 7.6h.01'],
  check: ['M5 13l4.5 4.5L19 7'],
  arrowRight: ['M5 12h14', 'M13 6l6 6-6 6'],
  chevronDown: ['M6 9.5l6 6 6-6'],
  search: ['M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z', 'M16.2 16.2 21 21'],
  menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  close: ['M6 6l12 12', 'M18 6 6 18'],
  mail: ['M3 6h18v12H3z', 'M3 7l9 6 9-6'],
  pin: ['M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z', 'M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'],
  clock: ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z', 'M12 7.5V12l3 2'],
}

type ExtraIconName =
  | 'alert'
  | 'info'
  | 'check'
  | 'arrowRight'
  | 'chevronDown'
  | 'search'
  | 'menu'
  | 'close'
  | 'mail'
  | 'pin'
  | 'clock'
  | 'lock'

export type IconProps = {
  name: IconName | ExtraIconName
  className?: string
} & Omit<SVGProps<SVGSVGElement>, 'name'>

export function Icon({ name, className, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {paths[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}
