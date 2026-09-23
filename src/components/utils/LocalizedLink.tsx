import { Link, type LinkProps } from "react-router-dom";
import { useLang } from "../../hooks/useLang";
import { localizePath } from "../../lib/lang";

type LocalizedLinkProps = Omit<LinkProps, "to"> & { to: string };

// A router Link that keeps the reader in the language of the current page:
// `to` is written in the default language ("/projects/") and gains the /en
// prefix on English pages.
export default function LocalizedLink({ to, ...props }: LocalizedLinkProps) {
  const lang = useLang();
  return <Link to={localizePath(to, lang)} {...props} />;
}
