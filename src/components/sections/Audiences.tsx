import { audiences } from '@/data/content'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'

/** Who the platform is for, described by situation rather than by persona. */
export function Audiences() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2">
      {audiences.map((audience) => (
        <li key={audience.title}>
          <Card className="h-full">
            <Icon name="check" className="size-5 text-mint-600" />
            <h3 className="mt-4 font-display text-base font-semibold text-heading">
              {audience.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-400">{audience.body}</p>
          </Card>
        </li>
      ))}
    </ul>
  )
}
