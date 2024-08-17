/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import ctaImage from "../assets/cta-image.png";
import { motion } from "framer-motion";
import variants from "../utils/variants.js";
const CTA = () => {
  return (
    <section className="relative py-12">
      <div className="max-w-7xl mx-auto bg-[#f3f3f3] rounded-md sm:pt-24 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 ls:px-8">
        {/* left side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={variants("right", 0.1)}
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
        >
          <h1 className="text-3xl text-secondary mb-4 font-bold">
            Let's make things happen
          </h1>
          <p className="text-gray-600 mb-6 md:w-2/3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A officia
            odit, ratione officiis voluptates cumque tempora alias?
          </p>
          <button className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-300">
            Get your free proposal
          </button>
        </motion.div>

        {/* right side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={variants("left", 0.1)}
          className="md:w-1/2 flex justify-center items-center relative"
        >
          <img
            src={ctaImage}
            alt="cta image"
            className="md:absolute md:-top-52 md:bottom-0"
            style={{ transform: "scale(1.05)" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
