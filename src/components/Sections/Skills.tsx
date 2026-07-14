import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaGithub, FaDocker, FaDatabase, FaCode,
  FaPython, FaPhp, FaGitSquare
} from "react-icons/fa";
import {
  SiSpringboot,
  SiTypescript, SiMysql, SiPostgresql,
  SiPostman, SiApachemaven,
  SiFastapi, SiSwagger, SiGithubactions
} from "react-icons/si";

// Custom brand icons for Adobe software

const skillCategories = [
  {
    title: "Front-End",
    icon: FaReact,
    items: [
      { name: "HTML5", icon: FaHtml5, color: "text-[#E34F26]", level: 95 },
      { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]", level: 90 },
      { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]", level: 60 },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]", level: 50 },
      { name: "React", icon: FaReact, color: "text-[#61DAFB]", level: 80 },
    ]
  },
  {
    title: "Back-End",
    icon: FaDatabase,
    items: [
      { name: "Java", icon: FaJava, color: "text-[#007396]", level: 95 },
      { name: "Spring Boot", icon: SiSpringboot, color: "text-[#6DB33F]", level: 90 },
      { name: "Python", icon: FaPython, color: "text-[#3776AB]", level: 80 },
      { name: "FastAPI", icon: SiFastapi, color: "text-[#009688]", level: 80 },
      { name: "PHP", icon: FaPhp, color: "text-[#777BB4]", level: 70 },
    ]
  },

  {
    title: "Tools",
    icon: FaCode,
    items: [
      { name: "Git", icon: FaGitSquare, color: "text-[#F05032]", level: 95 },
      { name: "GitHub", icon: FaGithub, color: "text-white", level: 95 },
      { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]", level: 90 },
      { name: "Maven", icon: SiApachemaven, color: "text-[#C71A22]", level: 85 },
      { name: "Swagger", icon: SiSwagger, color: "text-[#85CBF2]", level: 95 },
      { name: "Docker", icon: FaDocker, color: "text-[#2496ED]", level: 95 },
      { name: "CI/CD", icon: SiGithubactions, color: "text-[#2088FF]", level: 75 },
    ]
  },
  {
    title: "Database",
    icon: FaDatabase,
    items: [
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]", level: 95 },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]", level: 95 },
      { name: "Oracle", icon: FaDatabase, color: "text-[#F80000]", level: 90 },
    ]
  }
];

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(skillCategories[0]);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#030014]">
      {/* 3D Perspective Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(168,85,247,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(34,211,238,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: 'perspective(1000px) rotateX(60deg) scale(2.5) translateY(-20%)',
            transformOrigin: 'top center',
            maskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)'
          }}
        />
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-120 h-120 bg-purpleAccent/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-120 h-120 bg-cyanAccent/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
            Technical Proficiency
          </h2>
          <div className="h-1 w-28 bg-[#00f0ff] rounded-full shadow-[0_0_8px_rgba(0,240,255,0.6)]"></div>
        </div>

        {/* Interactive Grid Layout: Category Selection on Left, Skills on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Side: 2-column Category Buttons (overlaps top-left corner with icon box) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
            {skillCategories.map((category, idx) => {
              const CategoryIcon = category.icon;
              const isSelected = selectedCategory.title === category.title;
              return (
                <motion.button
                  key={idx}
                  onClick={() => setSelectedCategory(category)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group relative text-left cursor-pointer w-full focus:outline-none"
                >
                  {/* Overlapping top-left icon badge box */}
                  <div className={`absolute -top-3 -left-3 w-10 h-10 flex items-center justify-center rounded-lg bg-[#030014] border-2 transition-all duration-300 z-20 ${isSelected
                      ? "border-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.5)] bg-[#0d0a21]"
                      : "border-[#00f0ff]/30 bg-[#0c0a21] group-hover:border-[#00f0ff]/80"
                    }`}>
                    <CategoryIcon className={`w-5 h-5 transition-all duration-300 ${isSelected ? "text-[#00f0ff] scale-110" : "text-gray-400 group-hover:text-gray-200"
                      }`} />
                  </div>

                  {/* Button Card Container */}
                  <div className={`relative px-4 py-8 rounded-xl border transition-all duration-300 shadow-md ${isSelected
                      ? "bg-[#1d4ed8] border-[#00f0ff] shadow-[#00f0ff]/20 translate-x-1"
                      : "bg-[#0d0a21]/70 border-[#00f0ff]/30 hover:border-[#00f0ff]/80 hover:bg-[#0e0c25]/90 hover:translate-x-0.5"
                    }`}>
                    <h3 className="text-center font-bold text-white text-base tracking-wide select-none">
                      {category.title}
                    </h3>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right Side: Selected Category Skills List */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {/* Glow behind the card */}
                <div className="absolute inset-0 bg-[#00f0ff]/5 blur-2xl rounded-2xl pointer-events-none" />

                {/* Card Container styled like the user request */}
                <div className="relative bg-[#0d0a21]/75 backdrop-blur-lg border border-[#00f0ff] rounded-xl overflow-hidden shadow-2xl shadow-[#000]/70">

                  {/* Card Header matching screenshot style */}
                  <div className="px-6 py-5 border-b border-[#00f0ff]/40 flex items-center justify-between bg-[#0e0c25]/95">
                    <span className="text-lg font-bold text-white tracking-wide">
                      {selectedCategory.title}
                    </span>
                    <selectedCategory.icon className="w-5 h-5 text-[#00f0ff]" />
                  </div>

                  {/* Skill Items List */}
                  <div className="p-8 space-y-6">
                    {selectedCategory.items.map((skill, skillIdx) => {
                      return (
                        <div key={skillIdx} className="space-y-2.5">
                          {/* Label & Percentage */}
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2.5">
                              <skill.icon className={`w-4 h-4 ${skill.color} opacity-90`} />
                              <span className="text-sm font-semibold text-gray-200">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-sm font-bold text-white">
                              {skill.level}%
                            </span>
                          </div>

                          {/* Progress Bar (rate of percent) */}
                          <div className="h-2 w-full bg-[#1c1d2e] rounded-full overflow-hidden border border-white/5">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{
                                duration: 0.8,
                                delay: skillIdx * 0.05,
                                ease: "easeOut"
                              }}
                              className="h-full bg-[#00f0ff] rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8),0_0_20px_rgba(0,240,255,0.3)]"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Skills;
