/**
 * Renders the social share card to public/og-image.png at 1200x630.
 *
 * Composed as HTML and screenshotted rather than hand-built, so the type is
 * real type and the layout is the same one the site uses.
 *
 * Run: npm run make:og
 */
import { chromium } from 'playwright-core'
import { mkdirSync } from 'node:fs'

const OUT = 'public/og-image.png'

const html = `<!doctype html>
<html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@600;700&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden; position: relative;
    background: #081c2d;
    font-family: Inter, system-ui, sans-serif;
    display: flex; align-items: center; padding: 0 80px;
  }
  .glow {
    position: absolute; inset: 0;
    background:
      radial-gradient(55% 60% at 84% 12%, rgba(58,156,126,.5) 0%, transparent 68%),
      radial-gradient(40% 45% at 6% 92%, rgba(232,163,61,.12) 0%, transparent 70%);
  }
  .grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(to right, #123454 1px, transparent 1px),
      linear-gradient(to bottom, #123454 1px, transparent 1px);
    background-size: 54px 54px;
    mask-image: radial-gradient(80% 70% at 50% 0%, #000 0%, transparent 78%);
    -webkit-mask-image: radial-gradient(80% 70% at 50% 0%, #000 0%, transparent 78%);
  }
  .chart { position: absolute; right: -30px; bottom: -20px; opacity: .5; }
  .content { position: relative; max-width: 760px; }
  .brand { display: flex; align-items: center; gap: 14px; }
  .brand span {
    font-family: Sora, sans-serif; font-weight: 700; font-size: 30px;
    color: #f5f7fa; letter-spacing: -.01em;
  }
  .brand em { font-style: normal; color: #7fdcff; margin-left: 7px; }
  h1 {
    font-family: Sora, sans-serif; font-weight: 600; font-size: 58px;
    line-height: 1.08; letter-spacing: -.02em; color: #f5f7fa; margin-top: 44px;
  }
  .rule { width: 96px; height: 5px; background: #43c8f7; border-radius: 3px; margin: 38px 0 26px; }
  .meta { font-size: 23px; color: #a7b9cc; }
  .meta b { color: #f5f7fa; font-weight: 500; }
</style></head>
<body>
  <div class="glow"></div><div class="grid"></div>

  <svg class="chart" width="560" height="330" viewBox="0 0 560 330" aria-hidden="true">
    <polyline points="0,250 40,232 80,258 120,196 160,214 200,150 240,168 280,120 320,142 360,92 400,110 440,64 480,86 520,40 560,58"
      fill="none" stroke="#3a9c7e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
    <polyline points="0,272 60,262 120,244 180,236 240,208 300,196 360,168 420,150 480,124 540,104"
      fill="none" stroke="#8cc9b7" stroke-width="2" opacity=".6" stroke-linecap="round"/>
  </svg>

  <div class="content">
    <div class="brand">
      <svg width="52" height="52" viewBox="0 0 64 64" aria-hidden="true">
        <defs><linearGradient id="g" x1="0" y1="64" x2="64" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#124a3b"/><stop offset=".5" stop-color="#1f7a63"/><stop offset="1" stop-color="#3a9c7e"/>
        </linearGradient></defs>
        <rect width="64" height="64" rx="12" fill="url(#g)"/>
        <path d="M32 11 L54 35 H39 V53 H25 V35 H10 Z" fill="#f5f7fa"/>
        <path d="M32 11 L54 35 H39 V53 H32 Z" fill="#a9cfc2"/>
      </svg>
      <span>Skyward<em>Invexa</em></span>
    </div>

    <h1>Multi-Asset Market Access for Australian Investors</h1>
    <div class="rule"></div>
    <p class="meta"><b>Crypto, ASX equities, FX and commodities.</b> One account. Published fees.</p>
  </div>
</body></html>`

const browser = await chromium.launch({ channel: 'chrome' })
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
await page.setContent(html, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)
await page.waitForTimeout(400)

mkdirSync('public', { recursive: true })
await page.screenshot({ path: OUT })
await browser.close()

console.log(`wrote ${OUT} at 1200x630`)
