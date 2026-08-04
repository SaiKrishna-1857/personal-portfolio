import React from "react";
import Reveal from "../common/Reveal";

type ProfessionalSummaryProps = {
  summary: string[];
};

function ProfessionalSummary({ summary }: ProfessionalSummaryProps) {
  return (
    <section id="summary" className="scroll-mt-24 mt-16">
      <Reveal>
        <h2 className="section-title text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">Professional Summary</h2>
      </Reveal>
      <div className="mt-6 grid auto-rows-fr gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal className="h-full">
          <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/90 p-5 dark:border-white/10 dark:bg-slate-900/55">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
              Full-Stack Positioning
            </p>
            {summary.map((item, index) => (
              <p key={item} className={`text-sm leading-7 text-slate-700 dark:text-slate-300 ${index === 0 ? "mt-3" : "mt-2"}`}>
                {item}
              </p>
            ))}
          </article>
        </Reveal>

        <Reveal delayMs={80} className="h-full">
          <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-gradient-to-b from-cyan-50 to-white p-5 dark:border-white/10 dark:from-cyan-500/10 dark:to-slate-900/60">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
              Role Fit
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                <span>Full-Stack Developer</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                <span>Product Engineering / Platform Engineering</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                <span>Distributed Systems + Cloud-Native Teams</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                <span>Technical Leadership + Architecture Ownership</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                <span>Data-Intensive SaaS and Observability Products</span>
              </li>
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export default ProfessionalSummary;
