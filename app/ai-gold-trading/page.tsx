import { LandingPage } from '@/components/pages/LandingPage'
import { aiGoldTrading } from '@/data/pages/aiGoldTrading'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: aiGoldTrading.meta.title,
  description: aiGoldTrading.meta.description,
  path: aiGoldTrading.path,
})

export default function Page() {
  return <LandingPage page={aiGoldTrading} />
}
