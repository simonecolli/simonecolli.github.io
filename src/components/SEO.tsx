import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOProps {
  titleKey?: string;
  descriptionKey: string;
  keywordsKey: string;
  path?: string;
  image?: string;
}

const BASE_URL = "https://www.simonecolli.com";

export default function SEO({
  titleKey,
  descriptionKey,
  keywordsKey,
  path = "",
  image = "/profile.jpg",
}: SEOProps) {
  const { t, i18n } = useTranslation();

  const title = titleKey ? `${t(titleKey)} | Simone Colli` : "Simone Colli";
  const description = t(descriptionKey);
  const keywords = t(keywordsKey);
  const url = `${BASE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={i18n.language === "it" ? "it_IT" : "en_GB"} />
      <meta property="og:site_name" content="Simone Colli" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
