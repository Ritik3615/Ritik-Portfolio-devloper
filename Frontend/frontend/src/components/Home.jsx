import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import laptopImage from "../assets/portfolio.png";
import resume from "../assets/Ritik_fullstack.pdf";

const fullName = "Ritik Kumar";

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (typing) {
      if (index < fullName.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullName.slice(0, index + 1));
          setIndex(index + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (index > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(fullName.slice(0, index - 1));
          setIndex(index - 1);
        }, 60);
      } else {
        timeout = setTimeout(() => setTyping(true), 800);
      }
    }

    return () => clearTimeout(timeout);
  }, [index, typing]);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.15), transparent 40%), radial-gradient(circle at 70% 70%, rgba(139,92,246,0.15), transparent 40%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      {/* Left Content */}
      <div className="flex-1 space-y-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold leading-snug"
        >
          Hi, I'm{" "}
          <span className="text-blue-400 font-mono border-r-2 border-blue-400 pr-1">
            {displayedText}
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-semibold text-gray-300"
        >
          Java Full Stack Developer | Spring Boot • React • MySQL • Docker • AWS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg text-gray-200 max-w-xl leading-relaxed"
        >
          I build production-ready web applications using Spring Boot and React
          with structured layered architecture. Experienced in developing secure
          REST APIs with JWT authentication, implementing role-based access
          control, containerizing services using Docker, and deploying scalable
          systems on AWS. I focus on clean backend design, maintainable code,
          and reliable end-to-end delivery.
        </motion.p>

        {/* Impact Stats */}
        <div className="flex flex-wrap gap-8 pt-4">
          <div>
            <h3 className="text-2xl font-bold text-blue-400">1+ YOE</h3>
            <p className="text-gray-400 text-sm">Professional Experience</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-400">6+ Projects</h3>
            <p className="text-gray-400 text-sm">Built & Deployed</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-400">1 Production</h3>
            <p className="text-gray-400 text-sm">Live Application</p>
          </div>
        </div>

        {/* Buttons */}
        <motion.div className="space-x-4 pt-4">
          <a
            href={resume}
            download
            className="bg-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Download Resume
          </a>

          <button
            onClick={() => navigate("/projects")}
            className="bg-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-600 transition"
          >
            View Projects
          </button>

          <button
            onClick={() => navigate("/experience")}
            className="bg-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            Experience
          </button>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex-1 flex justify-center relative z-10"
      >
        <img
          src={laptopImage}
          alt="Java Full Stack Developer Workspace"
          className="w-[300px] md:w-[420px] rounded-xl shadow-2xl object-contain"
        />
      </motion.div>
    </section>
  );
}
