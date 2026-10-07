import { modes } from '@/data/content'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

/** The two ways a client can use the account, side by side. */
export function ModesSection() {
  return (
    <Section tone="raised" divided>
      <Container>
        <SectionHeading eyebrow="Two modes" title={modes.heading} lead={modes.lead} />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {modes.items.map((item, index) => (
            <article
              key={item.title}
              className="hairline flex flex-col rounded-card bg-ink-850 p-7"
            >
              <span className="flex size-11 items-center justify-center rounded-xl border border-brand-500/25 bg-brand-100">
                <Icon
                  name={index === 0 ? 'bolt' : 'sliders'}
                  className="size-5 text-brand-700"
                />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-heading">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-400">{item.body}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink-400">{modes.note}</p>
      </Container>
    </Section>
  )
}
