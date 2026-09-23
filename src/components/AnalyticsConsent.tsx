import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiX } from "react-icons/fi";
import { ANALYTICS_ENABLED, CONSENT_EVENT, CONSENT_KEY, PREFERENCES_EVENT, readConsent, saveConsent, startAnalytics, stopAnalytics, trackContact, trackPage } from "../lib/analytics";

export default function AnalyticsConsent() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [storageError, setStorageError] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const sync = () => {
      clearTimeout(timer);
      const consent = readConsent();
      const allowed = ANALYTICS_ENABLED && !!consent?.accepted;
      setAccepted(allowed);
      if (ANALYTICS_ENABLED && !consent) setVisible(true);
      if (!allowed) stopAnalytics();
      if (consent && ANALYTICS_ENABLED) {
        timer = setTimeout(sync, Math.min(Math.max(0, consent.expiresAt - Date.now()), 2_147_000_000));
      }
    };
    const open = () => {
      opener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      setVisible(true);
      requestAnimationFrame(() => heading.current?.focus());
    };
    const storage = (event: StorageEvent) => { if (!event.key || event.key === CONSENT_KEY) sync(); };
    const resume = () => { if (document.visibilityState === "visible") sync(); };
    sync();
    window.addEventListener(PREFERENCES_EVENT, open);
    window.addEventListener(CONSENT_EVENT, sync);
    window.addEventListener("storage", storage);
    window.addEventListener("focus", sync);
    window.addEventListener("pageshow", sync);
    document.addEventListener("visibilitychange", resume);
    document.addEventListener("click", trackContact);
    return () => {
      clearTimeout(timer);
      window.removeEventListener(PREFERENCES_EVENT, open);
      window.removeEventListener(CONSENT_EVENT, sync);
      window.removeEventListener("storage", storage);
      window.removeEventListener("focus", sync);
      window.removeEventListener("pageshow", sync);
      document.removeEventListener("visibilitychange", resume);
      document.removeEventListener("click", trackContact);
    };
  }, []);

  useEffect(() => {
    if (accepted) { startAnalytics(); trackPage(pathname); }
  }, [accepted, pathname]);

  function choose(value: boolean) {
    const saved = saveConsent(value);
    const allowed = value && saved && ANALYTICS_ENABLED;
    setAccepted(allowed);
    setStorageError(!saved);
    setVisible(!saved);
    if (!allowed) stopAnalytics(saved);
    if (saved) {
      window.dispatchEvent(new Event(CONSENT_EVENT));
      opener.current?.focus();
    }
  }

  function close() {
    if (ANALYTICS_ENABLED) choose(false);
    else { setVisible(false); opener.current?.focus(); }
  }

  if (!visible) return null;
  return (
    <section aria-labelledby="cookie-heading" className="fixed bottom-0 inset-x-0 z-[100] border-t border-line bg-bg text-fg shadow-lg max-h-[80dvh] overflow-y-auto">
      <div className="site-container relative py-6">
        <button type="button" onClick={close} aria-label={t(ANALYTICS_ENABLED ? "cookies.closeReject" : "cookies.close")} className="absolute right-4 top-3 p-3 rounded-full border border-line hover:bg-line focus-visible:outline-2 focus-visible:outline-offset-2"><FiX aria-hidden="true" /></button>
        <div className="pr-12">
          <h2 id="cookie-heading" ref={heading} tabIndex={-1} className="text-lg font-medium">{t(ANALYTICS_ENABLED ? "cookies.title" : "cookies.preferences")}</h2>
          <p className="text-sm text-muted leading-relaxed mt-2">{t(ANALYTICS_ENABLED ? "cookies.body" : "cookies.inactive")}</p>
          {ANALYTICS_ENABLED && <p className="text-sm mt-2">{t(accepted ? "cookies.statusAccepted" : "cookies.statusRejected")}</p>}
          {storageError && <p role="alert" className="text-sm mt-2">{t("cookies.storageError")}</p>}
          <Link to="/privacy/" className="inline-block mt-2 underline underline-offset-4 text-sm">{t("cookies.policy")}</Link>
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          {ANALYTICS_ENABLED ? <>
            <button type="button" className="btn btn-neutral" onClick={() => choose(false)}>{t("cookies.reject")}</button>
            <button type="button" className="btn btn-neutral" onClick={() => choose(true)}>{t("cookies.accept")}</button>
          </> : <button type="button" className="btn btn-neutral" onClick={close}>{t("cookies.close")}</button>}
        </div>
      </div>
    </section>
  );
}
