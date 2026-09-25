/**
 * Assets shown in the generated dashboard visuals.
 *
 * `colour` is the asset's own brand colour, used the same way the country
 * picker uses real flag colours: it identifies the instrument. It is not part
 * of the site's navy/emerald palette.
 *
 * The values are illustrative and every surface that renders them says so.
 * They are not account data and not a projection of returns.
 */
export type Asset = {
  name: string
  ticker: string
  colour: string
  /** Display price for the card. */
  price: string
  /** Value held, for the portfolio list. */
  holding: string
  change: string
  up: boolean
  /** Chart seed, so each asset gets a stable, distinct shape. */
  seed: number
}

export const ASSETS: Asset[] = [
  {
    name: 'Bitcoin',
    ticker: 'BTC',
    colour: '#f7931a',
    price: 'A$84,283.99',
    holding: 'A$1,284.32',
    change: '+1.84%',
    up: true,
    seed: 11,
  },
  {
    name: 'Ethereum',
    ticker: 'ETH',
    colour: '#627eea',
    price: 'A$2,682.40',
    holding: 'A$742.10',
    change: '+0.62%',
    up: true,
    seed: 23,
  },
  {
    name: 'Tether',
    ticker: 'USDT',
    colour: '#26a17b',
    price: 'A$1.54',
    holding: 'A$510.00',
    change: '+0.01%',
    up: true,
    seed: 31,
  },
  {
    name: 'Solana',
    ticker: 'SOL',
    colour: '#9945ff',
    price: 'A$178.42',
    holding: 'A$264.80',
    change: '+2.15%',
    up: true,
    seed: 53,
  },
  {
    name: 'Polygon',
    ticker: 'MATIC',
    colour: '#8247e5',
    price: 'A$0.92',
    holding: 'A$196.12',
    change: '-0.74%',
    up: false,
    seed: 61,
  },
  {
    name: 'Gold',
    ticker: 'XAU',
    colour: '#b08828',
    price: 'A$3,412.10',
    holding: 'A$318.44',
    change: '-0.31%',
    up: false,
    seed: 47,
  },
]

/** Look an asset up by ticker, so inserting one above cannot shift the picks. */
export function assetByTicker(ticker: string): Asset {
  const found = ASSETS.find((asset) => asset.ticker === ticker)
  if (!found) throw new Error(`Unknown asset ticker: ${ticker}`)
  return found
}

/**
 * The two assets featured on their own cards beside the portfolio: one rising
 * and one falling, so both states are visible at a glance. Selected by ticker
 * rather than by position, which would silently break when the list changes.
 */
export const FEATURED = [assetByTicker('BTC'), assetByTicker('XAU')]
