"use client";

import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import Image from "next/image";
import { VscMenu } from "react-icons/vsc";
import Sidenav from "./Sidenav";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [sidenavOpen, setSidenavOpen] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const menuItems = ["Home", "About", "Service", "Gallery"];

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id="Nav" className={scrolled ? "scrolled" : ""}>
        <div className="container">
          <div className="NavMain">
            <div className="NavLogo">
              <Image src={Logo} alt="Logo" />
            </div>
            <div className="NavLink">
              <ul>
                {menuItems.map((item) => (
                  <li
                    key={item}
                    className={activeItem === item ? "active" : ""}
                    onClick={() => handleItemClick(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="NavContact">
              <p>Let's Talk</p>
              <VscMenu onClick={() => setSidenavOpen(true)} />
            </div>
          </div>
        </div>
      </div>

      {/* Sidenav */}
      <Sidenav isOpen={sidenavOpen} onClose={() => setSidenavOpen(false)} />
    </>
  );
};

export default Navbar;
