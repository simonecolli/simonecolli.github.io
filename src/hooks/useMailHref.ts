import { useTranslation } from "react-i18next";
import { DEV_EMAIL, PHOTO_EMAIL, mailtoHref } from "../siteConfig";

// The contact link for one of the two activities. It opens the reader's mail
// client with a subject and a few guiding questions in place, so the first
// message does not start from a blank page.
export function useMailHref(territory: "dev" | "photo"): string {
  const { t } = useTranslation();
  const email = territory === "dev" ? DEV_EMAIL : PHOTO_EMAIL;

  return mailtoHref(
    email,
    t(`contact.${territory}Mail.subject`),
    t(`contact.${territory}Mail.body`),
  );
}
