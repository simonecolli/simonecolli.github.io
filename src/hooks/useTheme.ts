import { useCallback, useEffect, useState } from "react";
import {
  applyTheme,
  getStoredTheme,
  setTheme as persistTheme,
  type ResolvedTheme,
  type Theme,
} from "../theme";

export function useTheme() {
  // Read the saved theme after mount and follow system changes when selected.
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolved, setResolved] = useState<ResolvedTheme>("light");

  useEffect(() => {
    const stored = getStoredTheme() ?? "system";
    setThemeState(stored);
    setResolved(applyTheme(stored));
  }, []);

  useEffect(() => {
    if (theme !== "system") return;
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setResolved(applyTheme("system"));
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    setResolved(persistTheme(next));
  }, []);

  return { theme, resolved, setTheme };
}
