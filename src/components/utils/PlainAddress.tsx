import { Fragment } from "react";
import { useTranslation } from "react-i18next";

interface PlainAddressProps {
  emails: string[];
  className?: string;
}

// The address written out beside a mailto button, for readers whose browser
// has no mail client behind the link. One click selects an address whole.
export default function PlainAddress({ emails, className = "" }: PlainAddressProps) {
  const { t } = useTranslation();

  return (
    <p className={`text-sm text-muted ${className}`}>
      {t("contact.orWrite")}{" "}
      {emails.map((email, index) => (
        <Fragment key={email}>
          {index > 0 && " · "}
          <span className="text-fg select-all">{email}</span>
        </Fragment>
      ))}
    </p>
  );
}
