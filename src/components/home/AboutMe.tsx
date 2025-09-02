import { Link } from "react-router-dom";

export default function AboutMe() {
  

  return (
    <section className="tech-minimal-section">
      <div className="tech-minimal-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light tracking-tight mb-4">
            About Me
          </h2>
          <div className="h-px bg-gray-300 w-24 mx-auto mb-6"></div>
          <div className="flex justify-center">
            <p className="text-gray-600 max-w-2xl mx-auto text-center">
              Breve descrizione su di me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
