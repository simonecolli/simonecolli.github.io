import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="tech-minimal-container">
        <nav className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link 
            to="/" 
            className="text-xl font-semibold tracking-tight hover:text-blue-600 transition-colors"
          >
            SC
          </Link>

          {/* Navigation */}
          <ul className="flex items-center gap-8">
            <li>
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive('/') ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive('/projects') ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                Projects
              </Link>
            </li>
            {/* <li>
               <Link 
                to="/photography" 
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive('/photography') ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                Photography
              </Link>
            </li>
            */}
            <li>
              <Link 
                to="/about" 
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive('/about') ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="text-sm font-medium px-4 py-2 border border-gray-300 rounded-md hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
