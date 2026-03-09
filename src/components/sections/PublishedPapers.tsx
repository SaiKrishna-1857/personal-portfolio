import React from "react";
import { FaFileAlt } from "react-icons/fa";
import Reveal from "../common/Reveal";

type Paper = {
  title: string;
  summary: string;
};

type PublishedPapersProps = {
  papers: Paper[];
};

function PublishedPapers({ papers }: PublishedPapersProps) {
  return (
    <section id="papers" className="scroll-mt-24 mt-16">
      <Reveal>
        <h2 className="section-title text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">Published Papers</h2>
      </Reveal>
      <div className="mt-6 grid gap-5">
        {papers.map((paper, index) => (
          <Reveal key={paper.title} delayMs={80 + index * 60}>
            <article className="rounded-2xl border border-slate-200 bg-white/85 p-6 dark:border-white/10 dark:bg-slate-900/50">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300">
                  <FaFileAlt />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{paper.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">{paper.summary}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default PublishedPapers;
