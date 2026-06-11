import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, FileCode, Trophy, Calendar, CheckCircle } from "lucide-react";

interface TimelineItem {
  id: number;
  type: "education" | "work" | "project" | "milestone";
  title: string;
  organization: string;
  date: string;
  description: string;
  bullets: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: "work",
    title: "Backend Spring Boot Developer (Freelance)",
    organization: "Creative Tech Solutions",
    date: "2025 - Present",
    description: "Designed enterprise-grade Java backends, microservices architectures, and secure REST APIs for regional business applications.",
    bullets: [
      "Secured application endpoints using Spring Security and stateless JWT token rotation schemes.",
      "Optimized query runtimes by 35% through proper JPA entity mappings and Redis database queries caching.",
      "Created scalable REST APIs consuming/producing structured JSON models for client application integrations."
    ],
  },
  {
    id: 2,
    type: "project",
    title: "Software Engineering & Animation Portfolio Init",
    organization: "Personal Project",
    date: "2024",
    description: "Launched an interactive, showcase-oriented platform combining Java Spring backend projects and motion design creative assets.",
    bullets: [
      "Engineered automated, multi-threaded video encoding worker processes running as Java system tasks.",
      "Custom bezier transitions and premium glassmorphism layouts coded in React & Tailwind CSS."
    ],
  },
  {
    id: 3,
    type: "work",
    title: "Motion Designer & Video Editor (Freelance)",
    organization: "Creative Agencies & Direct Clients",
    date: "2023 - 2025",
    description: "Delivered high-end motion graphics, brand identity logos, commercial advertisements, and social media reels.",
    bullets: [
      "Crafted custom easing curve animation pipelines in Adobe After Effects for premium promotional videos.",
      "Collaborated with brand directors to script, edit, sound-design, and render video assets under strict deadlines."
    ],
  },
  {
    id: 4,
    type: "education",
    title: "Bachelor of Science in Computer Science",
    organization: "State University of Technology",
    date: "2021 - 2025",
    description: "Concentrated on Software Development, Data Structures, Relational/Non-Relational Databases, and System Designs.",
    bullets: [
      "Excelled in OOP paradigms, Java programming, database scripting, and systems engineering concepts.",
      "Completed a Capstone user portal API built using Spring Boot microservice architectures."
    ],
  },
  {
    id: 5,
    type: "milestone",
    title: "Professional Java & Spring Certification",
    organization: "Global Dev Academy",
    date: "2023",
    description: "Earned certifications validating key competency in Spring Boot MVC, JPA/Hibernate, Security, and Microservices.",
    bullets: [
      "Scored 94% on final examinations covering distributed messaging pipelines and transactional rollbacks."
    ],
  }
];

export const Timeline: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap className="w-5 h-5 text-cyanAccent" />;
      case "work":
        return <Briefcase className="w-5 h-5 text-purpleAccent" />;
      case "project":
        return <FileCode className="w-5 h-5 text-pink-500" />;
      case "milestone":
        return <Trophy className="w-5 h-5 text-yellow-400" />;
      default:
        return <CheckCircle className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="timeline" className="py-20 relative overflow-hidden" style={{ background: "rgba(6, 2, 27, 0.7)" }}>
      {/* Background Accent Grid */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 w-96 h-96 bg-purpleAccent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2"
          >
            Professional <span className="text-gradient-purple-cyan">Timeline</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mb-4"
          >
            A chronicle of my academic path, software engineering milestones, internships, and freelance projects.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purpleAccent to-cyanAccent mx-auto rounded-full"
          />
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-white/10 max-w-4xl mx-auto pl-6 sm:pl-10 space-y-12 text-left">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline dot anchor */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#06021b] border border-white/10 flex items-center justify-center shadow-lg relative z-20">
                <div className="absolute inset-0.5 rounded-full bg-white/5 flex items-center justify-center">
                  {getIcon(item.type)}
                </div>
              </div>

              {/* Box Details Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden group hover:border-purpleAccent/30 hover:shadow-glassPurple transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyanAccent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-purpleAccent font-semibold mt-0.5">{item.organization}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full h-fit w-fit">
                    <Calendar className="w-3.5 h-3.5 text-cyanAccent" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-300 mb-6 leading-relaxed">{item.description}</p>

                {/* Sub Bullet details */}
                <ul className="space-y-2.5">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-xs text-gray-400 leading-relaxed flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purpleAccent mt-1.5 shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Timeline;
