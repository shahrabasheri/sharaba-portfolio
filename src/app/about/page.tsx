import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";

export const metadata = {
  title: "About · Shahraba KV",
  description:
    "UI/UX designer based in Dubai with 3+ years of experience. Trained as an architect before designing digital products.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-dark pt-32 pb-10 md:pt-40 md:pb-12">
          <div className="mx-auto px-6 md:px-12 lg:px-[120px] text-center">
            <h1 className="font-display text-[60px] leading-[68px] font-bold text-gold-dark tracking-[-0.02em]">
              About
            </h1>
          </div>
        </section>
        <About />
      </main>
      <Footer />
    </>
  );
}
