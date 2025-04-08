import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const experienceData = [
    {
      title: "IT Coordinator/Sales Associate",
      subTitle: "GPC Napa Auto Parts",
      date: "2020-2023",
      description: `Maintained and managed IT infrastructure while handling sales responsibilities.
        Arranged, created, and maintained inventory systems accurately.
        Responsible for IT maintenance scheduling, equipment upgrades, and asset management program
        for field workers' equipment. Improved system efficiency and reduced equipment downtime through
        proactive maintenance procedures.`
    },
    {
      title: "Front-End Engineer Intern → Lead Software Engineer",
      subTitle: "ECODE",
      date: "2023",
      description: `Led Shopify store development and optimization initiatives. Specialized in installing and
        configuring Shopify apps for enhanced functionality. Established robust store structures
        and implemented responsive design principles. Managed product organization and ensured
        cross-device compatibility. Successfully transitioned from intern to lead role through
        demonstrated technical excellence.`
    },
    {
      title: "PHP Laravel Developer",
      subTitle: "Standup Wireless",
      date: "2023-2025",
      description: `Spearheaded the development of a robust FilamentPHP-based admin panel, enhancing data
        management efficiency by 25% and reducing manual errors by 15%. Designed and implemented
        RESTful APIs using Laravel, improving system integration and data flow by 30%. Optimized
        SQL queries and database indexing, achieving a 40% reduction in query execution time.
        Managed AWS infrastructure, including EC2 instances and RDS, ensuring high availability
        and scalability, which reduced downtime by 20%.`
    },
    {
      title: "Freelance Software Engineer",
      subTitle: "Upwork",
      date: "2022 – Present",
      description: `Delivered high-quality web development solutions to a diverse range of clients, achieving
        a 95% client satisfaction rate. Developed custom Laravel applications for e-commerce
        platforms, resulting in a 30% increase in client sales. Created responsive and user-friendly
        front-end interfaces using React and Tailwind CSS, improving user engagement by 25%.
        Integrated third-party APIs, including Twilio for SMS notifications and payment gateways.`
    }
  ];

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % experienceData.length);
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + experienceData.length) % experienceData.length);
  };

  return (
    <div className="w-full">
      {/* Desktop View */}
      <div className="hidden md:flex flex-col gap-6">
        {experienceData.map((experience, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <ResumeCard
              title={experience.title}
              subTitle={experience.subTitle}
              date={experience.date}
            >
              {experience.description}
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
                title={experienceData[currentCard].title}
                subTitle={experienceData[currentCard].subTitle}
                date={experienceData[currentCard].date}
              >
                {experienceData[currentCard].description}
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
            {experienceData.map((_, index) => (
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

export default Experience;
