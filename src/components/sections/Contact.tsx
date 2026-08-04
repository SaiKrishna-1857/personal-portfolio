import React from "react";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import Reveal from "../common/Reveal";

type ContactProps = {
  resumeFile: string;
};

function Contact({ resumeFile }: ContactProps) {
  return (
    <section
      id="contact"
      className="scroll-mt-24 mt-16 rounded-3xl border border-cyan-200 bg-gradient-to-r from-cyan-100 via-white to-blue-100 p-8 dark:border-white/10 dark:from-cyan-500/15 dark:via-slate-900 dark:to-blue-500/15"
    >
      <Reveal>
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">Let&apos;s Build Something Impactful</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
          Open to full-stack, platform engineering, and distributed systems opportunities.
          <br />
          I am
          especially interested in product engineering, cloud architecture, and AI-driven platform teams.
        </p>
      </Reveal>
      <Reveal delayMs={120} className="mt-6 flex flex-wrap gap-3">
        <a
          href="mailto:saikrishna.sangeetha@gmail.com"
          className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
        >
          <FaEnvelope /> saikrishna.sangeetha@gmail.com
        </a>
        <a
          href={resumeFile}
          download="Sai-Krishna-Sangeetha-Resume.pdf"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-white/20 dark:text-slate-100"
        >
          <FaDownload /> Download Resume
        </a>
        <a
          href="https://www.linkedin.com/in/saikrishna-sangeetha"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-white/20 dark:text-slate-100"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/SaiKrishna-1857"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-white/20 dark:text-slate-100"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="tel:+16892509414"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-white/20 dark:text-slate-100"
        >
          <FaPhoneAlt /> (689) 250-9414
        </a>
      </Reveal>
    </section>
  );
}

export default Contact;
