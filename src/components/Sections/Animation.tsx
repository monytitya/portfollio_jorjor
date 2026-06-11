import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Film, X, Sparkles, Sliders, Activity } from "lucide-react";

interface AnimationProject {
  id: number;
  title: string;
  label: "Client Project" | "Personal Project" | "Agency Work";
  description: string;
  softwareUsed: string[];
  thumbnailGradient: string;
  videoSimUrl: string; // Simulated video preview or message
}

const animationProjects: AnimationProject[] = [
  {
    id: 1,
    title: "Logo Reveal & Brand Intro",
    label: "Client Project",
    description: "Dynamic 3D logo reveal with slick kinetic typography and fluid motion curves designed for a tech startup rebranding campaign.",
    softwareUsed: ["After Effects", "Illustrator", "Element 3D"],
    thumbnailGradient: "from-purple-900/80 to-indigo-950/80",
    videoSimUrl: "Fluid dynamics, geometric rotations, and glowing cybernetic grid trails."
  },
  {
    id: 2,
    title: "SaaS Product Explainer Video",
    label: "Agency Work",
    description: "A 60-second engaging motion graphic explainer that simplifies cloud backend microservice clustering for non-technical stakeholders.",
    softwareUsed: ["After Effects", "Premiere Pro", "Photoshop"],
    thumbnailGradient: "from-cyan-900/80 to-blue-950/80",
    videoSimUrl: "Vector assets transition smoothly to showcase API pipelines and server boxes flowing."
  },
  {
    id: 3,
    title: "Tech Conference Promo Reel",
    label: "Personal Project",
    description: "Fast-paced promo clip featuring glitched overlay text, heavy base motion curves, and futuristic UI widgets synchronized to ambient tech beats.",
    softwareUsed: ["After Effects", "Premiere Pro", "Audition"],
    thumbnailGradient: "from-pink-900/80 to-rose-950/80",
    videoSimUrl: "Glitch transitions, 3D camera shakes, and animated speed ramps."
  },
  {
    id: 4,
    title: "Social Media Advertisement",
    label: "Client Project",
    description: "Vertical video advertisement designed to boost subscription conversions on Instagram & TikTok, featuring eye-catching animated stickers.",
    softwareUsed: ["After Effects", "Illustrator", "Photoshop"],
    thumbnailGradient: "from-violet-900/80 to-purple-950/80",
    videoSimUrl: "Elastic bounce micro-animations, vibrant typography popups, and product mockups."
  }
];

export const Animation: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<AnimationProject | null>(null);
  const [isPlayingCurve, setIsPlayingCurve] = useState<number | null>(null);

  return (
    <section id="animation" className="py-20 relative overflow-hidden" style={{ background: "rgba(3, 0, 20, 0.65)" }}>
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purpleAccent/5 rounded-full blur-[120px] pointer-events-none"></div>

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
            Creative <span className="text-gradient-purple-cyan">Animation Portfolio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mb-4"
          >
            Showcasing dynamic motion design, cinematic video editing, brand logo reveals, and social campaigns.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purpleAccent to-cyanAccent mx-auto rounded-full"
          />
        </div>

        {/* Animation Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {animationProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl overflow-hidden hover:border-purpleAccent/30 hover:shadow-glassPurple transition-all duration-300 flex flex-col md:flex-row text-left"
            >
              {/* Animated Thumbnail Area */}
              <div className={`md:w-2/5 min-h-[180px] bg-gradient-to-br ${project.thumbnailGradient} flex flex-col justify-between p-6 relative group overflow-hidden`}>
                {/* Background moving animation grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-40"></div>
                <div className="relative z-10 flex justify-between items-start w-full">
                  <Film className="w-6 h-6 text-cyanAccent opacity-70" />
                  <span className="px-2 py-0.5 rounded bg-black/40 text-[9px] text-white font-bold border border-white/10 uppercase tracking-wider">
                    {project.label}
                  </span>
                </div>

                <div className="relative z-10 flex items-center justify-center my-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(project)}
                    className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg shadow-purpleAccent/25 hover:bg-cyanAccent hover:text-black transition-colors"
                  >
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </motion.button>
                </div>

                <div className="relative z-10 text-[9px] text-gray-400 font-mono tracking-tight flex items-center gap-1">
                  <Activity className="w-3 h-3 text-cyanAccent animate-pulse" />
                  TIMELINE ACTIVE • 60 FPS
                </div>
              </div>

              {/* Text Description Details */}
              <div className="md:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">{project.title}</h3>
                  <p className="text-xs text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                </div>

                <div>
                  {/* Software Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.softwareUsed.map((software, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[9px] bg-white/5 border border-white/10 text-purpleAccent font-semibold"
                      >
                        {software}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    Preview Motion Curves
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Keyframe / Motion Curve Visualizer Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-6 sm:p-8 rounded-3xl text-left border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyanAccent/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-6 mb-6">
            <div>
              <div className="flex items-center gap-2 text-cyanAccent text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                Motion Curve Visualizer
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Interactive Keyframe Editor</h3>
              <p className="text-xs text-gray-400 mt-1 max-w-xl">
                Tweak ease-in and ease-out motion bezier vectors to understand the velocity principles behind my animations.
              </p>
            </div>
            <div className="flex gap-2.5">
              {["Ease-In Out", "Bounce", "Elastic"].map((curve, idx) => (
                <button
                  key={idx}
                  onClick={() => setIsPlayingCurve(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                    isPlayingCurve === idx
                      ? "bg-purpleAccent/25 text-white border-purpleAccent/50"
                      : "bg-white/5 border-white/5 text-gray-400 hover:text-white"
                  }`}
                >
                  {curve}
                </button>
              ))}
            </div>
          </div>

          {/* Bezier Vector Grid Animation */}
          <div className="h-44 w-full bg-black/40 rounded-2xl border border-white/5 flex items-center justify-center p-6 relative overflow-hidden">
            {/* Grid background lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:1.5rem_1rem]"></div>

            {/* Simulated graph lines and points */}
            <svg className="w-full h-full overflow-visible relative z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              {isPlayingCurve === 0 && (
                <motion.path
                  d="M 0,100 C 35,100 65,0 100,0"
                  fill="none"
                  stroke="rgb(139, 92, 246)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                />
              )}
              {isPlayingCurve === 1 && (
                <motion.path
                  d="M 0,100 C 30,100 50,0 60,100 C 70,100 80,40 90,100 C 95,100 97,80 100,100"
                  fill="none"
                  stroke="rgb(6, 182, 212)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, repeat: Infinity, repeatType: "loop" }}
                />
              )}
              {isPlayingCurve === 2 && (
                <motion.path
                  d="M 0,100 C 20,100 40,0 60,20 C 70,-10 80,10 90,0 C 95,5 98,0 100,0"
                  fill="none"
                  stroke="rgb(236, 72, 153)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                />
              )}
              {isPlayingCurve === null && (
                <path
                  d="M 0,100 C 35,100 65,0 100,0"
                  fill="none"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                />
              )}
            </svg>

            {/* Slider control widget elements */}
            <div className="absolute top-4 left-6 flex items-center gap-1.5 text-[10px] text-gray-500 font-mono">
              <span>x: Time</span>
              <span>•</span>
              <span>y: Value</span>
            </div>

            {isPlayingCurve === null ? (
              <span className="absolute text-xs font-semibold text-gray-500 font-display">
                Select a curve profile above to run animation preview
              </span>
            ) : (
              <motion.div
                className="absolute w-4 h-4 rounded-full bg-white shadow-lg border border-purpleAccent"
                animate={{
                  x: ["-45vw", "45vw"],
                  y:
                    isPlayingCurve === 0
                      ? ["40px", "-40px"]
                      : isPlayingCurve === 1
                      ? ["40px", "40px", "40px", "40px", "40px", "40px"]
                      : ["40px", "-30px", "10px", "-10px", "0px", "0px"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: isPlayingCurve === 0 ? 1.5 : isPlayingCurve === 1 ? 1.8 : 2,
                  ease:
                    isPlayingCurve === 0
                      ? "easeInOut"
                      : isPlayingCurve === 1
                      ? [0.36, 0.07, 0.19, 0.97]
                      : "easeOut",
                }}
              />
            )}
          </div>
        </motion.div>

        {/* Animation Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="w-full max-w-2xl bg-[#090514] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative text-left"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Simulated playback viewport */}
                <div className={`h-64 bg-gradient-to-tr ${selectedProject.thumbnailGradient} flex flex-col justify-center items-center p-8 relative`}>
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center mb-4 text-cyanAccent">
                    <Film className="w-8 h-8 animate-pulse" />
                  </div>
                  <div className="text-center relative z-10 max-w-md">
                    <p className="text-xs font-bold text-cyanAccent uppercase tracking-widest mb-1.5 font-mono">Simulated Render</p>
                    <p className="text-sm text-gray-200 italic leading-relaxed">
                      "{selectedProject.videoSimUrl}"
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <span className="px-2.5 py-1 rounded bg-purpleAccent/10 text-purpleAccent border border-purpleAccent/20 text-[10px] font-bold uppercase tracking-wider">
                    {selectedProject.label}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-3 mb-2 tracking-tight">{selectedProject.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">{selectedProject.description}</p>

                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Software & Tech Pipeline:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.softwareUsed.map((software, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 rounded-lg text-xs bg-white/5 border border-white/10 text-gray-300 font-semibold"
                      >
                        {software}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
export default Animation;
