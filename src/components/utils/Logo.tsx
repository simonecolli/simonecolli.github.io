type Variant = "mix" | "dev" | "photo";
type Surface = "page" | "inverted";

interface LogoProps {
  variant: Variant;
  surface?: Surface;
  className?: string;
  label?: string;
}

export default function Logo({
  variant,
  surface = "page",
  className = "",
  label,
}: LogoProps) {
  // Match the logo to its surface and hide decorative marks from screen readers.
  const suffix = surface === "inverted" ? "-inv" : "";

  return (
    <div
      className={`logo logo-${variant}${suffix} ${className}`}
      role={label ? "img" : "presentation"}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}
