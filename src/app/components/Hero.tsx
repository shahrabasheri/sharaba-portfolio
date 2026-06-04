export default function Hero() {
  return (
    <section className="relative bg-dark pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="mx-auto px-6 md:px-12 lg:px-[120px] text-center">
        <h1 className="font-display text-[60px] leading-[68px] font-bold text-gold-dark mb-4 tracking-[-0.02em]">
          Hi, I&apos;m Shahraba KV
        </h1>
        <p className="text-text-secondary text-lg md:text-xl mb-8">
          UI/UX Designer
        </p>
        <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          I&apos;m a UI/UX designer with 3+ years of experience, driven by how
          people move through spaces, physical and digital. Trained as an
          architect, now based in Dubai designing for product teams.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="/projects"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gold-dark text-white rounded-full font-medium hover:bg-gold transition-all duration-300 text-base"
          >
            View work
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-black/15 text-text-primary rounded-full font-medium hover:border-text-primary transition-all duration-300 text-base"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
