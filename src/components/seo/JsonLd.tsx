/**
 * Structured data for the current page.
 *
 * Rendered into the document rather than appended by a hook, so the JSON-LD is
 * part of the prerendered HTML. The Vite build wrote it into document.head
 * after hydration, which meant a crawler that did not run JavaScript never saw
 * it. Google reads structured data from the body as well as the head.
 */
export function JsonLd({ id, data }: { id: string; data: unknown }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
