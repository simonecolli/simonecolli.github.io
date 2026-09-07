import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaEnvelopeOpen, FaCamera, FaOrcid } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Logo from "./utils/Logo";

export default function Footer() {
  // Show profile and contact links on a surface opposite to the page theme.
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

  return (
    <footer className="bg-bg-inv text-fg-inv">
      <div className="site-container">
        <div className="py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Logo variant="mix" surface="inverted" className="w-10 h-10" />
                <h3 className="text-lg font-semibold text-fg-inv">Simone Colli</h3>
              </div>
              <p className="text-sm text-muted-inv leading-relaxed max-w-md">
                {t('footer.description')}
              </p>
            </div>

            <div className="md:text-right">
              <h4 className="text-sm font-semibold mb-4 text-fg-inv">{t('footer.socialLabel')}</h4>
              <div className="flex flex-wrap gap-4 md:justify-end">
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
          </div>

          <div className="pt-8 border-t border-line-inv flex flex-col items-center gap-2 text-center">
            <p className="text-sm text-muted-inv">
              © {new Date().getFullYear()} Simone Colli. {t('footer.copyright')}
            </p>
            <p className="text-sm text-muted-inv">
              {t('footer.vat')} · {t('footer.legalStatus')}
            </p>
            <p className="text-sm text-muted-inv">{t('footer.photoCopyright')}</p>
            <Link
              to="/privacy"
              className="text-sm text-fg-inv underline underline-offset-4"
            >
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
