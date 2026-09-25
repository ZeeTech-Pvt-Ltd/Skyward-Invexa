import { primaryNav } from '@/data/site'
import { usePageMeta } from '@/lib/usePageMeta'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Link } from 'react-router-dom'

export default function NotFound() {
  usePageMeta({
    title: 'Page not found',
    description: 'The page you were looking for could not be found.',
    path: '/404',
    noindex: true,
  })

  return (
    <Section className="glow-brand">
      <Container>
        <div className="mx-auto max-w-xl py-12 text-center">
          <p className="font-mono text-sm tracking-[0.2em] text-brand-600">404</p>
          <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">Skyward Invexa: Page Not Found</h1>
          <p className="mt-5 text-base leading-relaxed text-ink-300">
            The link may be out of date, or the page may have been renamed. Everything on the site is
            reachable from the navigation, or start with one of these.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button to="/" size="lg">
              Back to home
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              Contact support
            </Button>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 border-t border-ink-800 pt-8">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="text-sm text-ink-400 transition-colors hover:text-brand-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}
