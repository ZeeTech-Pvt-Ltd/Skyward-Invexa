import type { ReactNode } from 'react'

export function Table({ children, caption }: { children: ReactNode; caption?: string }) {
  return (
    <div className="overflow-x-auto rounded-card border border-ink-700">
      <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        {children}
      </table>
    </div>
  )
}

export function THead({ children }: { children: ReactNode }) {
  return (
    <thead className="bg-ink-900">
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
  return <tbody className="divide-y divide-ink-800 bg-ink-850/50">{children}</tbody>
}

export function TR({ children }: { children: ReactNode }) {
  return <tr className="align-top transition-colors hover:bg-ink-800/50">{children}</tr>
}

export function TD({
  children,
  className,
  mono = false,
}: {
  children: ReactNode
  className?: string
  mono?: boolean
}) {
  return (
    <td
      className={`px-5 py-4 text-ink-300 ${mono ? 'font-mono text-brand-700' : ''} ${className ?? ''}`}
    >
      {children}
    </td>
  )
}
