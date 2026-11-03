import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappHref } from "../../siteConfig";

interface WhatsAppButtonProps {
  area: "dev" | "photo" | "shared";
  // Replaces the area's default first message, for pages that know more
  // about the request than the area does.
  message?: string;
  // The offer the chat is about, for the contact event; analytics.ts drops
  // labels it does not know.
  service?: string;
  className?: string;
}

// The chat beside the mail button. Both activities share the number, so the
// prefilled message names the one the reader came for, and the area travels
// on the link for the contact event.
export default function WhatsAppButton({ area, message, service, className = "" }: WhatsAppButtonProps) {
  const { t } = useTranslation();

  return (
    <a
      href={whatsappHref(message ?? t(`contact.whatsapp.${area}`))}
      target="_blank"
      rel="noopener noreferrer"
      data-analytics-area={area}
      data-analytics-service={service}
      className={`btn btn-neutral gap-2 ${className}`}
    >
      <FaWhatsapp aria-hidden="true" />
      {t("contact.whatsapp.cta")}
    </a>
  );
}
