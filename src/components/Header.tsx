import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'it', flag: '🇮🇹', label: 'Italiano' },
] as const;

function LanguageDropdown() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => i18n.language.startsWith(l.code)) ?? languages[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-1 border border-gray-300 rounded hover:border-blue-600 transition-colors"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <span className="text-base leading-none">{currentLang.flag}</span>
        <svg className={`w-3 h-3 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 bg-white border border-gray-200 rounded shadow-lg py-1 min-w-[130px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                currentLang.code === lang.code ? 'text-blue-600 font-medium' : 'text-gray-700'
              }`}
            >
              <span className="text-base leading-none">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

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
                {t('nav.home')}
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive('/projects') ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {t('nav.projects')}
              </Link>
            </li>
            <li>
              <Link
                to="/talks"
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive('/talks') ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {t('nav.talks')}
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive('/blog') ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {t('nav.blog')}
              </Link>
            </li>
            <li>
               <Link
                to="/photography"
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive('/photography') ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {t('nav.photography')}
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive('/about') ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {t('nav.about')}
              </Link>
            </li>
            <li>
              <LanguageDropdown />
            </li>
          </ul>

          {/* Mobile: language + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageDropdown />
            <button
              className="flex flex-col gap-1.5 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
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
                  {t('nav.home')}
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
                  {t('nav.projects')}
                </Link>
              </li>
              <li>
                <Link
                  to="/talks"
                  className={`block text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive('/talks') ? 'text-blue-600' : 'text-gray-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.talks')}
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
                  {t('nav.blog')}
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
                  {t('nav.photography')}
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
                  {t('nav.about')}
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
