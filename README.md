# Skyward Invexa — skywardinvexa-au.com

Marketing website for Skyward Invexa, a multi-asset trading platform for
Australian investors. Built with React 19, TypeScript, Vite and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite dev server with hot reload |
| `npm run build` | Typecheck, then build to `dist/` |
| `npm run preview` | Serve the built output locally |
| `npm run typecheck` | `tsc --noEmit` only |
| `npm run smoke` | Render every route in Node and fail on any that throws |
| `npm run test:ui` | Drive real DOM interactions in jsdom (accordion, form validation) |

`npm run smoke` is the quickest way to catch a page that compiles but crashes at
runtime. It builds `scripts/smoke.tsx` for SSR, renders every route to a string,
and asserts each one still contains the content it should — a page that renders
an empty shell passes a render-only check but fails this one. When you add a
route, add its expected markers to the `routes` array in that file.

`npm run test:ui` covers what rendering cannot: that the FAQ accordion actually
expands and collapses on click, that panels open independently, and that both
forms refuse an empty submission. It mounts the real `App` in a jsdom window and
dispatches real events. Two things to know if you extend it:

- Import `./dom` **first** in any script that needs a DOM. It installs the
  jsdom globals before `react-dom` reads them at module scope.
- Scope selectors to the component under test. `button[aria-expanded]` matches
  the navbar's mobile-menu toggle as well as every accordion question, which
  produces failures that look like component bugs but are not.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home (includes the `#open-account` sign-up form) |
| `/about` | About Us |
| `/faq` | FAQ |
| `/contact` | Contact Us |
| `/sign-up` | Sign Up |
| `/thank-you` | Thank You — every form lands here |
| `/risk-disclosure` | Risk Disclosure |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Use |
| `/cookie-policy` | Cookie Policy |
| `*` | 404 |

Forms live in three places: the `#open-account` block on the home page, the
contact page, and the sign-up page. All three are client-side only and compose
an email via `mailto:` — see the deploy notes below.

Every page `<h1>` must contain the phrase **"Skyward Invexa"**. That is a
deliberate SEO constraint — keep it when you add or reword a heading.

## Project structure

```
src/
├─ App.tsx                 Route table
├─ main.tsx                Entry point, mounts BrowserRouter
├─ index.css               Tailwind import + design tokens (@theme)
│
├─ data/                   All copy and configuration
│  ├─ site.ts              Brand, domain, contact details, nav, risk warning
│  └─ content.ts           Features, markets, fees, FAQ, milestones
│
├─ lib/
│  ├─ cn.ts                className joiner
│  └─ usePageMeta.ts       Per-route title / description / canonical
│
├─ components/
│  ├─ layout/              Navbar, Footer, RootLayout, Logo, ScrollToTop
│  ├─ sections/            Hero, FeatureGrid, MarketCards, CtaBand, ...
│  └─ ui/                  Button, Card, Badge, Accordion, Table, Icon, ...
│
└─ pages/                  One file per route
```

Two conventions keep this maintainable:

- **Copy lives in `src/data/`, not in components.** Changing a fee, a market or
  an FAQ answer means editing one file, never hunting through JSX.
- **Pages are presentational.** They compose sections and call `usePageMeta`.
  Anything reused on two pages is a component, not duplicated markup.

## Design tokens

Defined once in the `@theme` block of `src/index.css`. Tailwind v4 generates the
utilities from those variables, so `--color-brand-600` produces `bg-brand-600`,
`text-brand-600`, `border-brand-600` and so on.

The site is a **light theme**. The ink scale runs light-surface → dark-text:
`ink-950` is the page background (white) and `ink-300` is body copy.

| Token | Utilities | Use |
| --- | --- | --- |
| `--color-ink-950` | `bg-ink-950` | Page background — white |
| `--color-ink-900` | `bg-ink-900` | Raised section bands |
| `--color-ink-850` | `bg-ink-850` | Card surfaces — white + shadow |
| `--color-ink-800/700` | `border-ink-700` | Borders and dividers |
| `--color-ink-500/400/300` | `text-ink-300` | Muted → body text |
| `--color-heading` | `text-heading` | **Every** heading, without exception |
| `--color-on-brand` | `text-on-brand` | Text on a brand-coloured fill |
| `--color-brand-*` | `bg-brand-600` | Primary accent — sky blue |
| `--color-mint-*` | `text-mint-600` | Positive / confirmation accent |
| `--color-warn-*` | `text-warn-600` | Risk and warning callouts |
| `--font-display` | `font-display` | Sora — headings |
| `--font-sans` | `font-sans` | Inter — body |
| `--radius-card` | `rounded-card` | 1rem, standard panel radius |

Two utility classes carry the light treatment: `.elevate` (card shadow — light
interfaces separate surfaces with elevation rather than the border contrast a
dark theme relies on) and `.glow-brand` (the soft blue wash behind the hero and
CTA bands).

Fonts load from Google Fonts in `index.html`. To self-host them, drop the
`<link>` tags and serve the files from `public/fonts/`.

## Images

Photographs live in `public/images/` and are registered in `src/data/images.ts`
with real alt text and intrinsic dimensions (so the browser reserves space and
the layout does not shift). They were downloaded from Unsplash under the Unsplash
License and are **self-hosted** — the site has no runtime dependency on a
third-party CDN.

Use the `Photo` component rather than a bare `<img>`, and `ImageFeature` for the
image-beside-copy blocks used on the Home, Platform, Markets and About pages.

To swap an image, replace the file and update the matching entry in
`images.ts`. Keep the `width`/`height` accurate or you will reintroduce layout
shift.

## Editorial rules

**Headings are Title Case.** Anything rendered inside an `<h1>`–`<h4>`, a card
title or an accordion question is capitalised as a title ("What the Risk Engine
Will and Will Not Do"). Body copy, form labels and option text stay in sentence
case. Small function words — *a, an, the, and, or, of, to, in, on, for, with, at,
by, from* — stay lowercase unless they open or close the heading.

**Every heading uses the one `heading` colour.** Do not introduce gradient text
or a per-section heading colour; the single-colour rule is deliberate.

This site describes what the platform **does**, never what it **returns**. That
distinction is deliberate and should survive future edits.

**Do not add:** performance or accuracy percentages, review scores or review
counts, invented customer testimonials, named staff without their consent, or
any implied promise of a financial outcome.

**Do add:** the current risk warning (`riskWarning` in `src/data/site.ts` — it is
rendered in the footer and on every product page), and a visible label for any
figure that is a sample rather than a published fact. Use the `IllustrativeNote`
component for that.

Any new numeric claim should be traceable to a published source or an account
agreement. If it is not, label it as illustrative.

## Before deploying

The site is static — `dist/` is plain HTML, CSS and JS. Client-side routing needs
a catch-all rewrite so a hard refresh on `/pricing` does not 404. Both are
already configured:

- `public/_redirects` — Netlify, Cloudflare Pages
- `vercel.json` — Vercel

For other hosts, add the equivalent: serve `index.html` with a 200 for every
unmatched path.

**Outstanding items — these are placeholders and must be replaced:**

1. `site.abn`, `site.registeredOffice` and the email addresses in
   `src/data/site.ts` are samples.
2. `feeSchedule` in `src/data/content.ts` is an illustrative structure, not a
   binding rate card.
3. `/privacy` and `/terms` are working drafts. Both carry an on-page notice to
   that effect. Have a qualified Australian financial services lawyer review
   them against the Privacy Act 1988 (Cth) and your AFSL conditions, then remove
   the notice.
4. The contact form has no backend. It composes an email client-side via
   `mailto:`. Replace the handler in `src/pages/Contact.tsx` with a real endpoint
   when one exists — the field set (first name, last name, email, phone with dial
   code, company, reason, message, consent) is already modelled in the
   `FormState` type there.
5. Add an OG image and reference it from `index.html` and `usePageMeta`.
6. The FAQ answer on regulation is deliberately non-committal. Replace it with
   your actual licence details before launch.
