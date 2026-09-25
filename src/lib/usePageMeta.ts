import { useEffect } from 'react'
import { site } from '@/data/site'

type PageMeta = {
  title: string
  description: string
  /** Path only, e.g. "/about". Used to build the canonical URL. */
  path: string
  /**
   * Keeps the page out of search results and omits the canonical link. The two
   * are contradictory signals, so a noindex page carries no canonical at all.
   */
  noindex?: boolean
}

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
 * single-page app still gets per-page titles, descriptions and canonicals.
 */
export function usePageMeta({ title, description, path, noindex = false }: PageMeta) {
  useEffect(() => {
    const fullTitle = title === site.name ? title : `${title} | ${site.name}`

    document.title = fullTitle
    setMetaTag('meta[name="description"]', 'name', 'description', description)
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', fullTitle)
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description)

    if (noindex) {
      setMetaTag('meta[name="robots"]', 'name', 'robots', 'noindex, nofollow')
      // A canonical on a noindex page contradicts the noindex, so drop it.
      removeMetaTag('link[rel="canonical"]')
      removeMetaTag('meta[property="og:url"]')
      return
    }

    removeMetaTag('meta[name="robots"]')

    const url = `${site.url}${path === '/' ? '/' : path}`
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', url)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [title, description, path, noindex])
}
