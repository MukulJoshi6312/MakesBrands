/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import testimonialsData from "../utils/testimonialsData.js";
import { BsChatQuote } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [itemsToShow, setItemsToShow] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setItemsToShow(3);
      } else {
        setItemsToShow(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex(
      (preIndex) => (preIndex + itemsToShow) % testimonialsData.length
    );
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (preIndex) =>
        (preIndex - itemsToShow + testimonialsData.length) %
        testimonialsData.length
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="pt-24 bh-8 bg-white" id="Testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* headline and description */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-shrink-0 bg-primary text-black py-1 px-8 rounded-md justify-center items-center flex">
            <h2 className="text-2xl font-bold">Testimonials</h2>
          </div>
          <div className="md:w-2/3">
            <p
              className="text-secondary 
                  md:w-1/2"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, in
              quidem.
            </p>
          </div>
        </div>

        {/* testimonial slider */}

        <div className="relative mb-12">
          {/* slider */}
          <div className="flex flex-col md:flex-row max-w-7xl mx-auto  gap-3 overflow-hidden">
            {testimonialsData
              .slice(currentIndex, currentIndex + itemsToShow)
              .map((test, index) => (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  key={index}
                  className="w-full relative py-5 md:max-w-md px-2"
                >
                  <div className="absolute top-0 left-0 z-30">
                    <BsChatQuote className="size-8" />
                  </div>
                  <div className="md:h-40 h-54 bg-white hover:bg-primary rounded-lg border hover:border-primary shadow-lg p-6 cursor-pointer transition-all duration-300">
                    <p className="text-base font-medium mb-4">{test.text}</p>
                    <p className="text-sm font-semibold text-gray-700">
                      {test.author}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* dot navigation */}
          <div className="absolute mt-5 left-1/2 transform -translate-x-1/2 flex items-center space-x-5 z-10">
            <button className="text-black " onClick={handleNext}>
              <IoArrowBack />
            </button>
            {/* dots */}
            <div className="flex space-x-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index >= currentIndex && index < currentIndex + itemsToShow
                      ? "bg-primary"
                      : "bg-gray-400"
                  }`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>

            <button className="text-black " onClick={handlePrevious}>
              <IoMdArrowForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
