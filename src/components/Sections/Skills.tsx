import React from "react";
import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import { 
  FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaGitAlt, FaGithub, FaDocker, FaLinux, FaDatabase, FaCode, FaTools,
  FaPython, FaPhp, FaLaravel
} from "react-icons/fa";
import { 
  SiSpringboot, 
  SiTypescript, SiMysql, SiPostgresql, 
  SiPostman, SiApachemaven, SiIntellijidea,
  SiFastapi, SiFlask
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: FaHtml5, color: "text-[#E34F26]", level: 95 },
      { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]", level: 90 },
      { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]", level: 90 },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]", level: 85 },
      { name: "React", icon: FaReact, color: "text-[#61DAFB]", level: 85 },
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Java", icon: FaJava, color: "text-[#007396]", level: 95 },
      { name: "Spring Boot", icon: SiSpringboot, color: "text-[#6DB33F]", level: 90 },
      { name: "Python", icon: FaPython, color: "text-[#3776AB]", level: 80 },
      { name: "FastAPI", icon: SiFastapi, color: "text-[#009688]", level: 80 },
      { name: "Flask", icon: SiFlask, color: "text-white", level: 75 },
      { name: "PHP", icon: FaPhp, color: "text-[#777BB4]", level: 70 },
      { name: "Laravel", icon: FaLaravel, color: "text-[#FF2D20]", level: 70 },
    ]
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]", level: 90 },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]", level: 85 },
      { name: "Oracle", icon: FaDatabase, color: "text-[#F80000]", level: 75 }, 
    ]
  },
  {
    title: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: FaDocker, color: "text-[#2496ED]", level: 80 },
      { name: "Linux", icon: FaLinux, color: "text-yellow-200", level: 75 },
      { name: "CI/CD", icon: FaTools, color: "text-green-400", level: 70 },
    ]
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, color: "text-[#F05032]", level: 95 },
      { name: "GitHub", icon: FaGithub, color: "text-white", level: 95 },
      { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]", level: 90 },
      { name: "Maven", icon: SiApachemaven, color: "text-[#C71A22]", level: 85 },
      { name: "IntelliJ IDEA", icon: SiIntellijidea, color: "text-pink-500", level: 95 }, 
      { name: "VS Code", icon: FaCode, color: "text-[#007ACC]", level: 95 },
    ]
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#030014]">
      {/* 3D Perspective Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-60"
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

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex justify-center">
        
        {/* Full-width container */}
        <div className="w-full bg-[#0b0b13]/80 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
          
          {/* Subtle inner shadow highlight */}
          <div className="absolute inset-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] pointer-events-none rounded-3xl" />

          {/* Header */}
          <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-6">
            <Wrench className="w-6 h-6 text-purpleAccent" />
            <h2 className="text-2xl font-bold text-white tracking-wide">Languages & Tools</h2>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:bg-white/[0.04] transition-colors"
              >
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-5 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyanAccent shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-4">
                  {category.items.map((skill, skillIdx) => (
                    <div 
                      key={skillIdx}
                      className="w-[4rem] h-[4.5rem] bg-[#12121a] border border-white/10 rounded-xl flex flex-col items-center justify-center gap-1.5 group hover:bg-[#1a1a24] hover:border-white/20 transition-all cursor-pointer relative shadow-lg"
                    >
                      <skill.icon className={`w-7 h-7 ${skill.color} group-hover:scale-110 transition-transform`} />
                      
                      {/* Mini Progress Bar */}
                      <div className="w-8 h-1 bg-black/50 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purpleAccent to-cyanAccent" style={{ width: `${skill.level}%` }}></div>
                      </div>

                      {/* Tooltip on hover */}
                      <div className="absolute -top-12 scale-0 group-hover:scale-100 transition-transform bg-black/90 border border-white/10 text-white text-xs px-3 py-1.5 rounded-lg flex flex-col items-center whitespace-nowrap pointer-events-none z-20 shadow-xl">
                        <span className="font-semibold">{skill.name}</span>
                        <span className="text-cyanAccent font-bold text-[10px]">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
export default Skills;
