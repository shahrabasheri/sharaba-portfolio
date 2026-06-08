import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProjectBySlug, getNextProject } from "../../data/projects";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export function generateStaticParams() {
  return projects
    .filter((p) => !p.comingSoon && p.detail)
    .map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.detail) {
    notFound();
  }

  const detail = project.detail;
  const nextProject = getNextProject(slug);

  return (
    <main className="bg-dark min-h-screen">
      <Header />

      {/* Project Hero */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-gold transition-colors mb-8"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            All work
          </Link>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <div
              className={`lg:col-span-6 aspect-[16/10] rounded-2xl overflow-hidden relative shadow-2xl ${project.bgColor}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-4 text-xs tracking-wide uppercase">
                <span className="text-text-secondary/70">{project.company}</span>
                <span className="text-tag-border">·</span>
                <span className="text-gold/80">{project.role}</span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-text-primary mb-3 leading-[1.05]">
                {project.title}
              </h1>
              {project.subtitle && (
                <p className="text-lg md:text-xl text-gold/80 italic mb-6">
                  {project.subtitle}
                </p>
              )}
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                {project.description}
              </p>

              <dl className="grid sm:grid-cols-2 gap-6 max-w-xl">
                <div>
                  <dt className="text-text-secondary/60 text-xs tracking-widest uppercase mb-1.5">
                    My Roles
                  </dt>
                  <dd className="text-text-primary text-sm md:text-base leading-relaxed">
                    {detail.roles.join(" · ")}
                  </dd>
                </div>
                <div>
                  <dt className="text-text-secondary/60 text-xs tracking-widest uppercase mb-1.5">
                    Duration
                  </dt>
                  <dd className="text-text-primary text-sm md:text-base">
                    {detail.duration}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      {detail.introduction && (
        <Section eyebrow="Intro" title="Background">
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-3xl">
            {detail.introduction}
          </p>
        </Section>
      )}

      {/* The Challenge */}
      {detail.challenge && (
      <Section eyebrow="Problem" title="What was wrong">
        {detail.comparison ? (
          <div className="grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-14 items-start">
            <div className="rounded-2xl overflow-hidden border border-black/5 bg-blue-gray/40 shadow-sm lg:sticky lg:top-28 order-first">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={detail.comparison.before}
                alt="Old design"
                className="w-full h-auto block"
              />
            </div>
            <div className="space-y-14">
              <div className="space-y-6">
                <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                  {detail.challenge}
                </p>
                {detail.challengeBullets && (
                  <ul className="space-y-3">
                    {detail.challengeBullets.map((b, i) => (
                      <li key={i} className="flex gap-3 text-text-secondary text-base">
                        <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-gold/70" />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {detail.challengeQuote && (
                  <figure className="pl-6 border-l border-gold-dark/40">
                    <blockquote className="font-serif text-2xl md:text-3xl italic text-text-primary leading-snug">
                      &ldquo;{detail.challengeQuote}&rdquo;
                    </blockquote>
                  </figure>
                )}
              </div>
              {detail.comparison.caption && (
                <div>
                  <p className="text-text-secondary/80 text-xs tracking-widest uppercase mb-2">
                    {detail.comparison.beforeLabel ?? "Before"}
                  </p>
                  <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                    {detail.comparison.caption}
                  </p>
                </div>
              )}
              {detail.vision && (
                <div>
                  <p className="text-gold text-xs tracking-widest uppercase mb-2 font-semibold">
                    Goals
                  </p>
                  <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                    {detail.vision}
                  </p>
                  {detail.visionPillars && (
                    <div className="space-y-3 mt-5">
                      {detail.visionPillars.map((p, i) => (
                        <div
                          key={i}
                          className="bg-blue-gray/60 border border-black/5 rounded-xl p-5"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-display text-gold/80 text-sm font-semibold">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <h3 className="text-text-primary font-semibold text-base">
                              {p.title}
                            </h3>
                          </div>
                          <p className="text-text-secondary text-sm leading-relaxed">
                            {p.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-3xl mb-6">
              {detail.challenge}
            </p>
            {detail.challengeBullets && (
              <ul className="space-y-3 max-w-3xl mb-6">
                {detail.challengeBullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-text-secondary text-base">
                    <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-gold/70" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {detail.challengeQuote && (
              <figure className="mt-8 pl-6 border-l border-gold-dark/40 max-w-3xl">
                <blockquote className="font-serif text-2xl md:text-4xl italic text-text-primary leading-snug">
                  &ldquo;{detail.challengeQuote}&rdquo;
                </blockquote>
              </figure>
            )}
          </>
        )}
      </Section>
      )}

      {/* Discovering the Gaps */}
      {detail.gaps && (
        <Section eyebrow="Research" title="Who it affected">
          <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
            {detail.gaps.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 rounded-xl overflow-hidden border border-black/5">
            {detail.gaps.tabs.map((tab) => (
              <div
                key={tab.label}
                className="bg-white flex flex-col"
              >
                <div className="bg-blue-gray px-5 py-4 text-sm font-semibold text-gold leading-snug">
                  {tab.label}
                </div>
                <ul className="px-5 py-5 space-y-2.5 flex-1">
                  {tab.painPoints.map((p) => (
                    <li
                      key={p}
                      className="flex gap-2.5 text-sm text-text-secondary leading-relaxed"
                    >
                      <span className="shrink-0 mt-2 w-1 h-1 rounded-full bg-text-secondary/60" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Approach: heuristic eval table */}
      {detail.heuristicEval && (
        <Section
          eyebrow="Approach"
          title="What the heuristic evaluation found"
        >
          {detail.approachIntro && (
            <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
              {detail.approachIntro}
            </p>
          )}
          <div className="overflow-x-auto -mx-6 md:mx-0">
            <div className="min-w-[960px] px-6 md:px-0">
              <div className="grid grid-cols-[260px,1fr,1fr,1fr] gap-px bg-black/5 rounded-xl overflow-hidden border border-black/5">
                {/* Header */}
                {["Reference", "Observation", "Issue", "Recommendation"].map(
                  (h) => (
                    <div
                      key={h}
                      className="bg-blue-gray/60 px-5 py-3 text-xs tracking-widest uppercase text-gold font-semibold"
                    >
                      {h}
                    </div>
                  )
                )}
                {/* Rows */}
                {detail.heuristicEval.map((row, i) => (
                  <div key={i} className="contents">
                    <div className="bg-blue-gray px-4 py-5 text-sm font-semibold text-text-primary flex flex-col gap-3">
                      {row.referenceImage && (
                        <div className="bg-white rounded-md border border-black/5 p-2 flex items-center justify-center">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={row.referenceImage}
                            alt={row.reference}
                            className="w-full h-auto max-h-[180px] object-contain"
                          />
                        </div>
                      )}
                      <span>{row.reference}</span>
                    </div>
                    <div className="bg-white px-5 py-5 text-sm text-text-secondary leading-relaxed">
                      {row.observation}
                    </div>
                    <div className="bg-white px-5 py-5 text-sm text-text-secondary leading-relaxed">
                      {row.issue}
                    </div>
                    <div className="bg-white px-5 py-5 text-sm text-text-secondary leading-relaxed">
                      {row.recommendation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* Vision (skipped when already rendered inside Challenge alongside the comparison) */}
      {detail.vision && !detail.comparison && (
        <Section eyebrow="Goals" title="What we were going for">
          <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
            {detail.vision}
          </p>
          {detail.visionPillars && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {detail.visionPillars.map((p, i) => (
                <div
                  key={i}
                  className="bg-blue-gray/60 border border-black/5 rounded-xl p-6 hover:border-gold/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display text-gold/80 text-sm font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-text-primary font-semibold text-base">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </Section>
      )}

      {/* User Journey Mapping */}
      {detail.journeyMap && (() => {
        const journeyMap = detail.journeyMap;
        return (
        <Section
          eyebrow="Journey"
          title="User journey"
        >
          <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
            I mapped the journey from login to approval, capturing actions,
            pain points, and opportunities at each step.
          </p>
          <div
            className="grid gap-px bg-black/5 rounded-xl overflow-hidden border border-black/5"
            style={{
              gridTemplateColumns: `140px repeat(${journeyMap.length}, minmax(0, 1fr))`,
            }}
          >
                {/* User Persona row */}
                {detail.userPersona && (
                  <>
                    <div className="bg-blue-gray/60 px-5 py-5 text-sm font-semibold text-text-primary flex items-center">
                      User Persona
                    </div>
                    <div
                      className="bg-white px-5 py-5 text-sm text-text-secondary leading-relaxed"
                      style={{ gridColumn: `span ${journeyMap.length}` }}
                    >
                      <div>
                        Name:{" "}
                        <span className="text-text-primary font-semibold">
                          {detail.userPersona.name}
                        </span>
                      </div>
                      <div>
                        Role:{" "}
                        <span className="text-text-primary">
                          {detail.userPersona.role}
                        </span>
                      </div>
                    </div>
                  </>
                )}

                {/* User Goal row */}
                {detail.userGoals && (
                  <>
                    <div className="bg-blue-gray/60 px-5 py-5 text-sm font-semibold text-text-primary flex items-center">
                      User Goal
                    </div>
                    <div
                      className="bg-white px-5 py-5 text-sm text-text-secondary leading-relaxed"
                      style={{ gridColumn: `span ${journeyMap.length}` }}
                    >
                      <ul className="space-y-1.5">
                        {detail.userGoals.map((g, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-text-secondary/50" />
                            <span>{g}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                {/* User Journey row (stage labels) */}
                <div className="bg-blue-gray/60 px-5 py-5 text-sm font-semibold text-text-primary flex items-center">
                  User Journey
                </div>
                {journeyMap.map((row, i) => (
                  <div
                    key={`stage-${i}`}
                    className="bg-blue-gray px-5 py-5 text-sm font-semibold text-gold leading-snug flex items-center relative"
                  >
                    <span>{row.stage}</span>
                    {i < journeyMap.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-5 h-5 rounded-full bg-[#EBD5DF] ring-1 ring-gold/30 flex items-center justify-center text-gold shadow-sm"
                      >
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0"
                        >
                          <path d="M9 6l6 6-6 6" />
                        </svg>
                      </span>
                    )}
                  </div>
                ))}

                {/* User Interactions row */}
                {journeyMap.some((r) => r.interactions) && (
                  <>
                    <div className="bg-blue-gray/60 px-5 py-5 text-sm font-semibold text-text-primary flex items-center">
                      User Interactions
                    </div>
                    {journeyMap.map((row, i) => (
                      <div
                        key={`interactions-${i}`}
                        className="bg-white px-5 py-5 text-sm text-text-secondary leading-relaxed"
                      >
                        <JourneyCell value={row.interactions} />
                      </div>
                    ))}
                  </>
                )}

                {/* User Actions row */}
                {journeyMap.some((r) => r.actions) && (
                  <>
                    <div className="bg-blue-gray/60 px-5 py-5 text-sm font-semibold text-text-primary flex items-center">
                      User Actions
                    </div>
                    {journeyMap.map((row, i) => (
                      <div
                        key={`actions-${i}`}
                        className="bg-white px-5 py-5 text-sm text-text-secondary leading-relaxed"
                      >
                        <JourneyCell value={row.actions} />
                      </div>
                    ))}
                  </>
                )}

                {/* Goals & Experiences row */}
                {journeyMap.some((r) => r.goals) && (
                  <>
                    <div className="bg-blue-gray/60 px-5 py-5 text-sm font-semibold text-text-primary flex items-center">
                      Goals &amp; Experiences
                    </div>
                    {journeyMap.map((row, i) => (
                      <div
                        key={`goals-${i}`}
                        className="bg-white px-5 py-5 text-sm text-text-secondary leading-relaxed"
                      >
                        <JourneyCell value={row.goals} />
                      </div>
                    ))}
                  </>
                )}

                {/* Feelings and Thoughts row */}
                {journeyMap.some((r) => r.feelings) && (
                  <>
                    <div className="bg-blue-gray/60 px-5 py-5 text-sm font-semibold text-text-primary flex items-center">
                      Feelings &amp; Thoughts
                    </div>
                    {journeyMap.map((row, i) => (
                      <div
                        key={`feelings-${i}`}
                        className="bg-white px-5 py-5 text-sm text-text-secondary leading-relaxed"
                      >
                        <JourneyCell value={row.feelings} />
                      </div>
                    ))}
                  </>
                )}

                {/* Pain Points row */}
                {journeyMap.some((r) => r.painPoints) && (
                  <>
                    <div className="bg-blue-gray/60 px-5 py-5 text-sm font-semibold text-text-primary flex items-center">
                      Pain Points
                    </div>
                    {journeyMap.map((row, i) => (
                      <div
                        key={`pain-${i}`}
                        className="bg-white px-5 py-5 text-sm text-text-secondary leading-relaxed"
                      >
                        <JourneyCell value={row.painPoints} />
                      </div>
                    ))}
                  </>
                )}

                {/* Opportunities row */}
                {journeyMap.some((r) => r.opportunities) && (
                  <>
                    <div className="bg-blue-gray/60 px-5 py-5 text-sm font-semibold text-text-primary flex items-center">
                      Opportunities
                    </div>
                    {journeyMap.map((row, i) => (
                      <div
                        key={`opp-${i}`}
                        className="bg-white px-5 py-5 text-sm text-text-secondary leading-relaxed"
                      >
                        <JourneyCell value={row.opportunities} />
                      </div>
                    ))}
                  </>
                )}
          </div>
        </Section>
        );
      })()}

      {/* Conversation flow (chatbot only) */}
      {detail.flowImage && (
        <Section eyebrow="Flow" title="The conversation architecture">
          {detail.flowImageCaption && (
            <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
              {detail.flowImageCaption}
            </p>
          )}
          <div className="overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={detail.flowImage}
              alt="Conversation flow"
              className="w-full h-auto block"
            />
          </div>
        </Section>
      )}

      {/* Designing the Experience (highlights + walkthrough screens) */}
      {(detail.designHighlights ||
        detail.designSections ||
        detail.walkthroughImage) && (
        <Section eyebrow="Design" title="What I designed">
          {detail.walkthroughCaption && (
            <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
              {detail.walkthroughCaption}
            </p>
          )}
          {detail.walkthroughImage && (
            <div className="rounded-2xl overflow-hidden border border-black/5 bg-blue-gray/40 shadow-sm mb-12 mx-auto max-w-[780px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={detail.walkthroughImage}
                alt="Design walkthrough"
                className="w-full h-auto block"
              />
            </div>
          )}
          {detail.designSections && (
            <div className="space-y-16">
              {(() => {
                let counter = 0;
                return detail.designSections.map((section, si) => (
                  <div
                    key={si}
                    className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
                  >
                    <div className="space-y-8">
                      {section.highlights.map((h) => {
                        counter += 1;
                        return (
                          <div key={h.title} className="grid grid-cols-[56px,1fr] gap-4">
                            <div className="font-display text-3xl md:text-4xl font-bold text-gold/50 leading-none">
                              {String(counter).padStart(2, "0")}
                            </div>
                            <div>
                              <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-2">
                                {h.title}
                              </h3>
                              <p className="text-text-secondary text-base leading-relaxed">
                                {h.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {section.image && (
                      <div className="lg:sticky lg:top-28">
                        <div className="rounded-2xl overflow-hidden border border-black/5 bg-blue-gray/40 shadow-sm">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={section.image}
                            alt={section.imageAlt ?? "Designed screen"}
                            className="w-full h-auto block"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ));
              })()}
            </div>
          )}
          {detail.designHighlights && (
            <div className="space-y-10">
              {detail.designHighlights.map((h, i) => (
                <div
                  key={i}
                  className="border-b border-black/5 last:border-b-0 pb-10 last:pb-0"
                >
                  <div className="grid sm:grid-cols-[80px,1fr] gap-6 sm:gap-10 items-start max-w-4xl mb-6">
                    <div className="font-display text-4xl md:text-5xl font-bold text-gold/50 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-2">
                        {h.title}
                      </h3>
                      <p className="text-text-secondary text-base leading-relaxed">
                        {h.description}
                      </p>
                    </div>
                  </div>
                  {h.image && (
                    <div className="space-y-6">
                      {(Array.isArray(h.image) ? h.image : [h.image]).map((src, idx) => (
                        <div
                          key={idx}
                          className="rounded-2xl overflow-hidden border border-black/5 bg-blue-gray/40 shadow-sm mx-auto max-w-[780px]"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={src}
                            alt={h.title}
                            className="w-full h-auto block"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </Section>
      )}

      {/* Takeaways / Reflection */}
      {detail.takeaways && (
        <Section eyebrow="Reflection" title="What I'd take from this">
          {detail.takeaways.intro && (
            <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
              {detail.takeaways.intro}
            </p>
          )}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {detail.takeaways.items.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-black/5 shadow-sm"
              >
                <div className="font-display text-3xl font-bold text-gold/60 leading-none mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold text-text-primary mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* See Next */}
      {nextProject && !nextProject.comingSoon && (
        <section className="max-w-[1200px] mx-auto px-6 md:px-16 py-16">
          <div className="border-t border-black/5 pt-12">
            <p className="text-text-secondary/60 text-xs tracking-widest uppercase mb-3">
              Next up
            </p>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group inline-flex items-baseline gap-3 text-gold hover:text-gold-light transition-colors"
            >
              <span className="font-display text-3xl md:text-5xl font-bold leading-tight">
                {nextProject.title}
              </span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

function JourneyCell({ value }: { value?: string | string[] }) {
  if (!value) return null;
  if (Array.isArray(value)) {
    return (
      <ul className="space-y-1.5">
        {value.map((item, i) => (
          <li key={i} className="flex gap-2.5">
            <span className="shrink-0 mt-2 w-1 h-1 rounded-full bg-text-secondary/60" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  return <>{value}</>;
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-16">
      <p className="text-sm text-text-secondary/80 mb-3">
        {eyebrow}
      </p>
      {title && (
        <h2 className="font-display text-3xl md:text-5xl font-medium text-text-primary leading-[1.1] tracking-[-0.02em] mb-8">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
