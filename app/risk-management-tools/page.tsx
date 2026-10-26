import { LandingPage } from '@/components/pages/LandingPage'
import { riskManagementTools } from '@/data/pages/riskManagementTools'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: riskManagementTools.meta.title,
  description: riskManagementTools.meta.description,
  path: riskManagementTools.path,
})

export default function Page() {
  return <LandingPage page={riskManagementTools} />
}
