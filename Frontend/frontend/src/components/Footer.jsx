import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Identity */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Ritik Kumar
          </h3>
          <p className="text-sm mt-2">
            Java Full Stack Developer • Backend Focused
          </p>
          <p className="text-sm">Bengaluru, Karnataka</p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>

          <p className="flex items-center gap-2 text-sm">
            <FaEnvelope /> ritik.kumar.codes@gmail.com
          </p>

          <p className="flex items-center gap-2 text-sm mt-2">
            <FaPhone /> +91 7338495036
          </p>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-semibold mb-3">Connect</h4>

          <div className="flex gap-6 text-xl">
            <a
              href="https://github.com/Ritik3615"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/developer-ritik-sharma/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>

      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Ritik Kumar. All rights reserved.
      </div>
    </footer>
  );
}