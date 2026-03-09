import React, { useState } from "react";
import About from "./components/sections/About";
import Architecture from "./components/sections/Architecture";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Highlights from "./components/sections/Highlights";
import PublishedPapers from "./components/sections/PublishedPapers";
import ProfessionalSummary from "./components/sections/ProfessionalSummary";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Navbar from "./components/layout/Navbar";
import { useTheme } from "./hooks/useTheme";
import { useActiveSection } from "./hooks/useActiveSection";
import {
  achievements,
  assets,
  certifications,
  education,
  experiences,
  metrics,
  navItems,
  professionalSummary,
  projects,
  skillCategories,
  systemDesignItems,
  publishedPapers,
} from "./data/portfolioData";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(navItems);
  const { isDark, toggleTheme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <div className="app-bg fixed inset-0 -z-10" />
      <div className="grid-overlay pointer-events-none fixed inset-0 -z-10 opacity-40 dark:opacity-30" />

      <Navbar
        navItems={navItems}
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        resumeFile={assets.resumeFile}
      />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-4 sm:px-6 lg:px-8 lg:pt-8">
        <Hero profileImage={assets.profileImage} />
        <ProfessionalSummary summary={professionalSummary} />
        <About metrics={metrics} />
        <Skills categories={skillCategories} />
        <Experience items={experiences} />
        <Projects projects={projects} />
        <Architecture items={systemDesignItems} />
        <PublishedPapers papers={publishedPapers} />
        <Education items={education} />
        <Highlights certifications={certifications} achievements={achievements} />
        <Contact resumeFile={assets.resumeFile} />
      </main>
      <footer className="border-t border-slate-200/70 px-4 py-6 text-center text-xs text-slate-500 dark:border-white/10 dark:text-slate-400 sm:px-6 lg:px-8">
        © {currentYear} Sai Krishna Sangeetha. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
