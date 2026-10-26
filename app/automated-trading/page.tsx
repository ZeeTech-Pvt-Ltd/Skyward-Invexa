import { LandingPage } from '@/components/pages/LandingPage'
import { automatedTrading } from '@/data/pages/automatedTrading'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: automatedTrading.meta.title,
  description: automatedTrading.meta.description,
  path: automatedTrading.path,
})

export default function Page() {
  return <LandingPage page={automatedTrading} />
}
