import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import it from './locales/it/translation.json';

// The site ships as a single prerendered copy, so exactly one language ends up
// in the static HTML that crawlers and social scrapers read. Italian, to match
// the audience the geo-targeted keywords aim at. Leaving this to the detector
// made the output depend on the build machine's locale: Italian locally,
// English on CI. Serving both would need per-language URLs.
export const PRERENDER_LANGUAGE = 'it';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      it: { translation: it },
    },
    fallbackLng: PRERENDER_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
    // Only an explicit choice from the language switcher overrides Italian.
    // Reading navigator too made the client re-render the page in English for
    // any en-US browser, Googlebot's renderer included, so the indexed DOM no
    // longer matched the Italian HTML.
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
    },
  });

export default i18n;
