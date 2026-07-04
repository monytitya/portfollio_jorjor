import React from "react";
import { motion } from "framer-motion";
import { 
  FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaGitAlt, FaGithub, FaDocker, FaLinux, FaDatabase, FaCode,
  FaPython, FaPhp, FaLaravel, FaGitSquare, FaNetworkWired
} from "react-icons/fa";
import { 
  SiSpringboot, 
  SiTypescript, SiMysql, SiPostgresql, 
  SiPostman, SiApachemaven, SiIntellijidea,
  SiFastapi, SiFlask
} from "react-icons/si";

const skillCategories = [
  {
    title: "Front-End",
    icon: FaReact,
    items: [
      { name: "HTML5", icon: FaHtml5, color: "text-[#E34F26]", level: 95 },
      { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]", level: 90 },
      { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]", level: 90 },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]", level: 85 },
      { name: "React", icon: FaReact, color: "text-[#61DAFB]", level: 85 },
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
    title: "Programming &\nNetworking",
    icon: FaNetworkWired,
    items: [
      { name: "Spring Boot", icon: SiSpringboot, color: "text-[#6DB33F]", level: 90 },
      { name: "Docker", icon: FaDocker, color: "text-[#2496ED]", level: 80 },
      { name: "Linux", icon: FaLinux, color: "text-yellow-200", level: 75 },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]", level: 85 },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]", level: 90 },
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
      { name: "VS Code", icon: FaCode, color: "text-[#007ACC]", level: 95 },
    ]
  }
];

const toolsHighlights = [
  { name: "Git & GitHub", level: 85 },
  { name: "Visual Studio Code", level: 75 },
  { name: "Responsive Design", level: 78 },
];

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<{
    title: string;
    icon: any;
    items: Array<{ name: string; icon: any; color: string; level: number }>;
  } | null>(null);

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
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-purpleAccent/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-cyanAccent/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
            Technical Proficiency
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyanAccent to-purpleAccent rounded-full"></div>
        </div>

        {/* Main Layout: Grid on Left, Tools on Right */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Side: 2x2 Skill Categories Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category, idx) => {
                const CategoryIcon = category.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group relative cursor-pointer"
                    onClick={() => setSelectedCategory(selectedCategory?.title === category.title ? null : category)}
                  >
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyanAccent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Card */}
                    <div className={`relative bg-[#0a0a14]/60 backdrop-blur-md border rounded-2xl p-8 h-full transition-all duration-300 ${
                      selectedCategory?.title === category.title
                        ? 'border-cyanAccent bg-[#0f0f1a] shadow-lg shadow-cyanAccent/30'
                        : 'border-cyanAccent/40 hover:border-cyanAccent/70'
                    }`}>
                      
                      {/* Icon and Title */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-cyanAccent/10 rounded-lg">
                          <CategoryIcon className="w-6 h-6 text-cyanAccent" />
                        </div>
                        <h3 className="text-lg font-bold text-white whitespace-pre-line">
                          {category.title}
                        </h3>
                      </div>

                      {/* Skills Grid */}
                      <div className="grid grid-cols-3 gap-3">
                        {category.items.map((skill, skillIdx) => (
                          <div
                            key={skillIdx}
                            className="bg-[#1a1a2e]/80 border border-white/10 rounded-lg p-3 h-full flex flex-col items-center justify-center gap-2 hover:border-cyanAccent/50 hover:bg-[#252547] transition-all duration-300"
                          >
                            <skill.icon className={`w-6 h-6 ${skill.color}`} />
                            <span className="text-xs font-medium text-center text-gray-300 leading-tight">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Tools Highlights Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyanAccent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative bg-[#0a0a14]/60 backdrop-blur-md border border-cyanAccent/40 p-8 rounded-2xl hover:border-cyanAccent/70 transition-all duration-300 h-full overflow-hidden">
              
              {/* Selected Category Display */}
              {selectedCategory ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full flex flex-col"
                >
                  <motion.div 
                    className="flex items-center gap-3 mb-8"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <motion.div 
                      className="p-2 bg-cyanAccent/10 rounded-lg"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                    >
                      <selectedCategory.icon className="w-6 h-6 text-cyanAccent" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-white">{selectedCategory.title}</h3>
                  </motion.div>

                  {/* All Skills Progress Bars */}
                  <motion.div 
                    className="space-y-4 max-h-[400px] overflow-y-auto pr-2 flex-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {selectedCategory.items.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20, y: 10 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.15 + idx * 0.08,
                          ease: [0.34, 1.56, 0.64, 1]
                        }}
                        className="group/skill"
                      >
                        {/* Skill Name and Percentage */}
                        <motion.div 
                          className="flex justify-between items-center mb-2"
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-sm font-bold text-white uppercase tracking-wide">
                            {skill.name}
                          </span>
                          <motion.span 
                            className="text-xs font-bold text-cyanAccent"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, delay: 0.15 + idx * 0.08, repeat: Infinity }}
                          >
                            {skill.level}%
                          </motion.span>
                        </motion.div>
                        
                        {/* Progress Bar */}
                        <div className="w-full h-3 bg-[#1a1a2e] rounded-full overflow-hidden border border-white/10 group-hover/skill:border-cyanAccent/40 transition-all">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1.2, 
                              delay: 0.2 + idx * 0.08,
                              ease: "easeOut"
                            }}
                            className="h-full bg-gradient-to-r from-cyanAccent via-purpleAccent to-cyanAccent rounded-full shadow-lg shadow-cyanAccent/40"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.button
                    onClick={() => setSelectedCategory(null)}
                    className="w-full py-2 px-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium rounded-lg transition-all duration-300 mt-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.35 }}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Clear Selection
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full flex flex-col"
                >
                  {/* Tools Header */}
                  <motion.div 
                    className="flex items-center gap-3 mb-8"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="p-2 bg-cyanAccent/10 rounded-lg">
                      <FaCode className="w-6 h-6 text-cyanAccent" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Tools</h3>
                  </motion.div>

                  {/* Progress Bars */}
                  <motion.div 
                    className="space-y-6 flex-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {toolsHighlights.map((tool, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20, y: 10 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.1 + idx * 0.08,
                          ease: [0.34, 1.56, 0.64, 1]
                        }}
                        className="group/tool"
                      >
                      <motion.div 
                          className="flex justify-between items-center mb-2"
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-sm font-bold text-white uppercase tracking-wide">
                            {tool.name}
                          </span>
                          <motion.span 
                            className="text-xs font-bold text-cyanAccent"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, delay: 0.1 + idx * 0.08, repeat: Infinity }}
                          >
                            {tool.level}%
                          </motion.span>
                        </motion.div>
                        
                        {/* Progress Bar */}
                        <div className="w-full h-3 bg-[#1a1a2e] rounded-full overflow-hidden border border-white/10 group-hover/tool:border-cyanAccent/40 transition-all">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tool.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1.2, 
                              delay: 0.1 + idx * 0.08,
                              ease: "easeOut"
                            }}
                            className="h-full bg-gradient-to-r from-cyanAccent via-purpleAccent to-cyanAccent rounded-full shadow-lg shadow-cyanAccent/40"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
export default Skills;
