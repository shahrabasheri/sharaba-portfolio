import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
