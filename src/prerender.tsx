import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import i18n from './i18n'
import { AppRoutes } from './App.tsx'
import { drainHead, startHeadCollection } from './seoHead'
import { langFromPath, stripLang } from './lib/lang'
import { structuredDataFor } from './structuredData'

// Renders one route to static HTML, in the language its URL carries: the root
// is Italian and /en is English.
export async function prerender(data: { url: string }) {
  const lang = langFromPath(data.url)
  await i18n.changeLanguage(lang)

  startHeadCollection()

  const html = renderToString(
    <StaticRouter location={data.url}>
      <AppRoutes />
    </StaticRouter>
  )

  const { title, elements } = drainHead()

  for (const entry of structuredDataFor(stripLang(data.url), lang, i18n.t)) {
    elements.add({
      type: 'script',
      props: {
        type: 'application/ld+json',
        children: JSON.stringify(entry),
      },
    })
  }

  return {
    html,
    links: new Set<string>(),
    head: {
      lang,
      title,
      elements,
    },
  }
}
