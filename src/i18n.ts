import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import it from './locales/it/translation.json';
import { DEFAULT_LANG, langFromPath } from './lib/lang';

// The language comes from the URL alone: Italian at the root, English under
// /en. Nothing is read from the browser, so the page a crawler renders always
// matches the prerendered HTML and its hreflang, and each language is
// indexed at its own address. The prerender sets it per route before rendering;
// without a window there is no path to read yet.
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      it: { translation: it },
    },
    lng: typeof window === 'undefined' ? DEFAULT_LANG : langFromPath(window.location.pathname),
    fallbackLng: DEFAULT_LANG,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
