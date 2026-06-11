import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, AlertTriangle, CheckCircle, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormFields>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormFields>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const validate = () => {
    const newErrors: Partial<FormFields> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormFields]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      // Reset status notification after a delay
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden" style={{ background: "rgba(6, 2, 27, 0.7)" }}>
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purpleAccent/5 rounded-full blur-[140px] pointer-events-none"></div>

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
            Get In <span className="text-gradient-purple-cyan">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mb-4"
          >
            Let's collaborate on software development microservices, database scaling, or creative video promotions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purpleAccent to-cyanAccent mx-auto rounded-full"
          />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          {/* Contact Details Links */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold text-white mb-6">Contact Channels</h3>

              <div className="space-y-6">
                {/* Email link */}
                <a
                  href="mailto:monytitya.dev@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purpleAccent/30 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-purpleAccent/10 text-purpleAccent group-hover:bg-purpleAccent/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Email Address</p>
                    <p className="text-sm font-semibold text-white mt-0.5">monytitya.dev@gmail.com</p>
                  </div>
                </a>

                 {/* LinkedIn link */}
                <a
                  href="https://linkedin.com/in/monytitya"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyanAccent/30 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-cyanAccent/10 text-cyanAccent group-hover:bg-cyanAccent/20">
                    <FaLinkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">LinkedIn Profile</p>
                    <p className="text-sm font-semibold text-white mt-0.5">linkedin.com/in/monytitya</p>
                  </div>
                </a>

                {/* GitHub link */}
                <a
                  href="https://github.com/monytitya"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purpleAccent/30 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-purpleAccent/10 text-purpleAccent group-hover:bg-purpleAccent/20">
                    <FaGithub className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">GitHub Account</p>
                    <p className="text-sm font-semibold text-white mt-0.5">github.com/monytitya</p>
                  </div>
                </a>

                {/* Telegram link */}
                <a
                  href="https://t.me/monytitya"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyanAccent/30 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-cyanAccent/10 text-cyanAccent group-hover:bg-cyanAccent/20">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Telegram Channel</p>
                    <p className="text-sm font-semibold text-white mt-0.5">@monytitya</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form Block */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold text-white mb-6">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-gray-400">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purpleAccent transition-colors ${
                      errors.name ? "border-red-500/50" : "border-white/10"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-[10px] text-red-400 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-gray-400">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purpleAccent transition-colors ${
                      errors.email ? "border-red-500/50" : "border-white/10"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-[10px] text-red-400 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-gray-400">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purpleAccent transition-colors ${
                      errors.subject ? "border-red-500/50" : "border-white/10"
                    }`}
                    placeholder="Collaboration proposal"
                  />
                  {errors.subject && (
                    <p className="text-[10px] text-red-400 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-gray-400">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purpleAccent transition-colors resize-none ${
                      errors.message ? "border-red-500/50" : "border-white/10"
                    }`}
                    placeholder="Type your message here..."
                  />
                  {errors.message && (
                    <p className="text-[10px] text-red-400 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Feedback status */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>Your message has been sent successfully. I will get back to you shortly!</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purpleAccent to-cyanAccent text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:scale-100"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
