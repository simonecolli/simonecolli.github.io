import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import i18n, { PRERENDER_LANGUAGE } from './i18n'
import { AppRoutes } from './App.tsx'
import { drainHead, startHeadCollection } from './seoHead'
import { SITE_URL } from './siteConfig'

const PERSON_PAGES = ['/', '/about']

const PERSON = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Simone Colli',
  url: SITE_URL,
  image: `${SITE_URL}/profile.jpg`,
  jobTitle: ['Freelance Software Developer', 'Photographer'],
  email: ['info.dev@simonecolli.com', 'info.photo@simonecolli.com'],
  knowsAbout: [
    'Retrieval-Augmented Generation',
    'On-premise deployment',
    'Software development',
    'Photography',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Parma',
    url: 'https://www.unipr.it/',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Salsomaggiore Terme',
    addressRegion: 'Emilia-Romagna',
    addressCountry: 'IT',
  },
  sameAs: [
    'https://github.com/simonecolli/',
    'https://www.linkedin.com/in/simone-colli-085683223/',
    'https://orcid.org/0009-0008-9596-0608',
    'https://instagram.com/colli_02',
    'https://www.instagram.com/__sc_photo__/',
  ],
}

// Renders one route to static HTML. The language is pinned first because Node
// exposes navigator.language from the machine's locale, so the detector would
// otherwise pick a different one locally than on CI.
export async function prerender(data: { url: string }) {
  await i18n.changeLanguage(PRERENDER_LANGUAGE)

  startHeadCollection()

  const html = renderToString(
    <StaticRouter location={data.url}>
      <AppRoutes />
    </StaticRouter>
  )

  const { title, elements } = drainHead()

  if (PERSON_PAGES.includes(data.url)) {
    elements.add({
      type: 'script',
      props: {
        type: 'application/ld+json',
        children: JSON.stringify(PERSON),
      },
    })
  }

  return {
    html,
    links: new Set<string>(),
    head: {
      lang: i18n.language,
      title,
      elements,
    },
  }
}
