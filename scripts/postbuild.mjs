/**
 * Post-build steps that the bundler cannot express.
 *
 * 1. `404.html` — Vercel serves this, with a real 404 status, for any path that
 *    matches neither a static file nor a rewrite. Without it the rewrite list
 *    in vercel.json would have to be a catch-all, which returns the homepage at
 *    HTTP 200 for every unknown URL: a soft 404 that search engines index.
 *    The copy is the SPA shell, so the client renders the NotFound page.
 *
 * 2. A build stamp, so a deployed bundle can be identified.
 */
import { copyFileSync, writeFileSync } from 'node:fs'

copyFileSync('dist/index.html', 'dist/404.html')
console.log('postbuild: wrote dist/404.html (real 404 status for unknown paths)')

writeFileSync('dist/build.txt', `${new Date().toISOString()}\n`)
console.log('postbuild: wrote dist/build.txt')
