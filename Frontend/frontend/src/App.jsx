import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Loader onFinish={() => setIsLoaded(true)} />}

      {isLoaded && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Navbar />
          <Routes>
            {/* Single-page home route */}
            <Route
              path="/"
              element={
                <>
                  <section id="home"><Home /></section>
                  <section id="about"><About /></section>
                  <section id="skills"><Skills /></section>
                  <section id="education"><Education /></section>
                  <section id="contact"><Contact /></section>
                </>
              }
            />
            {/* Projects separate page */}
            <Route path="/projects" element={<Project />} />
          </Routes>
        </motion.div>
      )}
    </>
  );
}
