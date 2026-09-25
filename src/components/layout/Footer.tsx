import { Link } from 'react-router-dom'
import { footerNav, riskWarning, site } from '@/data/site'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Logo } from './Logo'

/**
 * Navy, matching the rest of the brand surfaces. The page reads
 * navy hero -> light body -> navy footer, which frames the content the way the
 * brand's card design frames its own.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-hero-bg">
      <Container className="py-12">
        {/* Three equal columns. The nav groups are direct children of this grid
            rather than a nested grid, so no column is narrower than another. */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div>
            <Logo inverted />
            <p className="mt-5 text-sm leading-relaxed text-hero-muted">{site.description}</p>

            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Icon name="mail" className="mt-0.5 size-4 shrink-0 text-brand-300" />
                <div>
                  <dt className="sr-only">Support email</dt>
                  <dd>
                    <a
                      href={`mailto:${site.emails.support}`}
                      className="text-hero-fg transition-colors hover:text-brand-300"
                    >
                      {site.emails.support}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="clock" className="mt-0.5 size-4 shrink-0 text-brand-300" />
                <div>
                  <dt className="sr-only">Support hours</dt>
                  <dd className="text-hero-muted">{site.supportHours}</dd>
                </div>
              </div>
            </dl>
          </div>

          {footerNav.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2 className="font-display text-sm font-semibold text-hero-fg">
                {group.heading}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={`${group.heading}-${item.label}`}>
                    <Link
                      to={item.href}
                      className="text-sm text-hero-muted transition-colors hover:text-brand-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 rounded-card border border-warn-300/30 bg-warn-300/[0.07] p-5">
          <h2 className="text-xs font-semibold tracking-[0.16em] text-warn-300 uppercase">
            {riskWarning.heading}
          </h2>
          <p className="mt-2.5 text-xs leading-relaxed text-hero-muted">{riskWarning.body}</p>
        </div>

        <div className="mt-8 border-t border-hero-border pt-6 text-xs text-hero-muted">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
