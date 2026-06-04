import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section id="testimonials" className="bg-dark py-16 md:py-24">
      <div className="mx-auto px-6 md:px-12 lg:px-[120px]">
        <h2 className="font-display text-3xl md:text-5xl font-medium text-text-primary leading-[1.1] tracking-[-0.02em] mb-12 max-w-3xl">
          What people I&apos;ve worked with say.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="bg-white rounded-2xl p-7 shadow-md ring-1 ring-black/5 flex flex-col"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-gold-dark/80 mb-4"
                aria-hidden="true"
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
              <blockquote className="text-text-primary text-base leading-relaxed mb-6 flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="text-sm">
                <div className="font-semibold text-text-primary">{t.name}</div>
                <div className="text-text-secondary">
                  {t.title}
                  {t.company ? ` · ${t.company}` : ""}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
