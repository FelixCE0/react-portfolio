import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Stratagy"
          des="Define the company's mission and values.
          Identify the company's competitive advantage.
          Analyze the market and competition.
          Set clear goals and objectives.
          Develop a plan to achieve those goals.
          Allocate resources effectively.
          Monitor progress and adjust the strategy as needed"

        />
        <Card
          title="App Development"
          des="determining the purpose, 
          features, and requirements of the app, 
          as well as the target audience, competition, and budget."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SQL Optimisation"
          des="Used to speed up the searching 
          and sorting of data in the database. 
          Properly indexing tables based on how they 
          are accessed can significantly improve query performance."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="Write code in a programming 
          language such as Swift, Kotlin, or Java 
          to build the app's core features and functionalities.
           Integrate third-party libraries and APIs to add 
          additional functionality and enhance the user experience."
          icon={<FaMobile />}
        />
        <Card
          title="Adobe Design"
          des="This application is used for designing 
          and prototyping user interfaces (UI) and user 
          experiences (UX) for websites and mobile apps. "
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="hared hosting is a type of hosting in which multiple 
          websites share a single server and its resources."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features