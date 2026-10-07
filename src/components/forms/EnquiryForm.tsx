import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { dialCodeOf, isKnownCountry, PHONE_EXAMPLE, PHONE_EXAMPLE_FALLBACK, TZ_COUNTRY } from '@/data/countries'
import { parsePhoneInput, validateEmail, validateName, validatePhone } from '@/lib/phone'
import {
  buildLeadPayload,
  interpretRelayResponse,
  REQUEST_TIMEOUT_MS,
  SIGNUP_ENDPOINT,
} from '@/lib/leadRelay'
import { PhoneField } from '@/components/ui/PhoneField'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/cn'

/**
 * Australia is the target market, so the flag starts there and only re-points
 * at the visitor's own country once the AU default has been visible for a
 * beat. The hint comes from the browser's own timezone via `Intl`, never from
 * a network lookup, so no visitor IP leaves the page.
 */
const MIN_AU_VISIBLE_MS = 1600

type Values = {
  firstName: string
  lastName: string
  email: string
  phone: string
  agree: boolean
}

type FieldName = 'firstName' | 'lastName' | 'email' | 'phone'

const initialValues: Values = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  agree: false,
}

const VALIDATORS: Record<FieldName, (value: string) => string> = {
  firstName: validateName,
  lastName: validateName,
  email: validateEmail,
  phone: validatePhone,
}

/**
 * The site's one registration form, rendered on the home page and on the
 * contact page. Both instances are this component, so they cannot drift.
 */
export function EnquiryForm({ className }: { className?: string }) {
  const [values, setValues] = useState<Values>(initialValues)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [status, setStatus] = useState<'idle' | 'submitting'>('idle')
  const [serverError, setServerError] = useState('')
  const [country, setCountry] = useState('AU')
  // Off-screen honeypot. Only a bot fills it in.
  const [company, setCompany] = useState('')

  const countryRef = useRef('AU')
  countryRef.current = country
  const phoneHasValueRef = useRef(false)
  phoneHasValueRef.current = Boolean(values.phone && values.phone.trim())
  // True while a "+" has been typed but its dial code is still incomplete.
  const plusPendingRef = useRef(false)
  const mountedRef = useRef(true)
  const submittingRef = useRef(false)

  const navigate = useNavigate()

  // Timezone-based country default. Skipped once the visitor starts typing.
  useEffect(() => {
    let cancelled = false
    let timer: ReturnType<typeof setTimeout> | undefined
    const mountedAt = Date.now()

    const selectFromTimezone = () => {
      if (cancelled || phoneHasValueRef.current) return
      let iso = ''
      try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
        if (timezone && TZ_COUNTRY[timezone]) iso = TZ_COUNTRY[timezone]
      } catch {
        /* keep the AU default */
      }
      if (!iso || iso === 'AU' || !isKnownCountry(iso)) return
      const delay = Math.max(0, MIN_AU_VISIBLE_MS - (Date.now() - mountedAt))
      timer = setTimeout(() => {
        if (!cancelled && !phoneHasValueRef.current) setCountry(iso)
      }, delay)
    }

    selectFromTimezone()
    return () => {
      cancelled = true
      if (timer) clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  function handleChange(name: keyof Values) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      let value: string | boolean = name === 'agree' ? event.target.checked : event.target.value

      if (name === 'phone' && typeof value === 'string') {
        const raw = value
        if (raw === '') plusPendingRef.current = false
        else if (raw.startsWith('+')) plusPendingRef.current = true

        // While the "+" is pending but already erased from the box, keep
        // parsing the digits as international so "61..." re-points the flag
        // before it can be mistaken for a local number.
        const input = plusPendingRef.current && !raw.startsWith('+') ? `+${raw}` : raw
        const parsed = parsePhoneInput(input, countryRef.current)
        if (parsed.iso !== countryRef.current) setCountry(parsed.iso)

        if (plusPendingRef.current) {
          // The dial is complete once the typed digits match the country the
          // "+" resolved to. Until then keep the "+" visible so the next
          // keystroke continues an international number, not a local one.
          const digits = input.replace(/^\+/, '')
          const dial = dialCodeOf(parsed.iso)
          if (digits.length >= dial.length && digits.startsWith(dial)) {
            plusPendingRef.current = false
          } else {
            value = raw
          }
        }

        if (!plusPendingRef.current) value = parsed.national
      }

      if (serverError) setServerError('')
      setValues((previous) => ({ ...previous, [name]: value }))

      if (touched[name] && name !== 'agree') {
        setErrors((previous) => ({ ...previous, [name]: VALIDATORS[name](String(value)) }))
      }
    }
  }

  function handleBlur(name: keyof Values) {
    return (event: React.FocusEvent<HTMLInputElement>) => {
      setTouched((previous) => ({ ...previous, [name]: true }))

      if (name === 'phone' && values.phone.startsWith('+')) {
        // Collapse a hand-typed international entry to national digits now the
        // field is done; the flag prefix carries the dial.
        const parsed = parsePhoneInput(values.phone, countryRef.current)
        if (parsed.iso !== countryRef.current) setCountry(parsed.iso)
        setValues((previous) => ({ ...previous, phone: parsed.national }))
        setErrors((previous) => ({ ...previous, phone: validatePhone(parsed.national) }))
        return
      }

      if (name !== 'agree') {
        setErrors((previous) => ({
          ...previous,
          [name]: VALIDATORS[name](String(event.target.value)),
        }))
      }
    }
  }

  function validateAll() {
    const next: Record<string, string> = {}
    for (const [name, validate] of Object.entries(VALIDATORS)) {
      next[name] = validate(values[name as FieldName])
    }
    if (!values.agree) {
      next.agree = 'You must agree to the Privacy Policy and Terms & Conditions to continue.'
    }
    return next
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Belt-and-braces guard on top of the disabled button.
    if (submittingRef.current) return

    setServerError('')

    // The honeypot must actually be checked. A filled box means a bot, so the
    // form reports success without sending anything anywhere.
    if (company.trim()) {
      navigate('/thank-you')
      return
    }

    const nextErrors = validateAll()
    setErrors(nextErrors)
    setTouched({ firstName: true, lastName: true, email: true, phone: true, agree: true })
    if (Object.values(nextErrors).some(Boolean)) return

    setStatus('submitting')
    submittingRef.current = true

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

    try {
      const response = await fetch(SIGNUP_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildLeadPayload(values, country)),
        signal: controller.signal,
      })

      const body = await response.json().catch(() => null)
      const outcome = interpretRelayResponse(response.ok, body)

      if (!mountedRef.current) return

      if (outcome.kind === 'success') {
        navigate('/thank-you')
        return
      }

      if (outcome.kind === 'rejected') {
        if (Object.keys(outcome.fieldErrors).length) {
          setErrors((previous) => ({ ...previous, ...outcome.fieldErrors }))
        }
        setServerError(outcome.message)
      } else {
        setServerError(outcome.message)
      }

      setStatus('idle')
    } catch {
      if (mountedRef.current) {
        setServerError(
          "We couldn't reach the registration service just now. Please try again in a moment.",
        )
        setStatus('idle')
      }
    } finally {
      clearTimeout(timeoutId)
      submittingRef.current = false
    }
  }

  const inputClass = (name: FieldName) =>
    cn(
      'w-full rounded-xl border bg-ink-950 px-4 py-3 text-sm text-heading placeholder:text-ink-400 transition-colors focus:border-brand-500 focus:outline-none',
      errors[name] && touched[name] ? 'border-danger-400/70' : 'border-ink-600',
    )

  const errorText = (name: string) =>
    errors[name] && touched[name] ? (
      <p id={`${name}-error`} className="mt-2 text-xs text-danger-400">
        {errors[name]}
      </p>
    ) : null

  const required = (
    <>
      <span className="text-danger-400" aria-hidden="true">
        *
      </span>
      <span className="sr-only">(required)</span>
    </>
  )

  return (
    <form onSubmit={handleSubmit} noValidate className={cn('space-y-5', className)}>
      {/* Honeypot. Off-screen and out of the tab order, so only a bot fills it. */}
      <div className="absolute h-px w-px -translate-x-[9999px] overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* The heading lives in the component rather than on each page, so the
          home, contact and sign-up forms cannot drift apart. */}
      <div>
        <h2 className="font-display text-xl font-semibold text-heading sm:text-2xl">
          Open Your Free Account Today
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-400">
          Registration takes under two minutes. No card required, no obligation to deposit.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-ink-300">
            First Name {required}
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            maxLength={60}
            placeholder="Jane"
            value={values.firstName}
            onChange={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            aria-invalid={Boolean(errors.firstName && touched.firstName)}
            aria-describedby={errors.firstName && touched.firstName ? 'firstName-error' : undefined}
            className={inputClass('firstName')}
          />
          {errorText('firstName')}
        </div>

        <div>
          <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-ink-300">
            Last Name {required}
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            maxLength={60}
            placeholder="Citizen"
            value={values.lastName}
            onChange={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            aria-invalid={Boolean(errors.lastName && touched.lastName)}
            aria-describedby={errors.lastName && touched.lastName ? 'lastName-error' : undefined}
            className={inputClass('lastName')}
          />
          {errorText('lastName')}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink-300">
            Email Address {required}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={120}
            placeholder="jane@example.com"
            value={values.email}
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
            aria-invalid={Boolean(errors.email && touched.email)}
            aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
            className={inputClass('email')}
          />
          {errorText('email')}
        </div>

        {/* Email and phone sit side by side on sm and up, matching the name row
            above. Below sm everything stacks. */}
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-ink-300">
            Phone Number {required}
          </label>
          <PhoneField
            id="phone"
            name="phone"
            iso={country}
            onIsoChange={(iso) => {
              setCountry(iso)
              if (touched.phone) {
                setErrors((previous) => ({ ...previous, phone: validatePhone(values.phone) }))
              }
            }}
            value={values.phone}
            onChange={handleChange('phone')}
            onBlur={handleBlur('phone')}
            invalid={Boolean(errors.phone && touched.phone)}
            describedBy={errors.phone && touched.phone ? 'phone-error' : undefined}
            placeholder={PHONE_EXAMPLE[country] ?? PHONE_EXAMPLE_FALLBACK}
          />
          {errorText('phone')}
        </div>
      </div>

      {serverError ? (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-xl border border-danger-400/35 bg-danger-400/[0.06] px-4 py-3 text-sm leading-relaxed text-danger-400"
        >
          <Icon name="alert" className="mt-0.5 size-4 shrink-0" />
          <span>{serverError}</span>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-base font-medium text-on-brand transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? 'Creating your account...' : 'Get Started'}
      </button>

      <div>
        <label
          htmlFor="agree"
          className="flex cursor-pointer items-start gap-3 text-sm text-ink-300"
        >
          <input
            id="agree"
            name="agree"
            type="checkbox"
            required
            checked={values.agree}
            onChange={handleChange('agree')}
            onBlur={handleBlur('agree')}
            aria-invalid={Boolean(errors.agree && touched.agree)}
            aria-describedby={errors.agree && touched.agree ? 'agree-error' : undefined}
            className="mt-0.5 size-4 shrink-0 cursor-pointer rounded border-ink-600 accent-brand-600"
          />
          <span>
            I agree to the{' '}
            <Link to="/privacy" className="font-medium text-brand-700 hover:text-brand-500">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link to="/terms" className="font-medium text-brand-700 hover:text-brand-500">
              Terms &amp; Conditions
            </Link>
            .
          </span>
        </label>
        {errorText('agree')}
      </div>

      {/* This line carries the risk wording that used to sit in a band above the
          form. The form is rendered on three pages, so the disclosure travels
          with it rather than living on the home page alone. */}
      <p className="text-center text-xs leading-relaxed text-ink-400">
        By registering you confirm you are aged 18 or over. Trading carries risk, and you may lose
        some or all of your deposit. Read the{' '}
        <Link to="/risk-disclosure" className="font-medium text-brand-700 hover:text-brand-500">
          Risk Disclosure Statement
        </Link>
        . We never ask for credit card details or passwords during sign-up.
      </p>
    </form>
  )
}
