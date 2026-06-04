import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-dark py-16 md:py-24">
      <div className="mx-auto px-6 md:px-12 lg:px-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => {
            const cardBody = (
              <article className="bg-white rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5 group-hover:shadow-2xl group-hover:-translate-y-0.5 transition-all duration-500 grid grid-cols-1 sm:grid-cols-2 h-full">
                {/* Left — image on colored panel */}
                <div
                  className={`relative ${project.bgColor} min-h-[260px] sm:min-h-0 flex items-center justify-center p-5 order-1`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>

                {/* Right — text */}
                <div className="p-6 md:p-7 flex flex-col order-2">
                  <h3 className="font-display text-2xl md:text-[28px] leading-tight font-bold text-gold-dark mb-1 tracking-tight">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-text-secondary text-sm mb-3">
                      {project.subtitle}
                    </p>
                  )}
                  <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
                    {project.problem}
                  </p>

                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[11px] border border-tag-border text-text-secondary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-xs mt-auto pt-2 border-t border-tag-border/60">
                    {(project.year || project.comingSoon) && (
                      <span className="text-text-secondary/70">
                        {project.comingSoon
                          ? project.conceptProject
                            ? "Concept"
                            : "Coming Soon"
                          : project.year}
                      </span>
                    )}
                    {!project.comingSoon && (
                      <span className="ml-auto text-gold-dark font-medium inline-flex items-center gap-1">
                        Learn more
                        <svg
                          width="12"
                          height="12"
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
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );

            return project.comingSoon ? (
              <div key={project.slug} className="group block">
                {cardBody}
              </div>
            ) : (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                {cardBody}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
