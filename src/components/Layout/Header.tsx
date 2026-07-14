import React, { useState, useEffect } from "react";
import { Menu, X, Code, Sparkles, Terminal, Briefcase, Award, Send } from "lucide-react";

interface HeaderProps {
  activeSection: string;
}

const navItems = [
  { id: "hero", label: "Home", icon: Terminal },
  { id: "about", label: "About", icon: Code },
  { id: "skills", label: "Skills", icon: Sparkles },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "timeline", label: "Experience", icon: Award },
  { id: "contact", label: "Contact", icon: Send },
];

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "py-4 bg-[#030014]/75 backdrop-blur-md border-b border-white/5"
        : "py-6 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-white hover:opacity-85 transition-opacity"
        >
          <div className="relative w-8 h-10 rounded-lg bg-gradient-to-tr from-purpleAccent to-cyanAccent flex items-center justify-center shadow-lg shadow-purpleAccent/25">
            <span className="text-lg font-black"></span>
          </div>
          <span>Mao Tityamony</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${isActive
                  ? "text-white bg-gradient-to-r from-purpleAccent/20 to-cyanAccent/20 border border-purpleAccent/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-cyanAccent animate-pulse" : "text-gray-400"}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#030014]/95 backdrop-blur-lg border-b border-white/5 py-4 px-6 flex flex-col gap-3 animate-fadeIn">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive
                  ? "text-white bg-gradient-to-r from-purpleAccent/20 to-cyanAccent/20 border border-purpleAccent/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                <Icon className="w-5 h-5 text-purpleAccent" />
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
export default Header;
