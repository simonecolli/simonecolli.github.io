import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import it from './locales/it/translation.json';

// The site ships as a single prerendered copy, so exactly one language ends up in the
// static HTML that crawlers and social scrapers read. Italian, to match the audience the
// geo-targeted SEO keywords aim at. Leaving this to the language detector made the output
// depend on the build machine's locale: Italian locally, English on CI.
// Change this constant to switch; serving both needs per-language URLs (tofix.md §11).
export const PRERENDER_LANGUAGE = 'it';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      it: { translation: it },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
