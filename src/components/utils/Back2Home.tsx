import Link from "./LocalizedLink";
import { useTranslation } from "react-i18next";

// No flex wrapper: with no icon to align this is a plain link, so the
// underline from @layer base is what marks hover.
export default function Back2Home() {
    const { t } = useTranslation();

    return (
        <section className="mt-12 mb-8 text-center">
          <Link to="/" className="text-sm font-medium hover:text-fg transition-colors back2home">
            {t('common.backToHome')}
          </Link>
        </section>
    );
}
