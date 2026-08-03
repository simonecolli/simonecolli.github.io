import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import i18n, { PRERENDER_LANGUAGE } from './i18n'
import { AppRoutes } from './App.tsx'
import { drainHead, startHeadCollection } from './seoHead'

export async function prerender(data: { url: string }) {
  // const { parseLinks } = await import('vite-prerender-plugin/parse')

  // Node exposes `navigator.language` from the machine's locale, so without this the
  // language detector would pick a different one locally than on CI.
  await i18n.changeLanguage(PRERENDER_LANGUAGE)

  startHeadCollection()

  const html = renderToString(
    <StaticRouter location={data.url}>
      <AppRoutes />
    </StaticRouter>
  )

  // const links = parseLinks(html)

  const { title, elements } = drainHead()

  return {
    html,
    // links: new Set(links),
    links: new Set<string>(),
    head: {
      lang: i18n.language,
      title,
      elements,
    },
  }
}
