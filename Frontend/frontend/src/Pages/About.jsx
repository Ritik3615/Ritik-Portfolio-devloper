import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const headingText = "ow I Work";

export default function About() {
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
        }, 100);
      } else {
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (index > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(headingText.slice(0, index - 1));
          setIndex(index - 1);
        }, 60);
      } else {
        timeout = setTimeout(() => setTyping(true), 800);
      }
    }

    return () => clearTimeout(timeout);
  }, [index, typing]);

  return (
    <section className="min-h-screen py-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-8 flex flex-col items-center justify-center">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full space-y-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 font-mono border-r-2 border-blue-400 pr-2 inline-block">
          H{displayedText}
        </h2>

        {/* Mission Workflow */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* 1. Deep Backend Focus */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-blue-500 hover:scale-105 transition">
            <h3 className="text-xl font-bold text-blue-400 mb-4">
              💻 01 — Backend First
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              When I start a project, my first focus is architecture. 
              I design Controller → Service → Repository layers, define 
              clean entity relationships, structure APIs properly, and 
              ensure authentication & authorization are secure from the beginning.
            </p>
          </div>

          {/* 2. Debug & Stability */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-purple-500 hover:scale-105 transition">
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              🔍 02 — Deep Debugging
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              I don’t ignore errors — I chase them. 
              Whether it’s a 500 server error, JWT filter issue, 
              incorrect SQL joins, or deployment misconfiguration, 
              I trace logs, analyze request flow, inspect headers, 
              and debug until the root cause is clear.
            </p>
          </div>

          {/* 3. Clean Delivery */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-cyan-500 hover:scale-105 transition">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">
              🚀 03 — Structured Delivery
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              After backend stability, I integrate frontend using 
              Vite + React + Tailwind. I test APIs in Postman, 
              validate response formats, handle edge cases, and 
              deploy using Docker with proper environment configs. 
              I don’t stop until the system runs reliably in production.
            </p>
          </div>

        </div>

        {/* Final Statement */}
        <div className="pt-6">
          <p className="text-gray-400 text-lg leading-relaxed">
            When I’m on a mission, I stay locked in until the system is stable, 
            optimized, and production-ready. I learn through debugging, refine 
            through iteration, and build with long-term reliability in mind.
          </p>
        </div>

      </motion.div>
    </section>
  );
}