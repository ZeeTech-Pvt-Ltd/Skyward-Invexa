/**
 * DOM interaction and wire-format tests.
 *
 * The smoke test proves pages *render*. This proves they *respond* and that
 * the registration form sends the exact shape the shared lead relay expects -
 * a form-encoded body or a renamed key arrives as empty fields and is rejected
 * no matter what the visitor typed, and that failure is invisible locally.
 *
 * Run with: npm run test:ui
 */
import { click, doc } from './dom'

import { act } from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter } from 'react-router-dom'
import App from '../src/App'
import {
  buildLeadPayload,
  cleanServerMessage,
  interpretRelayResponse,
  OFFER_NAME,
  SIGNUP_ENDPOINT,
} from '../src/lib/leadRelay'
import { parsePhoneInput, toE164, validateEmail, validatePhone } from '../src/lib/phone'

type Case = { name: string; run: () => void }

let failures = 0

function mount(path: string) {
  const container = doc.createElement('div')
  doc.body.appendChild(container)
  const root = createRoot(container)

  act(() => {
    root.render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    )
  })

  return {
    container,
    teardown: () => {
      act(() => root.unmount())
      container.remove()
    },
  }
}

function assert(condition: boolean, message: string) {
  if (!condition) throw new Error(message)
}

/** The two pages that render the registration form. */
const FORM_ROUTES = ['/', '/contact']

/** Field ids fixed by the house brief. Password managers select on these. */
const EXPECTED_FIELDS = ['firstName', 'lastName', 'email', 'phone', 'agree', 'company']

const cases: Case[] = [
  {
    name: 'FAQ accordion expands the panel when its question is clicked',
    run: () => {
      const { container, teardown } = mount('/faq')
      try {
        const buttons = container.querySelectorAll('h3 button[aria-expanded]')
        assert(buttons.length >= 3, `expected FAQ buttons, found ${buttons.length}`)

        const second = buttons[1]
        const panelId = second.getAttribute('aria-controls')
        assert(Boolean(panelId), 'button is missing aria-controls')

        const panel = container.querySelector(`#${escapeSelector(panelId as string)}`)
        assert(panel !== null, `panel ${panelId} not found`)
        assert(panel!.hasAttribute('hidden'), 'second panel should start closed')

        act(() => click(second))

        assert(!panel!.hasAttribute('hidden'), 'clicking the question did not reveal its answer')
        assert(second.getAttribute('aria-expanded') === 'true', 'aria-expanded was not set to true')
      } finally {
        teardown()
      }
    },
  },
  {
    name: 'FAQ starts closed and only ever has one panel open',
    run: () => {
      const { container, teardown } = mount('/faq')
      try {
        const buttons = container.querySelectorAll('h3 button[aria-expanded]')
        assert(buttons.length >= 3, `expected FAQ buttons, found ${buttons.length}`)

        const panelFor = (button: Element) =>
          container.querySelector(
            `#${escapeSelector(button.getAttribute('aria-controls') as string)}`,
          )

        const openCount = () =>
          Array.from(buttons).filter((button) => button.getAttribute('aria-expanded') === 'true')
            .length

        // Nothing is expanded until the visitor asks for it.
        for (const button of Array.from(buttons)) {
          assert(
            button.getAttribute('aria-expanded') === 'false',
            'a panel was expanded on load; every panel should start closed',
          )
        }

        act(() => click(buttons[0]))
        assert(!panelFor(buttons[0])!.hasAttribute('hidden'), 'first panel did not open')
        assert(openCount() === 1, `expected exactly one open panel, found ${openCount()}`)

        // Opening a second must close the first: one at a time only.
        act(() => click(buttons[1]))
        assert(!panelFor(buttons[1])!.hasAttribute('hidden'), 'second panel did not open')
        assert(
          panelFor(buttons[0])!.hasAttribute('hidden'),
          'opening the second answer left the first one open',
        )
        assert(openCount() === 1, `expected exactly one open panel, found ${openCount()}`)

        // Clicking the open question again closes it.
        act(() => click(buttons[1]))
        assert(panelFor(buttons[1])!.hasAttribute('hidden'), 'panel did not close on second click')
        assert(openCount() === 0, 'a panel stayed open after collapsing')
      } finally {
        teardown()
      }
    },
  },
  {
    name: 'Home and contact render the identical form field set',
    run: () => {
      for (const route of FORM_ROUTES) {
        const { container, teardown } = mount(route)
        try {
          const form = container.querySelector('form')
          assert(form !== null, `${route} has no form`)

          const missing = EXPECTED_FIELDS.filter((id) => container.querySelector(`#${id}`) === null)
          assert(missing.length === 0, `${route} is missing: ${missing.join(', ')}`)

          assert(
            form!.querySelector('button[type="submit"]') !== null,
            `${route} form has no submit button`,
          )
        } finally {
          teardown()
        }
      }
    },
  },
  {
    name: 'Every form blocks an empty submission',
    run: () => {
      for (const route of FORM_ROUTES) {
        const { container, teardown } = mount(route)
        try {
          act(() => click(container.querySelector('form button[type="submit"]')!))
          const errors = container.querySelectorAll('[id$="-error"]')
          assert(
            errors.length >= 5,
            `${route} showed ${errors.length} validation errors, expected one per required field`,
          )
        } finally {
          teardown()
        }
      }
    },
  },
  {
    name: 'The honeypot is present, off-screen, and out of the tab order',
    run: () => {
      const { container, teardown } = mount('/')
      try {
        const honeypot = container.querySelector('#company') as HTMLInputElement | null
        assert(honeypot !== null, 'honeypot field #company is missing')
        assert(honeypot!.tabIndex === -1, 'honeypot must be skipped by the tab order')

        // It must sit inside an aria-hidden wrapper, or assistive tech will
        // announce a field a person is never meant to fill in.
        const wrapper = honeypot!.closest('[aria-hidden="true"]')
        assert(wrapper !== null, 'honeypot is not inside an aria-hidden wrapper')
      } finally {
        teardown()
      }
    },
  },
  {
    name: 'The lead payload has the exact wire shape the relay expects',
    run: () => {
      const payload = buildLeadPayload(
        {
          firstName: ' Jane ',
          lastName: 'Citizen',
          email: ' jane@example.com ',
          phone: '412345678',
        },
        'AU',
      )

      const keys = Object.keys(payload).sort()
      const expected = ['email', 'firstName', 'lastName', 'offerName', 'password', 'phone']
      assert(
        JSON.stringify(keys) === JSON.stringify(expected),
        `payload keys are ${keys.join(',')}, expected ${expected.join(',')}`,
      )

      assert(payload.phone === '+61412345678', `phone was ${payload.phone}, expected E.164`)
      assert(payload.offerName === OFFER_NAME, 'offerName is what routes the lead to the brand')
      assert(payload.password === 'Lh23s3', 'template password constant must be sent')
      assert(payload.firstName === 'Jane', 'firstName should be trimmed')
      assert(payload.email === 'jane@example.com', 'email should be trimmed')
      assert(!('ip' in payload), 'the relay adds the IP server-side; we must never send one')
      assert(
        SIGNUP_ENDPOINT.startsWith('https://') && SIGNUP_ENDPOINT.endsWith('.php'),
        'unexpected relay endpoint',
      )
    },
  },
  {
    name: 'Phone numbers become E.164 without double-prefixing',
    run: () => {
      assert(toE164('AU', '412345678') === '+61412345678', 'AU national number')
      assert(toE164('GB', '7911123456') === '+447911123456', 'GB national number')
      assert(toE164('US', '2025550134') === '+12025550134', 'US national number')
      // Guards: a stray trunk zero or a repeated dial code must not survive.
      assert(toE164('AU', '0412345678') === '+61412345678', 'leading zero should be dropped')
      assert(toE164('AU', '+61412345678') === '+61412345678', 'dial code must not double up')
      assert(toE164('AU', '') === '', 'empty stays empty')
    },
  },
  {
    name: 'Pasting an international number re-points the country',
    run: () => {
      const au = parsePhoneInput('+61412345678', 'AU')
      assert(au.iso === 'AU' && au.national === '412345678', 'AU number parsed')

      const gb = parsePhoneInput('+447911123456', 'AU')
      assert(gb.iso === 'GB' && gb.national === '7911123456', 'UK paste should re-point the flag')

      const bare = parsePhoneInput('61412345678', 'AU')
      assert(bare.national === '412345678', 'a pasted dial code without + should be stripped')

      const local = parsePhoneInput('0412 345 678', 'AU')
      assert(local.national === '412345678', 'spaces and trunk zero removed')
    },
  },
  {
    name: 'Validation rejects a leading zero and each malformed field',
    run: () => {
      assert(validatePhone('412345678') === '', 'a valid national number should pass')
      assert(
        validatePhone('0412345678').toLowerCase().includes('leading 0'),
        'a leading zero must be rejected with an explanation, not stripped silently',
      )
      assert(validatePhone('').length > 0, 'empty phone rejected')
      assert(validatePhone('123').length > 0, 'too short rejected')
      assert(validatePhone('1234567890123456').length > 0, 'too long rejected')

      assert(validateEmail('jane@example.com') === '', 'valid email passes')
      assert(validateEmail('jane@example').length > 0, 'email needs a dot in the domain')
      assert(validateEmail('jane example.com').length > 0, 'email needs an @ with no spaces')
      assert(validateEmail('').length > 0, 'empty email rejected')
    },
  },
  {
    name: 'Relay responses are interpreted correctly, including the failure modes',
    run: () => {
      assert(interpretRelayResponse(true, { status: 'success' }).kind === 'success', 'success')

      // The relay answers HTTP 200 even for rejections, so the body decides.
      const rejected = interpretRelayResponse(true, {
        status: 'error',
        message: 'We cannot register you at this time. (#7yuhnq)',
      })
      assert(rejected.kind === 'rejected', '2xx with status:error is a rejection')
      assert(
        rejected.kind === 'rejected' && rejected.message === 'We cannot register you at this time.',
        'the (#support) code must be stripped from the message',
      )

      // A non-2xx is the service being unwell, which is a different message.
      const down = interpretRelayResponse(false, null)
      assert(down.kind === 'unavailable', 'non-2xx means the service is unavailable')

      // An empty or non-JSON body must never be treated as success.
      assert(
        interpretRelayResponse(true, null).kind === 'rejected',
        'an empty body must never reach /thank-you',
      )
      assert(
        interpretRelayResponse(true, '<html>').kind === 'rejected',
        'a non-JSON body must never reach /thank-you',
      )

      // Field-level errors are surfaced against the right input.
      const withFields = interpretRelayResponse(true, {
        status: 'error',
        message: 'Please check your details.',
        _debug: {
          affilix_raw: JSON.stringify({
            errors: [
              { code: '10001', message: 'Enter first name.' },
              { code: '10005', message: 'Enter a valid phone number.' },
            ],
          }),
        },
      })
      assert(
        withFields.kind === 'rejected' &&
          withFields.fieldErrors.firstName === 'Enter first name.' &&
          withFields.fieldErrors.phone === 'Enter a valid phone number.',
        'relay error codes must map onto the matching fields',
      )

      // A malformed _debug payload must degrade, not throw.
      const garbage = interpretRelayResponse(true, { status: 'error', _debug: { affilix_raw: '{{{' } })
      assert(garbage.kind === 'rejected', 'malformed _debug should fall back to the summary')

      assert(
        cleanServerMessage('Too many attempts. (#8plo9)') === 'Too many attempts.',
        'support codes are stripped',
      )
    },
  },
]

function escapeSelector(value: string) {
  return value.replace(/[:.]/g, '\\$&')
}

for (const testCase of cases) {
  try {
    testCase.run()
    console.log(`  ok   ${testCase.name}`)
  } catch (error) {
    failures += 1
    console.error(`  FAIL ${testCase.name}`)
    console.error(`       ${error instanceof Error ? error.message : String(error)}`)
  }
}

if (failures > 0) {
  console.error(`\n${failures} of ${cases.length} tests failed.`)
  process.exit(1)
}

console.log(`\nAll ${cases.length} tests passed.`)
