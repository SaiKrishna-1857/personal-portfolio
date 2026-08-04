import React, { useState } from "react";
import Reveal from "../common/Reveal";
import { ExperienceItem } from "../../types/portfolio";

type ExperienceProps = {
  items: ExperienceItem[];
};

function Experience({ items }: ExperienceProps) {
  const [openIndex, setOpenIndex] = useState(0);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpanded = (key: string) => {
    setExpandedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="experience" className="scroll-mt-24 mt-16">
      <Reveal>
        <h2 className="section-title text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">Experience</h2>
      </Reveal>

      <div className="mt-6 space-y-3 md:hidden">
        {items.map((experience, index) => {
          const experienceKey = `${experience.company}-${experience.duration}`;
          const isOpen = index === openIndex;
          const isExpanded = Boolean(expandedItems[experienceKey]);
          const primaryBullets = experience.bullets.slice(0, 5);
          const extraBullets = experience.bullets.slice(5);
          const hiddenCount = extraBullets.length;

          return (
            <Reveal key={experienceKey} delayMs={index * 70}>
              <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white/90 dark:border-white/10 dark:bg-slate-900/60">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-start gap-3 p-4 text-left"
                >
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="h-10 w-10 rounded-lg border border-slate-200 bg-white object-contain p-1.5 dark:border-white/10"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{experience.title}</h3>
                    <p className="mt-0.5 text-xs text-cyan-700 dark:text-cyan-300">{experience.company}</p>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">{experience.duration}</p>
                  </div>
                  <span className="mt-1 text-xs text-slate-500 dark:text-slate-400">{isOpen ? "Hide" : "Expand"}</span>
                </button>

                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden px-4 pb-4">
                    <p className="mb-2 text-xs text-slate-500 dark:text-slate-400">{experience.location}</p>
                    <ul className="space-y-2 text-xs leading-6 text-slate-700 dark:text-slate-300">
                      {primaryBullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    {hiddenCount > 0 && (
                      <div
                        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                          isExpanded ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <ul className="space-y-2 overflow-hidden text-xs leading-6 text-slate-700 dark:text-slate-300">
                          {extraBullets.map((bullet) => (
                            <li key={bullet} className="flex gap-2">
                              <span className="mt-2 h-1 w-1 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {hiddenCount > 0 && (
                      <button
                        type="button"
                        onClick={() => toggleExpanded(experienceKey)}
                        className="mt-3 text-xs font-semibold text-cyan-700 hover:text-cyan-600 dark:text-cyan-300 dark:hover:text-cyan-200"
                      >
                        {isExpanded ? "Show less" : `Show more`}
                      </button>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <div className="relative mt-6 hidden space-y-5 before:absolute before:bottom-2 before:left-6 before:top-2 before:w-px before:bg-cyan-300/60 dark:before:bg-cyan-700/60 md:block md:before:left-7">
        {items.map((experience, index) => {
          const experienceKey = `${experience.company}-${experience.duration}`;
          const isExpanded = Boolean(expandedItems[experienceKey]);
          const primaryBullets = experience.bullets.slice(0, 5);
          const extraBullets = experience.bullets.slice(5);
          const hiddenCount = extraBullets.length;

          return (
          <Reveal key={experienceKey} delayMs={index * 80}>
            <article className="relative rounded-2xl border border-slate-200 bg-white/90 p-5 pl-12 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-cyan-500/40 sm:p-7 sm:pl-14">
              <span className="absolute left-[20px] top-8 h-3 w-3 rounded-full border-2 border-cyan-600 bg-white dark:border-cyan-300 dark:bg-slate-950 sm:left-[23px]" />
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="h-12 w-12 rounded-lg border border-slate-200 bg-white object-contain p-2 dark:border-white/10"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{experience.title}</h3>
                    <p className="text-sm text-cyan-700 dark:text-cyan-300">{experience.company}</p>
                  </div>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  <p>{experience.duration}</p>
                  <p>{experience.location}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {primaryBullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              {hiddenCount > 0 && (
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <ul className="space-y-2 overflow-hidden text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {extraBullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {hiddenCount > 0 && (
                <button
                  type="button"
                  onClick={() => toggleExpanded(experienceKey)}
                  className="mt-3 text-sm font-semibold text-cyan-700 hover:text-cyan-600 dark:text-cyan-300 dark:hover:text-cyan-200"
                >
                  {isExpanded ? "Show less" : `Show more`}
                </button>
              )}
            </article>
          </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
