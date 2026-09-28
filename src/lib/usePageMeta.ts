import { useEffect } from 'react'
import { site } from '@/data/site'

type PageMeta = {
  title: string
  description: string
  /** Path only, e.g. "/about". Used to build the canonical and og:url. */
  path: string
  /**
   * Keeps the page out of search results and omits the canonical link. The two
   * are contradictory signals, so a noindex page carries no canonical at all.
   */
  noindex?: boolean
}

const OG_IMAGE = `${site.url}/og-image.png`

function setMetaTag(
  selector: string,
  attribute: 'name' | 'property',
  key: string,
  content: string,
) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function removeMetaTag(selector: string) {
  document.head.querySelector(selector)?.remove()
}

/**
 * Client-side equivalent of a document head. Runs on every route change so a
 * single-page app still gets per-page titles, descriptions, canonicals and
 * social cards. The static tags in index.html cover the first paint; this
 * corrects them once the route is known.
 */
export function usePageMeta({ title, description, path, noindex = false }: PageMeta) {
  useEffect(() => {
    // Append the brand only when the title does not already carry it, or the
    // homepage ends up reading "Skyward Invexa | ... | Skyward Invexa".
    const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`
    const url = `${site.url}${path === '/' ? '/' : path}`

    document.title = fullTitle

    setMetaTag('meta[name="description"]', 'name', 'description', description)
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', fullTitle)
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description)
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle)
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description)

    if (noindex) {
      setMetaTag('meta[name="robots"]', 'name', 'robots', 'noindex, nofollow')
      // A canonical, a share URL or a share card on a noindex page all
      // contradict the noindex, so they come off with it.
      removeMetaTag('link[rel="canonical"]')
      removeMetaTag('meta[property="og:url"]')
      removeMetaTag('meta[property="og:image"]')
      removeMetaTag('meta[name="twitter:image"]')
      return
    }

    removeMetaTag('meta[name="robots"]')

    setMetaTag('meta[property="og:url"]', 'property', 'og:url', url)
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', OG_IMAGE)
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', OG_IMAGE)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [title, description, path, noindex])
}
