import React, { useState } from 'react'
import { Link } from "react-scroll";
import { motion } from 'framer-motion';
import { RiSunLine, RiMoonClearLine } from 'react-icons/ri';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { logo } from "../../assets/index"
import { navLinksdata } from '../../constants';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const menuItems = [
    { label: 'Home', target: 'home' },
    { label: 'Features', target: 'features' },
    { label: 'Projects', target: 'projects' },
    { label: 'Resume', target: 'resume' },
    { label: 'Testimonial', target: 'testimonial' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex items-center gap-2"
          >
            <img
              src="https://avatars.githubusercontent.com/u/126504032?v=4"
              alt="Felix E Correa"
              className="w-10 h-10 rounded-full md:hidden"
            />
            <span className="hidden md:block text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              FELIX.DEV
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.target}
                to={item.target}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="relative flex items-center justify-center w-10 h-10"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 dark:opacity-100 transition-opacity"
                initial={false}
              />
              <motion.div
                className="relative z-10"
                initial={false}
                animate={{ rotate: isDarkMode ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {isDarkMode ? (
                  <RiMoonClearLine className="w-5 h-5 text-blue-400" />
                ) : (
                  <RiSunLine className="w-5 h-5 text-amber-500" />
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-600 dark:bg-gray-300 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-600 dark:bg-gray-300 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-600 dark:bg-gray-300 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.target}
                to={item.target}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Dark Mode Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="w-full flex items-center justify-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? (
                <RiMoonClearLine className="w-5 h-5 text-blue-400" />
              ) : (
                <RiSunLine className="w-5 h-5 text-amber-500" />
              )}
              <span className="text-sm font-medium">Toggle theme</span>
            </motion.button>
          </div>
        </motion.div>
      </nav>
    </header>
  );
}

export default Navbar