const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "I get a problem statement. Begin by clearly defining the problem that the product is intended to solve and the goals of the design. This includes understanding the user needs, business goals, and the environmental and social impact of the product.",
  },
  {
    number: "02",
    title: "Research & Analysis",
    description:
      "Conduct research and analysis on the current market, users, and existing solutions. I analyse the competitor landscape and try to find their strengths and weakness, eventually outplay them.",
  },
  {
    number: "03",
    title: "Ideation",
    description:
      "Generate a wide range of ideas and solutions through brainstorming sessions, sketching, and mind mapping. I explore different approaches and evaluate them against the defined problem and user needs.",
  },
  {
    number: "04",
    title: "Sitemap & Wireframe",
    description:
      "Based on ideas and feature lists I have worked on, I create a site map (Information Architecture) and then start to work on wireframes.",
  },
  {
    number: "05",
    title: "Visual Design",
    description:
      "After discussing and finalising the wireframes I will be working on the final visual designs and the do the prototypes.",
  },
];

export default function DesignProcess() {
  return (
    <section id="process" className="bg-dark py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        {/* Section Header */}
        <div className="mb-16">
          <div className="w-12 h-1 bg-gold mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-gold italic">
            My Design Process
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col md:flex-row gap-6 md:gap-16 items-start"
            >
              {/* Number + Title */}
              <div className="flex items-center gap-4 md:w-[320px] shrink-0">
                <span className="text-2xl md:text-3xl font-bold text-gold/60 font-mono">
                  {step.number}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-text-secondary text-base leading-relaxed flex-1">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
