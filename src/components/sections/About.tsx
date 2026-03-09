import React from "react";
import Reveal from "../common/Reveal";
import { MetricItem } from "../../types/portfolio";

type AboutProps = {
  metrics: MetricItem[];
};

function About({ metrics }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-24 mt-16">
      <Reveal>
        <h2 className="section-title text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">About</h2>
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
          My full-stack approach is product-first and system-oriented: build interfaces users trust, APIs that
          scale, and cloud infrastructure that stays reliable under growth.
        </p>
      </Reveal>

      <div className="mt-6 grid auto-rows-fr gap-4 sm:grid-cols-3">
        {metrics.map((metric, index) => (
          <Reveal key={metric.label} delayMs={index * 80} className="h-full">
            <article className={`flex h-full flex-col rounded-2xl border border-slate-200 bg-white/85 p-5 dark:border-white/10 dark:bg-slate-900/50 ${index % 2 === 0 ? "float-card" : "float-card-delay"}`}>
              <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-300">{metric.value}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{metric.label}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Reveal>
          <article className="h-full rounded-2xl border border-slate-200 bg-white/90 p-5 dark:border-white/10 dark:bg-slate-900/55">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-700 dark:text-cyan-300">Frontend Ownership</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                <span>React + TypeScript architecture for complex real-time SaaS workflows.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                <span>State management and rendering performance optimization for high-scale UI systems.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                <span>Design systems and component-level consistency for maintainable product velocity.</span>
              </li>
            </ul>
          </article>
        </Reveal>

        <Reveal delayMs={90}>
          <article className="h-full rounded-2xl border border-slate-200 bg-white/90 p-5 dark:border-white/10 dark:bg-slate-900/55">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-700 dark:text-cyan-300">Backend & Platform</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                <span>Python (Django/FastAPI) APIs, async processing, and distributed microservice workflows.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                <span>Event-driven systems with Kafka, Redis/Celery, and fault-tolerant ingestion pipelines.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                <span>Secure multi-tenant access control using OAuth2, JWT, SAML, and RBAC patterns.</span>
              </li>
            </ul>
          </article>
        </Reveal>

        <Reveal delayMs={180}>
          <article className="h-full rounded-2xl border border-slate-200 bg-gradient-to-b from-cyan-50 to-white p-5 dark:border-white/10 dark:from-cyan-500/10 dark:to-slate-900/60">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-700 dark:text-cyan-300">Cloud & Delivery</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                <span>AWS-first architecture using Lambda, API Gateway, EC2, S3, and CloudFront.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                <span>CI/CD ownership with GitHub Actions/CodePipeline, Docker, and Kubernetes orchestration.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                <span>Operational excellence through observability, performance tuning, and production reliability.</span>
              </li>
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
