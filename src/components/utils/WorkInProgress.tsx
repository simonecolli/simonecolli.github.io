import { useTranslation } from "react-i18next";

export default function WorkInProgress() {
  // Show a translated placeholder for content still in progress.
  const { t } = useTranslation();

  return (
    <section className="site-section">
      <div className="site-container">
        <div className="max-w-2xl mx-auto">
          <div className="site-card text-center py-16">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto border-2 border-line rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-muted"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-medium mb-4">
              {t('common.workInProgress')}
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              {t('common.workInProgressMessage')}
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-muted">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span>{t('common.comingSoon')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
