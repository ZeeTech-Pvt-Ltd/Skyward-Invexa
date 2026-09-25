import { COUNTRIES, dialCodeOf, dialForPrefix } from '@/data/countries'

/** Strip everything that is not a digit or a leading plus. */
export function cleanPhone(value: string): string {
  return String(value ?? '').replace(/[^\d+]/g, '')
}

/**
 * Reduce whatever was typed or pasted into the bare national number for the
 * country that owns it.
 *
 * The dial code already sits in the flag prefix, so it is redundant inside the
 * box. A full international number is accepted too: "61412345678",
 * "+61412345678" and "412 345 678" all reduce to "412345678", and when the
 * pasted code belongs to a different country the returned `iso` changes so the
 * form can re-point the flag. That is what stops the country code from ever
 * being duplicated when the number is re-prefixed into E.164 on submit.
 */
export function parsePhoneInput(
  raw: string,
  currentIso: string,
): { iso: string; national: string } {
  let digits = cleanPhone(raw)
  let iso = currentIso

  if (digits.startsWith('+')) {
    digits = digits.slice(1)
    const codeIso = dialForPrefix(digits)
    if (codeIso) {
      iso = codeIso
      digits = digits.slice(dialCodeOf(codeIso).length)
    }
  }

  const dial = dialCodeOf(iso)
  // A pasted number may carry its own country code even without the "+",
  // e.g. "61412345678" pasted into an Australian field.
  if (digits.startsWith(dial) && digits.length - dial.length >= 5) {
    digits = digits.slice(dial.length)
  }

  return { iso, national: digits.replace(/^0+/, '') }
}

/**
 * Send the number in E.164, e.g. +61412345678. The field already holds only
 * the national number, so the strip below is a belt-and-braces guard against a
 * stray plus or country code being prefixed twice.
 */
export function toE164(iso: string, national: string): string {
  const dial = dialCodeOf(iso)
  let digits = cleanPhone(national)
  if (!digits) return ''
  if (digits.startsWith('+')) digits = digits.slice(1)
  if (digits.startsWith(dial) && digits.length > dial.length) digits = digits.slice(dial.length)
  digits = digits.replace(/^0+/, '')
  return digits ? `+${dial}${digits}` : ''
}

/* ------------------------------------------------------------------ */
/* Validation                                                          */
/* ------------------------------------------------------------------ */

export function validateName(value: string): string {
  if (!value || !value.trim()) return 'Please enter your name.'
  if (value.trim().length > 60) return 'Name must be under 60 characters.'
  return ''
}

export function validateEmail(value: string): string {
  const email = String(value ?? '').trim()
  if (!email) return 'Please enter your email address.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return 'Please enter a valid email address, e.g. name@example.com'
  }
  return ''
}

export function validatePhone(value: string): string {
  const phone = String(value ?? '').trim()
  if (!phone) return 'Please enter your phone number.'

  const digits = phone.replace(/[^\d]/g, '')

  // The dial code is already selected beside the field, so a leading trunk
  // zero would be wrong rather than merely redundant. Say so rather than
  // silently dropping it, which would leave the visitor with a number they did
  // not type and no explanation.
  if (digits.startsWith('0')) {
    return 'Leave off the leading 0. The country code is already selected beside this field.'
  }

  if (!/^\d{6,15}$/.test(digits)) return 'Enter a valid phone number, 6 to 15 digits.'

  return ''
}

/** Number of countries the picker offers. */
export const COUNTRY_COUNT = COUNTRIES.length
