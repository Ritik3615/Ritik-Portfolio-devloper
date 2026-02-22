import React, { useState } from "react";
import fullstack from "../assets/certificates/JavaFullStack.jpg";
import infosys from "../assets/certificates/Infosys.jpg";
import walmart from "../assets/certificates/walmart.jpg";

const certifications = [
  {
    title: "Full Stack Java Developer Program",
    issuer: "JSpiders, Bengaluru",
    year: "2024",
    description:
      "Completed an intensive full-stack training program covering Java, Spring Boot, Hibernate, JDBC, MySQL, and frontend technologies. Built structured backend applications following layered architecture principles.",
    image: fullstack,
  },
  {
    title: "AI & Data Fundamentals Program",
    issuer: "Infosys Springboard (College Program)",
    year: "2023",
    description:
      "Completed AI-focused learning program covering Python for data analysis using NumPy, Pandas, and Matplotlib. Worked on basic data preprocessing, visualization, and analytical problem-solving tasks.",
    image: infosys,
  },
  {
    title: "Advanced Software Engineering Simulation",
    issuer: "Walmart Global Tech (Forage)",
    year: "2024",
    description:
      "Completed a self-selected virtual engineering simulation focused on backend architecture, data processing workflows, and real-world software engineering problem-solving.",
    image: walmart,
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-400 text-center mb-12">
          Certifications & Training
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition cursor-pointer"
              onClick={() => setSelectedCert(cert.image)}
            >
              <h3 className="text-lg font-semibold text-white">{cert.title}</h3>

              <p className="text-gray-400 mt-2">{cert.issuer}</p>

              <p className="text-gray-500 text-sm mt-1">{cert.year}</p>

              <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {selectedCert && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedCert(null)}
          >
            <img
              src={selectedCert}
              alt="Certificate"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}
