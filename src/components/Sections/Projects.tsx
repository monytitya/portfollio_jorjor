import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Cpu, Settings, ShoppingBag, Users, Key, Briefcase } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Project {
  id: number;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  techStack: string[];
  githubLink: string;
  liveLink: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "User Management System",
    description: "Enterprise user management backend providing user profile maintenance, role management, audit logging, and bulk import/export capabilities.",
    icon: Users,
    features: [
      "Role-Based Access Control (RBAC)",
      "Audit Logging & System Monitoring",
      "Bulk CSV/Excel Import and Export",
      "Dynamic User Profile Management"
    ],
    techStack: ["Java", "Spring Boot", "Spring Data JPA", "PostgreSQL", "Maven"],
    githubLink: "https://github.com/monytitya/user-management-system",
    liveLink: "#",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 2,
    name: "E-Commerce Backend API",
    description: "Highly scalable API infrastructure for an e-commerce platform supporting product cataloging, order creation, dynamic cart systems, and payment gateway integration.",
    icon: ShoppingBag,
    features: [
      "Secure Stripe/PayPal Integration",
      "Redis Caching for Product Catalog",
      "Transactional Order Processing",
      "Optimistic Locking for Inventory Sync"
    ],
    techStack: ["Java", "Spring Boot", "Hibernate", "MySQL", "Redis", "REST API"],
    githubLink: "https://github.com/monytitya/ecommerce-backend-api",
    liveLink: "#",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 3,
    name: "Spring Security Auth System",
    description: "A plug-and-play authorization server implementing modern security patterns including JWT token issuance, token rotation, and oauth2 integration.",
    icon: Key,
    features: [
      "Stateless Session using JWTs",
      "Automatic Refresh Token Rotation",
      "OAuth2 Social Login Configuration",
      "Brute-Force Attack Prevention"
    ],
    techStack: ["Java", "Spring Security", "Spring Boot", "JWT", "PostgreSQL"],
    githubLink: "https://github.com/monytitya/spring-security-auth",
    liveLink: "#",
    color: "from-cyan-500 to-teal-600"
  },
  {
    id: 4,
    name: "Microservices Architecture Project",
    description: "A cloud-native microservices ecosystem featuring service discovery, API Gateway routing, centralized configurations, and distributed tracing.",
    icon: Cpu,
    features: [
      "Eureka Service Registry",
      "Spring Cloud Gateway with Rate Limiting",
      "Resilience4j Circuit Breakers",
      "Distributed Tracing with Zipkin/Sleuth"
    ],
    techStack: ["Java", "Spring Cloud", "Spring Boot", "Docker", "RabbitMQ"],
    githubLink: "https://github.com/monytitya/microservices-architecture",
    liveLink: "#",
    color: "from-emerald-500 to-green-600"
  },
  {
    id: 5,
    name: "Inventory Management System",
    description: "Real-time stock level tracker with automated purchase order generation, supplier directories, and warning thresholds for low inventory items.",
    icon: Settings,
    features: [
      "Real-time Inventory tracking",
      "Automated Reorder Point Alerts",
      "Supplier & Manufacturer Directory",
      "Detailed Stock Movement Ledger"
    ],
    techStack: ["Java", "Spring Boot", "Spring Data JPA", "Oracle DB", "Bootstrap"],
    githubLink: "https://github.com/monytitya/inventory-management-system",
    liveLink: "#",
    color: "from-orange-500 to-red-600"
  },
  {
    id: 6,
    name: "Employee Management System",
    description: "HR dashboard backend supporting department structures, payroll history tracking, leaves requests, and performance records.",
    icon: Briefcase,
    features: [
      "Hierarchical Department Structure",
      "Leaves Request Approval Workflow",
      "Salary & Payroll Statement Ledger",
      "Performance Assessment Dashboard"
    ],
    techStack: ["Java", "Spring Boot", "Spring Security", "MySQL", "Thymeleaf"],
    githubLink: "https://github.com/monytitya/employee-management-system",
    liveLink: "#",
    color: "from-purple-500 to-indigo-600"
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden" style={{ background: "rgba(6, 2, 27, 0.7)" }}>
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purpleAccent/5 rounded-full blur-[150px] pointer-events-none"></div>

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
            Featured Software <span className="text-gradient-purple-cyan">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mb-4"
          >
            A collection of production‑ready backend projects, APIs, and microservices engineered using Java and Spring Boot.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purpleAccent to-cyanAccent mx-auto rounded-full"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel rounded-2xl overflow-hidden hover:border-cyanAccent/30 hover:shadow-glassCyan transition-all duration-300 flex flex-col h-full text-left"
              >
                {/* Visual Header Card with Icon */}
                <div className={`h-24 bg-gradient-to-r ${project.color} flex items-center justify-between px-6 relative`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <IconComponent className="w-10 h-10 text-white relative z-10 opacity-90 drop-shadow-md" />
                  <div className="px-2.5 py-1 rounded-md bg-black/30 backdrop-blur-md text-[10px] text-white font-bold border border-white/10 relative z-10">
                    Java/Spring
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{project.name}</h3>
                    <p className="text-sm text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5">Key Features:</h4>
                    <ul className="space-y-1.5 mb-6">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="text-xs text-gray-300 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyanAccent"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[10px] bg-white/5 border border-white/10 text-cyanAccent font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 border-t border-white/5 pt-4">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white font-bold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        Code Repository
                      </a>
                      <a
                        href={project.liveLink}
                        className="px-4 py-2 rounded-xl bg-cyanAccent/15 hover:bg-cyanAccent/25 text-xs text-cyanAccent font-bold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Projects;
