"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import About1 from "../../../public/images/about-1.png";
import About2 from "../../../public/images/about-2.jpg";

const HomeAbout = () => {
  useEffect(() => {
    const fadeRightElements = document.querySelectorAll(".fade-right");
    const fadeLeftElements = document.querySelectorAll(".fade-left");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeRightElements.forEach((el) => observer.observe(el));
    fadeLeftElements.forEach((el) => observer.observe(el));

    return () => {
      fadeRightElements.forEach((el) => observer.unobserve(el));
      fadeLeftElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div id="HomeAbout">
      <div className="container">
        <div className="HomeAboutHead">
          <h2>About Varixia Labs</h2>
        </div>

        <div className="HomeAboutMain">
          <div className="HomeAboutSection HomeAboutSection1">
            <div className="HomeAboutLeft">
              <div className="HomeAboutImg">
                <Image src={About1} alt="About Image" />
              </div>
            </div>
            <div className="HomeAboutRight fade-right">
              <p>
                At Varixia Tech Lab, we deliver Complete Digital Solutions built
                on an Omni-Channel Model,helping businesses stay connected,
                consistent, and competitive in today’s digital landscape. We
                understand that every digital challenge needs a convenient,
                reliable, and result-driven solution and that’s exactly what we
                provide. From web development to digital marketing, automation,
                and analytics, Varixia is your one-stop destination for
                all digital needs.
              </p>
            </div>
          </div>
          <div className="HomeAboutSection HomeAboutSection2">
            <div className="HomeAboutLeft fade-left">
              <p>
                What We Offer: Complete Digital Transformation Solutions
                Omni-Channel Integration for Seamless User Experience Web &
                Cloud Development Digital Marketing & Brand Growth Strategies
                Smart, Scalable & Convenient Tech Solutions. From
                high-performance web development and robust cloud infrastructure
                to cutting-edge digital marketing, automation, and analytics,
                Varixia is the single partner you need to conquer your entire
                digital landscape.
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
