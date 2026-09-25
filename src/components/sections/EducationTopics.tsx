import { educationTopics } from '@/data/content'
import { Badge } from '@/components/ui/Badge'
import { Icon } from '@/components/ui/Icon'

export function EducationTopics() {
  return (
    <ul className="grid gap-px overflow-hidden rounded-card border border-ink-700 bg-ink-700 sm:grid-cols-2">
      {educationTopics.map((topic) => (
        <li key={topic.title} className="flex flex-col bg-ink-900 p-6">
          <Badge tone="neutral" className="self-start">
            {topic.level}
          </Badge>
          <h3 className="mt-4 font-display text-base font-semibold text-heading">{topic.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-300">{topic.body}</p>
          <span className="mt-5 flex items-center gap-2 text-xs font-medium text-brand-600">
            <Icon name="book" className="size-4" />
            Included in the learning centre
          </span>
        </li>
      ))}
    </ul>
  )
}
