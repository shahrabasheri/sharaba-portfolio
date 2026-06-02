export default function About() {
  const skills = [
    "User Research",
    "Heuristic Evaluation",
    "Journey Mapping",
    "Information Architecture",
    "Visual Design",
    "Prototyping",
  ];

  return (
    <section id="about" className="bg-blue-gray py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 md:px-16">
        {/* Headline */}
        <h2 className="font-display text-3xl md:text-5xl font-medium text-text-primary mb-12 leading-[1.1] tracking-[-0.02em] max-w-3xl">
          I designed{" "}
          <span className="font-serif italic font-normal text-gold-dark">
            buildings
          </span>{" "}
          before I designed{" "}
          <span className="font-serif italic font-normal text-gold-dark">
            apps
          </span>
          .
        </h2>

        <div className="grid md:grid-cols-[1fr,280px] gap-10 md:gap-16 items-start">
          {/* Bio */}
          <div className="space-y-4 text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl">
            <p>
              Before UX, I worked as an architect. Designing how people move
              through a space is not that different from designing how people
              move through an app. The same questions matter: where do they
              go first, what do they need to find, what gets in the way.
            </p>
            <p>
              <span className="text-text-primary font-semibold">Three years in,</span>{" "}
              I&apos;ve worked on enterprise B2B platforms, a telecom AI
              chatbot, and corporate websites. I like the part of a project
              where things are still unclear and there&apos;s research and
              stakeholder input to figure out before any pixels go down.
            </p>
          </div>

          {/* Side meta */}
          <div className="space-y-6 text-sm">
            <div>
              <p className="text-text-secondary/80 mb-2">Languages</p>
              <p className="text-text-primary">
                English · Arabic (read &amp; write)
              </p>
            </div>
            <div>
              <p className="text-text-secondary/80 mb-2">Tools</p>
              <p className="text-text-primary leading-relaxed">
                Figma · FigJam · Adobe XD · Photoshop · Illustrator
              </p>
            </div>
          </div>
        </div>

        {/* Skill chips */}
        <div className="flex flex-wrap gap-2 mt-10">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-1.5 text-sm border border-tag-border text-text-primary/90 rounded-full bg-white/60"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
