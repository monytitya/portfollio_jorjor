import React from "react";
import { motion } from "framer-motion";
import { Code2, Milestone, GraduationCap, Cpu, Layers } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden" style={{ background: "rgba(6, 2, 27, 0.7)" }}>
      {/* Visual Background Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purpleAccent/5 rounded-full blur-[120px] pointer-events-none"></div>

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
            About <span className="text-gradient-purple-cyan">Me</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purpleAccent to-cyanAccent mx-auto rounded-full"
          />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Biography Block */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 rounded-2xl relative overflow-hidden"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyanAccent animate-pulse" />
                Who is Mony Titya?
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I am a Software Engineer and Java Spring Boot Developer with a dual passion for building high-performance, secure backend architectures and crafting stunning visual stories through motion design. This unique combination of technical engineering and aesthetic design allows me to bridge the gap between complex system design and rich digital engagement.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My software engineering journey focuses on backend services, REST APIs, and microservices architecture. On the creative front, I have years of experience using tools like Adobe After Effects to create high‑end logo animations, promotional reels, and advertisements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-panel p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Milestone className="w-5 h-5 text-purpleAccent" />
                Career Objective & Vision
              </h3>
              <p className="text-gray-300 leading-relaxed">
                My objective is to build scalable, robust enterprise applications with modern backend architectures while continuously exploring microservices, CI/CD pipelines, and cloud computing. I aim to join a dynamic development team where I can apply my Java/Spring Boot knowledge, integrate secure API layers, and provide creative motion graphics assets for client and team success.
              </p>
            </motion.div>
          </div>

          {/* Cards Block: Education, Long-Term Goals, Tech Interests */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-6 rounded-2xl flex gap-4"
            >
              <div className="p-3 rounded-xl bg-purpleAccent/10 border border-purpleAccent/20 h-fit text-purpleAccent">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Education Background</h4>
                <p className="text-sm text-cyanAccent font-semibold">Bachelor of Science in Computer Science</p>
                <p className="text-xs text-gray-400 mt-1">Specializing in Software Engineering & Application Development</p>
              </div>
            </motion.div>

            {/* Technical Interests */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-panel p-6 rounded-2xl flex gap-4"
            >
              <div className="p-3 rounded-xl bg-cyanAccent/10 border border-cyanAccent/20 h-fit text-cyanAccent">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Technical Interests</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Microservices", "System Design", "Cloud Architecture", "Spring Security", "CI/CD", "Motion Graphics"].map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300 font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Long term goals */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-6 rounded-2xl flex gap-4"
            >
              <div className="p-3 rounded-xl bg-purpleAccent/10 border border-purpleAccent/20 h-fit text-purpleAccent">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Long‑Term Goals</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  To achieve expertise as a Principal Architect in Backend Systems, designing next‑gen microservice infrastructures, and to establish a boutique creative agency bridging animations with modern web experiences.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
