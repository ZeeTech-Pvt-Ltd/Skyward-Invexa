import type { Metadata } from 'next'
import { site } from '@/data/site'

const OG_IMAGE = `${site.url}/og-image.png`

type PageMetaInput = {
  title: string
  description: string
  /** Path only, e.g. "/about". Used to build the canonical and og:url. */
  path: string
  /**
   * Keeps the page out of search results and omits the canonical. "Do not
   * index me" and "here is my canonical URL" are contradictory signals, so the
   * tag is left off rather than pointed at the homepage.
   */
  noindex?: boolean
}

/**
 * Maps a page's title, description and path onto Next's Metadata API.
 *
 * This replaces the client-side `usePageMeta` hook the Vite build used. The
 * values are now rendered into the HTML at build time, so a crawler that never
 * runs JavaScript still sees the right head.
 */
export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
}: PageMetaInput): Metadata {
  // Append the brand only when the title does not already carry it, or the
  // homepage ends up reading "Skyward Invexa | ... | Skyward Invexa".
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`
  const url = `${site.url}${path === '/' ? '/' : path}`

  const meta: Metadata = {
    // absolute: the root layout must not wrap this in a title template.
    title: { absolute: fullTitle },
    description,
    openGraph: {
      type: 'website',
      siteName: site.name,
      locale: 'en_AU',
      title: fullTitle,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  }

  if (noindex) {
    meta.robots = { index: false, follow: false }
    // A canonical or a share card on a noindex page contradicts the noindex,
    // so they come off with it.
    return meta
  }

  meta.alternates = { canonical: url }
  meta.openGraph = {
    ...meta.openGraph,
    url,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${site.name}: AI trading built for Australian investors.`,
        type: 'image/png',
      },
    ],
  }
  meta.twitter = { ...meta.twitter, images: [OG_IMAGE] }

  return meta
}
