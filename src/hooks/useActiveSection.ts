import { useEffect, useState } from "react";
import { NavItem } from "../types/portfolio";

export function useActiveSection(navItems: NavItem[]) {
  const [activeSection, setActiveSection] = useState(navItems[0]?.href ?? "#top");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (!visible.length) return;
        setActiveSection(`#${visible[0].target.id}`);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navItems]);

  return activeSection;
}
