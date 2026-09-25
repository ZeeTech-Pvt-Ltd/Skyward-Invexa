/**
 * Convert an image to WebP.
 *
 *   node scripts/to-webp.mjs <input> <output> [quality]
 *
 * No ImageMagick, cwebp or sharp is installed on this machine, so this uses
 * the WebP encoder built into Chrome: decode via an <img>, draw to a canvas,
 * and export with toDataURL('image/webp').
 */
import { chromium } from 'playwright-core'
import { readFileSync, writeFileSync } from 'node:fs'
import { extname, resolve } from 'node:path'

const [, , input, output, qualityArg] = process.argv
if (!input || !output) {
  console.error('usage: node scripts/to-webp.mjs <input> <output> [quality]')
  process.exit(1)
}

const quality = Number(qualityArg ?? 0.9)
const mime = extname(input).toLowerCase() === '.png' ? 'image/png' : 'image/jpeg'
const dataUrl = `data:${mime};base64,${readFileSync(resolve(input)).toString('base64')}`

const browser = await chromium.launch({ channel: 'chrome' })
const page = await browser.newPage()

const result = await page.evaluate(
  async ([source, q]) => {
    const img = new Image()
    img.src = source
    await img.decode()

    const canvas = document.createElement('canvas')
    canvas.width = img.naturalWidth
    canvas.height = img.naturalHeight
    const context = canvas.getContext('2d')
    context.drawImage(img, 0, 0)

    return {
      dataUrl: canvas.toDataURL('image/webp', q),
      width: img.naturalWidth,
      height: img.naturalHeight,
    }
  },
  [dataUrl, quality],
)

await browser.close()

if (!result.dataUrl.startsWith('data:image/webp')) {
  console.error('browser did not produce a webp; got', result.dataUrl.slice(0, 30))
  process.exit(1)
}

const buffer = Buffer.from(result.dataUrl.split(',')[1], 'base64')
writeFileSync(resolve(output), buffer)

const kb = (n) => `${Math.round(n / 1024)} KB`
console.log(
  `${input} (${kb(readFileSync(resolve(input)).length)}) -> ${output} (${kb(buffer.length)}) at ${result.width}x${result.height}`,
)
