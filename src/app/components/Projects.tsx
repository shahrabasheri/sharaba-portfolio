import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-dark py-16 md:py-24">
      <div className="mx-auto px-6 md:px-12 lg:px-[200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => {
            const cardBody = (
              <div
                className={`relative ${project.bgColor} rounded-2xl p-6 md:p-8 h-full flex flex-col gap-6 transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl`}
              >
                {/* Text top */}
                <div className="text-white">
                  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-1">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-white/70 text-sm mb-3">
                      {project.subtitle}
                    </p>
                  )}
                  <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
                    {project.problem}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    {(project.year || project.comingSoon) && (
                      <span className="text-white/60">
                        {project.comingSoon
                          ? project.conceptProject
                            ? "Concept"
                            : "Coming Soon"
                          : project.year}
                      </span>
                    )}
                    {!project.comingSoon && (
                      <span className="text-white/90 font-medium inline-flex items-center gap-1">
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

                {/* Image bottom */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-white/5 mt-auto">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            );

            return project.comingSoon ? (
              <article key={project.slug} className="group block">
                {cardBody}
              </article>
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
