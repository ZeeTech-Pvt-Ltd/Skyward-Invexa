import type { MetadataRoute } from 'next'
import { site } from '@/data/site'
import { marketingPages } from '@/data/pages'

/**
 * Generated from the same lists the routes come from, so a page cannot be
 * added to `app/` and forgotten here. `/thank-you` is absent on purpose: it
 * carries a noindex, and a noindex URL in a sitemap is a contradictory signal.
 */
const STATIC_ROUTES: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/sign-up', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/risk-disclosure', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/cookie-policy', priority: 0.3, changeFrequency: 'yearly' },
]

/** Static export needs this stated explicitly on metadata routes. */
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${site.url}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const marketingEntries = marketingPages.map((page) => ({
    url: `${site.url}${page.path}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticEntries, ...marketingEntries]
}
