import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './i18n'
import './index.css'
import App from './App.tsx'
import { dropPrerenderedHead } from './seoHead'

dropPrerenderedHead()

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Built pages arrive prerendered, so React adopts the static DOM instead of
// rebuilding it: the page painted from the HTML stays the page, and the
// largest element is not painted a second time once the script has run. The
// dev server serves an empty root, which has nothing to adopt.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
