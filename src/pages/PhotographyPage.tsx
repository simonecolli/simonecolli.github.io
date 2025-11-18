import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PhotographyPage() {
  const photoCategories = ["All", "Sport", "Wildlife", "Macro", "Ceremonies"];
  
  const photos = [
    {
      id: 1,
      src: "/vite.svg",
      alt: "Street Photography in Milan",
      category: "Sport",
      location: "Milan, Italy",
      camera: "Canon EOS R5",
      settings: "f/2.8 • 1/250s • ISO 400"
    },
    {
      id: 2,
      src: "/photo2.jpg",
      alt: "Portrait of a musician",
      category: "Portrait",
      location: "Studio",
      camera: "Canon EOS R5",
      settings: "f/1.8 • 1/125s • ISO 200"
    },
    {
      id: 3,
      src: "/photo3.jpg",
      alt: "Sunset over the mountains",
      category: "Landscape",
      location: "Dolomites, Italy",
      camera: "Canon EOS R5",
      settings: "f/8 • 1/60s • ISO 100"
    },
    {
      id: 4,
      src: "/photo4.jpg",
      alt: "Modern architecture detail",
      category: "Architecture",
      location: "Rome, Italy",
      camera: "Canon EOS R5",
      settings: "f/5.6 • 1/320s • ISO 200"
    },
    {
      id: 5,
      src: "/photo5.jpg",
      alt: "Street art and shadows",
      category: "Street",
      location: "Florence, Italy",
      camera: "Canon EOS R5",
      settings: "f/4 • 1/200s • ISO 800"
    },
    {
      id: 6,
      src: "/photo6.jpg",
      alt: "Corporate headshot",
      category: "Portrait",
      location: "Office",
      camera: "Canon EOS R5",
      settings: "f/2.8 • 1/160s • ISO 400"
    }
  ];

  return (
    <div className="app">
      <Header />
      <main className="main-content pt-20">
        {/* Page Header */}
        <section className="tech-minimal-section">
          <div className="tech-minimal-container">
            <div className="max-w-3xl mx-auto text-center fade-in">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                Photography
              </h1>
              <div className="h-px bg-gray-300 w-24 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Through my lens, I capture moments, emotions, and stories.
                Photography is my way of freezing time and creating
                meaningful memories.
              </p>
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2">
                {photoCategories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 text-sm border rounded transition-all ${
                      index === 0 
                        ? 'bg-black text-white border-black' 
                        : 'border-gray-300 hover:border-black hover:text-black'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="tech-minimal-section">
          <div className="tech-minimal-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photos.map((photo) => (
                <div key={photo.id} className="group cursor-pointer">
                  {/* Photo Container */}
                  <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-gray-100">
                    <img 
                      src={photo.src} 
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Overlay with Details */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium mb-1">{photo.camera}</p>
                        <p className="text-xs opacity-80">{photo.settings}</p>
                      </div>
                    </div>
                  </div>

                  {/* Photo Info */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium group-hover:text-blue-600 transition-colors">
                        {photo.alt}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                        {photo.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{photo.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}