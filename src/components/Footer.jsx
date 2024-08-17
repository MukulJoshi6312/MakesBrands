/* eslint-disable no-unused-vars */
import React from "react";
import footerLogo from "../assets/footer-logo.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import FooterContact from "./FooterContact";
const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="bg-secondary rounded-t-2xl">
        {/* first section */}

        <div className="flex flex-col md:flex-row md:justify-between gap-6 px-4 sm:px-6 lg:ps-8 md:items-center py-12">
          {/* logo section */}
          <div>
            <img src={footerLogo} alt="" className="h-8 " />
          </div>
          {/* menu items */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <a href="#" className="text-white hover:text-gray-400">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              About Us
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Services
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Use Cases
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Contact
            </a>
          </div>
          {/* social icons */}

          <div className="flex md:justify-end space-x-4">
            <a href="" className="text-black bg-white p-1.5 rounded-full">
              <FaFacebookF className="text-black hover:text-gray-400" />
            </a>
            <a href="" className="text-black bg-white p-1.5 rounded-full">
              <FaTwitter className="text-black hover:text-gray-400" />
            </a>
            <a href="" className="text-black bg-white p-1.5 rounded-full">
              <FaLinkedinIn className="text-black hover:text-gray-400" />
            </a>
          </div>
        </div>

        {/* contact and newsletter */}
        <FooterContact />

        <hr className="my-4 border-white mx-4 sm:px-6 lg:px-8" />
        <div className="flex flex-wrap md:gap-8 text-white px-4 sm:px-6 lg:px-8 py-5">
          <p>Copy right 2024 Mukul Joshi, All Rights Reserved</p>
          <p className="underline underline-offset-4">
            <a href="#">Privacy Police</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
