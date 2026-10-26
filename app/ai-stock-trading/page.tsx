import { LandingPage } from '@/components/pages/LandingPage'
import { aiStockTrading } from '@/data/pages/aiStockTrading'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: aiStockTrading.meta.title,
  description: aiStockTrading.meta.description,
  path: aiStockTrading.path,
})

export default function Page() {
  return <LandingPage page={aiStockTrading} />
}
