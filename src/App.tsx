import { Route, Routes } from 'react-router-dom'
import { marketingPages } from '@/data/pages'
import { RootLayout } from '@/components/layout/RootLayout'
import { LandingPage } from '@/components/pages/LandingPage'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Faq from '@/pages/Faq'
import Contact from '@/pages/Contact'
import SignUp from '@/pages/SignUp'
import ThankYou from '@/pages/ThankYou'
import Privacy from '@/pages/Privacy'
import Terms from '@/pages/Terms'
import RiskDisclosure from '@/pages/RiskDisclosure'
import CookiePolicy from '@/pages/CookiePolicy'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="thank-you" element={<ThankYou />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="risk-disclosure" element={<RiskDisclosure />} />
        <Route path="cookie-policy" element={<CookiePolicy />} />

        {/* Marketing pages. One data file each, all rendered by one template. */}
        {marketingPages.map((page) => (
          <Route
            key={page.path}
            path={page.path.replace(/^\//, '')}
            element={<LandingPage page={page} />}
          />
        ))}

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
