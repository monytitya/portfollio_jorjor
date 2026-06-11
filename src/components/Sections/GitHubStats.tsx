import React from "react";
import { motion } from "framer-motion";
import { GitPullRequest, GitBranch, Star, BookOpen, ExternalLink, Activity } from "lucide-react";

interface LanguageInfo {
  name: string;
  percentage: number;
  color: string;
}

const languageData: LanguageInfo[] = [
  { name: "Java", percentage: 65, color: "bg-red-500" },
  { name: "TypeScript", percentage: 15, color: "bg-blue-500" },
  { name: "JavaScript", percentage: 10, color: "bg-yellow-400" },
  { name: "CSS/Tailwind", percentage: 7, color: "bg-indigo-400" },
  { name: "HTML", percentage: 3, color: "bg-orange-400" },
];

export const GitHubStats: React.FC = () => {
  // Generate mock contribution grid cells (24 columns x 7 rows)
  const totalCells = 24 * 7;
  const gridCells = Array.from({ length: totalCells }).map(() => {
    // Randomize activity levels (0: none, 1: low, 2: medium, 3: high)
    const level = Math.floor(Math.random() * 4);
    return level;
  });

  return (
    <section id="github-stats" className="py-20 relative overflow-hidden" style={{ background: "rgba(6, 2, 27, 0.7)" }}>
      {/* Background orb decoration */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-purpleAccent/5 rounded-full blur-[100px] pointer-events-none"></div>

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
            GitHub <span className="text-gradient-purple-cyan">Statistics</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mb-4"
          >
            Visualizing coding activity, contribution levels, and primary backend/frontend programming languages.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purpleAccent to-cyanAccent mx-auto rounded-full"
          />
        </div>

        {/* Stats Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contribution Heatmap Card */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-cyanAccent animate-pulse" />
                  <h3 className="text-lg font-bold text-white tracking-tight">Coding Activity Heatmap</h3>
                </div>
                <span className="text-xs text-purpleAccent font-semibold font-mono">1,482 Contributions this year</span>
              </div>

              {/* Grid representation */}
              <div className="overflow-x-auto pb-4">
                <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-[500px]">
                  {gridCells.map((level, idx) => (
                    <div
                      key={idx}
                      className={`w-3.5 h-3.5 rounded-sm transition-all duration-300 hover:scale-125 ${
                        level === 0
                          ? "bg-white/5"
                          : level === 1
                          ? "bg-purpleAccent/20 border border-purpleAccent/10"
                          : level === 2
                          ? "bg-purpleAccent/50"
                          : "bg-cyanAccent shadow-sm shadow-cyanAccent/50"
                      }`}
                      title={`${level === 0 ? "No" : level === 1 ? "Some" : level === 2 ? "Many" : "Expert"} contributions`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Heatmap Legend */}
              <div className="flex justify-between items-center mt-4 text-xs text-gray-500 font-mono">
                <span>Less active</span>
                <div className="flex gap-1.5 items-center">
                  <div className="w-3 h-3 rounded-sm bg-white/5"></div>
                  <div className="w-3 h-3 rounded-sm bg-purpleAccent/20 border border-purpleAccent/10"></div>
                  <div className="w-3 h-3 rounded-sm bg-purpleAccent/50"></div>
                  <div className="w-3 h-3 rounded-sm bg-cyanAccent"></div>
                </div>
                <span>More active</span>
              </div>
            </motion.div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Repositories", count: "24", icon: BookOpen },
                { label: "Stars Earned", count: "112", icon: Star },
                { label: "Pull Requests", count: "89", icon: GitPullRequest },
                { label: "Active Branches", count: "16", icon: GitBranch },
              ].map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="glass-panel p-5 rounded-2xl flex flex-col justify-between"
                >
                  <metric.icon className="w-5 h-5 text-cyanAccent mb-4" />
                  <div>
                    <div className="text-2xl font-black text-white">{metric.count}</div>
                    <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mt-1">{metric.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Language distribution card */}
          <div className="lg:col-span-4 text-left">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-6 tracking-tight">Language Distribution</h3>

                {/* Progress bar visualizer */}
                <div className="h-4 bg-white/5 rounded-full overflow-hidden flex mb-8">
                  {languageData.map((lang, idx) => (
                    <div
                      key={idx}
                      style={{ width: `${lang.percentage}%` }}
                      className={`h-full ${lang.color} transition-all duration-300 hover:opacity-80`}
                      title={`${lang.name}: ${lang.percentage}%`}
                    ></div>
                  ))}
                </div>

                <div className="space-y-4">
                  {languageData.map((lang, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3.5 h-3.5 rounded-full ${lang.color}`}></div>
                        <span className="text-sm font-semibold text-gray-200">{lang.name}</span>
                      </div>
                      <span className="text-xs font-bold text-gray-400 font-mono">{lang.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://github.com/monytitya"
                target="_blank"
                rel="noreferrer"
                className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-purpleAccent to-cyanAccent hover:opacity-90 text-xs text-white font-bold flex items-center justify-center gap-1.5 transition-all shadow-md shadow-purpleAccent/10"
              >
                <span>View Full GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GitHubStats;
