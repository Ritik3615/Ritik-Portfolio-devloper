import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // icons for menu

const letterAnimation = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 },
  }),
};

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "About", target: "about" },
    { name: "Skills", target: "skills" },
    { name: "Education", target: "education" },
    { name: "Contact", target: "contact" },
  ];

  const handleMenuClick = (target) => {
    if (location.pathname === "/") {
      scroller.scrollTo(target, { smooth: true, duration: 500, offset: -70 });
    } else {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(target, { smooth: true, duration: 500, offset: -70 });
      }, 400);
    }
    setMenuOpen(false); // close mobile menu after click
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      scroller.scrollTo("home", { smooth: true, duration: 500, offset: -70 });
    } else {
      navigate("/");
    }
  };

  // Blinking + color changing effect
  const colors = ["#ff4d4d", "#4dff4d", "#4da6ff", "#ffff4d", "#ff66ff", "#66ffff"];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-300 text-white sticky top-0 z-50 shadow-md">
      {/* Left: Logo */}
      <motion.div
        className="text-xl font-bold flex cursor-pointer"
        onClick={handleLogoClick}
      >
        {"Ritik Kumar".split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterAnimation}
            initial="hidden"
            animate="visible"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      {/* Center: Blinking Welcome Text (hidden on small screens) */}
      <motion.div
        style={{ color: colors[colorIndex] }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 5.5, repeat: Infinity }}
        className="text-lg font-semibold hidden md:block"
      >
        Welcome to Developer World
      </motion.div>

      {/* Right: Menu for Desktop */}
      <ul className="hidden md:flex space-x-6 font-medium">
        {menuItems.map((item, i) => (
          <motion.li
            key={item.name}
            custom={i}
            variants={letterAnimation}
            initial="hidden"
            animate="visible"
            className="hover:text-gray-300 cursor-pointer"
            onClick={() => handleMenuClick(item.target)}
          >
            {item.name}
          </motion.li>
        ))}
        <motion.li
          custom={menuItems.length}
          variants={letterAnimation}
          initial="hidden"
          animate="visible"
          className="hover:text-gray-300 cursor-pointer"
          onClick={() => navigate("/projects")}
        >
          Projects
        </motion.li>
      </ul>

      {/* Hamburger menu button for Mobile */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-14 right-4 bg-gray-800 rounded-lg shadow-lg p-5 space-y-4 md:hidden">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => handleMenuClick(item.target)}
            >
              {item.name}
            </div>
          ))}
          <div
            className="hover:text-gray-300 cursor-pointer"
            onClick={() => {
              navigate("/projects");
              setMenuOpen(false);
            }}
          >
            Projects
          </div>
        </div>
      )}
    </nav>
  );
}
