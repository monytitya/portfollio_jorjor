import React from "react";
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from "react-icons/fa";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#030014] border-t border-white/5 py-12 relative overflow-hidden">

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left branding */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purpleAccent to-cyanAccent flex items-center justify-center shadow-lg shadow-purpleAccent/25">
            <span className="text-sm font-black text-white">MT</span>
          </div>
          <div className="text-left">
            <span className="font-display font-bold text-white text-base block leading-none">Mony Titya</span>
            <span className="text-[10px] text-gray-500 font-mono mt-1 block">Java Engineer • Motion Designer</span>
          </div>
        </div>

        {/* Center navigation shortcuts */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 font-medium">
          {["hero", "about", "skills", "projects", "timeline", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => handleScrollTo(section)}
              className="hover:text-white capitalize transition-colors"
            >
              {section === "hero" ? "Home" : section}
            </button>
          ))}
        </div>

        {/* Right socials */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/monytitya"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all hover:scale-105"
            aria-label="GitHub Account"
          >
            <FaGithub className="w-4.5 h-4.5" />
          </a>
          <a
            href="https://linkedin.com/in/monytitya"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all hover:scale-105"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-4.5 h-4.5" />
          </a>
          <a
            href="https://t.me/monytitya"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all hover:scale-105"
            aria-label="Telegram"
          >
            <FaTelegram className="w-4.5 h-4.5" />
          </a>
          <a
            href="mailto:monytitya.dev@gmail.com"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all hover:scale-105"
            aria-label="Email"
          >
            <FaEnvelope className="w-4.5 h-4.5" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mt-8 border-t border-white/5 pt-6 text-[10px] text-gray-500 font-mono">
        <p>&copy; {currentYear} Mony Titya. All rights reserved. Crafted with React, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  );
};
export default Footer;
