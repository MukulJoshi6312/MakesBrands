/* eslint-disable no-unused-vars */
import React from "react";
import { servicesData } from "../utils/services.js";

import LinkIcon from "../assets/link-icon.png";
import { motion } from "framer-motion";
import variants from "../utils/variants.js";
const Services = () => {
  return (
    <section className="pt-24 bg-white pb-16 " id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* headline and description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={variants("right", 0.1)}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="flex-shrink-0 bg-primary text-black py-1 px-16 rounded-md justify-center items-center flex">
            <h2 className="text-2xl font-bold">Services</h2>
          </div>
          <div className="md:w-2/3">
            <p
              className="text-secondary 
                    md:w-2/3"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, in
              quidem, aut sunt tempore tenetur odit repudiandae ipsum quod
              ducimus pariatur unde dolore quibusdam fugiat.
            </p>
          </div>
        </motion.div>

        {/* card sections  */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
              variants={variants("bottom", 0.2)}
              key={index}
              className={`flex flex-col sm:flex-row md:justify-between md:items-center gap-6  p-6 rounded-lg border border-[#191A23] ${service.backgroundColor} ${service.textColor} cursor-pointer group `}
            >
              <div className="md:w-1/2 flex flex-col h-full justify-between">
                <button
                  className={`text-xl py-1.5 font-semibold mb-2 rounded-sm
                                    sm:w-60 ${service.foregroundColor}`}
                >
                  {service.title}
                </button>
                <a
                  href="#"
                  className={`flex items-center gap-4 py-2 rounded-md text-black hover:bg-opacity-80 hover:text-black/80`}
                >
                  <img
                    src={LinkIcon}
                    alt=""
                    className="size-6 rounded-full group-hover:rotate-[32deg] transition-all duration-300"
                  />
                  <span className="text-lg font-medium">Learn More</span>
                </a>
              </div>

              {/* image */}
              <div className="md:w-1/2 order-first md:order-last">
                <img
                  src={service.image}
                  alt=""
                  className="w-full object-cover rounded-md mb-4"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
