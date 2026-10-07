import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { primaryNav, type NavEntry } from '@/data/site'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/cn'
import { Logo } from './Logo'

/**
 * One header for every page: soft white, dark text, with a hairline rule.
 *
 * The site carries thirteen pages, so the desktop menu groups them into four
 * dropdowns rather than listing them flat. The panel opens on hover for a
 * mouse and on click or ArrowDown for a keyboard, and it stays open while
 * focus is inside it, so the links are reachable by tabbing.
 *
 * The mobile drawer mirrors the same groups as collapsible sections.
 */

function isGroup(entry: NavEntry): entry is { label: string; items: NonNullable<NavEntry['items']> } {
  return Array.isArray(entry.items)
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  // Close everything whenever the route changes.
  useEffect(() => {
    setIsOpen(false)
    setOpenGroup(null)
    setOpenMobileGroup(null)
  }, [pathname])

  // Prevent the page behind the mobile drawer from scrolling.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Escape closes the open dropdown and hands focus back to its trigger.
  useEffect(() => {
    if (!openGroup) return undefined
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpenGroup(null)
      navRef.current
        ?.querySelector<HTMLButtonElement>(`[data-group-trigger="${openGroup}"]`)
        ?.focus()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [openGroup])

  const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'rounded-full px-3.5 py-2 text-sm transition-colors',
      isActive ? 'bg-ink-800 font-medium text-heading' : 'text-ink-400 hover:bg-ink-800/60 hover:text-heading',
    )

  return (
    <header className="sticky top-0 z-50 border-b border-ink-700 bg-ink-950/95 backdrop-blur-lg">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6 lg:h-20">
          <Logo />

          <div ref={navRef} className="hidden lg:block">
            <nav aria-label="Primary">
              <ul className="flex items-center gap-1">
                {primaryNav.map((entry) => {
                  if (!isGroup(entry)) {
                    return (
                      <li key={entry.href}>
                        <NavLink to={entry.href} end={entry.href === '/'} className={desktopLinkClass}>
                          {entry.label}
                        </NavLink>
                      </li>
                    )
                  }

                  const open = openGroup === entry.label
                  const active = entry.items.some((item) => item.href === pathname)

                  return (
                    <li
                      key={entry.label}
                      className="relative"
                      onMouseEnter={() => setOpenGroup(entry.label)}
                      onMouseLeave={() => setOpenGroup(null)}
                      onBlur={(event) => {
                        // Only close once focus has left the whole group, or
                        // tabbing from the trigger into the panel would shut it.
                        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                          setOpenGroup(null)
                        }
                      }}
                    >
                      <button
                        type="button"
                        data-group-trigger={entry.label}
                        aria-expanded={open}
                        aria-haspopup="true"
                        onClick={() => setOpenGroup(open ? null : entry.label)}
                        onKeyDown={(event) => {
                          if (event.key === 'ArrowDown') {
                            event.preventDefault()
                            setOpenGroup(entry.label)
                          }
                        }}
                        className={cn(
                          'flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm transition-colors',
                          active || open
                            ? 'bg-ink-800 font-medium text-heading'
                            : 'text-ink-400 hover:bg-ink-800/60 hover:text-heading',
                        )}
                      >
                        {entry.label}
                        <Icon
                          name="chevronDown"
                          className={cn('size-3.5 transition-transform', open && 'rotate-180')}
                        />
                      </button>

                      {open ? (
                        <div className="absolute top-full left-0 z-50 pt-3">
                          <ul className="elevate w-[22rem] overflow-hidden rounded-card border border-ink-700 bg-ink-850 p-2">
                            {entry.items.map((item) => (
                              <li key={item.href}>
                                <NavLink
                                  to={item.href}
                                  className={({ isActive }) =>
                                    cn(
                                      'block rounded-xl px-3.5 py-2.5 transition-colors',
                                      isActive ? 'bg-brand-100' : 'hover:bg-ink-800',
                                    )
                                  }
                                >
                                  <span className="block text-sm font-medium text-heading">
                                    {item.label}
                                  </span>
                                  <span className="mt-0.5 block text-xs leading-snug text-ink-400">
                                    {item.blurb}
                                  </span>
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

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
                {primaryNav.map((entry) => {
                  if (!isGroup(entry)) {
                    return (
                      <li key={entry.href}>
                        <NavLink
                          to={entry.href}
                          end={entry.href === '/'}
                          className={({ isActive }) =>
                            cn(
                              'block rounded-xl px-4 py-3 text-base transition-colors',
                              isActive
                                ? 'bg-ink-800 font-medium text-heading'
                                : 'text-ink-400 hover:bg-ink-800/60 hover:text-heading',
                            )
                          }
                        >
                          {entry.label}
                        </NavLink>
                      </li>
                    )
                  }

                  const open = openMobileGroup === entry.label

                  return (
                    <li key={entry.label}>
                      <button
                        type="button"
                        aria-expanded={open}
                        onClick={() => setOpenMobileGroup(open ? null : entry.label)}
                        className={cn(
                          'flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base transition-colors',
                          open ? 'bg-ink-800 font-medium text-heading' : 'text-ink-400 hover:bg-ink-800/60',
                        )}
                      >
                        {entry.label}
                        <Icon
                          name="chevronDown"
                          className={cn('size-4 transition-transform', open && 'rotate-180')}
                        />
                      </button>

                      {open ? (
                        <ul className="mt-1 ml-3 space-y-1 border-l border-ink-700 pl-3">
                          {entry.items.map((item) => (
                            <li key={item.href}>
                              <NavLink
                                to={item.href}
                                className={({ isActive }) =>
                                  cn(
                                    'block rounded-xl px-3 py-2.5 text-sm transition-colors',
                                    isActive
                                      ? 'bg-brand-100 font-medium text-heading'
                                      : 'text-ink-400 hover:bg-ink-800/60 hover:text-heading',
                                  )
                                }
                              >
                                {item.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  )
                })}
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
