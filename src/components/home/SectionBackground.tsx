import type { ReactNode } from "react";

interface SectionBackgroundProps {
  fade: "left" | "right";
  children: ReactNode;
}

export default function SectionBackground({ fade, children }: SectionBackgroundProps) {
  // Fade the decorative background towards the side containing text.
  return (
    <div className={`section-bg section-bg-fade-${fade}`} aria-hidden="true">
      {children}
    </div>
  );
}
