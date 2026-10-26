import { LandingPage } from '@/components/pages/LandingPage'
import { aiTradingForBeginners } from '@/data/pages/aiTradingForBeginners'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: aiTradingForBeginners.meta.title,
  description: aiTradingForBeginners.meta.description,
  path: aiTradingForBeginners.path,
})

export default function Page() {
  return <LandingPage page={aiTradingForBeginners} />
}
