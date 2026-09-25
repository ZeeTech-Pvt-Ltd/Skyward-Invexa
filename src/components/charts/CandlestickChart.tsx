import { candles, movingAverage, type Candle } from '@/lib/chartData'
import { cn } from '@/lib/cn'

/**
 * A generated candlestick chart. No photograph of a trading floor, and no live
 * feed either: the series comes from a fixed seed, so it renders identically
 * every time. It is labelled as illustrative wherever it appears, because a
 * reader could otherwise take it for market data.
 */

const W = 760
const H = 340
const PAD_L = 10
const PAD_R = 58
const PAD_T = 14
const PAD_B = 26

const PLOT_W = W - PAD_L - PAD_R
const PLOT_H = H - PAD_T - PAD_B

const TONES = {
  dark: {
    up: '#3a9c7e',
    down: '#c0563a',
    grid: '#123454',
    axis: '#8fa6bc',
    fast: '#8cc9b7',
    slow: '#a7b9cc',
  },
  light: {
    up: '#1f7a63',
    down: '#c0563a',
    grid: '#e6e1d6',
    axis: '#67707a',
    fast: '#3a9c7e',
    slow: '#9aa3a8',
  },
} as const

type Props = {
  seed?: number
  count?: number
  /** Starting price, so the axis matches the instrument named beside it. */
  start?: number
  surface?: keyof typeof TONES
  priceLabels?: string[]
  timeLabels?: string[]
  className?: string
}

export function CandlestickChart({
  seed = 7,
  count = 56,
  start = 100,
  surface = 'light',
  priceLabels,
  timeLabels = ['09:00', '12:00', '15:00', '18:00'],
  className,
}: Props) {
  const tone = TONES[surface]
  const series: Candle[] = candles(seed, count, start)
  const closes = series.map((candle) => candle.c)
  const fast = movingAverage(closes, 8)
  const slow = movingAverage(closes, 21)

  const lows = series.map((candle) => candle.l)
  const highs = series.map((candle) => candle.h)
  const min = Math.min(...lows)
  const max = Math.max(...highs)
  const pad = (max - min) * 0.06 || 1
  const floor = min - pad
  const ceiling = max + pad

  const step = PLOT_W / count
  const bodyW = Math.max(2.5, step * 0.58)

  const x = (index: number) => PAD_L + index * step + step / 2
  const y = (price: number) => PAD_T + PLOT_H - ((price - floor) / (ceiling - floor)) * PLOT_H

  // Four gridlines, including the top and bottom of the plot.
  const gridRows = Array.from({ length: 4 }, (_, index) => {
    const price = ceiling - ((ceiling - floor) * index) / 3
    return { price, top: PAD_T + (PLOT_H * index) / 3 }
  })

  const format = (price: number) =>
    price.toLocaleString('en-AU', {
      minimumFractionDigits: price >= 1000 ? 0 : 2,
      maximumFractionDigits: price >= 1000 ? 0 : 2,
    })

  const labels = priceLabels ?? gridRows.map((row) => format(row.price))

  // The badge must show the last close itself, not the nearest axis label:
  // reading the bottom gridline value off a chart that ended high is simply
  // the wrong number.
  const lastClose = series.length ? series[series.length - 1].c : 0

  const line = (values: Array<number | null>) =>
    values
      .map((value, index) => (value === null ? null : `${x(index)},${y(value)}`))
      .filter(Boolean)
      .join(' ')

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={cn('w-full', className)}
      role="img"
      aria-label="Illustrative candlestick price chart, not live market data"
    >
      {/* Grid */}
      {gridRows.map((row) => (
        <line
          key={row.top}
          x1={PAD_L}
          x2={PAD_L + PLOT_W}
          y1={row.top}
          y2={row.top}
          stroke={tone.grid}
          strokeWidth={1}
        />
      ))}

      {/* Price axis */}
      {labels.map((label, index) => (
        <text
          key={label}
          x={W - PAD_R + 8}
          y={PAD_T + (PLOT_H * index) / (labels.length - 1) + 4}
          fill={tone.axis}
          fontSize="11"
          fontFamily="ui-monospace, monospace"
        >
          {label}
        </text>
      ))}

      {/* Time axis */}
      {timeLabels.map((label, index) => (
        <text
          key={label}
          x={PAD_L + (PLOT_W * (index + 0.5)) / timeLabels.length}
          y={H - 8}
          fill={tone.axis}
          fontSize="11"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          {label}
        </text>
      ))}

      {/* Candles */}
      {series.map((candle, index) => {
        const rising = candle.c >= candle.o
        const colour = rising ? tone.up : tone.down
        const bodyTop = y(Math.max(candle.o, candle.c))
        const bodyBottom = y(Math.min(candle.o, candle.c))

        return (
          <g key={index}>
            <line
              x1={x(index)}
              x2={x(index)}
              y1={y(candle.h)}
              y2={y(candle.l)}
              stroke={colour}
              strokeWidth={1.2}
            />
            <rect
              x={x(index) - bodyW / 2}
              y={bodyTop}
              width={bodyW}
              height={Math.max(1.4, bodyBottom - bodyTop)}
              fill={rising ? colour : 'none'}
              stroke={colour}
              strokeWidth={rising ? 0 : 1.3}
            />
          </g>
        )
      })}

      {/* Moving averages */}
      <polyline points={line(slow)} fill="none" stroke={tone.slow} strokeWidth="1.6" opacity="0.9" />
      <polyline points={line(fast)} fill="none" stroke={tone.fast} strokeWidth="1.8" />

      {/* Last price marker, labelled with the close it actually sits at. */}
      {series.length ? (
        <>
          <line
            x1={PAD_L}
            x2={PAD_L + PLOT_W}
            y1={y(lastClose)}
            y2={y(lastClose)}
            stroke={tone.up}
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.8"
          />
          <rect
            x={W - PAD_R + 2}
            y={y(lastClose) - 9}
            width={PAD_R - 6}
            height={18}
            rx="4"
            fill={tone.up}
          />
          <text
            x={W - PAD_R / 2}
            y={y(lastClose) + 4}
            fill="#ffffff"
            fontSize="9.5"
            textAnchor="middle"
            fontFamily="ui-monospace, monospace"
          >
            {format(lastClose)}
          </text>
        </>
      ) : null}
    </svg>
  )
}
