import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Fragment, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import './App.css'
import { LANGUAGES, DEFAULT_LANG, langFromPath, stripLang } from './lib/lang'
import AnalyticsConsent from './components/AnalyticsConsent'
import Home from "./pages/Home.tsx"
import ProjectsPage from "./pages/ProjectsPage.tsx"
import ProjectDetailPage from "./pages/ProjectDetailPage.tsx"
import TalksPage from "./pages/TalksPage.tsx"
import TalkDetailPage from "./pages/TalkDetailPage.tsx"
import GraduationPage from "./pages/GraduationPage.tsx"
import PhotographyPage from "./pages/PhotographyPage.tsx"
import AboutMePage from "./pages/AboutMePage.tsx"
import Blog from "./pages/Blog.tsx"
import DevelopmentPage from "./pages/DevelopmentPage.tsx"
import PrivacyPage from "./pages/PrivacyPage.tsx"
import NotFound from "./pages/NotFound.tsx"

// The URL decides the language. main.tsx and the prerender set it before the
// first render; this follows client-side moves between /… and /en/…, such as
// the language switcher or the back button.
function LanguageSync() {
  const { i18n } = useTranslation();
  const lang = langFromPath(useLocation().pathname);

  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, [i18n, lang]);

  return null;
}

// Native scrollbars follow the activity colour, including detail routes.
function ScrollbarAccentSync() {
  const pathname = stripLang(useLocation().pathname);

  useEffect(() => {
    document.documentElement.dataset.scrollAccent = /^\/photography(?:\/|$)/.test(pathname)
      ? "photo"
      : /^\/(development|projects|talks)(?:\/|$)/.test(pathname) ? "dev" : "neutral";
  }, [pathname]);

  return null;
}

// Client-side navigation swaps the route without loading a document, so the
// browser keeps the scroll position of the page being left. A URL carrying a
// hash goes to that element instead: the router does not jump to an anchor on
// its own when it sits on another page, as with the header's link to the
// contact block.
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

// Shared by the browser and the prerender pass, which wraps it in a
// StaticRouter instead of a BrowserRouter.
export function AppRoutes() {
  return (
    <>
      <LanguageSync />
      <ScrollbarAccentSync />
      <ScrollToTop />
      <AnalyticsConsent />

      <Routes>
        {LANGUAGES.map((lang) => {
          const base = lang === DEFAULT_LANG ? "" : `/${lang}`;
          return (
            <Fragment key={lang}>
              <Route path={base || "/"} element={<Home />} />
              <Route path={`${base}/projects`} element={<ProjectsPage />} />
              <Route path={`${base}/projects/:slug`} element={<ProjectDetailPage />} />
              <Route path={`${base}/talks`} element={<TalksPage />} />
              <Route path={`${base}/talks/:slug`} element={<TalkDetailPage />} />
              <Route path={`${base}/blog`} element={<Blog />} />
              <Route path={`${base}/photography`} element={<PhotographyPage />} />
              <Route path={`${base}/photography/degree`} element={<GraduationPage />} />
              <Route path={`${base}/about`} element={<AboutMePage />} />
              <Route path={`${base}/development`} element={<DevelopmentPage />} />
              <Route path={`${base}/privacy`} element={<PrivacyPage />} />
            </Fragment>
          );
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}
