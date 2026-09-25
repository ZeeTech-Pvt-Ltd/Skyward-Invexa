import { useEffect, useMemo, useRef, useState } from 'react'
import { COUNTRIES } from '@/data/countries'
import { Flag } from './Flag'
import { Icon } from './Icon'
import { cn } from '@/lib/cn'

type PhoneFieldProps = {
  id: string
  name: string
  iso: string
  onIsoChange: (iso: string) => void
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  invalid?: boolean
  describedBy?: string
  placeholder?: string
  autoComplete?: string
  maxLength?: number
}

/**
 * International phone input: a flag and dial-code trigger plus a searchable
 * country listbox. The number input keeps the `id` and `name`, so it drops
 * straight into the form's field state.
 *
 * The listbox implements the ARIA combobox pattern properly: Escape closes and
 * returns focus to the trigger, arrows move the highlight, and the highlighted
 * row is kept in view.
 */
export function PhoneField({
  id,
  name,
  iso,
  onIsoChange,
  value,
  onChange,
  onBlur,
  invalid = false,
  describedBy,
  placeholder,
  autoComplete = 'tel',
  maxLength = 20,
}: PhoneFieldProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIdx, setActiveIdx] = useState(-1)
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const selected = COUNTRIES.find(([code]) => code === iso) ?? COUNTRIES[0]

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return COUNTRIES
    return COUNTRIES.filter(
      ([code, countryName, dial]) =>
        countryName.toLowerCase().includes(q) ||
        code.toLowerCase().includes(q) ||
        String(dial).includes(q.replace(/^\+/, '')),
    )
  }, [query])

  const activeOptionId =
    open && activeIdx >= 0 && results[activeIdx] ? `${id}-opt-${results[activeIdx][0]}` : undefined

  useEffect(() => {
    if (!open) return undefined

    const onPointerDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  // When the list opens or the filter changes, highlight the current country
  // so ArrowDown has a sensible starting point.
  useEffect(() => {
    if (!open) return
    const index = results.findIndex(([code]) => code === iso)
    setActiveIdx(index >= 0 ? index : results.length ? 0 : -1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, query])

  useEffect(() => {
    if (!open || activeIdx < 0 || !listRef.current) return
    const node = listRef.current.children[activeIdx] as HTMLElement | undefined
    node?.scrollIntoView?.({ block: 'nearest' })
  }, [open, activeIdx])

  function selectCountry(code: string) {
    onIsoChange(code)
    setOpen(false)
    setQuery('')
    setActiveIdx(-1)
    // Hand focus back to the number field so typing can continue.
    requestAnimationFrame(() => document.getElementById(id)?.focus())
  }

  function moveHighlight(direction: 'up' | 'down') {
    if (!results.length) return
    setActiveIdx((index) => {
      if (index === -1) return direction === 'down' ? 0 : results.length - 1
      return direction === 'down'
        ? Math.min(results.length - 1, index + 1)
        : Math.max(0, index - 1)
    })
  }

  function onSearchKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      moveHighlight('down')
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      moveHighlight('up')
    } else if (event.key === 'Enter') {
      event.preventDefault()
      const code =
        (activeIdx >= 0 && results[activeIdx]?.[0]) || (results.length ? results[0][0] : null)
      if (code) selectCountry(code)
    } else if (event.key === 'Home') {
      event.preventDefault()
      if (results.length) setActiveIdx(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      if (results.length) setActiveIdx(results.length - 1)
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <div
        className={cn(
          'flex items-stretch overflow-hidden rounded-xl border bg-ink-950 transition-colors focus-within:border-brand-500',
          invalid ? 'border-danger-400/70' : 'border-ink-600',
        )}
      >
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-controls={`${id}-country-list`}
          aria-label={`Country: ${selected[1]}, dial code +${selected[2]}`}
          onKeyDown={(event) => {
            if ((event.key === 'ArrowDown' || event.key === 'ArrowUp') && !open) {
              event.preventDefault()
              setOpen(true)
            }
          }}
          className="flex shrink-0 items-center gap-1.5 border-r border-ink-700 bg-ink-900/70 pr-2.5 pl-3 transition-colors hover:bg-ink-900"
        >
          <Flag code={selected[0]} />
          <span className="font-mono text-sm font-semibold text-heading">+{selected[2]}</span>
          <Icon
            name="chevronDown"
            className={cn(
              'size-3.5 text-ink-400 transition-transform duration-200',
              open && 'rotate-180',
            )}
          />
        </button>

        <input
          id={id}
          name={name}
          type="tel"
          autoComplete={autoComplete}
          required
          maxLength={maxLength}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={invalid}
          aria-describedby={describedBy}
          className="w-full min-w-0 border-0 bg-transparent px-3.5 py-3 text-sm text-heading placeholder:text-ink-400 focus:outline-none"
        />
      </div>

      {open ? (
        <div className="elevate absolute top-full right-0 left-0 z-30 mt-2 overflow-hidden rounded-card border border-ink-700 bg-ink-850">
          <div className="flex items-center gap-2 border-b border-ink-700 px-3 py-2.5">
            <Icon name="search" className="size-4 shrink-0 text-ink-400" />
            <input
              type="search"
              role="combobox"
              aria-expanded="true"
              aria-controls={`${id}-country-list`}
              aria-activedescendant={activeOptionId}
              aria-label="Search countries"
              placeholder="Search country or code"
              autoComplete="off"
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={onSearchKeyDown}
              className="w-full border-0 bg-transparent py-1 text-sm text-heading placeholder:text-ink-400 focus:outline-none"
            />
          </div>

          <ul
            ref={listRef}
            id={`${id}-country-list`}
            role="listbox"
            aria-label="Countries"
            className="max-h-60 overflow-y-auto p-1.5"
          >
            {results.map(([code, countryName, dial], index) => {
              const active = code === iso
              const highlighted = index === activeIdx
              return (
                <li
                  key={code}
                  id={`${id}-opt-${code}`}
                  role="option"
                  aria-selected={active}
                  onClick={() => selectCountry(code)}
                  onMouseEnter={() => setActiveIdx(index)}
                  className={cn(
                    'flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 transition-colors select-none',
                    highlighted
                      ? 'bg-ink-800'
                      : active
                        ? 'bg-brand-100'
                        : 'hover:bg-ink-800',
                  )}
                >
                  <Flag code={code} />
                  <span className="min-w-0 flex-1 truncate text-sm text-ink-300">
                    {countryName}
                  </span>
                  <span className="shrink-0 font-mono text-xs text-ink-400">+{dial}</span>
                  {active ? (
                    <Icon name="check" className="size-4 shrink-0 text-brand-600" />
                  ) : null}
                </li>
              )
            })}

            {results.length === 0 ? (
              <li role="status" className="px-2.5 py-3 text-sm text-ink-400">
                No countries found
              </li>
            ) : null}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
