import { createElement } from "react";
import { useTranslation } from "react-i18next";
import { collectHead, isCollectingHead, type HeadElement } from "../seoHead";
import { SITE_URL, withTrailingSlash } from "../siteConfig";
import { useLang } from "../hooks/useLang";
import { DEFAULT_LANG, LANGUAGES, localizePath, type Lang } from "../lib/lang";

const OG_LOCALES: Record<Lang, string> = { it: "it_IT", en: "en_GB" };

interface SEOProps {
  titleKey?: string;
  descriptionKey: string;
  keywordsKey: string;
  path?: string;
  image?: string;
  noindex?: boolean;
}

// Head tags for one page. Under prerender they go to the plugin, which injects
// them into the real <head>; in the browser React hoists them itself. `path`
// is the page in the default language; the canonical follows the language of
// the URL being rendered and the alternates list every language plus
// x-default, the same set the sitemap declares. noindex replaces the canonical
// and the alternates: it marks the 404 page, which answers for any unknown URL,
// and the minor projects and talks kept out of search results.
export default function SEO({
  titleKey,
  descriptionKey,
  keywordsKey,
  path = "",
  image = "/og/home.png",
  noindex = false,
}: SEOProps) {
  const { t } = useTranslation();
  const lang = useLang();

  const title = titleKey ? `${t(titleKey)} | Simone Colli` : "Simone Colli";
  const description = t(descriptionKey);
  const keywords = t(keywordsKey);
  const basePath = withTrailingSlash(path);
  const urlFor = (target: Lang) => `${SITE_URL}${localizePath(basePath, target)}`;
  const url = urlFor(lang);
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  const elements: HeadElement[] = [
    { type: "meta", props: { name: "description", content: description } },
    { type: "meta", props: { name: "keywords", content: keywords } },
    ...(noindex
      ? [{ type: "meta", props: { name: "robots", content: "noindex" } }]
      : [
          { type: "link", props: { rel: "canonical", href: url } },
          ...LANGUAGES.map((target) => ({
            type: "link",
            props: { rel: "alternate", hrefLang: target, href: urlFor(target) },
          })),
          { type: "link", props: { rel: "alternate", hrefLang: "x-default", href: urlFor(DEFAULT_LANG) } },
        ]),

    { type: "meta", props: { property: "og:type", content: "website" } },
    { type: "meta", props: { property: "og:title", content: title } },
    { type: "meta", props: { property: "og:description", content: description } },
    { type: "meta", props: { property: "og:url", content: url } },
    { type: "meta", props: { property: "og:image", content: imageUrl } },
    { type: "meta", props: { property: "og:locale", content: OG_LOCALES[lang] } },
    ...LANGUAGES.filter((target) => target !== lang).map((target) => ({
      type: "meta",
      props: { property: "og:locale:alternate", content: OG_LOCALES[target] },
    })),
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
