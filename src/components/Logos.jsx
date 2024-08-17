/* eslint-disable no-unused-vars */
import React from "react";

import logo1 from "../assets/logos/amazon.png";
import logo2 from "../assets/logos/dribble.png";
import logo3 from "../assets/logos/hubspot.png";
import logo4 from "../assets/logos/netflix.png";
import logo5 from "../assets/logos/notion.png";
import logo6 from "../assets/logos/zoom.png";

const Logos = () => {
  return (
    <div className="pt-24 overflow-hidden ">
      <div className="flex space-x-12 justify-between items-center animate-marquee">
        <img src={logo1} alt="logo1" />
        <img src={logo2} alt="logo2" />
        <img src={logo3} alt="logo3" />
        <img src={logo4} alt="logo4" />
        <img src={logo5} alt="logo5" />
        <img src={logo6} alt="logo6" />
        <img src={logo1} alt="logo1" />
        <img src={logo2} alt="logo2" />
        <img src={logo3} alt="logo3" />
        <img src={logo4} alt="logo4" />
        <img src={logo5} alt="logo5" />
        <img src={logo6} alt="logo6" />
      </div>
    </div>
  );
};

export default Logos;
