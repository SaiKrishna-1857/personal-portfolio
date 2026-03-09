import React from "react";
import Reveal from "../common/Reveal";

type HighlightsProps = {
  certifications: string[];
  achievements: string[];
};

function Highlights({ certifications, achievements }: HighlightsProps) {
  return (
    <section className="mt-16 grid auto-rows-fr gap-5 md:grid-cols-2">
      <Reveal className="h-full">
        <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/85 p-6 dark:border-white/10 dark:bg-slate-900/50">
          <h2 className="section-title text-2xl font-bold text-slate-900 dark:text-white">Certifications</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {certifications.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
      <Reveal delayMs={100} className="h-full">
        <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/85 p-6 dark:border-white/10 dark:bg-slate-900/50">
          <h2 className="section-title text-2xl font-bold text-slate-900 dark:text-white">Awards & Achievements</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {achievements.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
    </section>
  );
}

export default Highlights;
