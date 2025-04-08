import React, { useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from "./Experience"
import { motion } from "framer-motion";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-borderColor-light dark:border-b-borderColor-dark">
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col gap-4 md:gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-lightText-dark">
            My Resume
          </h2>
          <div className="flex gap-4 md:gap-8">
            <button
              onClick={() => {
                setEducationData(true);
                setSkillData(false);
                setExperienceData(false);
              }}
              className={`text-base font-medium px-6 py-2 rounded-lg transition-colors ${educationData
                ? "bg-accentColor-light dark:bg-accentColor-dark text-lightText-light dark:text-lightText-dark"
                : "bg-cardBg-light dark:bg-cardBg-dark text-zinc-600 dark:text-zinc-400 hover:bg-accentColor-light dark:hover:bg-accentColor-dark hover:text-lightText-light dark:hover:text-lightText-dark"
                }`}
            >
              Education
            </button>
            <button
              onClick={() => {
                setEducationData(false);
                setSkillData(true);
                setExperienceData(false);
              }}
              className={`text-base font-medium px-6 py-2 rounded-lg transition-colors ${skillData
                ? "bg-accentColor-light dark:bg-accentColor-dark text-lightText-light dark:text-lightText-dark"
                : "bg-cardBg-light dark:bg-cardBg-dark text-zinc-600 dark:text-zinc-400 hover:bg-accentColor-light dark:hover:bg-accentColor-dark hover:text-lightText-light dark:hover:text-lightText-dark"
                }`}
            >
              Skills
            </button>
            <button
              onClick={() => {
                setEducationData(false);
                setSkillData(false);
                setExperienceData(true);
              }}
              className={`text-base font-medium px-6 py-2 rounded-lg transition-colors ${experienceData
                ? "bg-accentColor-light dark:bg-accentColor-dark text-lightText-light dark:text-lightText-dark"
                : "bg-cardBg-light dark:bg-cardBg-dark text-zinc-600 dark:text-zinc-400 hover:bg-accentColor-light dark:hover:bg-accentColor-dark hover:text-lightText-light dark:hover:text-lightText-dark"
                }`}
            >
              Experience
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-5xl mt-10 md:mt-16">
        {educationData && <Education />}
        {skillData && <Skills />}
        {experienceData && <Experience />}
      </div>
    </section>
  );
}

export default Resume