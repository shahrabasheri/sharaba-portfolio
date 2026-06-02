import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-dark py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-medium text-text-primary leading-[1.05] tracking-[-0.02em]">
              Selected work.{" "}
              <span className="font-serif italic font-normal text-gold-dark">
                Four projects, one gallery.
              </span>
            </h2>
          </div>
          <p className="text-text-secondary text-base max-w-md">
            Enterprise B2B, telecom AI, a corporate website redesign, and a
            visual exploration gallery.
          </p>
        </div>

        {/* Worked with — text-only logo strip */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-16 md:mb-20 pt-6 pb-8 border-y border-black/10">
          <span className="text-xs uppercase tracking-[0.2em] text-text-secondary/60">
            Worked with
          </span>
          <span className="font-display font-semibold text-text-primary/80 tracking-tight">
            6D Technologies
          </span>
          <span className="text-tag-border">·</span>
          <span className="font-display font-semibold text-text-primary/80 tracking-tight">
            NBTC Group
          </span>
          <span className="text-tag-border">·</span>
          <span className="font-display font-semibold text-text-primary/80 tracking-tight">
            CodeCraft Technologies
          </span>
        </div>

        {/* Project Cards */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;
            const cta = project.comingSoon ? (
              <span className="inline-flex items-center gap-2 px-5 py-2.5 border border-tag-border text-text-secondary rounded-full text-sm bg-blue-gray/40">
                {project.conceptProject ? "Concept Project" : "Coming Soon"}
              </span>
            ) : (
              <Link
                href={`/projects/${project.slug}`}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-white rounded-full hover:bg-text-secondary transition-all duration-300 text-sm font-semibold"
              >
                Read more
                <svg
                  width="16"
                  height="16"
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
              </Link>
            );

            return (
              <article
                key={project.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="lg:col-span-7">
                  {(() => {
                    const cardClasses = `group relative block w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl ${project.bgColor} ${
                      project.comingSoon ? "cursor-default" : ""
                    }`;
                    const inner = (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                          sizes="(max-width: 1024px) 100vw, 60vw"
                        />
                        {/* Subtle vignette + count badge */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-5 left-5 flex items-center gap-2">
                          <span className="px-2.5 py-1 text-[10px] tracking-widest uppercase font-semibold bg-black/40 text-white/90 backdrop-blur-sm rounded-full border border-white/10">
                            0{index + 1}
                          </span>
                          {project.comingSoon && (
                            <span className="px-2.5 py-1 text-[10px] tracking-widest uppercase font-semibold bg-white/80 text-text-primary rounded-full">
                              {project.conceptProject ? "Concept" : "Coming Soon"}
                            </span>
                          )}
                        </div>
                      </>
                    );
                    return project.comingSoon ? (
                      <div className={cardClasses}>{inner}</div>
                    ) : (
                      <Link href={`/projects/${project.slug}`} className={cardClasses}>
                        {inner}
                      </Link>
                    );
                  })()}
                </div>

                {/* Content */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 mb-3 text-xs tracking-wide uppercase">
                    <span className="text-text-secondary/70">
                      {project.company}
                    </span>
                    <span className="text-tag-border">·</span>
                    <span className="text-text-primary/80">{project.role}</span>
                  </div>

                  <h3 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-2 leading-tight">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="font-serif text-lg text-gold-dark italic mb-4">
                      {project.subtitle}
                    </p>
                  )}

                  {/* Problem → Outcome story */}
                  <div className="space-y-3 mb-6 mt-4">
                    <div className="flex gap-3">
                      <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-500/70" />
                      <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                        <span className="text-text-primary/90 font-medium">Problem.</span>{" "}
                        {project.problem}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-600/80" />
                      <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                        <span className="text-text-primary/90 font-medium">What I did.</span>{" "}
                        {project.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs border border-tag-border/60 text-text-secondary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {cta}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
