export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

const STORAGE_KEY = "theme";

export function getStoredTheme(): Theme | null {
  // Read a valid theme preference, returning null if storage is unavailable.
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" || value === "system" ? value : null;
  } catch {
    return null;
  }
}

export function systemTheme(): ResolvedTheme {
  // Read the preferred colour scheme from the browser.
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function resolveTheme(theme: Theme): ResolvedTheme {
  // Resolve the system option to a light or dark theme.
  return theme === "system" ? systemTheme() : theme;
}

export function applyTheme(theme: Theme): ResolvedTheme {
  // Apply the resolved theme to the document and return it.
  const resolved = resolveTheme(theme);
  document.documentElement.setAttribute("data-theme", resolved);
  return resolved;
}

export function setTheme(theme: Theme): ResolvedTheme {
  // Apply the theme even when saving the preference fails.
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    return applyTheme(theme);
  }
  return applyTheme(theme);
}
