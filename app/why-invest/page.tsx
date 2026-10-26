import { LandingPage } from '@/components/pages/LandingPage'
import { whyInvest } from '@/data/pages/whyInvest'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: whyInvest.meta.title,
  description: whyInvest.meta.description,
  path: whyInvest.path,
})

export default function Page() {
  return <LandingPage page={whyInvest} />
}
