import type { ReactNode } from "react";

interface SectionBackgroundProps {
  fade: "left" | "right";
  children: ReactNode;
}

// fade names the side the text sits on: the background thins out towards it
// through a gradient mask, so it stays solid where the text does not reach.
export default function SectionBackground({ fade, children }: SectionBackgroundProps) {
  return (
    <div className={`section-bg section-bg-fade-${fade}`} aria-hidden="true">
      {children}
    </div>
  );
}
