import React from "react";
import Reveal from "../common/Reveal";
import { SkillCategory } from "../../types/portfolio";

type SkillsProps = {
  categories: SkillCategory[];
};

function Skills({ categories }: SkillsProps) {
  return (
    <section id="skills" className="scroll-mt-24 mt-16">
      <Reveal>
        <h2 className="section-title text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">Core Skills</h2>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
          Highlighting core strengths most relevant to senior full-stack/platform roles. Full skill inventory is in the resume.
        </p>
      </Reveal>
      <div className="mt-6 grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {categories.map((category, index) => (
          <Reveal key={category.title} delayMs={index * 60} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/85 p-5 transition hover:-translate-y-1 hover:border-cyan-300 dark:border-white/10 dark:bg-slate-900/50 dark:hover:border-cyan-500/40">
              <div className="mb-3 h-1 w-14 rounded-full bg-cyan-500/70 dark:bg-cyan-400/80" />
              <h3 className="text-base font-semibold text-cyan-700 dark:text-cyan-300">{category.title}</h3>
              <ul className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs text-slate-700 dark:border-white/15 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;
