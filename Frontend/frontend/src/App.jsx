import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Education from "./Pages/Education";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Certifications from "./Pages/Certificate";


export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Loader onFinish={() => setIsLoaded(true)} />}

      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 text-white min-h-screen"
        >
          <Navbar />

          <Routes>
            {/* Main Home Page */}
            <Route
              path="/"
              element={
                <>
                  <section id="home">
                    <Home />
                  </section>

                  <section id="about">
                    <About />
                  </section>

                  <section id="skills">
                    <Skills />
                  </section>
                  
                  <section id="certifications">
                    <Certifications />
                  </section>

                  <section id="education">
                    <Education />
                  </section>

                  <section id="contact">
                    <Contact />
                  </section>

                  <Footer />
                </>
              }
            />

            {/* Separate Big Sections */}
            <Route
              path="/projects"
              element={
                <>
                  <Projects />
                  <Footer />
                </>
              }
            />

            <Route
              path="/experience"
              element={
                <>
                  <Experience />
                  <Footer />
                </>
              }
            />
          </Routes>
        </motion.div>
      )}
    </>
  );
}