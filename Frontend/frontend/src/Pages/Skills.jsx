import React from "react";
import {
  FaReact,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaJsSquare,
  FaDatabase,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiGithubactions,
  SiVite,
} from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { icon: <FaJava className="text-red-500" />, name: "Java" },
        { icon: <FaJsSquare className="text-yellow-400" />, name: "JavaScript" },
        { icon: <FaDatabase className="text-gray-400" />, name: "SQL" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { icon: <SiSpringboot className="text-green-500" />, name: "Spring Boot" },
        { icon: <SiHibernate className="text-yellow-400" />, name: "Hibernate" },
        { icon: <FaDatabase className="text-gray-400" />, name: "JDBC" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { icon: <FaReact className="text-cyan-400" />, name: "React" },
        { icon: <SiVite className="text-purple-400" />, name: "Vite" },
        { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { icon: <SiMysql className="text-blue-400" />, name: "MySQL" },
        { icon: <SiPostgresql className="text-blue-500" />, name: "PostgreSQL" },
      ],
    },
    {
      title: "DevOps",
      skills: [
        { icon: <FaDocker className="text-blue-400" />, name: "Docker" },
        { icon: <FaGitAlt className="text-red-500" />, name: "GitHub" },
        { icon: <SiGithubactions className="text-gray-300" />, name: "CI/CD" },
        { icon: <FaAws className="text-orange-400" />, name: "AWS" },
      ],
    },
    {
      title: "Core Concepts",
      skills: [
        { icon: <FaJava className="text-red-400" />, name: "OOP" },
        { icon: <FaDatabase className="text-gray-400" />, name: "DBMS" },
        { icon: <FaJsSquare className="text-yellow-400" />, name: "DSA" },
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-8 py-10">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-blue-400 text-center mb-12">
          Technical Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition"
            >
              <h3 className="text-lg font-semibold text-blue-300 mb-4">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className=" hover:scale-105 transition"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}