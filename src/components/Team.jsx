/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import teamData from "../utils/teamData.js";
import { FaLinkedin } from "react-icons/fa";

import { motion } from "framer-motion";
import variants from "../utils/variants.js";
const Team = () => {
  const [visibleTeam, setVisibleTeam] = useState(6);

  const handleShowMore = () => {
    setVisibleTeam((preCount) => preCount + 3);
  };

  return (
    <section className="pt-24 pb-12 bg-white" id="Team">
      {/* team heading */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={variants("right", 0.1)}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="flex-shrink-0 bg-primary text-black py-1 px-8 rounded-md justify-center items-center flex">
            <h2 className="text-2xl font-bold">Team</h2>
          </div>
          <div className="md:w-2/3">
            <p
              className="text-secondary 
                  md:w-1/2"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, in
              quidem, aut sunt tempore tenetur odit repudiandae ipsum quod
            </p>
          </div>
        </motion.div>

        {/* team card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.slice(0, visibleTeam).map((member, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
              variants={variants("bottom", 0.1)}
              key={index}
              className="bg-white hover:bg-primary rounded-lg border hover:border-primary shadow-lg p-6 cursor-pointer transition-all decoration-purple-300"
            >
              <div className="relative mb-4">
                <div className="flex flex-col sm:flex-row sm:items-end items-start gap-4 justify-start">
                  <img
                    src={member.image}
                    alt="member image"
                    className="rounded-full w-32 h-32 object-cover"
                  />

                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-secondary">{member.position}</p>
                  </div>
                  <a
                    href="#"
                    className="absolute top-0 right-0 bg-black hover:bg-primary hover:text-black text-white p-2 rounded-full cursor-pointer transition-all duration-300"
                  >
                    <FaLinkedin className="size-5" />
                  </a>
                </div>
              </div>

              <div>
                <hr className="my-4 border-secondary " />
                <p className="text-black">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* show more button  */}

        {visibleTeam < teamData.length ? (
          <div className="flex justify-end mt-8 w-full">
            <button
              onClick={handleShowMore}
              className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-300"
            >
              See All Team
            </button>
          </div>
        ) : (
          <div className="flex justify-end mt-8 w-full">
            <button
              onClick={() => setVisibleTeam(6)}
              className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-300"
            >
              See Less Team
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
