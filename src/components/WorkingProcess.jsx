/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ProcessSteps from "../utils/processSteps.js";

import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

import { motion } from "framer-motion";
import variants from "../utils/variants.js";

const WorkingProcess = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="pt-12 bg-white">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        {/* headline and description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={variants("right", 0.1)}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="flex-shrink-0 bg-primary text-black py-1 px-8 rounded-md justify-center items-center flex">
            <h2 className="text-2xl font-bold">our Working Process</h2>
          </div>
          <div className="md:w-2/3">
            <p
              className="text-secondary 
                  md:w-1/3"
            >
              Step-by-Step Guide to Achieving Your Business Goals
            </p>
          </div>
        </motion.div>

        {/* accordian sections*/}

        <div>
          {ProcessSteps.map((step, i) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
              variants={variants("bottom", 0.1)}
              key={i}
              className={`border rounded-md mb-4 overflow-hidden ${
                openIndex === i ? "border-primary" : "border-gray-300"
              }`}
            >
              <button
                onClick={() => handleToggle(i)}
                className={`w-full text-left p-4 flex justify-between items-center
                ${openIndex === i ? "bg-primary" : "bg-tartiary"}`}
              >
                <div className="flex items-center">
                  <span className="text-secondary font-semibold text-2xl mr-4">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold">{step.question}</h3>
                </div>
                <div className="bg-white text-black border p-1.5 rounded-full">
                  {openIndex === i ? <FaMinus /> : <FaPlus />}
                </div>
              </button>

              {openIndex === i && (
                <div className="p-4 bg-primary text-secondary">
                  <hr className="mt-0 mb-5 border-black" />
                  <p>{step.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
