import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiJavascript } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Skillful Coder.", "Front-End Developer.", "Adobe Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Felix E Correa Hidalgo</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Experienced web developer adept in all stages of
          advanced web development.
          Knowledgeable in user interface, testing,
          and debugging processes.
          Bringing forth expertise in design,
          installation, testing and maintenance of web systems.
          Equipped with a diverse and promising skill-set.
          Proficient in an assortment of technologies,
          including Javascript, ReactJS, HTML5, CSS3,
          and Microsoft SQL Server.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon"><a href="https://www.linkedin.com/in/felix-correa-hidalgo-210313254/">
              <FaFacebookF /></a>

            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon"><a href="https://www.linkedin.com/in/felix-correa-hidalgo-210313254/">
              <FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaHtml5 />
            </span>
            <span className="bannerIcon">
              <FaCss3 />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner