import Header from "../components/Header";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export const metadata = {
  title: "Projects · Shahraba KV",
  description:
    "Selected UI/UX projects across telecom, enterprise B2B, and corporate web work.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-dark pt-32 pb-10 md:pt-40 md:pb-12">
          <div className="mx-auto px-6 md:px-12 lg:px-[120px] text-center">
            <h1 className="font-display text-[60px] leading-[68px] font-bold text-gold-dark mb-4 tracking-[-0.02em]">
              Selected work
            </h1>
            <p className="text-text-secondary text-lg md:text-xl">
              Four projects.
            </p>
          </div>
        </section>
        <Projects />
      </main>
      <Footer />
    </>
  );
}
