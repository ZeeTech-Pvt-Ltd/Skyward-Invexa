import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'

type PageHeroProps = {
  eyebrow: string
  title: string
  lead: string
  children?: ReactNode
}

export function PageHero({ eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink-800">
      <div className="glow-brand pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <Container className="relative py-14 sm:py-16 lg:py-20">
        <p className="font-display text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-3xl leading-[1.12] font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">{lead}</p>
        {children}
      </Container>
    </section>
  )
}
