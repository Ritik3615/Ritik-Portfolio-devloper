import React from "react";

const projects = [
  {
    title: "Steadwin Group – Production Web Application",
    summary:
      "Designed and deployed a production-grade full-stack application with structured Spring Boot backend, secure JWT authentication, optimized database queries, and Docker-based cloud deployment.",
    tech: "Spring Boot, React (Vite), MySQL, JWT, Docker, AWS EC2",
    liveLink: "https://steadwin.in",
    gitLink: "#",
  },
  {
    title: "Full Stack CRUD Application",
    summary:
      "Built a structured CRUD system with REST APIs, database integration, and frontend-backend communication. Implemented clean API response handling and environment-based deployment configuration.",
    tech: "Spring Boot, React, MySQL, Docker",
    liveLink: "https://crud-operation-by-ritik.netlify.app/",
    gitLink: "https://github.com/Ritik3615/Crud-Application",
  },
  {
    title: "Car Rental Management System",
    summary:
      "Built a Java OOP system that manages car availability, rental bookings, and core business logic with modular design.",
    tech: "Core Java, OOP Principles",
    liveLink: "#",
    gitLink: "https://github.com/Ritik3615/CarRentedSystem",
  },
  {
    title: "Full Stack E-commerce Platform",
    summary:
      "Implemented an e-commerce system with authentication, encrypted passwords, product management, and RESTful APIs.",
    tech: "MongoDB, Express, React, Node.js, JWT",
    liveLink: "https://flipcartlite-demo-gamma.vercel.app/",
    gitLink: "https://github.com/Ritik3615/E-commerce-app",
  },
];

export default function Projects() {
  return (
    <section
      className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-8 py-16"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-400 text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-blue-500 transition"
            >
              <h3 className="text-2xl font-semibold text-blue-300">
                {project.title}
              </h3>

              <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                {project.summary}
              </p>

              <p className="text-gray-400 text-sm mt-2">
                <strong>Tech Stack:</strong> {project.tech}
              </p>

              <div className="flex gap-4 mt-6">
                {project.liveLink !== "#" && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition text-sm"
                  >
                    Live
                  </a>
                )}

                {project.gitLink !== "#" && (
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition text-sm"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
