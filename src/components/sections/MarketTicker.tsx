import { useEffect, useState } from 'react'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/cn'

/**
 * Live digital-asset prices.
 *
 * Source: Binance's public market-data API — no key, no account, CORS-enabled,
 * and free for anyone to use. Prices are real; nothing here is simulated. If
 * the request fails the ticker renders nothing rather than inventing figures.
 *
 * Only digital assets are shown: there is no equivalent free public feed for
 * ASX-listed equities, so claiming one would be dishonest.
 */

const SYMBOLS = [
  'BTCUSDT',
  'ETHUSDT',
  'SOLUSDT',
  'XRPUSDT',
  'BNBUSDT',
  'ADAUSDT',
  'DOGEUSDT',
] as const

const ENDPOINT = `https://api.binance.com/api/v3/ticker/24hr?symbols=${encodeURIComponent(
  JSON.stringify(SYMBOLS),
)}`

type Quote = {
  symbol: string
  price: number
  changePercent: number
}

type State =
  | { status: 'loading' }
  | { status: 'ready'; quotes: Quote[] }
  | { status: 'failed' }

/** Prices span six orders of magnitude, so the precision has to adapt. */
function formatPrice(value: number): string {
  const digits = value >= 1000 ? 0 : value >= 1 ? 2 : value >= 0.01 ? 4 : 6
  return value.toLocaleString('en-AU', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  })
}

function label(symbol: string): string {
  return symbol.replace('USDT', '')
}

export function MarketTicker() {
  const [state, setState] = useState<State>({ status: 'loading' })

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      try {
        const response = await fetch(ENDPOINT, { signal: controller.signal })
        if (!response.ok) throw new Error(`Request failed (${response.status})`)

        const payload: unknown = await response.json()
        if (!Array.isArray(payload)) throw new Error('Unexpected response shape')

        const quotes: Quote[] = payload
          .map((row) => ({
            symbol: String((row as { symbol: string }).symbol),
            price: Number((row as { lastPrice: string }).lastPrice),
            changePercent: Number((row as { priceChangePercent: string }).priceChangePercent),
          }))
          .filter((quote) => Number.isFinite(quote.price) && Number.isFinite(quote.changePercent))

        if (quotes.length === 0) throw new Error('No usable quotes returned')
        setState({ status: 'ready', quotes })
      } catch (error) {
        // An aborted request is a normal unmount, not a failure.
        if (error instanceof DOMException && error.name === 'AbortError') return
        setState({ status: 'failed' })
      }
    }

    void load()
    return () => controller.abort()
  }, [])

  // Nothing to say if the feed is down or still loading.
  if (state.status !== 'ready') return null

  const items = state.quotes.map((quote) => ({
    ...quote,
    up: quote.changePercent >= 0,
  }))

  return (
    <section aria-label="Digital asset prices" className="border-b border-ink-700 bg-ink-900">
      <div className="flex items-stretch">
        <div className="hidden shrink-0 items-center gap-2 border-r border-ink-700 px-5 py-3 sm:flex">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint-400 opacity-70" />
            <span className="relative inline-flex size-2 rounded-full bg-mint-600" />
          </span>
          <span className="text-xs font-semibold tracking-[0.14em] text-ink-400 uppercase">
            Markets
          </span>
        </div>

        {/* Two identical tracks scrolling as one, so the loop has no seam. */}
        <div className="relative flex-1 overflow-hidden">
          <div className="ticker-track flex w-max items-center">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                className="flex items-center"
                aria-hidden={copy === 1 ? 'true' : undefined}
              >
                {items.map((quote) => (
                  <li
                    key={`${copy}-${quote.symbol}`}
                    className="flex items-baseline gap-2 border-r border-ink-700 px-5 py-3 whitespace-nowrap"
                  >
                    <span className="font-display text-xs font-semibold text-heading">
                      {label(quote.symbol)}
                    </span>
                    <span className="font-mono text-xs text-ink-300">
                      ${formatPrice(quote.price)}
                    </span>
                    <span
                      className={cn(
                        'flex items-center gap-0.5 font-mono text-xs',
                        quote.up ? 'text-mint-600' : 'text-danger-400',
                      )}
                    >
                      <Icon
                        name="chevronDown"
                        className={cn('size-3', quote.up && 'rotate-180')}
                      />
                      {Math.abs(quote.changePercent).toFixed(2)}%
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <p className="hidden shrink-0 items-center border-l border-ink-700 px-5 text-[10px] text-ink-400 lg:flex">
          Source: Binance, 24 hour change
        </p>
      </div>
    </section>
  )
}
