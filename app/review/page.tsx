import { LandingPage } from '@/components/pages/LandingPage'
import { review } from '@/data/pages/review'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: review.meta.title,
  description: review.meta.description,
  path: review.path,
})

export default function Page() {
  return <LandingPage page={review} />
}
