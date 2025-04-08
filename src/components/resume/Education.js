import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const educationData = [
    {
      title: "Computer Science",
      subTitle: "Broward College",
      date: "2018 - 2022",
      description: `Completed coursework in software development, data structures, algorithms, and web development.
        Participated in coding competitions and hackathons, developing practical problem-solving skills.
        Maintained a strong academic performance while working part-time in the technology sector.`
    },
    {
      title: "Web Development",
      subTitle: "Sheridan Tech College",
      date: "2022 - 2023",
      description: `Specialized in operating system commands, web document development, design, e-commerce and promotion,
        and advanced scripting. Gained hands-on experience with modern web technologies and best practices
        for building scalable web applications.`
    },
    {
      title: "Secondary School Education",
      subTitle: "Hollywood Hills High",
      date: "2014 - 2018",
      description: `Graduated with honors, focusing on STEM subjects including computer science and mathematics.
        Participated in various technology clubs and coding workshops, laying the foundation for my
        software development career.`
    }
  ];

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % educationData.length);
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + educationData.length) % educationData.length);
  };

  return (
    <div className="w-full">
      {/* Desktop View */}
      <div className="hidden md:flex flex-col gap-6">
        {educationData.map((education, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <ResumeCard
              title={education.title}
              subTitle={education.subTitle}
              date={education.date}
            >
              {education.description}
            </ResumeCard>
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
              <ResumeCard
                title={educationData[currentCard].title}
                subTitle={educationData[currentCard].subTitle}
                date={educationData[currentCard].date}
              >
                {educationData[currentCard].description}
              </ResumeCard>
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
            {educationData.map((_, index) => (
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
    </div>
  );
}

export default Education