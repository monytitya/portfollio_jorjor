import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Layout, Database, Wrench, Cloud, Video } from "lucide-react";

interface SkillItem {
  name: string;
  level: "Advanced" | "Intermediate" | "Expert";
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  color: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend Development",
    icon: Server,
    color: "from-purpleAccent to-pink-500",
    skills: [
      { name: "Java", level: "Expert" },
      { name: "Spring Boot", level: "Expert" },
      { name: "Spring MVC", level: "Expert" },
      { name: "Spring Security", level: "Advanced" },
      { name: "Spring Data JPA", level: "Expert" },
      { name: "Hibernate", level: "Advanced" },
      { name: "REST API Development", level: "Expert" },
      { name: "Microservices", level: "Advanced" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Layout,
    color: "from-cyanAccent to-blue-500",
    skills: [
      { name: "HTML5", level: "Expert" },
      { name: "CSS3", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "React", level: "Advanced" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    color: "from-yellow-400 to-orange-500",
    skills: [
      { name: "MySQL", level: "Expert" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "Oracle Database", level: "Intermediate" },
    ],
  },
  {
    id: "tools",
    title: "Development Tools",
    icon: Wrench,
    color: "from-emerald-400 to-teal-500",
    skills: [
      { name: "Git", level: "Expert" },
      { name: "GitHub", level: "Expert" },
      { name: "Docker", level: "Intermediate" },
      { name: "Postman", level: "Expert" },
      { name: "Maven", level: "Advanced" },
      { name: "IntelliJ IDEA", level: "Expert" },
      { name: "VS Code", level: "Expert" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-cyan-500 to-purpleAccent",
    skills: [
      { name: "Docker", level: "Intermediate" },
      { name: "CI/CD Concepts", level: "Intermediate" },
      { name: "Linux Fundamentals", level: "Intermediate" },
    ],
  },
  {
    id: "animation",
    title: "Animation & Motion Design",
    icon: Video,
    color: "from-pink-500 to-purpleAccent",
    skills: [
      { name: "Adobe After Effects", level: "Expert" },
      { name: "Adobe Premiere Pro", level: "Expert" },
      { name: "Adobe Photoshop", level: "Expert" },
      { name: "Adobe Illustrator", level: "Advanced" },
      { name: "Motion Graphics", level: "Expert" },
      { name: "Video Editing", level: "Expert" },
      { name: "Logo Animation", level: "Expert" },
      { name: "Social Media Content", level: "Expert" },
    ],
  },
];

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20 relative overflow-hidden" style={{ background: "rgba(3, 0, 20, 0.65)" }}>
      {/* Background Accent Grid */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyanAccent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2"
          >
            Technical & Creative <span className="text-gradient-purple-cyan">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purpleAccent to-cyanAccent mx-auto rounded-full"
          />
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-purpleAccent to-cyanAccent text-white border-transparent shadow-lg shadow-purpleAccent/25"
                : "bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10"
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border flex items-center gap-1.5 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purpleAccent to-cyanAccent text-white border-transparent shadow-lg shadow-purpleAccent/25"
                  : "bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.title.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-purpleAccent/30 hover:shadow-glassPurple transition-all duration-300"
              >
                {/* Accent line on card header */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`}></div>

                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 text-white`}>
                    <category.icon className="w-5 h-5 text-cyanAccent" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="space-y-1.5 text-left">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-200 font-medium">{skill.name}</span>
                        <span
                          className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                            skill.level === "Expert"
                              ? "bg-cyanAccent/10 text-cyanAccent border border-cyanAccent/20"
                              : skill.level === "Advanced"
                              ? "bg-purpleAccent/10 text-purpleAccent border border-purpleAccent/20"
                              : "bg-gray-500/10 text-gray-400 border border-gray-500/20"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      {/* Interactive Visual Bar */}
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width:
                              skill.level === "Expert"
                                ? "95%"
                                : skill.level === "Advanced"
                                ? "80%"
                                : "60%",
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.1 }}
                          className={`h-full bg-gradient-to-r ${category.color}`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;
