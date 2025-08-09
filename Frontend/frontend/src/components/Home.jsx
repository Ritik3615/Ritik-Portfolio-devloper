import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import laptopImage from "../assets/Tech Desktop Wallpaper.jpeg";

const fullName = "Ritik Kumar";

export default function Home() {
  // typing effect (previously discussed)
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
        }, 150);
      } else {
        timeout = setTimeout(() => setTyping(false), 1000);
      }
    } else {
      if (index > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(fullName.slice(0, index - 1));
          setIndex(index - 1);
        }, 100);
      } else {
        timeout = setTimeout(() => setTyping(true), 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [index, typing]);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-8 bg-gradient-to-r from-gray-900 to-gray-300 bg-lines text-white overflow-hidden">
      
      {/* Background blinking lighting div */}
      <div
        className="absolute inset-0 pointer-events-none rounded-lg"
        style={{
          animation: "colorBlink 10s ease-in-out infinite",
          opacity: 0.2,
          filter: "blur(40px)",
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

        {/* ...rest unchanged... */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-semibold text-gray-300"
        >
          Full-Stack Developer | React, Node.js, MongoDB, Tailwind CSS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg text-black max-w-xl leading-relaxed"
        >
          I build high-performance, scalable, and user-friendly web applications. From responsive front-ends to efficient back-ends, I bring ideas to life with modern tools and clean, maintainable code. I focus on delivering solutions that not only meet business goals but also enhance user experience, follow industry best practices, and remain adaptable for future growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-x-4"
        >
          <a
            href="/resume.pdf"
            download
            className="bg-blue-500 px-6 py-2 rounded-lg text-base font-semibold hover:bg-blue-600 transition"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="bg-gray-700 px-6 py-2 rounded-lg text-base font-semibold hover:bg-gray-600 transition"
          >
            Contact Me
          </a>
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
          alt="Developers at Work"
          className="w-[300px] md:w-[420px] rounded-lg shadow-lg object-contain"
        />
      </motion.div>
    </section>
  );
}
