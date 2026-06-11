import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  company: string;
  avatarInitials: string;
  avatarColor: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Mony Titya is an exceptional developer who brings a rare mix of deep Java Spring Boot backend proficiency and high-end visual design talents. He redesigned our customer account API, securing it and reducing database response latency significantly, while also providing stunning promotional reels for our system release.",
    author: "Sopheap Phyna",
    role: "Engineering Lead",
    company: "DevCore Systems",
    avatarInitials: "SP",
    avatarColor: "bg-purple-500",
  },
  {
    id: 2,
    text: "Working with Titya was a game changer for our SaaS product launch. He not only structured the PostgreSQL db schemas and REST endpoints cleanly but also edited and animated our product explainers with premium quality. Highly recommend his dual-stack creative and technical skillset!",
    author: "Dararith Rith",
    role: "Product Director",
    company: "Nexus Digital Agency",
    avatarInitials: "DR",
    avatarColor: "bg-cyan-500",
  },
  {
    id: 3,
    text: "Titya's work on our user authorization system using Spring Security was immaculate. The code was exceptionally well-structured, thoroughly documented, and easy to scale. He maintains a high standard of professional communication and delivers on time.",
    author: "Vannak Borath",
    role: "Senior Architect",
    company: "FinTech Hub",
    avatarInitials: "VB",
    avatarColor: "bg-pink-500",
  }
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden" style={{ background: "rgba(3, 0, 20, 0.65)" }}>
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-cyanAccent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2"
          >
            Professional <span className="text-gradient-purple-cyan">Recommendations</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purpleAccent to-cyanAccent mx-auto rounded-full"
          />
        </div>

        {/* Testimonial Box Wrapper */}
        <div className="relative text-left">
          <div className="absolute top-6 left-6 opacity-10 text-white pointer-events-none">
            <Quote className="w-16 h-16 transform scale-y-[-1]" />
          </div>

          <div className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 sm:space-y-8"
              >
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed italic relative z-10">
                  "{testimonials[activeIndex].text}"
                </p>

                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  {/* Avatar Initials Bubble */}
                  <div className={`w-12 h-12 rounded-full ${testimonials[activeIndex].avatarColor} flex items-center justify-center font-bold text-white shadow-md`}>
                    {testimonials[activeIndex].avatarInitials}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white tracking-tight">
                      {testimonials[activeIndex].author}
                    </h4>
                    <p className="text-xs text-gray-400">
                      {testimonials[activeIndex].role} • <span className="text-cyanAccent">{testimonials[activeIndex].company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons inside the Card */}
            <div className="flex justify-end gap-3 mt-6 sm:mt-0 sm:absolute sm:bottom-12 sm:right-12 z-20">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Previous recommendation"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Next recommendation"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Indicators Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx ? "w-6 bg-cyanAccent" : "w-2 bg-white/10"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
