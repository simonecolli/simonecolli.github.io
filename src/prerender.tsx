import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './i18n'
import { AppRoutes } from './App.tsx'

export async function prerender(data: { url: string }) {
  const { parseLinks } = await import('vite-prerender-plugin/parse')
  const helmetContext = {}

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={data.url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>
  )

  const links = parseLinks(html)

  return {
    html,
    links: new Set(links),
    head: {
      lang: 'en',
    },
  }
}
