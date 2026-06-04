import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProjectBySlug, getNextProject } from "../../data/projects";
import Header from "../../components/Header";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import GapTabs from "./GapTabs";

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
      <Section eyebrow="Problem" title="What was wrong">
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
      </Section>

      {/* Discovering the Gaps */}
      {detail.gaps && (
        <Section eyebrow="Research" title="Who it affected">
          <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
            {detail.gaps.description}
          </p>
          <GapTabs tabs={detail.gaps.tabs} />
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
            <div className="min-w-[800px] px-6 md:px-0">
              <div className="grid grid-cols-[140px,1fr,1fr,1fr] gap-px bg-black/5 rounded-xl overflow-hidden border border-black/5">
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
                    <div className="bg-blue-gray px-5 py-5 text-sm font-semibold text-text-primary">
                      {row.reference}
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

      {/* User Journey Mapping */}
      {detail.journeyMap && (
        <Section
          eyebrow="Journey"
          title="User journey"
        >
          <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
            I mapped the journey from login to publishing, with pain points and
            emotion at each step.
          </p>
          <div className="overflow-x-auto -mx-6 md:mx-0">
            <div className="min-w-[900px] px-6 md:px-0">
              <div className="grid grid-cols-[160px,1fr,1fr,140px,1fr] gap-px bg-black/5 rounded-xl overflow-hidden border border-black/5">
                {[
                  "Stage",
                  "Goals",
                  "Pain Points",
                  "Emotion",
                  "Opportunities",
                ].map((h) => (
                  <div
                    key={h}
                    className="bg-blue-gray/60 px-5 py-3 text-xs tracking-widest uppercase text-gold font-semibold"
                  >
                    {h}
                  </div>
                ))}
                {detail.journeyMap.map((row, i) => (
                  <div key={i} className="contents">
                    <div className="bg-blue-gray px-5 py-5 text-sm font-semibold text-text-primary">
                      {row.stage}
                    </div>
                    <div className="bg-white px-5 py-5 text-sm text-text-secondary leading-relaxed">
                      {row.goals}
                    </div>
                    <div className="bg-white px-5 py-5 text-sm text-text-secondary leading-relaxed">
                      {row.painPoints}
                    </div>
                    <div className="bg-white px-5 py-5 text-sm text-gold/90 italic">
                      {row.emotion}
                    </div>
                    <div className="bg-white px-5 py-5 text-sm text-text-secondary leading-relaxed">
                      {row.opportunities}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* Vision */}
      {detail.vision && (
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

      {/* Conversation flow (chatbot only) */}
      {detail.flowImage && (
        <Section eyebrow="Flow" title="The conversation architecture">
          {detail.flowImageCaption && (
            <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
              {detail.flowImageCaption}
            </p>
          )}
          <div className="rounded-2xl overflow-hidden border border-black/5 bg-blue-gray/40 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={detail.flowImage}
              alt="Conversation flow"
              className="w-full h-auto block"
            />
          </div>
        </Section>
      )}

      {/* Designing the Experience */}
      {detail.designHighlights && (
        <Section
          eyebrow="Design"
          title="What I designed"
        >
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
                  <div className="rounded-2xl overflow-hidden border border-black/5 bg-blue-gray/40 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={h.image}
                      alt={h.title}
                      className="w-full h-auto block"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Walkthrough composite image */}
      {detail.walkthroughImage && (
        <Section eyebrow="Walkthrough" title="Selected screens">
          {detail.walkthroughCaption && (
            <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
              {detail.walkthroughCaption}
            </p>
          )}
          <div className="rounded-2xl overflow-hidden border border-black/5 bg-blue-gray/40 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={detail.walkthroughImage}
              alt="Design walkthrough"
              className="w-full h-auto block"
            />
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

      <Contact />
      <Footer />
    </main>
  );
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
