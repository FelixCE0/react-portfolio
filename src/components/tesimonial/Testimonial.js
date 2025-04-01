import React, { useState } from 'react'
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { Avatar } from "flowbite-react";
import Title from '../layouts/Title'
import { quote } from "../../assets";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
              width: "12px",
              height: "12px",
              color: "blue",
              background: "#337ab7",
              borderRadius: "50%",
              cursor: "pointer",
            }
            : {
              width: "12px",
              height: "12px",
              color: "blue",
              background: "gray",
              borderRadius: "50%",
              cursor: "pointer",
            }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT Recommendations SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <Avatar
                  size="xl"
                  alt="Mohammed Dayraki"
                  className="h-72 md:h-32 lgl:h-72"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                  </p>
                  <h3 className="text-2xl font-bold">
                    Mohammed Dayraki</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Software Application Engineer @simplyphp
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Web Development
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via Linkediin - March, 2025
                      </p>
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    I had the pleasure of working with Felix as part of my team, and I can confidently say that he is a dedicated and passionate developer. One of the things that stands out about Felix is his eagerness to learn—he's always exploring new technologies and approaches to improve his work.

                    Beyond his technical skills, Felix brings creativity to the table, especially when it comes to frontend design. His ability to think outside the box and deliver visually appealing, user-friendly interfaces has been a great asset to our projects.

                    Felix also has a strong sense of curiosity. He doesn't hesitate to ask insightful questions to understand how things work, which not only helps him grow but also fosters a culture of continuous learning within the team. Additionally, he communicates issues effectively, ensuring that roadblocks are addressed promptly rather than slowing down progress.

                    I have no doubt that Felix will continue to excel in his career, and I highly recommend him to any team looking for a proactive and creative developer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Two ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <Avatar

                  size="xl"
                  alt="Linkhon Hasan"
                  className="h-72 md:h-32 lgl:h-72"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                  </p>
                  <h3 className="text-2xl font-bold">
                    Linkhon Hasan</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Full Stack Developer|Fedex
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Shopify Web Development
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via Linkediin - March, 2025
                      </p>
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    I had the pleasure of working with Felix Correa Hidalgo on several projects, and I cannot recommend him highly enough. Felix is an exceptional front-end developer with a strong proficiency in PHP, and his contributions have been invaluable to our team.

                    Felix's ability to collaborate with established apps on Shopify is particularly impressive. He played a key role in implementing new features that significantly enhanced our website's functionality, ensuring our online store remained competitive and user-friendly. Felix's expertise in optimizing web content for responsiveness across both desktop and mobile platforms greatly improved our customer experience, ensuring our site looked and performed seamlessly on any device.

                    Moreover, his technical skills in JavaScript allowed him to make key improvements to our product pages and integrate advanced features such as pre-order functionality, all while adhering to Shopify's policies. Felix also demonstrated his problem-solving skills by optimizing the site's load times, replacing existing function calls with promise-based callback functions, which resulted in noticeable performance improvements.

                    On top of his technical acumen, Felix has a strong understanding of SEO practices. He led our efforts to improve SEO methodology, driving a consistent 3% month-over-month increase in site traffic. His dedication to improving site performance and user experience is unmatched.

                    Felix's combination of front-end development skills, PHP expertise, and ability to drive continuous improvements in web functionality and SEO makes him a standout developer. He is an asset to any team, and I have no doubt he will continue to thrive in any future projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Three ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <Avatar
                  size="xl"
                  alt="Javier Carrazana"
                  className="h-72 md:h-32 lgl:h-72"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                  </p>
                  <h3 className="text-2xl font-bold">Javier Carrazana</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Mobile App Design.
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via Google - Mar 4, 2022 - Feb 30, 2023
                      </p>
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    One of the most significant advantages of Sketch is its collaboration capabilities.
                    I can easily collaborate with my team members,
                    share designs, and collect feedback in real-time.
                    This has helped us to work seamlessly and deliver
                    high-quality work on time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial