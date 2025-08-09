// Projects.jsx
import React from "react";

const projects = [
  {
    title: "MERN E-commerce App",
    summary:
      "Full-stack e-commerce platform with JWT auth, bcrypt encryption, and Flipkart-style UI.",
    tech: "MongoDB, Express, React, Node.js, Tailwind",
    liveLink: "https://flipcartlite-demo-gamma.vercel.app/",
    gitLink: "https://github.com/Ritik3615/E-commerce-app",
  },
  {
    title: "Car Rental System",
    summary: "Auto car getting detected if car is available depend on that by entering the details car will be rented.",
    tech: "Java, Core java, OOPS",
    liveLink: "#",
    gitLink: "https://github.com/Ritik3615/CarRentedSystem",
  },
  {
    title: "Monika Interior site",
    summary: "Interior design website showcasing various design projects and services.",
    tech: "html css node mongo",
    liveLink: "#",
    gitLink: "https://github.com/Ritik3615/CarRentedSystem",
  },
];

export default function Projects() {
  return (
    <section className="py-10 bg-gray-100 bg-gradient-to-r from-blue-500 to-gray-300 bg-lines" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 transform: scale(.9)">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-5 transform transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 text-white"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-white mt-2">{project.summary}</p>
              <p className="text-sm text-white mt-1">
                <strong>Tech:</strong> {project.tech}
              </p>
              <div className="flex gap-4 mt-4">
                {project.liveLink !== "#" && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Live
                  </a>
                )}
                {project.gitLink !== "#" && (
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-800"
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
