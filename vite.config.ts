import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    // A fixed, uncommon port. The default 5173 collides with other projects on
    // this machine, which made the dev URL change on every restart.
    port: 5180,
    strictPort: false,
    open: true,
    watch: {
      // `npm run smoke` writes its SSR bundle into .smoke. Without this, the
      // dev server tries to watch that directory and dies with EBUSY on
      // Windows when the two run at the same time.
      ignored: [
        '**/.smoke*/**',
        '**/dist/**',
        // Windows leaves ~name.tmp files behind when a rename happens on a
        // locked file. Vite's watcher throws EBUSY on them and the dev server
        // dies, so they are excluded outright.
        '**/*.tmp',
        '**/~*',
      ],
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
