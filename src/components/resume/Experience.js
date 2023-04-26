import React from "react";
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Retail Sales Associate"
            subTitle="Auto Zone 2018-2020"
            result="USA"
            des="Leading retailer and a leading distributor 
            of automotive replacement parts and accessories."
          />
          <ResumeCard
            title="Coordinator Sales Associate "
            subTitle="GPC Napa Auto Parts 2020-Present"
            result="USA"
            des="The Napa Auto Parts division specifically 
            specializes in providing automotive replacement 
            parts, tools, and equipment to both professional 
            mechanics and do-it-yourself customers."
          />
          <ResumeCard
            title="Retail IT Solutions"
            subTitle="GPC Napa Auto Parts 2021-Present"
            result="USA"
            des="The Napa Auto Parts division specifically 
            specializes in providing automotive replacement 
            parts, tools, and equipment to both professional 
            mechanics and do-it-yourself customers."
          />
        </div>
      </div>

    </motion.div>
  );
};

export default Experience;
