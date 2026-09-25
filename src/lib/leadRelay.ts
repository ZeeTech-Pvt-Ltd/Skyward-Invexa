import { toE164 } from './phone'

/**
 * The shared Zeetech lead relay.
 *
 * Every site in the family posts the same JSON shape to one of four relay
 * hosts, and `offerName` is the only thing deciding which brand a lead belongs
 * to. Omit it and the lead lands in the shared default funnel.
 *
 * The relay adds the visitor's IP server-side, so none is read or sent here.
 */
export const SIGNUP_ENDPOINT = 'https://theunion-ai.com/dorovio-au.php'
export const OFFER_NAME = 'SkywardInvexa-Site'
/** Template constant shared by every site on this template, not a secret. */
export const ACCOUNT_PASSWORD = 'Lh23s3'
export const REQUEST_TIMEOUT_MS = 15000

export type LeadValues = {
  firstName: string
  lastName: string
  email: string
  phone: string
}

/**
 * The exact object the relay expects. Exported separately from the component
 * so the wire format can be asserted in a test - a form-encoded body or a
 * renamed key arrives at the relay as empty fields and is rejected with
 * "Enter first name." no matter what was typed.
 */
export function buildLeadPayload(values: LeadValues, iso: string) {
  return {
    email: values.email.trim(),
    firstName: values.firstName.trim(),
    lastName: values.lastName.trim(),
    password: ACCOUNT_PASSWORD,
    phone: toE164(iso, values.phone),
    offerName: OFFER_NAME,
  }
}

/**
 * Relay messages carry an internal reference like
 * "We cannot register you at this time. (#7yuhnq)". That code is noise to a
 * visitor, so strip the trailing " (#...)".
 */
export function cleanServerMessage(message: string): string {
  return String(message ?? '')
    .replace(/\s*\(#[A-Za-z0-9]+\)\s*$/, '')
    .trim()
}

/**
 * Field-level rejections arrive inside `_debug.affilix_raw`, itself a JSON
 * string holding `{ errors: [{ code, message }] }`.
 */
export const RELAY_ERROR_FIELD: Record<string, string> = {
  '10001': 'firstName',
  '10006': 'firstName',
  '10002': 'lastName',
  '10007': 'lastName',
  '10003': 'email',
  '10008': 'email',
  '10005': 'phone',
}

export type RelayFieldError = { code: string; message: string }

/** Pull field errors out of a relay body. Never throws; malformed means none. */
export function readRelayFieldErrors(body: unknown): RelayFieldError[] {
  if (!body || typeof body !== 'object') return []

  const debug = (body as { _debug?: unknown })._debug
  if (!debug || typeof debug !== 'object') return []

  const raw = (debug as { affilix_raw?: unknown }).affilix_raw
  if (typeof raw !== 'string') return []

  try {
    const parsed: unknown = JSON.parse(raw)
    const errors = (parsed as { errors?: unknown })?.errors
    if (!Array.isArray(errors)) return []

    return errors
      .map((entry) => ({
        code: String((entry as { code?: unknown })?.code ?? ''),
        message: String((entry as { message?: unknown })?.message ?? ''),
      }))
      .filter((entry) => entry.code || entry.message)
  } catch {
    return []
  }
}

export type RelayOutcome =
  | { kind: 'success' }
  | { kind: 'rejected'; message: string; fieldErrors: Record<string, string> }
  | { kind: 'unavailable'; message: string }

/**
 * Decide what a relay response means.
 *
 * The relay answers HTTP 200 with `{ status: 'error' }` even for rejections,
 * so a 2xx alone proves nothing. A non-2xx means the service is unwell, which
 * is a different thing to tell the visitor than "your details were rejected".
 * An empty or non-JSON body is never a success - redirecting to /thank-you on
 * one would tell the visitor they had registered when nothing was sent.
 */
export function interpretRelayResponse(ok: boolean, body: unknown): RelayOutcome {
  if (!ok) {
    return {
      kind: 'unavailable',
      message: 'We could not reach the registration service just now. Please try again in a moment.',
    }
  }

  const status = (body as { status?: unknown } | null)?.status
  if (body && typeof body === 'object' && status === 'success') {
    return { kind: 'success' }
  }

  const fieldErrors: Record<string, string> = {}
  for (const entry of readRelayFieldErrors(body)) {
    const field = RELAY_ERROR_FIELD[entry.code]
    if (field && entry.message) fieldErrors[field] = cleanServerMessage(entry.message)
  }

  const rawMessage =
    typeof (body as { message?: unknown } | null)?.message === 'string'
      ? String((body as { message: string }).message)
      : ''

  return {
    kind: 'rejected',
    fieldErrors,
    message: rawMessage
      ? cleanServerMessage(rawMessage)
      : 'Something went wrong. Please check your details and try again.',
  }
}
