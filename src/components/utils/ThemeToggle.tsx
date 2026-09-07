import { useTranslation } from "react-i18next";
import { useTheme } from "../../hooks/useTheme";

export default function ThemeToggle() {
  // Toggle between light and dark based on the currently resolved theme.
  const { resolved, setTheme } = useTheme();
  const { t } = useTranslation();

  const next = resolved === "dark" ? "light" : "dark";
  const label = t(next === "dark" ? "nav.themeDark" : "nav.themeLight");

  return (
    <button
      onClick={() => setTheme(next)}
      className="w-8 h-8 p-0 flex items-center justify-center border border-line rounded hover:border-fg transition-colors"
      aria-label={label}
      title={label}
    >
      {resolved === "dark" ? (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
          <path
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4l1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
          />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
          />
        </svg>
      )}
    </button>
  );
}
