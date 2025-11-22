import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import './App.css'
import Home from "./pages/Home.tsx"
import ProjectsPage from "./pages/ProjectsPage.tsx"
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

function App() {
  return (
    <Router>
      <AnalyticsTracker />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/photography" element={<PhotographyPage />} />
        <Route path="/about" element={<AboutMePage />} />
      </Routes>
    </Router>
  )
}

export default App
