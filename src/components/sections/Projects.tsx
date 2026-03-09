import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "../common/Reveal";
import { ProjectItem } from "../../types/portfolio";

type ProjectsProps = {
  projects: ProjectItem[];
};

function Projects({ projects }: ProjectsProps) {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="scroll-mt-24 mt-16">
      <Reveal>
        <h2 className="section-title text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">Selected Projects</h2>
      </Reveal>
      {featured && (
        <Reveal delayMs={50}>
          <article className="project-card mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white/90 dark:border-white/10 dark:bg-slate-900/60">
            <div className="p-6 lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
                Featured Build
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{featured.title}</h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                {featured.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-slate-300 bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-white/10 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              {featured.highlights && (
                <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  {featured.highlights.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-500 dark:text-cyan-300"
              >
                View Case Study <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </article>
        </Reveal>
      )}

      <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4">
        {rest.map((project, index) => (
          <Reveal key={project.title} delayMs={index * 70}>
            <article className="project-card group overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-sm dark:border-white/10 dark:bg-slate-900/50">
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-slate-300 bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-white/10 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                {project.highlights && (
                  <ul className="mt-4 space-y-2 text-xs leading-6 text-slate-700 dark:text-slate-300">
                    {project.highlights.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-500 dark:text-cyan-300"
                >
                  View Project <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;
