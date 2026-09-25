/**
 * Deterministic chart data.
 *
 * Every series is generated from a fixed seed, so a chart renders identically
 * on the server, on the client, and on every reload. Math.random() would make
 * the hydration output differ from the server output and the layout jump.
 *
 * This data is illustrative, not market data. Every chart built from it must
 * carry a visible label saying so - a reader could otherwise take it for a
 * live feed.
 */

export type Candle = { o: number; h: number; l: number; c: number }

/** Small linear congruential generator. Same seed, same series, every time. */
function lcg(seed: number): () => number {
  let state = seed >>> 0 || 1
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0
    return state / 0x100000000
  }
}

/**
 * A plausible price walk: random steps with mild upward drift and occasional
 * larger moves, so the result looks like a market rather than noise.
 */
export function candles(seed: number, count: number, start = 100): Candle[] {
  const random = lcg(seed)
  const out: Candle[] = []
  let price = start

  for (let i = 0; i < count; i += 1) {
    const open = price
    const drift = 0.0006
    const shock = random() < 0.12 ? (random() - 0.5) * 0.05 : 0
    const change = (random() - 0.5) * 0.022 + drift + shock
    const close = Math.max(1, open * (1 + change))

    const wick = Math.abs(change) * 0.9 + random() * 0.008
    const high = Math.max(open, close) * (1 + wick * random())
    const low = Math.min(open, close) * (1 - wick * random())

    out.push({ o: open, h: high, l: low, c: close })
    price = close
  }

  return out
}

/** Simple moving average. Leading entries are null while the window fills. */
export function movingAverage(values: number[], window: number): Array<number | null> {
  return values.map((_, index) => {
    if (index < window - 1) return null
    let sum = 0
    for (let i = index - window + 1; i <= index; i += 1) sum += values[i]
    return sum / window
  })
}

/** A short trend line for stat cards. */
export function spark(seed: number, count = 24): number[] {
  return candles(seed, count, 100).map((candle) => candle.c)
}

/** Bid/ask depth ladder: sizes, heaviest near the touch. */
export function depth(seed: number, levels = 8): number[] {
  const random = lcg(seed)
  return Array.from({ length: levels }, (_, index) => {
    const base = 1 - index / (levels + 2)
    return Math.max(0.06, base * (0.55 + random() * 0.9))
  })
}

/** Scale a series into the 0-1 range, guarding against a flat line. */
export function normalise(values: number[]): number[] {
  const min = Math.min(...values)
  const max = Math.max(...values)
  const span = max - min || 1
  return values.map((value) => (value - min) / span)
}
