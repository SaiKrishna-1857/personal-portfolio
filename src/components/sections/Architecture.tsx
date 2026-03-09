import React from "react";
import { FaBrain, FaBroadcastTower, FaCloud, FaCodeBranch, FaDatabase, FaLayerGroup, FaLock, FaNetworkWired, FaProjectDiagram, FaServer, FaShieldAlt, FaStream } from "react-icons/fa";
import Reveal from "../common/Reveal";

type ArchitectureProps = {
  items: string[];
};

const architectureIcons = [FaBroadcastTower, FaNetworkWired, FaBrain, FaLayerGroup, FaCloud];
const leadershipSkills = [
  { label: "Kafka", icon: FaBroadcastTower },
  { label: "CI/CD", icon: FaCodeBranch },
  { label: "PostgreSQL", icon: FaDatabase },
  { label: "Event-Driven", icon: FaProjectDiagram },
  { label: "Elastic Stack", icon: FaNetworkWired },
  { label: "API Gateway", icon: FaNetworkWired },
  { label: "Kubernetes", icon: FaCloud },
  { label: "Microservices", icon: FaServer },
  { label: "Streaming", icon: FaStream },
  { label: "OpenTelemetry", icon: FaBrain },
  { label: "FastAPI", icon: FaServer },
  { label: "Zero Trust", icon: FaLock },
  { label: "RBAC", icon: FaShieldAlt },
];
const leadershipOrbitSkills = [
  { label: "Event-Driven", icon: FaProjectDiagram, position: "arch-orbit-1" },
  { label: "Streaming", icon: FaStream, position: "arch-orbit-2" },
  { label: "Kafka", icon: FaBroadcastTower, position: "arch-orbit-3" },
  { label: "Microservices", icon: FaServer, position: "arch-orbit-4" },
  { label: "OpenTelemetry", icon: FaBrain, position: "arch-orbit-5" },
  { label: "Zero Trust", icon: FaLock, position: "arch-orbit-6" },
  { label: "API Gateway", icon: FaNetworkWired, position: "arch-orbit-7" },
  { label: "Kubernetes", icon: FaCloud, position: "arch-orbit-8" },
  { label: "CI/CD", icon: FaCodeBranch, position: "arch-orbit-9" },
  { label: "RBAC", icon: FaShieldAlt, position: "arch-orbit-10" },
];
const architectureContext = [
  "Designing ingestion and processing layers with replay safety, backpressure control, and low-latency indexing.",
  "Building asynchronous services that decouple critical workflows and scale independently under high load.",
  "Applying ML-assisted detection and semantic analysis for proactive alerting and operational decision support.",
  "Defining tenant-aware boundaries, secure access controls, and extensible module architecture for SaaS products.",
  "Implementing end-to-end telemetry visibility across logs, metrics, traces, and incident response pipelines.",
];

function Architecture({ items }: ArchitectureProps) {
  return (
    <section id="architecture" className="scroll-mt-24 mt-16">
      <Reveal>
        <h2 className="section-title text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">System Design & Architecture</h2>
      </Reveal>
      <Reveal delayMs={80}>
        <div className="mt-6 rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-white/10 dark:bg-slate-900/50 sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 dark:border-white/10 dark:bg-slate-900/60 sm:p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">Execution Blueprint</h3>
              </div>
              <div className="mt-4 space-y-3">
                {items.map((item, index) => {
                  const Icon = architectureIcons[index % architectureIcons.length];

                  return (
                    <div
                      key={item}
                      className="group rounded-xl border border-slate-200 bg-white/90 p-4 transition hover:-translate-y-0.5 hover:border-cyan-300/80 hover:shadow-md hover:shadow-cyan-100 dark:border-white/10 dark:bg-slate-900/70 dark:hover:shadow-cyan-900/20"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 transition group-hover:scale-105 dark:bg-cyan-500/15 dark:text-cyan-300">
                          <Icon className="text-sm" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">{item}</p>
                          <p className="mt-1 text-xs leading-6 text-slate-600 dark:text-slate-300">
                            {architectureContext[index] ?? "Driving architecture decisions that improve scalability, reliability, and delivery speed."}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>

            <aside className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-b from-cyan-50 to-white p-5 dark:border-white/10 dark:from-slate-900 dark:to-slate-800">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">Leadership Lens</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                I architect full-stack systems with production ownership across frontend experience, platform APIs, and cloud reliability.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                  <span>Translate product requirements into scalable technical architecture.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                  <span>Balance speed, reliability, security, and maintainability in delivery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                  <span>Lead implementation quality through architecture reviews and standards.</span>
                </li>
              </ul>
              <div className="arch-orbit-field mt-6 hidden md:block">
                {leadershipOrbitSkills.map(({ label, icon: Icon, position }, index) => (
                  <span
                    key={label}
                    className={`hero-orbit arch-orbit ${position}`}
                    style={{ animationDelay: `${0.14 * index}s` }}
                  >
                    <Icon className="text-[11px]" />
                    {label}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-300 md:hidden">
                {leadershipSkills.map(({ label, icon: Icon }, index) => (
                  <span
                    key={`${label}-${index}`}
                    className="inline-flex items-center justify-center gap-1 rounded-full border border-slate-300 bg-white/90 px-3 py-1 font-semibold dark:border-white/15 dark:bg-slate-900/70"
                  >
                    <Icon className="text-[11px]" />
                    {label}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Architecture;
