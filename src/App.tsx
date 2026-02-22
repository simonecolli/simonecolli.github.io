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
import ReactGA from "react-ga4";

ReactGA.initialize("G-BVG3YZR5C5");

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
}

function LanguageSync() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return null;
}

export function AppRoutes() {
  return (
    <>
      <AnalyticsTracker />
      <LanguageSync />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/talks" element={<TalksPage />} />
        <Route path="/talks/:slug" element={<TalkDetailPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/photography" element={<PhotographyPage />} />
        <Route path="/about" element={<AboutMePage />} />
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
