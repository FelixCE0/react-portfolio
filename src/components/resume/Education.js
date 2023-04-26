import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Associate of Science"
            subTitle="Broward College 2018-2021"
            result="3.90/4"
            des="Complete two years of specialized training designed 
            to allow you enter the workforce in a high-demand career
             with guaranteed job skills or continue your education 
             by transferring to a bachelor's program such as Broward
              College's"
          />
          <ResumeCard
            title="Web Development"
            subTitle="Sheridan Tech College (2022 - 2023)"
            result="4.90/5"
            des="Operating system commands and web document development, design, e-commerce and promotion, and scripting."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Hollywood Hills High (2014 - 2018)"
            result="3.08/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}
    </motion.div>
  );
}

export default Education