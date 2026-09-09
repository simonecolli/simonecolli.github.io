import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import './App.css'
import Home from "./pages/Home.tsx"
import ProjectsPage from "./pages/ProjectsPage.tsx"
import ProjectDetailPage from "./pages/ProjectDetailPage.tsx"
import TalksPage from "./pages/TalksPage.tsx"
import TalkDetailPage from "./pages/TalkDetailPage.tsx"
import PhotographyPage from "./pages/PhotographyPage.tsx"
import AboutMePage from "./pages/AboutMePage.tsx"
import Blog from "./pages/Blog.tsx"
import DevelopmentPage from "./pages/DevelopmentPage.tsx"
import PrivacyPage from "./pages/PrivacyPage.tsx"
import NotFound from "./pages/NotFound.tsx"

function LanguageSync() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return null;
}

// Client-side navigation swaps the route without loading a document, so the
// browser keeps the scroll position of the page being left. URLs carrying a
// hash are skipped: those are in-page anchors, and resetting would fight the
// jump they ask for.
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
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
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/talks" element={<TalksPage />} />
        <Route path="/talks/:slug" element={<TalkDetailPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/photography" element={<PhotographyPage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/development" element={<DevelopmentPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
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
