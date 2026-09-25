import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Single-page apps keep the scroll position across route changes, which lands
 * visitors halfway down a new page. Reset on every path change.
 */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return null
}
