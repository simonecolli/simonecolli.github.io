import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Logo from "./utils/Logo";
import ThemeToggle from "./utils/ThemeToggle";

const languages = [
  { code: 'en', label: 'English' },
  { code: 'it', label: 'Italiano' },
] as const;

const NAV_ITEMS = [
  { to: "/", key: "nav.home" },
  { to: "/development", key: "nav.development" },
  { to: "/photography", key: "nav.photography" },
  { to: "/about", key: "nav.about" },
] as const;

function LanguageDropdown() {
  // Switch language and close the menu when the visitor clicks outside it.
  const { i18n, t } = useTranslation();
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
        className="h-8 flex items-center gap-1 px-2 py-1 border border-line rounded hover:border-fg transition-colors"
        aria-label={t('nav.language')}
        aria-expanded={isOpen}
      >
        <span className="text-base leading-none">{currentLang.code.toUpperCase()}</span>
        <svg className={`w-3 h-3 text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 bg-bg border border-line rounded shadow-lg py-1 min-w-[130px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm border-0 rounded-none hover:bg-fg/5 transition-colors ${
                currentLang.code === lang.code ? 'text-fg font-medium' : 'text-muted'
              }`}
            >
              <span className="text-base leading-none">{lang.code.toUpperCase()}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  // Render the main navigation with language and theme controls.
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `text-sm font-medium transition-colors hover:text-fg hover:no-underline ${
      isActive(path) ? 'text-fg' : 'text-muted'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-line">
      <div className="ml-4 mr-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center" aria-label={t('nav.brand')}>
            <Logo variant="mix" className="w-10 h-10" />
          </Link>

          <ul className="hidden md:flex items-center gap-8 mr-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClass(item.to)}>
                  {t(item.key)}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageDropdown />
            </li>
          </ul>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <LanguageDropdown />
            <button
              className="flex flex-col gap-1.5 p-2 border-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={t('nav.menu')}
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`block w-6 h-0.5 bg-fg transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-fg transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-fg transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <nav className="md:hidden border-t border-line py-4">
            <ul className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`block ${linkClass(item.to)}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
