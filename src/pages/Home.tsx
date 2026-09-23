import Header from "../components/Header";
import HeroSplit from "../components/home/HeroSplit";
import AboutSplit from "../components/home/AboutSplit";
import TerritorySection from "../components/home/TerritorySection";
import ContactBlock from "../components/home/ContactBlock";
import PhotoMosaic from "../components/home/PhotoMosaic";
import NodeGraph from "../components/home/NodeGraph";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <div className="app">
      <SEO
        titleKey="seo.home.title"
        descriptionKey="seo.home.description"
        keywordsKey="seo.home.keywords"
        path="/"
      />
      <Header />
      <main className="main-content">
        <HeroSplit />
        <TerritorySection
          id="home-dev"
          territory="dev"
          to="/development/"
          background={<NodeGraph fade="left" />}
        />
        <TerritorySection
          id="home-photo"
          territory="photo"
          to="/photography/"
          background={<PhotoMosaic fade="right" />}
        />
        <AboutSplit />
        <ContactBlock />
      </main>
      <Footer />
    </div>
  );
}
