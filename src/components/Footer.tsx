import Link from "./utils/LocalizedLink";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaEnvelopeOpen, FaCamera, FaOrcid } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { PREFERENCES_EVENT } from "../lib/analytics";
import Logo from "./utils/Logo";
import { DEV_SERVICES } from "../data/devServices";

// Surface inverted against the page: dark in the light theme, light in the
// dark one. Everything inside reads the "-inv" tokens, logos included.
export default function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/simonecolli/", icon: <FaGithub /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/simone-colli-085683223/", icon: <FaLinkedin /> },
    { name: "Instagram", url: "https://instagram.com/colli_02", icon: <FaInstagram /> },
    { name: "Instagram photo", url: "https://www.instagram.com/__sc_photo__/", icon: <FaCamera /> },
    { name: "Email - sviluppo", url: "mailto:info.dev@simonecolli.com", icon: <FaEnvelope /> },
    { name: "Email - fotografia", url: "mailto:info.photo@simonecolli.com", icon: <FaEnvelopeOpen /> },
    { name: "ORCiD", url: "https://orcid.org/0009-0008-9596-0608", icon: <FaOrcid /> },
  ];

  // A short map of the site, grouped like the two activities. The labels are
  // the ones each page already uses, so the footer cannot drift from them.
  const sitemap = [
    {
      title: t("nav.development"),
      links: [
        { to: "/development/", label: t("home.dev.cta") },
        ...DEV_SERVICES.map(({ slug, id }) => ({
          to: `/development/${slug}/`,
          label: t(`development.categories.${id}.title`),
        })),
        { to: "/projects/", label: t("nav.projects") },
      ],
    },
    {
      title: t("nav.photography"),
      links: [
        { to: "/photography/", label: t("home.photo.cta") },
        { to: "/photography/degree/", label: t("graduation.heading") },
      ],
    },
    {
      title: t("footer.aboutColumn"),
      links: [
        { to: "/about/", label: t("home.aboutMe.cta") },
        { to: "/talks/", label: t("nav.talks") },
        { to: "/#contact", label: t("footer.contact") },
      ],
    },
  ];

  return (
    <footer className="bg-bg-inv text-fg-inv">
      <div className="site-container">
        <div className="py-12">
          {/* Who and how to reach me on the left, the map of the site on the right;
              stacked on narrow screens, where three link columns would not fit
              beside the text. */}
          <div className="grid lg:grid-cols-2 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Logo variant="mix" surface="inverted" className="w-10 h-10" />
                <h3 className="text-lg font-semibold text-fg-inv">Simone Colli</h3>
              </div>
              <p className="text-sm text-muted-inv leading-relaxed max-w-md">
                {t('footer.description')}
              </p>
              <div role="group" aria-label={t('footer.socialLabel')} className="flex flex-wrap gap-4 mt-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="w-8 h-8 border border-line-inv rounded-full flex items-center justify-center text-fg-inv hover:border-fg-inv hover:no-underline transition-all"
                    aria-label={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-xs font-medium">{link.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            <nav aria-label={t("footer.sitemap")} className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:justify-self-end">
              {sitemap.map((column) => (
                <div key={column.title}>
                  <h4 className="text-sm font-semibold mb-3 text-fg-inv">{column.title}</h4>
                  <ul className="space-y-2">
                    {column.links.map((link) => (
                      <li key={link.to}>
                        <Link to={link.to} className="text-sm text-muted-inv hover:text-fg-inv">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-line-inv flex flex-col items-center gap-2 text-center">
            <p className="text-sm text-muted-inv">
              © {new Date().getFullYear()} Simone Colli. {t('footer.copyright')}
            </p>
            <p className="text-sm text-muted-inv">
              {t('footer.vat')} - {t('footer.legalStatus')}
            </p>
            <p className="text-sm text-muted-inv">{t('footer.photoCopyright')}</p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <Link to="/privacy/" className="text-fg-inv underline underline-offset-4">
                {t('footer.privacy')}
              </Link>
              <button type="button" onClick={() => window.dispatchEvent(new Event(PREFERENCES_EVENT))} className="border-0 bg-transparent p-0 text-fg-inv underline underline-offset-4">
                {t("cookies.preferences")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
