"use client";

import React, { useState, useEffect } from "react";
import Logo from "../../../public/images/logo.png";
import Image from "next/image";
import { VscMenu } from "react-icons/vsc";
import Sidenav from "./Sidenav";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [sidenavOpen, setSidenavOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#HomeBanner" },
    { name: "About", link: "#HomeAbout" },
    { name: "Service", link: "#HomeService" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id, name) => {
    setActiveItem(name);
    const section = document.querySelector(id);
    if (section) {
      const offset = 80; 
      const topPosition = section.offsetTop - offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <div id="Nav" className={scrolled ? "scrolled" : ""}>
        <div className="container">
          <div className="NavMain">
            <div className="NavLogo">
              <img src='/images/logo.png' alt="Logo" />
            </div>

            <div className="NavLink">
              <ul>
                {menuItems.map((item) => (
                  <li
                    key={item.name}
                    className={activeItem === item.name ? "active" : ""}
                  >
                    <a
                      href={item.link}
                      onClick={(e) => {
                        e.preventDefault(); 
                        handleScrollToSection(item.link, item.name);
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="NavContact">
              <a href="#HomeContact">
              <p>Let's Talk</p>
              <VscMenu onClick={() => setSidenavOpen(true)} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Sidenav isOpen={sidenavOpen} onClose={() => setSidenavOpen(false)} />
    </>
  );
};

export default Navbar;

