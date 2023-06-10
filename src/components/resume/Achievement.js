import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2023</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Retail Sales Associate"
            subTitle="March 2018-June 2020"
            result="Success"
            des="Greeting customers, responding to questions, improving engagement. 
            Directing customers to merchandise within the store. 
            Operating cash registers, and balancing drawers.
            Achieving established goals."
          />
          <ResumeCard
            title="Coordinator Sales Associate"
            subTitle="June 2020-Present"
            result="Success"
            des="Change Price of the item in the store.
            Arrange and create and maintain inventory correctly.
            Developed and maintained the planograms.
            Assisted Manager in overall operations."
          />
          <ResumeCard
            title="Retail IT Solutions"
            subTitle="June 2021-Present"
            result="Success"
            des="Help Store Manager with Microsoft Excel.
            Create Banner for product Adobe Photoshop. "
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018-Present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Retail Sales Associate"
            subTitle="Auto Zone 2018-2020"
            result="Success"
            des="Leading retailer and a leading distributor
             of automotive replacement parts and accessories."
          />
          <ResumeCard
            title="IT Coordinator/Sales Associate"
            subTitle="GPC Napa Auto Parts 2020-Present"
            result="Success"
            des="The Napa Auto Parts division specifically
             specializes in providing automotive replacement parts,
              tools, and equipment to both professional mechanics
               and do-it-yourself customers.
            "
          />
          <ResumeCard
            title="Shopify Web Developer"
            subTitle="Ecode 2023-Present"
            result="Success"
            des="Retail Apparel and Fashoin"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
