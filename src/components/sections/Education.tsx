import React from "react";
import Reveal from "../common/Reveal";
import { EducationItem } from "../../types/portfolio";

type EducationProps = {
  items: EducationItem[];
};

function Education({ items }: EducationProps) {
  return (
    <section id="education" className="scroll-mt-24 mt-16">
      <Reveal>
        <h2 className="section-title text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">Education</h2>
      </Reveal>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {items.map((education, index) => (
          <Reveal key={education.school} delayMs={index * 80}>
            <article className="rounded-2xl border border-slate-200 bg-white/85 p-6 dark:border-white/10 dark:bg-slate-900/50">
              <div className="flex items-center gap-3">
                <img
                  src={education.logo}
                  alt={education.school}
                  className="h-12 w-12 rounded-lg border border-slate-200 bg-white p-1 object-contain dark:border-white/10"
                />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{education.school}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{education.degree}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{education.location}</p>
                </div>
              </div>
              <p className="mt-4 text-sm font-medium text-cyan-700 dark:text-cyan-300">{education.date}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Education;
