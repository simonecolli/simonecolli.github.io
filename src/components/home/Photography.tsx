import { Link } from "react-router-dom";

export default function Photography() {
  const photos = [
    {
      src: "/photo1.jpg",
      alt: "Street Photography",
      category: "Street"
    },
    {
      src: "/photo2.jpg", 
      alt: "Portrait Photography",
      category: "Portrait"
    },
    {
      src: "/photo3.jpg",
      alt: "Landscape Photography", 
      category: "Landscape"
    },
    {
      src: "/photo4.jpg",
      alt: "Architecture Photography",
      category: "Architecture"
    }
  ];

  return (
    <section className="tech-minimal-section">
      <div className="tech-minimal-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light tracking-tight mb-4">
            Photography
          </h2>
          <div className="h-px bg-gray-300 w-24 mx-auto mb-6"></div>
          <div className="flex justify-center">
          <p className="text-gray-600 max-w-2xl mx-auto text-center">
            Capturing moments and stories through the lens.
            A collection of my favorite shots.
          </p>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {photos.map((photo, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden">
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-medium">
                    {photo.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link 
            to="/photography"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition-colors"
          >
            View All Photos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
