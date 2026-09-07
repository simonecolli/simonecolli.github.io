import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Back2Home() {
  // Link back to the home page using the current language.
    const { t } = useTranslation();

    return (
        <section className="mt-12 mb-8 text-center">
          <Link to="/" className="text-sm font-medium hover:text-fg transition-colors back2home">
            {t('common.backToHome')}
          </Link>
        </section>
    );
}
