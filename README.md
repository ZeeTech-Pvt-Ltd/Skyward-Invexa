# Skyward Invexa — skywardinvexa-au.com

Marketing website for Skyward Invexa, an AI trading platform for Australian
investors. Built with **Next.js 16 App Router** (static export), React 19,
TypeScript and Tailwind CSS v4.

Every route is rendered to HTML at build time. There is no server: `out/` is
plain HTML, CSS and JS, and the only runtime request the page makes is the
market ticker and Google Analytics.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to out/
npm run serve      # serve out/ locally, with real 404s
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Next dev server with hot reload |
| `npm run build` | Typecheck and export every route to `out/` |
| `npm run serve` | Serve `out/` as Vercel would, unknown paths get a real 404 |
| `npm run check:ssg` | Assert every route emitted, with the right head and content, without a browser |
| `npm run check:meta` | Load every route in Chrome and assert title, description, canonical, robots, social card and JSON-LD |
| `npm run check:layout` | Measure panel-to-heading clearance at four viewport widths |
| `npm run check:flags` | Request every flag in the country picker and assert none is missing |
| `npm run check:csp` | Confirm every external origin the site contacts is allowed by the CSP |
| `npm run audit` | Report source files nothing imports and public assets nothing references |
| `npm run shots` | Screenshot a route into `.shots/` for visual review |
| `npm run sync:flags` | Copy the flag SVGs the country list needs into `public/flags/` |
| `npm run make:og` | Render `public/og-image.png` at 1200×630 |

The browser-based checks need a server. `npm run serve` after a build, or
`npm run dev`. Override the port with `SHOT_BASE`, because several Zeetech
projects share this machine and a port serving another site returns 200 and
looks fine:

```bash
SHOT_BASE=http://localhost:4190 npm run check:meta
```

Verify the server is this site before trusting a result:

```bash
curl -s http://localhost:4190/ | grep -o '<title>[^<]*'
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home, with the `#register` sign-up form |
| `/about` | About Us |
| `/contact` | Contact Us, same form as home |
| `/faq` | FAQ, 34 questions in seven groups |
| `/sign-up` | Sign Up |
| `/thank-you` | Thank You — every form lands here, `noindex` |
| `/risk-disclosure` | Risk Disclosure |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Use |
| `/cookie-policy` | Cookie Policy |
| `/ai-crypto-trading` … `/review` | Twelve marketing pages, one data file each |
| `*` | 404, real status |

Every page `<h1>` on the marketing pages contains **"Skyward Invexa"**. That is
a deliberate SEO constraint.

## Project structure

```
app/
  layout.tsx            root shell: fonts, metadata, header/footer, GA, site schema
  globals.css           Tailwind import + design tokens (@theme)
  page.tsx              home
  <route>/page.tsx      one directory per route
  not-found.tsx         becomes 404.html
  sitemap.ts            generated from the data files
src/
  components/           layout, sections, ui, charts, forms, seo, pages
  data/                 site, content, about, faq, countries, pages/<slug>.ts
  lib/                  metadata, phone, leadRelay, chartData
  views/                page components behind each route
public/                 flags, images, og image, robots.txt, gtag-init.js
```

Two conventions keep this maintainable:

- **Copy lives in `src/data/`, not in components.** Changing a fee, a market or
  an FAQ answer means editing one file.
- **Marketing pages are data.** `src/data/pages/<slug>.ts` is a
  `MarketingPage`; `components/pages/LandingPage.tsx` renders it. Adding a page
  means a data file, a one-line `app/<route>/page.tsx`, and a registry entry.

## Design tokens

Defined once in the `@theme` block of `app/globals.css`. Tailwind v4 generates
the utilities from those variables, so `--color-brand-600` produces
`bg-brand-600`, `text-brand-600`, `border-brand-600` and so on.

The palette is the four colours from the brief:

| Token | Value | Use |
| --- | --- | --- |
| `--color-hero-bg` | `#081C2D` | Navy: hero band, footer, dark panels |
| `--color-brand-500` | `#1F7A63` | Emerald: every interactive element |
| `--color-ink-950` | `#F5F7FA` | Soft White: page background |
| `--color-ink-500` | `#9AA3A8` | Cool Grey: dividers, decorative marks |

`--color-ink-400` (`#67707A`) is the one addition: the Cool Grey darkened for
small text, because `#9AA3A8` reaches only 2.6:1 on Soft White and fails WCAG AA.

The site is a **light theme**, except the navy hero band and footer. The ink
scale runs light-surface to dark-text.

## Editorial rules

**Headings are Title Case.** Body copy and form labels stay in sentence case.

**Every heading uses one `heading` colour.** No gradient text, no per-section
colour. Headings on navy use `text-hero-fg`, the one sanctioned exception.

**This site describes what the platform does, never what it returns.** No
performance percentages, win rates, customer counts, ratings or testimonials.
Where a detail is unconfirmed it is left out entirely rather than replaced with
a bracketed token.

**Generated chart data is labelled** wherever a reader could take it for live
market data. The ticker is real Binance data and says so; the sparklines are
generated and say so.

## Deployment

`out/` is the deployable artefact. Vercel serves it directly:

- `/about` is served from `about.html`, so canonical URLs stay slash-free.
- `404.html` gives unknown paths a real 404 status.
- `vercel.json` carries the security headers and the CSP. It has **no
  rewrites**: static export emits one file per route, and rewriting to
  `index.html` would 404.

The CSP allows the lead relay, Binance market data and Google Analytics, and
nothing else.

## Outstanding items

1. `site.abn` and `site.registeredOffice` in `src/data/site.ts` are samples.
   They are not rendered anywhere; supply real values or delete the fields.
2. `/privacy` and `/terms` are working drafts. Have a qualified Australian
   financial services lawyer review them against the Privacy Act 1988 (Cth) and
   the AFSL conditions, then remove the on-page notice.
3. Third-party statistics on the marketing pages (BIS, RBA, ACCC, ASIC, World
   Gold Council, Independent Reserve, Investing.com) keep the source named
   inline. They should be fact-checked before launch.
4. The registration form posts to the shared lead relay with
   `offerName: 'SkywardInvexa-Site'`. See `src/lib/leadRelay.ts`.
