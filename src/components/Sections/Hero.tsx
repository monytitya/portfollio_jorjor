import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, ArrowRight, Send, Code, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    setRotate({ x: -y / 15, y: x / 15 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purpleAccent/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-cyanAccent/20 rounded-full blur-[100px] animate-pulse-slow"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Hero Text */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cyanAccent animate-ping"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-cyanAccent">
              Available for Opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4"
          >
            Hi, I'm{" "}
            <span className="text-gradient-purple-cyan block sm:inline">
              Mony Titya
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl font-semibold text-gray-200 mb-6 font-display"
          >
            Software Engineer | Java Spring Boot Developer | Motion Designer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed"
          >
            Passionate about building scalable backend systems, developing enterprise applications, and creating engaging digital experiences through animation and motion graphics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => handleScrollTo("projects")}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purpleAccent to-cyanAccent text-white font-semibold flex items-center gap-2 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-purpleAccent/25"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="/resume.pdf"
              download="Mony_Titya_Resume.pdf"
              className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold flex items-center gap-2 transition-all"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>

            <button
              onClick={() => handleScrollTo("contact")}
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center transition-all"
              aria-label="Contact Me"
            >
              <Send className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Hero Image / Profile Graphics (Right Side) */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-8 lg:py-0">
          {/* Background Glow */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-purpleAccent/30 to-cyanAccent/30 rounded-full blur-[80px] opacity-70 animate-pulse-slow"></div>

          {/* Interactive Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transformStyle: "preserve-3d",
              transition: "transform 0.1s ease",
            }}
            className="relative w-[300px] h-[390px] sm:w-[360px] sm:h-[470px] rounded-3xl p-[1px] bg-gradient-to-tr from-purpleAccent via-pink-500 to-cyanAccent overflow-hidden shadow-2xl group cursor-pointer"
          >
            {/* Visual Glass Wrapper */}
            <div className="absolute inset-[1px] bg-[#090514]/85 rounded-[23px] overflow-hidden p-4 flex flex-col justify-between" style={{ transform: "translateZ(20px)" }}>
              {/* Profile Image Frame */}
              <div className="relative w-full h-[100%] rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="/titya.jpg"
                    alt="Mony Titya Portrait"
                    className="max-w-full max-h-full w-full h-full object-cover object-center mx-auto transition-all duration-700 group-hover:scale-125 group-hover:rotate-1 group-hover:brightness-110"
                    style={{ transformOrigin: "center center", objectPosition: "center center" }}
                  />
                </div>
                {/* Dark gradient overlay at the bottom of the image to blend with the card */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090514]/95 via-transparent to-transparent"></div>
              </div>

              {/* Bottom Details */}
              <div className="flex flex-col items-center justify-center text-center mt-2 leading-relaxed">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-wide font-display leading-tight">
                  Mao Tityamony
                </h3>
                <p className="text-[11px] sm:text-xs text-cyanAccent font-medium leading-relaxed">
                  Backend Developer
                </p>
                <div className="flex gap-2 mt-2 leading-relaxed">
                  <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-mono text-gray-300">Java</span>
                  <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-mono text-gray-300">Spring Boot</span>
                </div>
                
              </div>
            </div>

            {/* Glowing Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purpleAccent to-cyanAccent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
          </motion.div>

          {/* Floating Badge 1: Backend */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -top-2 -right-4 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2 shadow-lg"
            style={{ y: "-10px" }}
          >
            <div className="p-1 rounded bg-green-500/20 text-green-400">
              <Code className="w-3.5 h-3.5" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-gray-400 font-medium leading-none">Specialist</p>
              <p className="text-[11px] font-bold text-white">Java Backend</p>
            </div>
          </motion.div>

          {/* Floating Badge 2: Motion Graphics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-10 -left-6 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2 shadow-lg"
            style={{ y: "10px" }}
          >
            {/* <div className="p-1 rounded bg-purpleAccent/20 text-purpleAccent">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-gray-400 font-medium leading-none">Creative</p>
              <p className="text-[11px] font-bold text-white">Motion Designer</p>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
