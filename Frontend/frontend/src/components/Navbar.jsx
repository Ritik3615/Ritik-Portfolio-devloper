import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollItems = [
    { name: "About", target: "about" },
    { name: "Skills", target: "skills" },
    { name: "Contact", target: "contact" },
  ];

  const routeItems = [
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
  ];

  const handleScroll = (target) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(target, { smooth: true, duration: 500, offset: -70 });
      }, 400);
    } else {
      scroller.scrollTo(target, { smooth: true, duration: 500, offset: -70 });
    }
    setMenuOpen(false);
  };

  const handleRoute = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white sticky top-0 z-50 shadow-md border-b border-gray-800">

      {/* Logo */}
      <div
        className="text-xl font-bold text-blue-400 cursor-pointer"
        onClick={() => navigate("/")}
      >
        Ritik Kumar
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-6 font-medium">

        {scrollItems.map((item) => (
          <li
            key={item.name}
            className="hover:text-blue-400 cursor-pointer transition"
            onClick={() => handleScroll(item.target)}
          >
            {item.name}
          </li>
        ))}

        {routeItems.map((item) => (
          <li
            key={item.name}
            className="hover:text-blue-400 cursor-pointer transition"
            onClick={() => handleRoute(item.path)}
          >
            {item.name}
          </li>
        ))}

        <a
          href="https://github.com/Ritik3615"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white text-lg"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/developer-ritik-sharma/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white text-lg"
        >
          <FaLinkedin />
        </a>
      </ul>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-gray-800 rounded-lg shadow-lg p-6 space-y-4 md:hidden">

          {scrollItems.map((item) => (
            <div
              key={item.name}
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => handleScroll(item.target)}
            >
              {item.name}
            </div>
          ))}

          {routeItems.map((item) => (
            <div
              key={item.name}
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => handleRoute(item.path)}
            >
              {item.name}
            </div>
          ))}

          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/Ritik3615"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/developer-ritik-sharma/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              <FaLinkedin />
            </a>
          </div>

        </div>
      )}
    </nav>
  );
}