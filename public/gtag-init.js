/* Google Analytics initialisation.
 *
 * Kept as a file rather than an inline <script> so the Content-Security-Policy
 * in vercel.json can list script-src without 'unsafe-inline'. An inline block
 * would be blocked in production while still working locally.
 *
 * Loaded after the async gtag.js tag. Anything queued here is replayed once
 * that library arrives, so the order does not matter.
 */
window.dataLayer = window.dataLayer || []
function gtag() {
  window.dataLayer.push(arguments)
}
gtag('js', new Date())
gtag('config', 'G-7WL8TB0TXE')
