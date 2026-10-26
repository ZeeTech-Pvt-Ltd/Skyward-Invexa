import { LandingPage } from '@/components/pages/LandingPage'
import { aiCryptoTrading } from '@/data/pages/aiCryptoTrading'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: aiCryptoTrading.meta.title,
  description: aiCryptoTrading.meta.description,
  path: aiCryptoTrading.path,
})

export default function Page() {
  return <LandingPage page={aiCryptoTrading} />
}
