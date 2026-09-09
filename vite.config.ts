import { defineConfig, type Plugin } from 'vite'
import { readdirSync, rmSync } from 'node:fs'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'
import { projects } from './src/data/projects'
import { talks } from './src/data/talks'
import { SITE_URL } from './src/siteConfig'

// Built from the prerender routes, so the sitemap cannot list a page that is
// not generated or miss one that is. `.html` routes are the 404 fallback.
function sitemap(routes: string[]): Plugin {
  return {
    name: 'sitemap',
    apply: 'build',
    applyToEnvironment: (environment) => environment.name === 'client',
    generateBundle() {
      const entries = ['/', ...routes]
        .filter((route) => !route.endsWith('.html'))
        .map((route) => `  <url><loc>${SITE_URL}${route}</loc></url>`)
        .join('\n')

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source:
          '<?xml version="1.0" encoding="UTF-8"?>\n' +
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
          `${entries}\n` +
          '</urlset>\n',
      })
    },
  }
}

// Vite copies `public/` into `dist` verbatim and macOS keeps recreating
// .DS_Store in any folder opened in Finder, so deleting it once is not enough.
function dropFinderJunk(): Plugin {
  return {
    name: 'drop-finder-junk',
    apply: 'build',
    writeBundle(options) {
      const outDir = options.dir
      if (!outDir) return
      for (const entry of readdirSync(outDir, { recursive: true })) {
        const file = String(entry)
        if (file.endsWith('.DS_Store')) rmSync(`${outDir}/${file}`, { force: true })
      }
    },
  }
}

// The prerender pass leaves a handle open and the build otherwise hangs after
// writing everything it had to write.
function forceExit(): Plugin {
  return {
    name: 'force-exit',
    closeBundle() {
      setTimeout(() => process.exit(0), 500)
    },
  }
}

// GitHub Pages serves static files only: a URL with no matching file returns
// its own 404 and the client router never boots, so every route needs a real
// file. Detail routes come from the data, which covers new entries on their
// own, and a route ending in `.html` is emitted verbatim, so `/404.html` lands
// at `dist/404.html` and acts as the fallback for anything unlisted.
const prerenderRoutes = [
  '/development',
  '/projects',
  '/talks',
  '/photography',
  '/about',
  '/privacy',
  ...projects.map((project) => `/projects/${project.slug}`),
  ...talks.map((talk) => `/talks/${talk.slug}`),
  '/404.html',
]

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePrerenderPlugin({
      renderTarget: '#root',
      additionalPrerenderRoutes: prerenderRoutes,
    }),
    sitemap(prerenderRoutes),
    dropFinderJunk(),
    forceExit(),
  ],
})
