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
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2025</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="IT Coordinator/Sales Associate"
            subTitle="GPC Napa Auto Parts 2020-2023"
            result="USA"
            des="Maintained fax machine and other physical equipment .
            Arrange and create and maintain inventory correctly. 
            Responsible for maintaining the IT maintenance and upgrade schedule.
            Responsible for maintaining the asset management program that applied to IT equipment loaned to field workers."
          />
          <ResumeCard
            title="Front-End Engineer Intern -> Lead Software Engineer"
            subTitle="ECODE 2023"
            result="USA"
            des="Installing and configuring Shopify apps to add specific features and functionality to the online store. 
            Setting up the basic structure and settings of a new Shopify store.
            Adding and organizing products within the Shopify store. 
            Ensuring the Shopify store is responsive and displays correctly on various devices and screen sizes."
          />
          <ResumeCard
            title=" PHP Laravel Developer"
            subTitle="Standup Wireless 2023-2025"
            result="USA"
            des="Spearheaded the development of a robust FilamentPHP-based admin panel, enhancing data
management efficiency by 25% and reducing manual errors by 15%.
Designed and implemented RESTful APIs using Laravel, improving system integration and data
flow by 30%.
Optimized SQL queries and database indexing, achieving a 40% reduction in query execution time.
Managed AWS infrastructure, including EC2 instances and RDS, ensuring high availability and
scalability, which reduced downtime by 20%.
Conducted thorough code reviews and implemented CI/CD pipelines, improving deployment
efficiency by 25% and reducing production issues by 30%."
          />
          <ResumeCard
            title=" Freelance Software Engineer"
            subTitle="Upwork 2022 – Present"
            result="USA"
            des="Delivered high-quality web development solutions to a diverse range of clients, achieving a 95%
client satisfaction rate.
Developed custom Laravel applications for e-commerce platforms, resulting in a 30% increase in
client sales.
Created responsive and user-friendly front-end interfaces using React and Tailwind CSS, improving
user engagement by 25%.
Integrated third-party APIs, including Twilio for SMS notifications and payment gateways,
enhancing functionality and user experience.
Provided ongoing maintenance and support, ensuring optimal performance and security for client
applications."
          />
        </div>
      </div>

    </motion.div>
  );
};

export default Experience;
