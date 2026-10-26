import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { JsonLd } from '@/components/seo/JsonLd'
import { site } from '@/data/site'

/**
 * Organization and WebSite structured data, on every page.
 *
 * These lived in the static `index.html` head before the move to Next, so
 * every route carried them. Now that each route is its own document, the
 * layout is the only place that keeps that true.
 */
const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.name,
      url: `${site.url}/`,
      logo: `${site.url}/og-image.png`,
      description: 'AI trading platform built for Australian investors.',
      areaServed: { '@type': 'Country', name: 'Australia' },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: site.emails.support,
          areaServed: 'AU',
          availableLanguage: 'en-AU',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: `${site.url}/`,
      name: site.name,
      inLanguage: 'en-AU',
      publisher: { '@id': `${site.url}/#organization` },
    },
  ],
}

/**
 * Fonts are downloaded at build time and served from this domain, so the page
 * makes no request to a font CDN at runtime. The CSS variables are consumed by
 * the `@theme` block in globals.css.
 */
const sora = Sora({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-sora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  formatDetection: { telephone: false, address: false, email: false },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/og-image.png' }],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'fC0RL8-q9GDN8OFknq-qEvZ18Si8u5Lq3BWhAZ3W_q4',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#081c2d',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <JsonLd id="site-schema" data={siteSchema} />

        <div className="flex min-h-screen flex-col bg-ink-950">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-on-brand"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>

        {/* Google Analytics. The init stays a local file rather than an inline
            block, so the CSP in vercel.json can list script-src without
            'unsafe-inline'. The CSP allowlists both Google hosts. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7WL8TB0TXE"
          strategy="lazyOnload"
        />
        <Script src="/gtag-init.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
