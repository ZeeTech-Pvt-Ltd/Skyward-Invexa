import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

/**
 * Flags drawn as inline SVG.
 *
 * No flag CDN is used. Loading flag images from flagcdn.com would hand a third
 * party every visitor's IP for a decorative element, which is the same problem
 * as an IP geolocation lookup and would make the privacy policy untrue.
 *
 * Most flags are stripes, so those are generated from a compact table. A few
 * with distinctive emblems are hand-drawn. Anything not covered falls back to
 * a neutral plate: the flag is decorative here, and the country name and dial
 * code are both shown beside it.
 */

type Stripe = { dir: 'h' | 'v'; colors: string[] }

const STRIPES: Record<string, Stripe> = {
  // horizontal, top to bottom
  DE: { dir: 'h', colors: ['#000000', '#dd0000', '#ffce00'] },
  NL: { dir: 'h', colors: ['#ae1c28', '#ffffff', '#21468b'] },
  LU: { dir: 'h', colors: ['#ed2939', '#ffffff', '#00a1de'] },
  AT: { dir: 'h', colors: ['#ed2939', '#ffffff', '#ed2939'] },
  ID: { dir: 'h', colors: ['#ce1126', '#ffffff'] },
  PL: { dir: 'h', colors: ['#ffffff', '#dc143c'] },
  UA: { dir: 'h', colors: ['#0057b7', '#ffd700'] },
  RU: { dir: 'h', colors: ['#ffffff', '#0039a6', '#d52b1e'] },
  BG: { dir: 'h', colors: ['#ffffff', '#00966e', '#d62612'] },
  HU: { dir: 'h', colors: ['#ce2939', '#ffffff', '#477050'] },
  IN: { dir: 'h', colors: ['#ff9933', '#ffffff', '#138808'] },
  ES: { dir: 'h', colors: ['#aa151b', '#f1bf00', '#aa151b'] },
  CO: { dir: 'h', colors: ['#fcd116', '#003893', '#ce1126'] },
  EC: { dir: 'h', colors: ['#fcd116', '#003893', '#ce1126'] },
  VE: { dir: 'h', colors: ['#ffce00', '#00247d', '#cf142b'] },
  AM: { dir: 'h', colors: ['#d90012', '#0033a0', '#f2a800'] },
  LT: { dir: 'h', colors: ['#fdb913', '#006a44', '#c1272d'] },
  LV: { dir: 'h', colors: ['#9e3039', '#ffffff', '#9e3039'] },
  EE: { dir: 'h', colors: ['#0072ce', '#000000', '#ffffff'] },
  SI: { dir: 'h', colors: ['#ffffff', '#005da4', '#ed1c24'] },
  HR: { dir: 'h', colors: ['#ff0000', '#ffffff', '#171796'] },
  RS: { dir: 'h', colors: ['#c6363c', '#0c4076', '#ffffff'] },
  SK: { dir: 'h', colors: ['#ffffff', '#0b4ea2', '#ee1c25'] },
  CZ: { dir: 'h', colors: ['#ffffff', '#d7141a'] },
  EG: { dir: 'h', colors: ['#ce1126', '#ffffff', '#000000'] },
  JO: { dir: 'h', colors: ['#000000', '#ffffff', '#007a3d'] },
  LB: { dir: 'h', colors: ['#ed1c24', '#ffffff', '#ed1c24'] },
  IQ: { dir: 'h', colors: ['#ce1126', '#ffffff', '#000000'] },
  TR: { dir: 'h', colors: ['#e30a17', '#ffffff', '#e30a17'] },
  AR: { dir: 'h', colors: ['#74acdf', '#ffffff', '#74acdf'] },
  TH: { dir: 'h', colors: ['#a51931', '#f4f5f8', '#2d2a4a', '#f4f5f8', '#a51931'] },
  CR: { dir: 'h', colors: ['#002b7f', '#ffffff', '#ce1126', '#ffffff', '#002b7f'] },
  GR: { dir: 'h', colors: ['#0d5eaf', '#ffffff', '#0d5eaf', '#ffffff', '#0d5eaf'] },
  CU: { dir: 'h', colors: ['#002a8f', '#ffffff', '#002a8f', '#ffffff', '#002a8f'] },
  // vertical, hoist to fly
  IE: { dir: 'v', colors: ['#169b62', '#ffffff', '#ff883e'] },
  IT: { dir: 'v', colors: ['#009246', '#ffffff', '#ce2b37'] },
  FR: { dir: 'v', colors: ['#002395', '#ffffff', '#ed2939'] },
  BE: { dir: 'v', colors: ['#000000', '#fdda24', '#ef3340'] },
  RO: { dir: 'v', colors: ['#002b7f', '#fcd116', '#ce1126'] },
  NG: { dir: 'v', colors: ['#008751', '#ffffff', '#008751'] },
  CI: { dir: 'v', colors: ['#f77f00', '#ffffff', '#009e60'] },
  MX: { dir: 'v', colors: ['#006847', '#ffffff', '#ce1126'] },
  PE: { dir: 'v', colors: ['#d91023', '#ffffff', '#d91023'] },
  QA: { dir: 'v', colors: ['#ffffff', '#8a1538'] },
  AE: { dir: 'h', colors: ['#00732f', '#ffffff', '#000000'] },
  CA: { dir: 'v', colors: ['#ff0000', '#ffffff', '#ff0000'] },
  MT: { dir: 'v', colors: ['#ffffff', '#cf142b'] },
  FI: { dir: 'h', colors: ['#ffffff', '#003580', '#ffffff'] },
  PK: { dir: 'v', colors: ['#ffffff', '#046a38', '#046a38', '#046a38'] },
  SA: { dir: 'h', colors: ['#165d31'] },
  MY: { dir: 'h', colors: ['#cc0001', '#ffffff', '#cc0001', '#ffffff', '#cc0001', '#ffffff', '#010066'] },
  BD: { dir: 'h', colors: ['#006a4e'] },
  VN: { dir: 'h', colors: ['#da251d'] },
  CN: { dir: 'h', colors: ['#de2910'] },
}

const W = 20
const H = 14

function stripes({ dir, colors }: Stripe): ReactNode {
  const size = (dir === 'h' ? H : W) / colors.length
  return colors.map((fill, index) => (
    <rect
      key={`${fill}-${index}`}
      x={dir === 'h' ? 0 : index * size}
      y={dir === 'h' ? index * size : 0}
      width={dir === 'h' ? W : size}
      height={dir === 'h' ? size : H}
      fill={fill}
    />
  ))
}

/** Hand-drawn, because a stripe table cannot express these. */
const DRAWN: Record<string, ReactNode> = {
  AU: (
    <>
      <rect width={W} height={H} fill="#00247d" />
      <path d="M0 0 L10 7 M10 0 L0 7" stroke="#fff" strokeWidth="1.3" />
      <path d="M5 0 V7 M0 3.5 H10" stroke="#fff" strokeWidth="2.2" />
      <path d="M5 0 V7 M0 3.5 H10" stroke="#cf142b" strokeWidth="1.1" />
      <circle cx="5" cy="10.6" r="1.1" fill="#fff" />
      <circle cx="15" cy="3" r="0.75" fill="#fff" />
      <circle cx="17" cy="6.6" r="0.75" fill="#fff" />
      <circle cx="14.6" cy="10.2" r="0.75" fill="#fff" />
      <circle cx="12.4" cy="5.9" r="0.55" fill="#fff" />
    </>
  ),
  NZ: (
    <>
      <rect width={W} height={H} fill="#00247d" />
      <path d="M0 0 L10 7 M10 0 L0 7" stroke="#fff" strokeWidth="1.3" />
      <path d="M5 0 V7 M0 3.5 H10" stroke="#fff" strokeWidth="2.2" />
      <path d="M5 0 V7 M0 3.5 H10" stroke="#cf142b" strokeWidth="1.1" />
      <circle cx="14.8" cy="3.2" r="0.9" fill="#cf142b" stroke="#fff" strokeWidth="0.35" />
      <circle cx="17.2" cy="6.4" r="0.9" fill="#cf142b" stroke="#fff" strokeWidth="0.35" />
      <circle cx="14.4" cy="10.2" r="0.9" fill="#cf142b" stroke="#fff" strokeWidth="0.35" />
      <circle cx="16.6" cy="11.6" r="0.7" fill="#cf142b" stroke="#fff" strokeWidth="0.35" />
    </>
  ),
  GB: (
    <>
      <rect width={W} height={H} fill="#00247d" />
      <path d="M0 0 L20 14 M20 0 L0 14" stroke="#fff" strokeWidth="2.8" />
      <path d="M0 0 L20 14 M20 0 L0 14" stroke="#cf142b" strokeWidth="1.5" />
      <path d="M10 0 V14 M0 7 H20" stroke="#fff" strokeWidth="4.6" />
      <path d="M10 0 V14 M0 7 H20" stroke="#cf142b" strokeWidth="2.6" />
    </>
  ),
  US: (
    <>
      <rect width={W} height={H} fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((y) => (
        <rect key={y} y={y * 1.077} width={W} height="1.077" fill="#b22234" />
      ))}
      <rect width="9" height="7.54" fill="#3c3b6e" />
      {[1, 3, 5, 7, 2, 4, 6].map((x, index) => (
        <circle key={`${x}-${index}`} cx={x} cy={index > 3 ? 3.5 : 2} r="0.45" fill="#fff" />
      ))}
    </>
  ),
  SG: (
    <>
      <rect width={W} height="7" fill="#ed2939" />
      <rect y="7" width={W} height="7" fill="#fff" />
      <circle cx="4.6" cy="3.5" r="2.4" fill="#fff" />
      <circle cx="5.9" cy="3.5" r="2.2" fill="#ed2939" />
      <circle cx="7.2" cy="2.2" r="0.5" fill="#fff" />
      <circle cx="8.9" cy="3" r="0.5" fill="#fff" />
      <circle cx="8.3" cy="4.9" r="0.5" fill="#fff" />
      <circle cx="6.2" cy="4.9" r="0.5" fill="#fff" />
      <circle cx="5.6" cy="3" r="0.5" fill="#fff" />
    </>
  ),
  JP: (
    <>
      <rect width={W} height={H} fill="#fff" />
      <circle cx="10" cy="7" r="4" fill="#bc002d" />
    </>
  ),
}

type FlagProps = {
  code: string
  className?: string
  /** Announce the country. Off by default: the name is shown beside it. */
  label?: string
}

export function Flag({ code, className, label }: FlagProps) {
  const iso = String(code ?? '').toUpperCase()
  const glyph = DRAWN[iso] ?? (STRIPES[iso] ? stripes(STRIPES[iso]) : null)

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={cn(
        'h-3.5 w-5 shrink-0 rounded-[2px] ring-1 ring-inset ring-black/10',
        className,
      )}
      role={label ? 'img' : 'presentation'}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {glyph ?? <rect width={W} height={H} fill="#c3ccd6" />}
    </svg>
  )
}
