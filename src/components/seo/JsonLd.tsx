import { useEffect } from 'react'

/**
 * Adds a JSON-LD block to the document head for the current route.
 *
 * Written by hand into the head rather than rendered into the body, because
 * Google reads structured data from either place but other consumers are less
 * forgiving, and a <script> in the body is invalid inside many layouts.
 */
export function JsonLd({ id, data }: { id: string; data: unknown }) {
  const payload = JSON.stringify(data)

  useEffect(() => {
    let script = document.getElementById(id) as HTMLScriptElement | null

    if (!script) {
      script = document.createElement('script')
      script.id = id
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }

    script.textContent = payload

    return () => {
      document.getElementById(id)?.remove()
    }
  }, [id, payload])

  return null
}
