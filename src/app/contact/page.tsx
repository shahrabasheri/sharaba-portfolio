import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact · Shahraba KV",
  description:
    "Get in touch for product design roles, contract work, or a chat about a project.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-dark pt-32 pb-6 md:pt-40 md:pb-8">
          <div className="mx-auto px-6 md:px-12 lg:px-[120px] text-center">
            <h1 className="font-display text-[60px] leading-[68px] font-bold text-gold-dark tracking-[-0.02em]">
              Contact
            </h1>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
