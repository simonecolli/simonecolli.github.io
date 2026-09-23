import type { ReactNode } from "react";
import Link from "../utils/LocalizedLink";
import { useTranslation } from "react-i18next";
import Logo from "../utils/Logo";

interface TerritorySectionProps {
  id: string;
  territory: "dev" | "photo";
  to: string;
  background?: ReactNode;
}

// One half of the home page. territory picks the title face, accent, logo and
// the side the text sits on; to is an anchor on this page when it starts with
// "#" and a route otherwise. A background takes the logo's place, since logos
// carry their own painted square and would print a rectangle over it.
export default function TerritorySection({
  id,
  territory,
  to,
  background,
}: TerritorySectionProps) {
  const { t } = useTranslation();

  const isDev = territory === "dev";
  const titleFont = isDev ? "font-mono" : "font-display";
  const ctaClass = `btn ${isDev ? "btn-dev" : "btn-photo"} mt-6`;
  const label = t(`home.${territory}.cta`);

  const text = (
    <div
      className={isDev
        ? "order-2 lg:order-1"
        : "order-2 rounded-lg border border-line bg-bg p-6 sm:p-8 lg:p-10 shadow-sm"}
    >
      <h2 className={`${titleFont} type-section-title`}>
        {t(`home.${territory}.title`)}
      </h2>
      <div className="h-px bg-line w-32 mt-3 mb-4" />
      <p className="type-body text-muted">
        {t(`home.${territory}.text`)}
      </p>
      {to.startsWith("#") ? (
        <a href={to} className={ctaClass}>{label}</a>
      ) : (
        <Link to={to} className={ctaClass}>{label}</Link>
      )}
      {!isDev && <Link to="/photography/degree/" className="block mt-4 text-accent-photo underline underline-offset-4">{t("home.photo.graduationLink")}</Link>}
    </div>
  );

  // Once stacked, an empty shoulder would still cost a grid gap above the text.
  const spallaSinistra = background ? (
    <div className={`hidden lg:block ${isDev ? "order-1 lg:order-2" : "order-1"}`} />
  ) : (
    <div className={`flex justify-center ${isDev ? "order-1 lg:order-2" : "order-1"}`}>
      <Logo
        variant={territory}
        className="w-[clamp(10rem,min(38vh,42vw),28rem)] h-[clamp(10rem,min(38vh,42vw),28rem)]"
      />
    </div>
  );

  return (
    <section id={id} className="site-section-full scroll-mt-16 relative overflow-hidden">
      {background}
      <div className="site-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {isDev ? (
            <>
              {text}
              {spallaSinistra}
            </>
          ) : (
            <>
              {spallaSinistra}
              {text}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
