import React, { useState } from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';
import { motion, AnimatePresence } from 'framer-motion';

const Features = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const featuresData = [
    {
      title: "Business Stratagy",
      des: `Define the company's mission and values.
          Identify the company's competitive advantage.
          Analyze the market and competition.
          Set clear goals and objectives.
          Develop a plan to achieve those goals.
          Allocate resources effectively.
          Monitor progress and adjust the strategy as needed`
    },
    {
      title: "App Development",
      des: `determining the purpose, 
          features, and requirements of the app, 
          as well as the target audience, competition, and budget.`,
      icon: <AiFillAppstore />
    },
    {
      title: "SQL Optimisation",
      des: `Used to speed up the searching 
          and sorting of data in the database. 
          Properly indexing tables based on how they 
          are accessed can significantly improve query performance.`,
      icon: <SiProgress />
    },
    {
      title: "Mobile Development",
      des: `Write code in a programming 
          language such as Swift, Kotlin, or Java 
          to build the app's core features and functionalities.
           Integrate third-party libraries and APIs to add 
          additional functionality and enhance the user experience.`,
      icon: <FaMobile />
    },
    {
      title: "Adobe Design",
      des: `This application is used for designing 
          and prototyping user interfaces (UI) and user 
          experiences (UX) for websites and mobile apps. `,
      icon: <SiAntdesign />
    },
    {
      title: "Hosting Websites",
      des: `Shared hosting is a type of hosting in which multiple 
          websites share a single server and its resources.`,
      icon: <FaGlobe />
    }
  ];

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % featuresData.length);
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + featuresData.length) % featuresData.length);
  };

  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-borderColor-light dark:border-b-borderColor-dark"
    >
      <Title title="Features" des="What I Do" />

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card
              title={feature.title}
              des={feature.des}
              icon={feature.icon}
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
              <Card
                title={featuresData[currentCard].title}
                des={featuresData[currentCard].des}
                icon={featuresData[currentCard].icon}
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
            {featuresData.map((_, index) => (
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

export default Features