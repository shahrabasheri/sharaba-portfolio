import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-dark py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="space-y-20 md:space-y-28">
          {projects.map((project) => {
            const cardBody = (
              <>
                <div
                  className={`relative w-full aspect-[16/9] rounded-2xl overflow-hidden ${project.bgColor}`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 1100px"
                  />
                </div>

                <div className="mt-6 md:mt-8 max-w-3xl">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                    <h3 className="font-display text-2xl md:text-3xl font-medium text-text-primary tracking-tight">
                      {project.title}
                    </h3>
                    {(project.year || project.comingSoon) && (
                      <span className="text-text-secondary/70 text-sm">
                        {project.comingSoon
                          ? project.conceptProject
                            ? "Concept"
                            : "Coming Soon"
                          : project.year}
                      </span>
                    )}
                  </div>
                  <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              </>
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
