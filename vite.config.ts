import { defineConfig, type Plugin } from 'vite'
import { readdirSync, rmSync } from 'node:fs'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'
import { projects } from './src/data/projects'
import { talks } from './src/data/talks'
import { SITE_URL, withTrailingSlash } from './src/siteConfig'
import { DEFAULT_LANG, LANGUAGES, localizePath } from './src/lib/lang'

// Built from the same page list as the prerender, so the sitemap cannot list a
// page that is not generated or miss one that is. Each page appears once per
// language, and every entry carries the full set of alternates plus
// x-default, matching the hreflang links SEO.tsx puts in each page's head.
function sitemap(pages: string[]): Plugin {
  return {
    name: 'sitemap',
    apply: 'build',
    applyToEnvironment: (environment) => environment.name === 'client',
    generateBundle() {
      const entries = pages.flatMap((page) => {
        const urlFor = (lang: (typeof LANGUAGES)[number]) =>
          `${SITE_URL}${localizePath(withTrailingSlash(page), lang)}`
        const alternates = [
          ...LANGUAGES.map((lang) => [lang, urlFor(lang)]),
          ['x-default', urlFor(DEFAULT_LANG)],
        ]
          .map(([hreflang, href]) => `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}"/>`)
          .join('\n')
        return LANGUAGES.map((lang) => `  <url>\n    <loc>${urlFor(lang)}</loc>\n${alternates}\n  </url>`)
      }).join('\n')

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source:
          '<?xml version="1.0" encoding="UTF-8"?>\n' +
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
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
// own. Every page is rendered once per language, the English copy under /en.
// `/` is always rendered by the plugin; a route ending in `.html` is emitted
// verbatim, so `/404.html` lands at `dist/404.html` and acts as the fallback
// for anything unlisted.
const pages = [
  '/',
  '/development',
  '/projects',
  '/talks',
  '/photography',
  '/photography/degree',
  '/about',
  '/privacy',
  ...projects.map((project) => `/projects/${project.slug}`),
  ...talks.map((talk) => `/talks/${talk.slug}`),
]

// Rendered like every other page, but marked noindex in their head, so they
// stay out of the sitemap too.
const noindexPages = new Set([
  ...projects.filter((project) => project.noindex).map((project) => `/projects/${project.slug}`),
  ...talks.filter((talk) => talk.noindex).map((talk) => `/talks/${talk.slug}`),
])

const prerenderRoutes = [
  ...LANGUAGES.flatMap((lang) =>
    pages.map((page) => localizePath(page, lang)).filter((route) => route !== '/'),
  ),
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
    sitemap(pages.filter((page) => !noindexPages.has(page))),
    dropFinderJunk(),
    forceExit(),
  ],
})
