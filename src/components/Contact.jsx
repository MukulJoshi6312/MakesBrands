/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import contactImage from "../assets/contact.png";
import { motion } from "framer-motion";
import variants from "../utils/variants.js";
const Contact = () => {
  return (
    <section className="pt-24 pb-12 bg-white " id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={variants("right", 0.1)}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="flex-shrink-0 bg-primary text-black py-1 px-8 rounded-md justify-center items-center flex">
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </div>
          <div className="md:w-2/3">
            <p
              className="text-secondary 
                  md:w-1/2"
            >
              Connect with Us:
              <br />
              Let's Discuss Your Digital Marketing Needs
            </p>
          </div>
        </motion.div>

        {/* contact form */}

        <div className="flex flex-col md:flex-row justify-between bg-tartiary rounded-lg md:p8 p-4 select-none">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
            variants={variants("right", 0.1)}
            className="w-full md:w-1/2  p-4"
          >
            <form action="" className="space-x-4 space-y-4">
              {/* radio input */}
              <div className="flex flex-col md:flex-row md:space-x-4 items-start justify-start">
                <label
                  htmlFor="general"
                  className="flex items-center mt-2 md:mt-0"
                >
                  <input
                    type="radio"
                    name="contact-type"
                    className="mr-2"
                    value="general"
                    checked="checked"
                    id="general"
                  />
                  Say Hi
                </label>

                <label
                  htmlFor="quote"
                  className="flex items-center mt-2 md:mt-0"
                >
                  <input
                    type="radio"
                    name="contact-type"
                    className="mr-2"
                    value="quote"
                    id="quote"
                  />
                  Get a Quote
                </label>
              </div>

              {/* name input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary "
                  placeholder="Name"
                />
              </div>

              {/* email input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email*
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary "
                  placeholder="Email"
                />
              </div>

              {/* text area  */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  rows="6"
                  name="message"
                  id="message"
                  className="mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary "
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
            variants={variants("left", 0.1)}
            className="relative md:flex justify-end items-center md:w-1/2 md:-m-8 overflow-hidden "
          >
            <img
              src={contactImage}
              alt=""
              className="md:absolute md:block hidden top-0 bottom-0 -right-8 h-full pr-12 py-4 "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
