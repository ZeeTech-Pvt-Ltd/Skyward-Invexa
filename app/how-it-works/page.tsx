import { LandingPage } from '@/components/pages/LandingPage'
import { howItWorks } from '@/data/pages/howItWorks'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: howItWorks.meta.title,
  description: howItWorks.meta.description,
  path: howItWorks.path,
})

export default function Page() {
  return <LandingPage page={howItWorks} />
}
