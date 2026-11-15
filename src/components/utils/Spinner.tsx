interface SpinnerProps {
  // Size and colours of the ring; the default suits photos on the page.
  className?: string;
}

// Covers an image's box until the image has loaded; the parent must be
// positioned. Readers who ask for reduced motion see the ring still.
export default function Spinner({ className = "w-6 h-6 border-fg/15 border-t-accent-photo" }: SpinnerProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
      <div className={`border-2 rounded-full motion-safe:animate-spin ${className}`} />
    </div>
  );
}
