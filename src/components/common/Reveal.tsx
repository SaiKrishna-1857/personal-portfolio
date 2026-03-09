import React, { PropsWithChildren, useEffect, useRef, useState } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  delayMs?: number;
}>;

function Reveal({ children, className = "", delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export default Reveal;
