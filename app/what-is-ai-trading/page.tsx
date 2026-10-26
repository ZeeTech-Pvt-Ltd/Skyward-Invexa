import { LandingPage } from '@/components/pages/LandingPage'
import { whatIsAiTrading } from '@/data/pages/whatIsAiTrading'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: whatIsAiTrading.meta.title,
  description: whatIsAiTrading.meta.description,
  path: whatIsAiTrading.path,
})

export default function Page() {
  return <LandingPage page={whatIsAiTrading} />
}
