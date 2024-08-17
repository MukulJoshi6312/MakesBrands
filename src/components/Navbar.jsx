/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const menuItems = [
    { name: "About us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "Team", href: "#Team" },
    { name: "Testimonials", href: "#Testimonials" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  //   const toggleMenu = () => {
  //     setIsOpen(!isOpen);
  //   };

  const handleMenuClick = (name) => {
    setActiveItem(name);
    setIsOpen(false);
  };

  useEffect(() => {
    const sections = menuItems.map((item) => document.querySelector(item.href));
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = "";
      sections.forEach((section) => {
        if (
          section &&
          section.offsetTop < scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveItem(
        menuItems.find((item) => item.href === `${currentSection}`)?.name || ""
      );
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuItems]);

  return (
    <nav className="fixed w-full top-0 left-0 right-0 shadow-md z-50 bg-white">
      {/* logo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 ">
          <div>
            <a href="/">
              <img src="/logo.png" alt="logo" className="h-8 " />
            </a>
          </div>

          <div className="space-x-8 hidden md:flex items-center ">
            {/* nav items larg devices */}

            {menuItems.map((item, index) => (
              <a
                onClick={() => handleMenuClick(item.name)}
                key={index}
                href={item.href}
                className={`text-black px-2 py-1 hover:bg-primary rounded-md underline-offset-4 transition-all duration-300
                    ${activeItem === item.name ? "bg-primary text-black" : ""}
                    `}
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              className="border px-4 py-2 border-black hover:bg-primary hover:border-primary rounded-md transition-all duration-300"
            >
              Request a quote
            </a>
          </div>

          <div className="md:hidden flex items-center ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <IoClose className="size-6" />
              ) : (
                <GiHamburgerMenu className="size-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile Menu */}

      {isOpen && (
        <div className="md:hidden bg-white shadow-2xl">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item, index) => (
              <a
                onClick={() => handleMenuClick(item.name)}
                key={index}
                href={item.href}
                className={`flex text-black px-2 py-1 hover:bg-primary rounded-md underline-offset-4 transition-all duration-300
                     ${activeItem === item.name ? "text-primary" : ""}
                    `}
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              className={`border block mt-12 mt-4 px-4 py-2 border-black hover:bg-primary hover:border-primary rounded-md transition-all duration-300`}
            >
              Request a quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
