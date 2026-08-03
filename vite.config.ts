import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'
import { projects } from './src/data/projects'
import { talks } from './src/data/talks'

function forceExit(): Plugin {
  return {
    name: 'force-exit',
    closeBundle() {
      setTimeout(() => process.exit(0), 500)
    },
  }
}

// GitHub Pages serves static files only: a URL without a matching file returns its
// own 404 and the client router never boots. Every route therefore needs a real file.
// Detail routes are derived from the data so new entries are covered automatically.
// Routes ending in `.html` are emitted verbatim rather than nested in a directory,
// so `/404.html` becomes `dist/404.html` — the SPA fallback for anything unlisted.
const prerenderRoutes = [
  '/projects',
  '/talks',
  '/blog',
  '/photography',
  '/about',
  ...projects.map((project) => `/projects/${project.slug}`),
  ...talks.map((talk) => `/talks/${talk.slug}`),
  '/404.html',
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePrerenderPlugin({
      renderTarget: '#root',
      additionalPrerenderRoutes: prerenderRoutes,
    }),
    forceExit(),
  ],
})
