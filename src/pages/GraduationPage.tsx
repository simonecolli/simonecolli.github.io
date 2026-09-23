import { useState } from "react";
import Link from "../components/utils/LocalizedLink";
import { useTranslation } from "react-i18next";
import { FiArrowLeft, FiCamera, FiCheck, FiMessageCircle, FiSliders, FiLink, FiUsers } from "react-icons/fi";
import { LuGraduationCap, LuPartyPopper } from "react-icons/lu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import PlainAddress from "../components/utils/PlainAddress";
import PhotoCard from "../components/photography/PhotoCard";
import Lightbox from "../components/photography/Lightbox";
import { Photos, type Photo } from "../data/photography";
import { PHOTO_EMAIL, mailtoHref } from "../siteConfig";

const GROUPS = [{ people: 2, price: 80 }, { people: 3, price: 75 }, { people: 4, price: 70 }, { people: 5, price: 65 }];
const BENEFIT_ICONS = [FiMessageCircle, FiCamera, FiSliders, FiLink];
const graduationPhotos = Photos.filter((photo) => photo.tags?.includes("lauree"));

export default function GraduationPage() {
  const { t, i18n } = useTranslation();
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const money = (value: number) => new Intl.NumberFormat(i18n.language, { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
  const contact = (packageName = t("graduation.generic")) => mailtoHref(
    PHOTO_EMAIL,
    t("graduation.mailSubject", { package: packageName, interpolation: { escapeValue: false } }),
    t("graduation.mailBody", { package: packageName, interpolation: { escapeValue: false } }),
  );
  const benefits = t("graduation.benefits", { returnObjects: true }) as { title: string; body: string }[];
  const faqs = t("graduation.faqs", { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <div className="app">
      <SEO titleKey="seo.graduation.title" descriptionKey="seo.graduation.description" keywordsKey="seo.graduation.keywords" path="/photography/degree" />
      <Header />
      <main className="main-content pt-20 graduation-page">
        <section className="site-section-compact">
          <div className="site-container">
            <Link to="/photography/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-photo"><FiArrowLeft aria-hidden="true" />{t("graduation.back")}</Link>
            <div className="mt-10 md:mt-16">
              <p className="text-sm tracking-widest text-accent-photo font-medium mb-5">{t("graduation.eyebrow")}</p>
              <h1 className="font-display type-hero-title">{t("graduation.title")}</h1>
              <p className="type-lead text-muted mt-6">{t("graduation.intro")}</p>
              <p className="mt-4 font-medium">{t("graduation.tagline")}</p>
              <a href={contact()} className="btn btn-photo mt-8">{t("graduation.cta")}</a>
            </div>
          </div>
        </section>

        {graduationPhotos.length > 0 && (
          <section className="site-section" aria-labelledby="graduation-gallery">
            <div className="site-container">
              <h2 id="graduation-gallery" className="type-page-title mb-8">{t("graduation.galleryTitle")}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {(showAllPhotos ? graduationPhotos : graduationPhotos.slice(0, 6)).map((photo) => (
                  <PhotoCard key={photo.id} photo={photo} onClick={() => setLightboxPhoto(photo)} />
                ))}
              </div>
              {!showAllPhotos && graduationPhotos.length > 6 && (
                <button className="btn btn-photo mt-6" onClick={() => setShowAllPhotos(true)}>
                  {t("photography.showAll")}
                </button>
              )}
            </div>
          </section>
        )}

        <section className="site-section" aria-labelledby="graduation-packages">
          <div className="site-container">
            <h2 id="graduation-packages" className="type-page-title mb-8">{t("graduation.packagesTitle")}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {(["proclamation", "party"] as const).map((id) => {
                const Icon = id === "proclamation" ? LuGraduationCap : LuPartyPopper;
                const includes = t(`graduation.${id}.includes`, { returnObjects: true }) as string[];
                return (
                  <article key={id} className="site-card flex flex-col">
                    <Icon className="text-accent-photo text-3xl mb-5" aria-hidden="true" />
                    <h3 className="font-display text-3xl">{t(`graduation.${id}.title`)}</h3>
                    <p className="mt-5"><span className="block text-sm text-muted mb-2">{t("graduation.startingFrom")}</span><span className="text-4xl md:text-5xl font-medium">{money(id === "proclamation" ? 100 : 250)}</span></p>
                    <p className="text-sm text-muted mt-2">{t("graduation.individual")}</p>
                    <p className="font-medium mt-6">{t(`graduation.${id}.duration`)}</p>
                    <p className="text-muted leading-relaxed mt-3">{t(`graduation.${id}.body`)}</p>
                    <ul className="space-y-3 my-6 flex-grow">{includes.map(item => <li key={item} className="flex gap-3"><FiCheck className="shrink-0 text-accent-photo mt-1" aria-hidden="true" /><span>{item}</span></li>)}</ul>
                    {id === "party" && <p className="text-sm text-muted mb-6">{t("graduation.party.note")}</p>}
                    <a data-analytics-service={id} href={contact(t(`graduation.${id}.title`))} className="btn btn-photo self-start">{t(`graduation.${id}.cta`)}</a>
                  </article>
                );
              })}
            </div>

            <article className="graduation-groups mt-8 p-6 md:p-10 rounded-lg" aria-labelledby="graduation-groups">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                <div>
                  <FiUsers className="text-3xl text-accent-photo mb-4" aria-hidden="true" />
                  <h3 id="graduation-groups" className="font-display text-3xl md:text-4xl">{t("graduation.groups.title")}</h3>
                  <p className="text-xl font-medium mt-4">{t("graduation.groups.intro")}</p>
                  <p className="text-muted leading-relaxed mt-3">{t("graduation.groups.body")}</p>
                </div>
                <table className="w-full text-left text-sm sm:text-base">
                  <caption className="sr-only">{t("graduation.groups.title")}</caption>
                  <thead><tr className="border-b border-line">{["people", "price", "total"].map(key => <th scope="col" key={key} className="py-3 pr-3 font-medium">{t(`graduation.groups.${key}`)}</th>)}</tr></thead>
                  <tbody>{GROUPS.map(({people, price}) => <tr key={people} className="border-b border-line"><th scope="row" className="py-4 pr-3 font-normal">{people === 5 ? t("graduation.groups.more") : people}</th><td className="py-4 pr-3 text-lg sm:text-2xl font-medium text-accent-photo whitespace-nowrap">{money(price)}</td><td className="py-4 text-muted">{people === 5 ? t("graduation.groups.variable") : money(people * price)}</td></tr>)}</tbody>
                </table>
              </div>
              <p className="text-sm text-muted leading-relaxed mt-6">{t("graduation.groups.note")}</p>
              <a data-analytics-service="graduation_group" href={contact(t("graduation.groups.title"))} className="btn btn-photo mt-6">{t("graduation.groups.cta")}</a>
            </article>
            <div className="border-l-2 border-accent-photo pl-6 mt-8">
              <h3 className="text-xl font-medium">{t("graduation.party.jointTitle")}</h3>
              <p className="text-muted leading-relaxed mt-2">{t("graduation.party.jointBody")}</p>
              <a data-analytics-service="joint_party" href={contact(`${t("graduation.party.title")}, ${t("graduation.groups.title")}`)} className="inline-block text-accent-photo underline underline-offset-4 mt-3">{t("graduation.party.cta")}</a>
            </div>
          </div>
        </section>

        <section className="site-section">
          <div className="site-container">
            <h2 className="type-page-title mb-10">{t("graduation.includedTitle")}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map(({title, body}, index) => {
              const Icon = BENEFIT_ICONS[index];
              return <div key={title}><Icon className="text-3xl text-accent-photo mb-4" aria-hidden="true" /><h3 className="text-xl font-medium">{title}</h3><p className="text-muted leading-relaxed mt-3">{body}</p></div>;
            })}</div>
            <div className="mt-12 pt-8 border-t border-line"><h3 className="text-xl font-medium">{t("graduation.pricesTitle")}</h3><p className="text-muted leading-relaxed mt-3">{t("graduation.pricesBody")}</p></div>
          </div>
        </section>

        <section className="site-section">
          <div className="site-container">
            <div><h2 className="type-page-title mb-8">{t("graduation.faqTitle")}</h2>
              {faqs.map(({question, answer}) => <details key={question} className="border-b border-line py-5"><summary className="cursor-pointer text-lg font-medium">{question}</summary><p className="mt-4 text-muted leading-relaxed">{answer}</p></details>)}
            </div>
          </div>
        </section>

        <section className="site-section">
          <div className="site-container"><div className="graduation-groups rounded-lg p-6 md:p-12"><h2 className="font-display type-page-title">{t("graduation.closingTitle")}</h2><p className="text-muted leading-relaxed mt-4">{t("graduation.closingBody")}</p><a href={contact()} className="btn btn-photo mt-6">{t("graduation.cta")}</a><PlainAddress emails={[PHOTO_EMAIL]} className="mt-4" /></div></div>
        </section>
      </main>
      <Footer />
      {lightboxPhoto && (
        <Lightbox
          photo={lightboxPhoto}
          photos={graduationPhotos}
          onClose={() => setLightboxPhoto(null)}
          onNavigate={setLightboxPhoto}
        />
      )}
    </div>
  );
}
