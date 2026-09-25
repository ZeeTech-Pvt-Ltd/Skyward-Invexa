/**
 * Measures the gap between each floating "Platform Preview" panel and the
 * heading beside it, so an overhang that is a few pixels too wide is caught by
 * arithmetic rather than by squinting at a screenshot.
 */
import { chromium } from 'playwright-core'

const BASE = process.env.SHOT_BASE ?? 'http://localhost:5180'
const WIDTHS = [1280, 1440, 1600, 1920]

const browser = await chromium.launch({ channel: 'chrome' })

for (const width of WIDTHS) {
  const page = await browser.newPage({ viewport: { width, height: 900 } })
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(600)

  const rows = await page.evaluate(() => {
    const out = []
    const figures = document.querySelectorAll('figure')

    for (const figure of figures) {
      const panel = figure.querySelector('div[class*="absolute"]')
      if (!panel) continue

      const grid = figure.closest('.grid')
      if (!grid) continue

      // The copy column is the grid child that is not the one holding the figure.
      const columns = Array.from(grid.children)
      const copy = columns.find((column) => !column.contains(figure))
      const heading = copy?.querySelector('h2')
      if (!heading) continue

      const a = panel.getBoundingClientRect()
      const b = heading.getBoundingClientRect()

      // Horizontal separation, whichever side the panel sits on. Zero means
      // the two boxes overlap or touch.
      const gap =
        a.right <= b.left ? b.left - a.right : b.right <= a.left ? a.left - b.right : 0

      out.push({
        heading: (heading.textContent ?? '').trim().slice(0, 28),
        panelEdge: Math.round(a.left),
        headingEdge: Math.round(b.left),
        gap: Math.round(gap),
      })
    }
    return out
  })

  console.log(`\nviewport ${width}px`)
  for (const row of rows) {
    const flag = row.gap < 8 ? '  <-- TOO TIGHT' : ''
    console.log(`  ${row.gap.toString().padStart(4)}px clearance  |  ${row.heading}${flag}`)
  }

  await page.close()
}

await browser.close()
