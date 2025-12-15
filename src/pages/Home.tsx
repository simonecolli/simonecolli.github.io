import Header from "./../components/Header.tsx"
import Hero from "./../components/home/Hero.tsx"
import Projects from "./../components/home/Projects.tsx"
import Talks from "./../components/home/Talks.tsx"
import AboutMe from "./../components/home/AboutMe.tsx"
// import Photography from "./../components/home/Photography.tsx"
import Footer from "./../components/Footer.tsx"

export default function Home() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
        <AboutMe />
        <Projects />
        <Talks />
        {/* <Photography /> */}
      </main>
      <Footer />
    </div>
  );
}
