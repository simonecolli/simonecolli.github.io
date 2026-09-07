import { defineConfig, type Plugin } from 'vite'
import { readdirSync, rmSync } from 'node:fs'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'
import { projects } from './src/data/projects'
import { talks } from './src/data/talks'
import { SITE_URL } from './src/siteConfig'

function sitemap(routes: string[]): Plugin {
  // Build the sitemap from static routes, excluding the HTML fallback page.
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

function dropFinderJunk(): Plugin {
  // Remove Finder metadata copied into the build from public assets.
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

function forceExit(): Plugin {
  // Exit after the build because prerendering leaves an open handle.
  return {
    name: 'force-exit',
    closeBundle() {
      setTimeout(() => process.exit(0), 500)
    },
  }
}

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
