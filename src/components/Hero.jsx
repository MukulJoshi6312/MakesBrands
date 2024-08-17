/* eslint-disable no-unused-vars */
import React from "react";
import bannerImg from "../assets/banner.png";
import Logos from "./Logos";
import { motion } from "framer-motion";
import variants from "../utils/variants";
const Hero = () => {
  return (
    <section className="bg-white pt-12 " id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:-24">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* left side */}
          <div className="md:w-1/2">
            <div className="md:w-2/3">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
                variants={variants("bottom", 0.2)}
                className="text-4xl text-secondary mb-4"
              >
                Navigate the digital landscape for success
              </motion.h1>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
                variants={variants("bottom", 0.5)}
                className="text-gray-600 mb-6"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                officia odit, ratione officiis voluptates cumque tempora alias?
                Nobis, tenetur, deserunt saepe quibusdam, vitae iste maiores
                doloribus nihil repellat est magni!
              </motion.p>
              <motion.button
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
                variants={variants("bottom", 0.4)}
                className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-300"
              >
                Book a consultation
              </motion.button>
            </div>
          </div>

          {/* right side */}
          <div className="md:w-1/2 order-first md:order-last">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
              variants={variants("bottom", 0.2)}
              className="w-full h-auto rounded-md"
              src={bannerImg}
              alt="banner image"
            />
          </div>
        </div>

        {/* brands logo */}

        <Logos />
      </div>
    </section>
  );
};

export default Hero;
