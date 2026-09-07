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
  // Keep the document language in sync with the selected translation.
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return null;
}

function ScrollToTop() {
  // Reset scroll on navigation, leaving in-page anchors to the browser.
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export function AppRoutes() {
  // Share the same routes between the browser and static rendering.
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
  // Set up browser navigation for the site.
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}
