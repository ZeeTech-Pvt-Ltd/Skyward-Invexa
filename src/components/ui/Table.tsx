import type { ReactNode } from 'react'

/**
 * A table that survives a narrow screen.
 *
 * Below `sm` the table stops being a table and each row becomes a card: the
 * column heading is rendered inside the cell by `<TD label="...">`, so nothing
 * is clipped and nothing needs horizontal scrolling. The table markup itself is
 * kept, so the semantics survive for assistive tech at every width.
 */

export function Table({ children, caption }: { children: ReactNode; caption?: string }) {
  return (
    <div className="overflow-hidden rounded-card border border-ink-700">
      <table className="block w-full border-collapse text-left text-sm sm:table">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        {children}
      </table>
    </div>
  )
}

export function THead({ children }: { children: ReactNode }) {
  return (
    <thead className="hidden bg-ink-900 sm:table-header-group">
      <tr className="border-b border-ink-700">{children}</tr>
    </thead>
  )
}

export function TH({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <th
      scope="col"
      className={`px-5 py-3.5 font-display text-xs font-semibold tracking-[0.12em] text-ink-400 uppercase ${className ?? ''}`}
    >
      {children}
    </th>
  )
}

export function TBody({ children }: { children: ReactNode }) {
  return <tbody className="block divide-y divide-ink-700 sm:table-row-group">{children}</tbody>
}

export function TR({ children }: { children: ReactNode }) {
  return (
    <tr className="block align-top transition-colors sm:table-row sm:hover:bg-ink-800/50">
      {children}
    </tr>
  )
}

export function TD({
  children,
  className,
  mono = false,
  /**
   * The column heading. Shown above the value on mobile only, where the header
   * row is hidden and there is nothing else to say what this cell means.
   */
  label,
}: {
  children: ReactNode
  className?: string
  mono?: boolean
  label?: string
}) {
  return (
    <td
      className={`block px-5 py-3.5 text-ink-300 sm:table-cell sm:py-4 ${mono ? 'font-mono text-brand-700' : ''} ${className ?? ''}`}
    >
      {label ? (
        <span className="mb-1 block font-display text-[11px] font-semibold tracking-[0.12em] text-ink-400 uppercase sm:hidden">
          {label}
        </span>
      ) : null}
      {children}
    </td>
  )
}
