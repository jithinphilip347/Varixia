"use client";

import React from "react";
import { MdClose } from "react-icons/md";

const Sidenav = ({ isOpen, onClose }) => {
  const handleScrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      const offset = 80; 
      const topPosition = section.offsetTop - offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
      onClose(); 
    }
  };

  const menuItems = [
    { name: "Home", link: "#HomeBanner" },
    { name: "About", link: "#HomeAbout" },
    { name: "Service", link: "#HomeService" },
    { name: "Contact", link: "#HomeContact" },
  ];

  return (
    <div id="Sidenav" className={isOpen ? "open" : ""}>
      <div className="SidenavContent">
        {/* Close Icon */}
        <MdClose className="closeIcon" onClick={onClose} />

        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection(item.link);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
