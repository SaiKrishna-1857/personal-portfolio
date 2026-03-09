import React from "react";
import {
  FaArrowRight,
  FaCloud,
  FaCodeBranch,
  FaCogs,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaRobot,
  FaServer,
  FaShieldAlt,
  FaStream,
} from "react-icons/fa";
import Reveal from "../common/Reveal";

type HeroProps = {
  profileImage: string;
};

const heroFloatingSkills = [
  { label: "Platform APIs", icon: FaServer, position: "hero-skill-a" },
  { label: "Streaming Data", icon: FaStream, position: "hero-skill-b" },
  { label: "CI/CD", icon: FaCodeBranch, position: "hero-skill-c" },
  { label: "System Design", icon: FaCogs, position: "hero-skill-d" },
  { label: "Cloud-Native", icon: FaCloud, position: "hero-skill-e" },
  { label: "AI Automation", icon: FaRobot, position: "hero-skill-f" },
  { label: "Microservices", icon: FaCodeBranch, position: "hero-skill-g" },
  { label: "Observability", icon: FaDatabase, position: "hero-skill-h" },
  { label: "RBAC", icon: FaShieldAlt, position: "hero-skill-i" },
  { label: "API Security", icon: FaEnvelope, position: "hero-skill-j" },
  { label: "GraphQL", icon: FaCodeBranch, position: "hero-skill-k" },
  { label: "Kubernetes", icon: FaCloud, position: "hero-skill-l" },
];

function Hero({ profileImage }: HeroProps) {
  return (
    <section
      id="top"
      className="hero-shell scroll-mt-24 grid gap-6 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-xl shadow-cyan-100/70 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:p-10 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-cyan-900/20"
    >
      <Reveal className="min-w-0">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-200">
          Senior Full-Stack Developer
        </div>
        <h1 className="mt-4 break-words text-[clamp(1.12rem,4.2vw,1.95rem)] font-bold leading-[1.15] text-slate-900 dark:text-white">
          Engineering scalable SaaS platforms across React architecture, distributed APIs, and AI-driven observability systems.
        </h1>
        <p className="mt-5 max-w-2xl break-words text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
          6+ years delivering production systems with React, TypeScript, Django/FastAPI, and AWS.
          I specialize in telemetry platforms, high-throughput pipelines, and resilient multi-tenant architecture.
        </p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-300 lg:hidden">
          <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-white/15 dark:bg-slate-900/70">React + TypeScript</span>
          <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-white/15 dark:bg-slate-900/70">Django / FastAPI</span>
          <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-white/15 dark:bg-slate-900/70">Kafka + OpenTelemetry</span>
          <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 dark:border-white/15 dark:bg-slate-900/70">AWS + Kubernetes</span>
        </div>
        <div className="mt-5 hidden gap-3 text-xs text-slate-600 dark:text-slate-300 lg:grid lg:grid-cols-3">
          <div className="float-card rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-slate-800/70">
            <p className="font-semibold text-slate-900 dark:text-white">React + TS</p>
            <p className="mt-1">High-performance UI architecture for data-heavy products.</p>
          </div>
          <div className="float-card-delay rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-slate-800/70">
            <p className="font-semibold text-slate-900 dark:text-white">Python Platform</p>
            <p className="mt-1">Django/FastAPI APIs, async workflows, and microservices.</p>
          </div>
          <div className="float-card rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-slate-800/70">
            <p className="font-semibold text-slate-900 dark:text-white">Observability</p>
            <p className="mt-1">OpenTelemetry, Kafka, Elastic stack, anomaly detection.</p>
          </div>
        </div>
        <div className="hero-skill-field hero-skill-field-left mt-6 hidden lg:block">
          {heroFloatingSkills.map(({ label, icon: Icon, position }, index) => (
            <span key={label} className={`hero-orbit ${position}`} style={{ animationDelay: `${0.14 * index}s` }}>
              <Icon className="text-[11px]" />
              {label}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal
        className="relative min-w-0 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-cyan-50 p-5 dark:border-white/10 dark:from-slate-900 dark:to-slate-800 sm:p-6"
        delayMs={120}
      >
        <div className="mx-auto h-36 w-36 overflow-hidden rounded-2xl ring-2 ring-cyan-400/40 sm:h-48 sm:w-48">
          <img src={profileImage} alt="Sai Krishna Sangeetha" className="h-full w-full object-cover object-top" />
        </div>
        <div className="float-card mt-5 w-full rounded-xl border border-slate-200 bg-white/70 p-4 text-left text-xs dark:border-white/10 dark:bg-slate-900/70">
          <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400">$ current_focus</p>
          <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">Senior Full-Stack Platform Engineering</p>
          <p className="mt-1 break-words text-slate-600 dark:text-slate-300">
            React + TypeScript + Django/FastAPI + OpenTelemetry + Kafka + Elasticsearch + AWS.
          </p>
        </div>
        <div className="mt-5 flex items-center justify-center gap-4 text-xl text-slate-600 dark:text-slate-200">
          <a
            href="https://www.linkedin.com/in/saikrishna-sangeetha"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cyan-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/SaiKrishna-1857"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cyan-500"
          >
            <FaGithub />
          </a>
          <a href="mailto:saikrishna.sangeetha@gmail.com" className="transition hover:text-cyan-500">
            <FaEnvelope />
          </a>
          <a href="tel:+16892509414" className="transition hover:text-cyan-500" aria-label="Call mobile">
            <FaPhoneAlt />
          </a>
        </div>
        <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">Tampa Bay, Florida</p>
        <p className="mt-1 text-center text-sm font-medium text-slate-600 dark:text-slate-300">(689) 250-9414</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center sm:flex-wrap">
          <a
            href="#projects"
            className="cta-pulse inline-flex items-center justify-center gap-2 rounded-full bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
          >
            View Projects <FaArrowRight />
          </a>
          <a
            href="mailto:saikrishna.sangeetha@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-100"
          >
            Email Me <FaEnvelope />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export default Hero;
