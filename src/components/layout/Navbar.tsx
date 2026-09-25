import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { primaryNav } from '@/data/site'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/cn'
import { Logo } from './Logo'

/**
 * One header for every page: soft white, dark text, with a hairline rule. It
 * keeps the same colour over the dark home hero, so the bar never changes
 * character as you move between pages.
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent the page behind the mobile drawer from scrolling.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-ink-700 bg-ink-950/95 backdrop-blur-lg">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6 lg:h-20">
          <Logo />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    end={item.href === '/'}
                    className={({ isActive }) =>
                      cn(
                        'rounded-full px-3.5 py-2 text-sm transition-colors',
                        isActive
                          ? 'bg-ink-800 font-medium text-heading'
                          : 'text-ink-400 hover:bg-ink-800/60 hover:text-heading',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button to="/sign-up" size="sm">
              Open an Account
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex size-10 items-center justify-center rounded-full border border-ink-700 text-heading transition-colors lg:hidden"
          >
            <Icon name={isOpen ? 'close' : 'menu'} className="size-5" />
          </button>
        </div>
      </Container>

      {isOpen ? (
        <div id="mobile-nav" className="border-t border-ink-700 bg-ink-950 lg:hidden">
          <Container className="py-6">
            <nav aria-label="Primary mobile">
              <ul className="flex flex-col gap-1">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      to={item.href}
                      end={item.href === '/'}
                      className={({ isActive }) =>
                        cn(
                          'block rounded-xl px-4 py-3 text-base transition-colors',
                          isActive
                            ? 'bg-ink-800 font-medium text-heading'
                            : 'text-ink-400 hover:bg-ink-800/60 hover:text-heading',
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-6 flex flex-col gap-3">
              <Button to="/sign-up" fullWidth>
                Open an Account
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
