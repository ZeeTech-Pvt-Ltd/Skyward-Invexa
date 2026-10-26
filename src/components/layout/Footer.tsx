import Link from 'next/link'
import { footerNav, legalNav, riskWarning, site } from '@/data/site'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Logo } from './Logo'

/**
 * Navy, matching the rest of the brand surfaces. The page reads
 * navy hero -> light body -> navy footer, which frames the content the way the
 * brand's card design frames its own.
 *
 * The layout is a brand column beside a four-column nav rather than one flat
 * grid. With the brand and the groups as siblings in a single grid, six cells
 * wrapped into two rows of three and left a hole in the second row; nesting the
 * nav means the groups always fill their row whatever the page count.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-hero-bg">
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_3.4fr] lg:gap-12">
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-hero-muted">
              {site.description}
            </p>

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

          {/* Two columns until there is room for all four, so the groups never
              wrap into a row with an empty cell in it. */}
          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {footerNav.map((group) => (
              <nav key={group.heading} aria-label={group.heading}>
                <h2 className="font-display text-xs font-semibold tracking-[0.16em] text-brand-300 uppercase">
                  {group.heading}
                </h2>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={`${group.heading}-${item.label}`}>
                      <Link
                        href={item.href}
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
        </div>

        <div className="mt-14 rounded-card border border-warn-300/25 bg-warn-300/[0.06] p-5 sm:p-6">
          <h2 className="font-display text-xs font-semibold tracking-[0.16em] text-warn-300 uppercase">
            {riskWarning.heading}
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-hero-muted">{riskWarning.body}</p>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-hero-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-hero-muted">
            © {year} {site.name}. All rights reserved.
          </p>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs text-hero-muted transition-colors hover:text-brand-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
