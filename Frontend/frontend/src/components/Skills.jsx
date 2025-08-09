import { useState } from "react";
// import { SiJava } from "react-icons/si";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJsSquare,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMongodb } from "react-icons/si";
import certJspider from "../assets/JavaFullStack.jpg";
import certWebTech from "../assets/Internkaksha.jpg";
import certWalmart from "../assets/WELMART-CERTIFICATE.jpg";
import certInfosys from "../assets/Infosys.jpg";

export default function Skills() {
  const [selectedCert, setSelectedCert] = useState(null);

  const skill = [
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    // { name: "Java", icon: <SiJava className="text-red-500" /> },
  ];

  const skills = [
    {
      name: "Full Stack Java",
      company: "JSpiders",
      cert: certJspider,
    },
    {
      name: "Web Technologies",
      company: "Internkaksha",
      cert: certWebTech,
    },
    {
      name: "Advanced Software Engineering",
      company: "Walmart Global Tech Forage",
      cert: certWalmart,
    },
    {
      name: "Springboard Program",
      company: "Infosys Springboard",
      cert: certInfosys,
    },
  ];

  return (
    <>
      <section
        id="skills"
        className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-300 bg-lines text-white px-8 py-6"
      >
        <h2 className="text-4xl font-bold text-blue-400 mb-12 text-center">
          Skills & Certificates
        </h2>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-700">
                <th className="p-3">Skill</th>
                <th className="p-3">Company</th>
                <th className="p-3">Certificate</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-600 hover:bg-gray-800 transition"
                >
                  <td className="p-3">{skill.name}</td>
                  <td className="p-3">{skill.company}</td>
                  <td className="p-3">
                    <button
                      onClick={() => setSelectedCert(skill.cert)}
                      className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition"
                    >
                      View Certificate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative max-w-full max-h-full">
              <img
                src={selectedCert}
                alt="Certificate"
                className="max-w-screen max-h-screen object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 bg-red-600 px-3 py-1 rounded hover:bg-red-500 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
      <section className="py-7 bg-gray-900 text-white bg-gradient-to-r from-gray-900 to-gray-300 bg-lines">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">My Skills</h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-8 text-5xl justify-center">
            {skill.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center space-y-2 hover:scale-110 transition-transform cursor-default"
                title={skill.name}
              >
                {skill.icon}
                <span className="text-sm mt-1">{skill.name}</span>
              </div>
            ))}
            {/* <SiJava className="text-red-500" size={48} /> */}
          </div>
        </div>
      </section>
    </>
  );
}
