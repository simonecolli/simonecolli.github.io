import { useLocation } from "react-router-dom";
import { langFromPath, type Lang } from "../lib/lang";

// Read from the route rather than from i18next, so the prerender, which renders
// under a StaticRouter, and the browser agree on it.
export function useLang(): Lang {
  return langFromPath(useLocation().pathname);
}
