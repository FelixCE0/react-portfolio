import React, { useState } from 'react'
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { quote } from "../../assets";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-cardBg-light dark:bg-cardBg-dark border border-borderColor-light dark:border-borderColor-dark text-lightText-light dark:text-lightText-dark hover:bg-accentColor-light dark:hover:bg-accentColor-dark transition-colors z-20"
      aria-label="Next slide"
    >
      <HiArrowRight className="text-xl" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-cardBg-light dark:bg-cardBg-dark border border-borderColor-light dark:border-borderColor-dark text-lightText-light dark:text-lightText-dark hover:bg-accentColor-light dark:hover:bg-accentColor-dark transition-colors z-20"
      aria-label="Previous slide"
    >
      <HiArrowLeft className="text-xl" />
    </button>
  );
}

const InitialsAvatar = ({ initials }) => {
  return (
    <div className="w-20 h-20 rounded-full bg-accentColor-light dark:bg-accentColor-dark flex items-center justify-center text-xl font-semibold text-lightText-light dark:text-lightText-dark">
      {initials}
    </div>
  );
};

const TestimonialCard = ({ data }) => (
  <div className="rounded-2xl border border-borderColor-light dark:border-borderColor-dark bg-cardBg-light dark:bg-cardBg-dark p-8">
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="flex-shrink-0">
        <InitialsAvatar initials={data.initials} />
        <div className="mt-4">
          <h4 className="font-semibold text-lightText-light dark:text-lightText-dark">
            {data.name}
          </h4>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {data.title}
          </p>
        </div>
      </div>

      <div className="flex-grow">
        <img src={quote} alt="quote" className="w-8 h-8 mb-4 opacity-20" />
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {data.testimonial}
        </p>
        <div className="mt-6 flex items-center gap-2">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            {data.source}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonial = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [settings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  });

  const testimonialData = [
    {
      initials: "MD",
      name: "Mohammed Dayraki",
      title: "Software Application Engineer @simplyphp",
      testimonial: `I had the pleasure of working with Felix as part of my team, and I can confidently
        say that he is a dedicated and passionate developer. One of the things that stands
        out about Felix is his eagerness to learn—he's always exploring new technologies
        and approaches to improve his work. Beyond his technical skills, Felix brings
        creativity to the table, especially when it comes to frontend design.`,
      source: "via LinkedIn - March, 2025"
    },
    {
      initials: "LH",
      name: "Linkhon Hasan",
      title: "Full Stack Developer | Fedex",
      testimonial: `Felix's ability to collaborate with established apps on Shopify is particularly impressive.
        He played a key role in implementing new features that significantly enhanced our website's
        functionality. His expertise in optimizing web content for responsiveness across both desktop
        and mobile platforms greatly improved our customer experience.`,
      source: "via LinkedIn - March, 2025"
    }
  ];

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % testimonialData.length);
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
  };

  return (
    <section id="testimonial" className="py-16 md:py-24 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-lightText-light dark:text-lightText-dark mb-4">
            What People Say
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Testimonials from colleagues and clients
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block max-w-4xl mx-auto px-16 relative">
          <Slider {...settings}>
            {testimonialData.map((testimonial, idx) => (
              <div key={idx} className="px-4">
                <TestimonialCard data={testimonial} />
              </div>
            ))}
          </Slider>
        </div>

        {/* Mobile View */}
        <div className="md:hidden relative w-full px-4">
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
                <TestimonialCard data={testimonialData[currentCard]} />
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
              {testimonialData.map((_, index) => (
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
    </section>
  );
}

export default Testimonial;