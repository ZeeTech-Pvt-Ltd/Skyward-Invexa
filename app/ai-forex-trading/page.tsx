import { LandingPage } from '@/components/pages/LandingPage'
import { aiForexTrading } from '@/data/pages/aiForexTrading'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: aiForexTrading.meta.title,
  description: aiForexTrading.meta.description,
  path: aiForexTrading.path,
})

export default function Page() {
  return <LandingPage page={aiForexTrading} />
}
