import { createElement } from "react";
import { useTranslation } from "react-i18next";
import { collectHead, isCollectingHead, type HeadElement } from "../seoHead";
import { SITE_URL } from "../siteConfig";

interface SEOProps {
  titleKey?: string;
  descriptionKey: string;
  keywordsKey: string;
  path?: string;
  image?: string;
  noindex?: boolean;
}

export default function SEO({
  titleKey,
  descriptionKey,
  keywordsKey,
  path = "",
  image = "/profile.jpg",
  noindex = false,
}: SEOProps) {
  // Collect head tags during prerendering; let React place them in the browser.
  const { t, i18n } = useTranslation();

  const title = titleKey ? `${t(titleKey)} | Simone Colli` : "Simone Colli";
  const description = t(descriptionKey);
  const keywords = t(keywordsKey);
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const locale = i18n.language.startsWith("it") ? "it_IT" : "en_GB";

  const elements: HeadElement[] = [
    { type: "meta", props: { name: "description", content: description } },
    { type: "meta", props: { name: "keywords", content: keywords } },
    noindex
      ? { type: "meta", props: { name: "robots", content: "noindex" } }
      : { type: "link", props: { rel: "canonical", href: url } },

    { type: "meta", props: { property: "og:type", content: "website" } },
    { type: "meta", props: { property: "og:title", content: title } },
    { type: "meta", props: { property: "og:description", content: description } },
    { type: "meta", props: { property: "og:url", content: url } },
    { type: "meta", props: { property: "og:image", content: imageUrl } },
    { type: "meta", props: { property: "og:locale", content: locale } },
    { type: "meta", props: { property: "og:site_name", content: "Simone Colli" } },

    { type: "meta", props: { name: "twitter:card", content: "summary_large_image" } },
    { type: "meta", props: { name: "twitter:title", content: title } },
    { type: "meta", props: { name: "twitter:description", content: description } },
    { type: "meta", props: { name: "twitter:image", content: imageUrl } },
  ];

  if (isCollectingHead()) {
    collectHead(title, elements);
    return null;
  }

  return (
    <>
      <title>{title}</title>
      {elements.map((element, index) =>
        createElement(element.type, { key: index, ...element.props })
      )}
    </>
  );
}
