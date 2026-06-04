export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-dark overflow-hidden pt-32 pb-20">
      {/* very subtle backdrop accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-1/4 w-[420px] h-[420px] rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left — name + positioning */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <h1 className="font-display text-7xl md:text-[7.5rem] lg:text-[8.5rem] font-medium text-text-primary mb-6 tracking-[-0.045em] leading-[0.92]">
            Shahraba KV
          </h1>

          <p className="font-serif text-2xl md:text-4xl italic text-gold-dark mb-8 leading-snug">
            Designer of digital products. Ex-architect.
          </p>

          <p className="text-base md:text-lg text-text-secondary mb-10 max-w-xl leading-relaxed">
            I&apos;m Shahraba, a UI/UX designer with 3+ years of experience,
            driven by how people move through spaces — physical and digital.
            Trained as an architect, now based in Dubai designing for
            product teams.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gold-dark text-white rounded-full font-medium hover:bg-gold transition-all duration-300 text-sm"
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
              href="mailto:shahrabasheri153@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-black/15 text-text-primary rounded-full font-medium hover:border-text-primary transition-all duration-300 text-sm"
            >
              Get in touch
            </a>
          </div>

          <p className="text-sm text-text-secondary/80">
            Open to product design roles. Available immediately.
          </p>
        </div>

        {/* Right — photo */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative mx-auto w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden bg-blue-gray ring-1 ring-black/5 shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/profile.jpg"
              alt="Shahraba KV"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
