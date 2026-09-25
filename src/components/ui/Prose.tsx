import type { ReactNode } from 'react'

export function Prose({ children }: { children: ReactNode }) {
  return <div className="max-w-3xl space-y-10">{children}</div>
}

export function ProseSection({
  id,
  heading,
  children,
}: {
  id?: string
  heading: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="font-display text-xl font-semibold text-heading">{heading}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink-300">{children}</div>
    </section>
  )
}

export function ProseList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
