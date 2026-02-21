import React, { useState } from "react";
import fullstack from "../assets/certificates/javaFullStack.jpg";
import infosys from "../assets/certificates/infosys.jpg";
import walmart from "../assets/certificates/walmart.jpg";


const certifications = [
  {
    title: "Full Stack Java Developer",
    issuer: "JSpiders",
    year: "2024",
    image: fullstack,
  },
  {
    title: "Springboard Program",
    issuer: "Infosys Springboard",
    year: "2024",
    image: infosys,
  },
  {
    title: "Advanced Software Engineering Simulation",
    issuer: "Walmart Global Tech (Forage)",
    year: "2024",
    image: walmart,
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-blue-400 text-center mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition cursor-pointer"
              onClick={() => setSelectedCert(cert.image)}
            >
              <h3 className="text-lg font-semibold text-white">
                {cert.title}
              </h3>
              <p className="text-gray-400 mt-2">
                {cert.issuer}
              </p>
              <p className="text-gray-500 text-sm mt-1">
                {cert.year}
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