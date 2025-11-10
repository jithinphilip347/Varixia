"use client";

import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { RiArrowUpSLine } from "react-icons/ri";


const ScrollWhatsapp = () => {
  const [show, setShow] = useState(false);

  // Show button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scroll-whatsapp-container">
      {show && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <RiArrowUpSLine />
        </button>
      )}
      <a
        href="https://wa.me/+917012725965" 
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default ScrollWhatsapp;
