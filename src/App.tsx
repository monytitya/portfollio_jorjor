import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "./components/ui/LoadingScreen";
import { MouseBackground } from "./components/ui/MouseBackground";
import { Header } from "./components/Layout/Header";
import { Hero } from "./components/Sections/Hero";
import { About } from "./components/Sections/About";
import { Skills } from "./components/Sections/Skills";
import { Projects } from "./components/Sections/Projects";
import { Animation } from "./components/Sections/Animation";
import { Timeline } from "./components/Sections/Timeline";
import { Certifications } from "./components/Sections/Certifications";
import { GitHubStats } from "./components/Sections/GitHubStats";
import { Testimonials } from "./components/Sections/Testimonials";
import { Contact } from "./components/Sections/Contact";

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "timeline", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-20% 0px -60% 0px",
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-darkBg text-white antialiased font-sans select-none selection:bg-purpleAccent/30 selection:text-white" style={{ background: "#030014" }}>
      <MouseBackground />

      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      {!isLoading && (
        <div className="flex flex-col min-h-screen relative" style={{ zIndex: 1 }}>
          <Header activeSection={activeSection} />
          
          <main className="flex-1">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Animation />
            <Timeline />
            <Certifications />
            <GitHubStats />
            <Testimonials />
            <Contact />
          </main>

        </div>
      )}
    </div>
  );
};
export default App;
