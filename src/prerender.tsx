import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import './i18n'
import { AppRoutes } from './App.tsx'

export async function prerender(data: { url: string }) {
  const { parseLinks } = await import('vite-prerender-plugin/parse')

  const html = renderToString(
    <StaticRouter location={data.url}>
      <AppRoutes />
    </StaticRouter>
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
