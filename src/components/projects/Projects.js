import React, { useState } from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const projectsData = [
    {
      title: "E-commerce Website",
      des: "HTML5 CSS3",
      src: projectOne
    },
    {
      title: "Auricle-Website",
      des: "Sass Scss",
      src: projectTwo
    },
    {
      title: "Todolist",
      des: "Javascript",
      src: projectThree
    }
  ];

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-borderColor-light dark:border-b-borderColor-dark"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <ProjectsCard
              title={project.title}
              des={project.des}
              src={project.src}
            />
          </motion.div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative w-full">
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <ProjectsCard
                title={projectsData[currentCard].title}
                des={projectsData[currentCard].des}
                src={projectsData[currentCard].src}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="mt-6 flex items-center justify-between px-4">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            ←
          </button>
          <div className="flex gap-2">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`w-2 h-2 rounded-full transition-colors ${currentCard === index
                  ? "bg-blue-600 dark:bg-blue-400"
                  : "bg-gray-300 dark:bg-gray-600"
                  }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects