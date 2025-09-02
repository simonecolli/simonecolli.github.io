import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home.tsx"
import ProjectsPage from "./pages/ProjectsPage.tsx"
import PhotographyPage from "./pages/PhotographyPage.tsx"
import AboutMePage from "./pages/AboutMePage.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/photography" element={<PhotographyPage />} />
        <Route path="/about" element={<AboutMePage />} />
      </Routes>
    </Router>
  )
}

export default App
