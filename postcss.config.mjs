/**
 * Tailwind v4 runs as a PostCSS plugin under Next. The Vite build used
 * `@tailwindcss/vite`; this is the same engine, wired the way Next expects.
 */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

export default config
