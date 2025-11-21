import Header from "../components/Header";
import Footer from "../components/Footer";
import Back2Home from "../components/utils/Back2Home";
import WorkInProgress from "../components/utils/WorkInProgress";

export default function Blog() {
  return (
    <div className="app">
      <Header />
      <main className="main-content pt-20">
        {/* Page header */}
        <section className="tech-minimal-section">
          <div className="tech-minimal-container">
            <div className="max-w-3xl mx-auto text-center fade-in">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                Blog
              </h1>
              <div className="h-px bg-gray-300 w-24 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Thoughts on software development, technology, photography and other topics
                I'm passionate about.
              </p>
            </div>
          </div>
        </section>

        <WorkInProgress />

        <Back2Home />
      </main>
      <Footer />
    </div>
  );
}
