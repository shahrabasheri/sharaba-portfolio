"use client";

import { useState } from "react";
import type { ProjectGapTab } from "../../data/projects";

export default function GapTabs({ tabs }: { tabs: ProjectGapTab[] }) {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <div>
      {/* Tab headers */}
      <div className="flex flex-wrap gap-1 mb-8 border-b border-black/5">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            type="button"
            onClick={() => setActive(i)}
            className={`px-5 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${
              i === active
                ? "border-gold text-gold"
                : "border-transparent text-text-secondary hover:text-text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Pain points */}
      <div className="grid sm:grid-cols-[180px,1fr] gap-6 sm:gap-10 items-start">
        <div className="bg-white shadow-sm border border-black/5 px-6 py-6 rounded-xl">
          <p className="text-text-secondary/60 text-xs tracking-widest uppercase mb-1">
            Showing
          </p>
          <h4 className="text-text-primary font-semibold text-lg leading-tight">
            {current.label}
          </h4>
          <p className="text-text-secondary text-xs mt-2">
            {current.painPoints.length} pain points
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {current.painPoints.map((point) => (
            <span
              key={point}
              className="px-4 py-2.5 bg-blue-gray border border-black/5 text-text-primary/90 text-sm rounded-lg hover:border-gold/30 transition-colors"
            >
              {point}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
