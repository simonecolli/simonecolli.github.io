import type { TFunction } from 'i18next'
import { projects } from './data/projects'
import { talks } from './data/talks'
import { localizePath, type Lang } from './lib/lang'
import { DEV_EMAIL, PHOTO_EMAIL, SITE_URL, withTrailingSlash } from './siteConfig'

// JSON-LD for the prerendered head, chosen by route. Only the prerender adds
// it: crawlers read it from the static HTML, and it carries no prerendered-SEO
// marker, so the browser leaves it in place.

const PERSON_ID = `${SITE_URL}/#person`

const ADDRESS = {
  '@type': 'PostalAddress',
  addressLocality: 'Salsomaggiore Terme',
  postalCode: '43039',
  addressRegion: 'PR',
  addressCountry: 'IT',
}

// The towns the site names as the working area, in the order a reader from
// Salsomaggiore would reach them.
const AREA_SERVED = ['Salsomaggiore Terme', 'Fidenza', 'Parma', 'Piacenza', 'Reggio Emilia'].map(
  (name) => ({ '@type': 'City', name }),
)

type JsonLd = Record<string, unknown>

const url = (path: string, lang: Lang) => `${SITE_URL}${localizePath(withTrailingSlash(path), lang)}`

function person(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Simone Colli',
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/profile.jpg`,
    jobTitle: ['Freelance Software Developer', 'Photographer'],
    email: [DEV_EMAIL, PHOTO_EMAIL],
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
    address: ADDRESS,
    sameAs: [
      'https://github.com/simonecolli/',
      'https://www.linkedin.com/in/simone-colli-085683223/',
      'https://orcid.org/0009-0008-9596-0608',
      'https://instagram.com/colli_02',
      'https://www.instagram.com/__sc_photo__/',
    ],
  }
}

function service(kind: 'development' | 'photography', lang: Lang, t: TFunction): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: t(`structuredData.${kind}.name`),
    description: t(`seo.${kind}.description`),
    url: url(`/${kind}`, lang),
    image: `${SITE_URL}/profile.jpg`,
    email: kind === 'development' ? DEV_EMAIL : PHOTO_EMAIL,
    address: ADDRESS,
    areaServed: AREA_SERVED,
    founder: { '@id': PERSON_ID },
    serviceType: t(`structuredData.${kind}.serviceTypes`, { returnObjects: true }),
  }
}

function breadcrumb(items: [name: string, path: string][], lang: Lang): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: url(path, lang),
    })),
  }
}

// `route` is the page without its language prefix, as in the prerender list.
export function structuredDataFor(route: string, lang: Lang, t: TFunction): JsonLd[] {
  const page = route.replace(/\/$/, '') || '/'
  const home: [string, string] = ['Simone Colli', '/']

  if (page === '/' || page === '/about') return [person()]
  if (page === '/development') return [service('development', lang, t)]
  if (page === '/photography' || page === '/photography/degree') return [service('photography', lang, t)]

  const [, section, slug] = page.split('/')
  if (section === 'projects' && slug) {
    const project = projects.find((entry) => entry.slug === slug)
    if (project) {
      return [breadcrumb([home, [t('projects.pageTitle'), '/projects'], [t(project.title), page]], lang)]
    }
  }
  if (section === 'talks' && slug) {
    const talk = talks.find((entry) => entry.slug === slug)
    if (talk) {
      return [breadcrumb([home, [t('talks.pageTitle'), '/talks'], [t(talk.title), page]], lang)]
    }
  }
  return []
}
