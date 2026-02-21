import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Steadwin Group",
      duration: "Aug 2025 – Jan 2026",
      type: "On-site | Karnataka, India",
      description: [
        "Led end-to-end development and deployment of production web applications (steadwin.in).",
        "Designed backend architecture using Spring Boot with layered structure (Controller → Service → Repository).",
        "Built secure REST APIs with JWT authentication and role-based access control.",
        "Structured relational database schemas and optimized MySQL queries for performance.",
        "Containerized backend services using Docker and managed production-ready builds.",
        "Deployed frontend on Netlify and backend services on Render for staging and testing environments.",
        "Implemented CI/CD workflows to automate build and deployment processes.",
        "Managed environment-based configurations and handled production deployment lifecycle.",
        "Collaborated with business teams to translate requirements into scalable technical solutions.",
        "Company operations ceased in early 2026.",
      ],
    },
    {
      role: "Frontend & SEO Intern",
      company: "SEOMasters.Dev",
      duration: "May 2025 – Jan 2026",
      type: "Remote | India",
      description: [
        "Worked on frontend enhancements and performance optimization.",
        "Performed technical SEO including keyword research, on-page and technical audits.",
        "Analyzed website metrics using Google Analytics and Search Console.",
        "Improved content structure and search visibility through optimization strategies.",
        "Gained understanding of how backend performance impacts SEO rankings.",
      ],
    },
    {
      role: "Customer Support Executive",
      company: "Taurus BPO Services India LLP",
      duration: "Nov 2024 – Apr 2025",
      type: "On-site | India",
      description: [
        "Handled high-volume inbound customer queries in healthcare support.",
        "Improved professional communication and conflict-resolution skills.",
        "Maintained service quality under operational pressure.",
        "Developed strong client-handling and structured communication abilities.",
      ],
    },
    {
      role: "Web Development Intern",
      company: "Internkaksha IT Solutions",
      duration: "Nov 2023 – Jan 2024",
      type: "Remote | India",
      description: [
        "Developed responsive web pages using HTML, CSS, and JavaScript.",
        "Collaborated on frontend UI improvements and performance optimization.",
        "Applied modern UI/UX practices to enhance user experience.",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-8 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-400 mb-12 text-center">
          Professional Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-blue-500 transition"
            >
              <h3 className="text-2xl font-semibold text-blue-300">
                {exp.role}
              </h3>
              <p className="text-gray-400 mt-1">
                {exp.company} • {exp.duration}
              </p>
              <p className="text-gray-500 text-sm mb-4">{exp.type}</p>

              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
