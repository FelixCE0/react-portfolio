import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaHtml5, FaCss3, FaPhp, FaLaravel, FaVuejs, FaGithub, FaInstagram } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiJavascript } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Skillful Coder.", "Full-Stack Developer.", "Adobe Designer."],
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
            cursorColor="#3b82f6"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Results-driven Software Engineer with 5+ years of experience in developing scalable web applications using
          Laravel, FilamentPHP, React, and Node.js. Proven track record in leading development teams, optimizing
          codebases, and delivering high-quality software solutions. Adept at solving complex problems and passionate
          about continuous learning and innovation.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon"><a href="https://www.linkedin.com/in/felix-correa-hidalgo-210313254/">
              <FaInstagram /></a>

            </span>
            <span className="bannerIcon"><a href="https://github.com/FelixCE0">
              <FaGithub /></a>
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
              <FaPhp />
            </span>
            <span className="bannerIcon">
              <FaLaravel />
            </span>
            <span className="bannerIcon">
              <FaVuejs />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner