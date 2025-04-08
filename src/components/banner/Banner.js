import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section className="relative w-full py-20">
      <div className="relative container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Content - Left Side */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                  Felix E Correa
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-500 dark:text-gray-400">
                  Hidalgo
                </h2>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Results-driven Software Engineer with 5+ years of experience in developing
                scalable web applications using Laravel, FilamentPHP, React, and Node.js. Proven
                track record in leading development teams, optimizing codebases, and delivering
                high-quality software solutions.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-6 pt-4">
                <motion.a
                  href="https://github.com/felixecorehb"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900/20 dark:hover:to-blue-800/20 transition-all duration-300 shadow-[0_2px_10px_-3px_rgba(6,182,212,0.3)] dark:shadow-[0_2px_10px_-3px_rgba(6,182,212,0.2)]"
                >
                  <FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/felix-correa-hidalgo"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900/20 dark:hover:to-blue-800/20 transition-all duration-300 shadow-[0_2px_10px_-3px_rgba(6,182,212,0.3)] dark:shadow-[0_2px_10px_-3px_rgba(6,182,212,0.2)]"
                >
                  <FaLinkedinIn className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </motion.a>
                <motion.a
                  href="https://instagram.com/felixecorehb"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900/20 dark:hover:to-blue-800/20 transition-all duration-300 shadow-[0_2px_10px_-3px_rgba(6,182,212,0.3)] dark:shadow-[0_2px_10px_-3px_rgba(6,182,212,0.2)]"
                >
                  <FaInstagram className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block lg:flex-1 w-full max-w-md"
          >
            <div className="relative">
              {/* Decorative background blur */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />

              {/* Image container with modern styling */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-blue-500/20 dark:from-transparent dark:via-blue-400/5 dark:to-blue-400/20" />
                  <img
                    src="https://avatars.githubusercontent.com/u/126504032?v=4"
                    alt="Felix E Correa"
                    className="w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;