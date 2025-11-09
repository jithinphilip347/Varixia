"use client"

import Image from "next/image";
import React, { useEffect } from "react";
import About1 from "../../assets/images/about-1.jpg";
import About2 from "../../assets/images/about-2.jpg";


const HomeAbout = () => {

  useEffect(() => {
    // Add intersection observer for fade animations
    const fadeRightElements = document.querySelectorAll('.fade-right');
    const fadeLeftElements = document.querySelectorAll('.fade-left');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    fadeRightElements.forEach(el => observer.observe(el));
    fadeLeftElements.forEach(el => observer.observe(el));
    
    return () => {
      fadeRightElements.forEach(el => observer.unobserve(el));
      fadeLeftElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div id="HomeAbout">
      <div className="container">
        {/* Heading */}
        <div className="HomeAboutHead">
          <h2>About Kalavardhini</h2>
        </div>

        <div className="HomeAboutMain">
          {/* Section 1 */}
          <div className="HomeAboutSection HomeAboutSection1">
            <div className="HomeAboutLeft">
              <div className="HomeAboutImg">
                <Image src={About1} alt="About Image" />
              </div>
            </div>
            <div className="HomeAboutRight fade-right">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ut libero ut arcu feugiat malesuada.
              </p>
              <p>
                Vivamus feugiat, purus nec luctus posuere, sapien justo
                ullamcorper nisl, non ultrices nunc justo sed lorem.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="HomeAboutSection HomeAboutSection2">
            <div className="HomeAboutLeft fade-left">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores.
              </p>
            </div>
            <div className="HomeAboutRight">
              <div className="HomeAboutImg">
                <Image src={About2} alt="About Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;