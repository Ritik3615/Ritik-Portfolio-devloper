import { motion } from "framer-motion";
import { useState, useEffect } from "react";


const headingText = "About Me";

export default function About() {
  const image = "/public/portfoliopic.jpg"; 
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (typing) {
      if (index < headingText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(headingText.slice(0, index + 1));
          setIndex(index + 1);
        }, 150);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      if (index > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(headingText.slice(0, index - 1));
          setIndex(index - 1);
        }, 100);
      } else {
        timeout = setTimeout(() => setTyping(true), 700);
      }
    }

    return () => clearTimeout(timeout);
  }, [index, typing]);

  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-300 bg-lines text-black px-8 flex flex-col md:flex-row items-center gap-10">
      
      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center"
      >
        <img
          src={image}
          alt="Ritik Kumar"
          className="w-72 h-72 object-cover rounded-lg shadow-lg border-4 border-blue-400"
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-5"
      >
        <h2 className="text-4xl font-bold text-blue-400 font-mono border-r-2 border-blue-400 pr-2 inline-block">
          {displayedText}
        </h2>
        <p className="text-lg text-black leading-relaxed">
          I'm <span className="text-blue-600 font-semibold">Ritik Kumar</span>, a passionate{" "}
          <strong>Full-Stack Developer</strong> with expertise in{" "}
          <strong>React, Node.js, MongoDB, Tailwind CSS, and Java</strong>.  
          I enjoy building scalable, high-performance applications and creating{" "}
          clean, modern UI/UX experiences.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed">
          Alongside frontend and backend development, I have strong experience in{" "}
          <strong>Java programming</strong> and have earned multiple certifications in{" "}
          web development, data handling, and problem-solving.
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-400">4+</h3>
            <p className="text-gray-400 text-sm">Projects</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-700">4+</h3>
            <p className="text-gray-900 text-sm">Certificates</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-900">1+</h3>
            <p className="text-gray-900 text-sm">Years Exp</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
