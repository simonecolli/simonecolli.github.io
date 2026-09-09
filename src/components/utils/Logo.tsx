type Variant = "mix" | "dev" | "photo";
type Surface = "page" | "inverted";

interface LogoProps {
  variant: Variant;
  surface?: Surface;
  className?: string;
  label?: string;
}

// Which file to draw follows the surface the logo sits on, not the theme of
// the page, so the inverted footer asks for the opposite theme's variant. The
// mix mark is an SVG with real transparency; dev and photo are raster files
// carrying a painted square, which is why a section background suppresses them.
export default function Logo({
  variant,
  surface = "page",
  className = "",
  label,
}: LogoProps) {
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
