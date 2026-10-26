/**
 * Serves `out/` the way Vercel will.
 *
 * `next dev` is a development server and `next start` does not exist with
 * `output: 'export'`, so the browser-based checks need the static export served
 * from disk. This deliberately does NOT apply an SPA history fallback: an
 * unknown path must return the prerendered 404 with a real 404 status, which is
 * one of the things we are checking.
 *
 * Next emits one flat file per route, not a directory index:
 *
 *   /about            -> out/about.html
 *   /                 -> out/index.html
 *   /_next/x.js       -> out/_next/x.js
 *   /anything         -> out/404.html          with a real 404 status
 *
 *   node scripts/serve-out.mjs [port]
 */
import { createServer } from 'node:http'
import { existsSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'out')
const PORT = Number(process.argv[2] || 4180)

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
}

function send(res, file, status = 200) {
  const ext = path.extname(file)
  const body = readFileSync(file)
  res.writeHead(status, {
    'Content-Type': TYPES[ext] ?? 'application/octet-stream',
    'Cache-Control':
      ext === '.html'
        ? 'no-cache'
        : file.includes(`${path.sep}_next${path.sep}`)
          ? 'public, max-age=31536000, immutable'
          : 'public, max-age=3600',
  })
  res.end(body)
}

if (!existsSync(OUT)) {
  console.error('out/ does not exist. Run `npm run build` first.')
  process.exit(1)
}

createServer((req, res) => {
  const url = new URL(req.url ?? '/', `http://localhost:${PORT}`)
  let pathname = decodeURIComponent(url.pathname)

  /**
   * Next's client asks for the segment payload as
   * `/<route>/__next.<segment>.__PAGE__.txt` while the export writes it to
   * `/<route>/__next.<segment>/__PAGE__.txt`. Map the request onto the file so
   * the prefetch resolves locally instead of logging a 404 on every page.
   */
  pathname = pathname.replace(
    /\/(__next\.[^.]+)\.(__PAGE__\.txt)$/,
    '/$1/$2',
  )

  if (pathname === '/') pathname = '/index.html'

  // Try the exact file first, then the route's flat .html file.
  const candidates = [
    path.join(OUT, pathname),
    path.join(OUT, `${pathname.replace(/\/$/, '')}.html`),
    path.join(OUT, pathname, 'index.html'),
  ]

  for (const candidate of candidates) {
    if (existsSync(candidate) && statSync(candidate).isFile()) {
      send(res, candidate)
      return
    }
  }

  const notFound = path.join(OUT, '404.html')
  if (existsSync(notFound)) {
    send(res, notFound, 404)
    return
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
  res.end('404')
}).listen(PORT, () => {
  console.log(`Serving out/ on http://localhost:${PORT}`)
})
