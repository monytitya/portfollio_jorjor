import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, ExternalLink, Server, Database, GitBranch, Cpu, Globe } from "lucide-react";

interface Certification {
  id: number;
  title: string;
  provider: string;
  date: string;
  category: "Java" | "Spring Boot" | "Databases" | "Git & Tools" | "Docker" | "Web Dev";
  icon: React.ComponentType<any>;
  verificationLink: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Java SE Professional Developer",
    provider: "Oracle Academy / Udemy",
    date: "2024",
    category: "Java",
    icon: Cpu,
    verificationLink: "#"
  },
  {
    id: 2,
    title: "Spring Boot Microservices & Security Specialist",
    provider: "Pivotal / Udemy",
    date: "2024",
    category: "Spring Boot",
    icon: Server,
    verificationLink: "#"
  },
  {
    id: 3,
    title: "Advanced Relational Databases & SQL Administration",
    provider: "PostgreSQL & Oracle Course",
    date: "2023",
    category: "Databases",
    icon: Database,
    verificationLink: "#"
  },
  {
    id: 4,
    title: "Git & Version Control Expert Workflow",
    provider: "GitHub Foundations",
    date: "2023",
    category: "Git & Tools",
    icon: GitBranch,
    verificationLink: "#"
  },
  {
    id: 5,
    title: "Docker Containerization & CI/CD Systems",
    provider: "DevOps Academy",
    date: "2024",
    category: "Docker",
    icon: ShieldCheck,
    verificationLink: "#"
  },
  {
    id: 6,
    title: "Full-Stack React & Tailwind Developer Bundle",
    provider: "Meta Frontend Developer",
    date: "2023",
    category: "Web Dev",
    icon: Globe,
    verificationLink: "#"
  }
];

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden" style={{ background: "rgba(3, 0, 20, 0.65)" }}>
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyanAccent/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2"
          >
            Professional <span className="text-gradient-purple-cyan">Certifications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mb-4"
          >
            Verified certifications validating backend development, database management, containerization, and frontend technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purpleAccent to-cyanAccent mx-auto rounded-full"
          />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-cyanAccent/30 hover:shadow-glassCyan transition-all duration-300 flex flex-col justify-between text-left"
              >
                {/* Visual Category Label bar */}
                <div className="absolute top-0 right-0 px-3 py-1 bg-white/5 border-b border-l border-white/10 rounded-bl-xl text-[9px] text-gray-400 font-mono">
                  {cert.category}
                </div>

                <div className="flex gap-4 items-start mb-6 mt-2">
                  <div className="p-3 rounded-xl bg-purpleAccent/10 border border-purpleAccent/20 text-purpleAccent">
                    <IconComponent className="w-5 h-5 text-purpleAccent" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight group-hover:text-cyanAccent transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium mt-1">{cert.provider}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Award className="w-4 h-4 text-cyanAccent animate-pulse" />
                    <span>Issued: {cert.date}</span>
                  </div>
                  <a
                    href={cert.verificationLink}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-cyanAccent transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Certifications;
