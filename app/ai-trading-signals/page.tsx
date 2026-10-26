import { LandingPage } from '@/components/pages/LandingPage'
import { aiTradingSignals } from '@/data/pages/aiTradingSignals'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: aiTradingSignals.meta.title,
  description: aiTradingSignals.meta.description,
  path: aiTradingSignals.path,
})

export default function Page() {
  return <LandingPage page={aiTradingSignals} />
}
