import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
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
            <li>
              <Link
                to="/blog"
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive('/blog') ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
               <Link
                to="/photography"
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive('/photography') ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                Photography
              </Link>
            </li>
           
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
          </ul>

          {/* Hamburger Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-600 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden border-t border-gray-200 py-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  to="/"
                  className={`block text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive('/') ? 'text-blue-600' : 'text-gray-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={`block text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive('/projects') ? 'text-blue-600' : 'text-gray-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={`block text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive('/blog') ? 'text-blue-600' : 'text-gray-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/photography"
                  className={`block text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive('/photography') ? 'text-blue-600' : 'text-gray-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Photography
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`block text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive('/about') ? 'text-blue-600' : 'text-gray-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
