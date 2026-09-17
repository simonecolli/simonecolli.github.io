import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Logo from "./utils/Logo";
import ThemeToggle from "./utils/ThemeToggle";
import { useMailHref } from "../hooks/useMailHref";

const languages = [
  { code: 'en', label: 'English' },
  { code: 'it', label: 'Italiano' },
] as const;

// The blog stays out of the bar and out of the sitemap until it has posts. Its
// route and translations are untouched, so bringing it back is one line here
// and one in the prerender routes.
const NAV_ITEMS = [
  { to: "/", key: "nav.home" },
  { to: "/development", key: "nav.development" },
  { to: "/photography", key: "nav.photography" },
  { to: "/about", key: "nav.about" },
] as const;

const DEV_PATHS = ["/development", "/projects", "/talks"] as const;

function LanguageDropdown() {
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

// Stays in the bar on phones too, outside the menu. A page that belongs to one
// activity opens that inbox; the neutral pages lead to the contact block, which
// offers both.
function ContactButton() {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const devHref = useMailHref("dev");
  const photoHref = useMailHref("photo");
  const label = t("nav.contact");

  if (DEV_PATHS.some((path) => pathname.startsWith(path))) {
    return <a href={devHref} className="btn btn-sm btn-dev">{label}</a>;
  }

  if (pathname.startsWith("/photography")) {
    return <a href={photoHref} className="btn btn-sm btn-photo">{label}</a>;
  }

  return <Link to="/#contact" className="btn btn-sm btn-neutral">{label}</Link>;
}

export default function Header() {
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
            <li>
              <ContactButton />
            </li>
            <li className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageDropdown />
            </li>
          </ul>

          <div className="md:hidden flex items-center gap-2">
            <ContactButton />
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
