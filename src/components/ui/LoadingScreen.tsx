import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [loadingText, setLoadingText] = useState("Initializing kernel...");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const textSequence = [
      "Initializing core modules...",
      "Configuring Spring Boot context...",
      "Spinning up Docker containers...",
      "Mapping JPA relational database schemas...",
      "Rendering After Effects bezier velocity curves...",
      "Launching interactive portfolios...",
    ];

    let currentTextIndex = 0;
    const textInterval = setInterval(() => {
      if (currentTextIndex < textSequence.length - 1) {
        currentTextIndex++;
        setLoadingText(textSequence[currentTextIndex]);
      }
    }, 500);

    // Progress counter simulation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        // Random progress jump
        return prev + Math.floor(Math.random() * 12) + 4;
      });
    }, 150);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: "-100vh", opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030014] text-white select-none"
    >
      <div className="max-w-md w-full px-8 text-center space-y-8 relative z-10">
        {/* Glowing Logo */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 20px rgba(139, 92, 246, 0.2)",
              "0 0 35px rgba(6, 182, 212, 0.4)",
              "0 0 20px rgba(139, 92, 246, 0.2)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purpleAccent to-cyanAccent flex items-center justify-center mx-auto border border-white/10"
        >
          <Terminal className="w-8 h-8 text-white animate-pulse" />
        </motion.div>

        {/* Text Sequence */}
        <div className="space-y-2.5">
          <h1 className="text-xl font-bold tracking-tight font-display">Mony Titya Portfolio</h1>
          <div className="h-5 flex items-center justify-center">
            <motion.p
              key={loadingText}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xs text-cyanAccent font-mono"
            >
              {loadingText}
            </motion.p>
          </div>
        </div>

        {/* Progress Bar Widget */}
        <div className="space-y-2">
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5 relative">
            <motion.div
              style={{ width: `${Math.min(progress, 100)}%` }}
              className="h-full bg-gradient-to-r from-purpleAccent to-cyanAccent"
            />
          </div>
          <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono">
            <span>SYS_READY</span>
            <span>{Math.min(progress, 100)}%</span>
          </div>
        </div>
      </div>

      {/* Abstract Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
    </motion.div>
  );
};
export default LoadingScreen;
