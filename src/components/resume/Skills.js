import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact, SiTypescript, SiTailwindcss, SiNodedotjs,
  SiLaravel, SiPhp, SiMysql, SiAmazonaws, SiVuedotjs,
  SiJavascript, SiPython, SiRuby, SiGit, SiBootstrap,
  SiHtml5, SiCss3, SiSass, SiTwilio
} from 'react-icons/si';

const Skills = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <SiReact className="text-[#61DAFB]" />, level: 90 },
        { name: "Vue.js", icon: <SiVuedotjs className="text-[#4FC08D]" />, level: 85 },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, level: 92 },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, level: 85 },
        { name: "HTML/CSS", icon: <SiHtml5 className="text-[#E34F26]" />, level: 95 },
        { name: "SCSS", icon: <SiSass className="text-[#CC6699]" />, level: 88 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 95 },
        { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" />, level: 90 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" />, level: 85 },
        { name: "Laravel", icon: <SiLaravel className="text-[#FF2D20]" />, level: 88 },
        { name: "PHP", icon: <SiPhp className="text-[#777BB4]" />, level: 85 },
        { name: "Python", icon: <SiPython className="text-[#3776AB]" />, level: 80 },
        { name: "Ruby", icon: <SiRuby className="text-[#CC342D]" />, level: 75 },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, level: 90 },
        { name: "AWS", icon: <SiAmazonaws className="text-[#232F3E]" />, level: 75 },
        { name: "Git", icon: <SiGit className="text-[#F05032]" />, level: 92 },
        { name: "Twilio", icon: <SiTwilio className="text-[#F22F46]" />, level: 80 },
      ]
    }
  ];

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % skillCategories.length);
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
  };

  const SkillCard = ({ category, animate = false }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
      <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
        {category.title}
      </h3>
      <div className="space-y-4">
        {category.skills.map((skill, skillIdx) => (
          <div key={skillIdx} className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6">
                {skill.icon}
              </div>
              <span className="text-gray-700 dark:text-gray-200 font-medium">
                {skill.name}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: animate ? skillIdx * 0.1 : 0 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <SkillCard category={category} />
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
              <SkillCard category={skillCategories[currentCard]} animate={true} />
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
            {skillCategories.map((_, index) => (
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
};

export default Skills;