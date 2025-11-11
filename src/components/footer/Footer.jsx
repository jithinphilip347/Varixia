"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { FaInstagram, FaFacebookF, FaYoutube , FaLinkedinIn} from "react-icons/fa";
import { gsap } from "gsap";
import FooterLogo from "../../../public/images/footer-logo.png";

const Footer = () => {
  const footerRef = useRef(null);
  const buttonRef = useRef(null);
  const socialIconsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    // Button hover animation
    if (buttonRef.current) {
      const el = buttonRef.current;
      el.addEventListener("mouseenter", () => {
        gsap.to(el, {
          borderImageSource:
            "linear-gradient(180deg, #05ddff, #00bdfa, #008efa, #0069f7, #003ffa)",
          borderImageSlice: 1,
          duration: 0.3,
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(el, {
          borderImageSource: "linear-gradient(180deg, #797979, #797979)",
          borderImageSlice: 1,
          duration: 0.3,
        });
      });
    }

    // socialIconsRef.current.forEach((icon) => {
    //   if (icon) {
    //     icon.addEventListener("mouseenter", () => {
    //       gsap.to(icon, {
    //         borderColor: "#05ddff",
    //         color: "#05ddff",
    //         duration: 0.3,
    //         ease: "power2.out",
    //       });
    //     });
    //     icon.addEventListener("mouseleave", () => {
    //       gsap.to(icon, {
    //         borderColor: "#d5d5d5",
    //         color: "#fff",
    //         duration: 0.3,
    //         ease: "power2.out",
    //       });
    //     });
    //   }
    // });
  }, []);

  return (
    <div id="Footer" ref={footerRef}>
      <div className="container">
        <div className="FooterMain">
          <div className="FooterSection1">
            <div className="FooterShortTitle">
              <p>Creative. Smart. Innovative.</p>
            </div>

            <div className="FooterMainTitle">
              <p>We Build Digital Experiences That Inspire</p>
            </div>

            <div className="FooterDec">
              <p>
                Varixia is a creative design agency specializing in web
                development, software solutions, and digital marketing. We help
                brands transform ideas into beautiful, high-performing digital
                products.
              </p>
            </div>

            <div className="FooterContact">
              <button ref={buttonRef}>Let&apos;s Talk</button>
            </div>

            <div className="FooterCopyright">
              <p>© {new Date().getFullYear()} Varixia Technologies. All rights reserved.</p>
            </div>
          </div>

          <div className="FooterSection2">
            <div className="FooterLogo">
              <Image
                src={FooterLogo}
                alt="Varixia Logo"
              />
            </div>

            {/* <div className="FooterSocialIcon">
              <a
                href="https://www.instagram.com/varixialabs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                ref={(el) => (socialIconsRef.current[0] = el)}
              >
                <FaInstagram />
              </a>
              <a
                href="http://facebook.com/profile.php?id=61581803855154&sk=about"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                ref={(el) => (socialIconsRef.current[1] = el)}
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/varixia-advanced-tech-lab/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                ref={(el) => (socialIconsRef.current[2] = el)}
              >
                <FaLinkedinIn />
              </a>
            </div> */}
            <div className="FooterSocialIcon">
  <a
    href="https://www.instagram.com/varixialabs/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    ref={(el) => (socialIconsRef.current[0] = el)}
  >
    <FaInstagram />
  </a>
  <a
    href="http://facebook.com/profile.php?id=61581803855154&sk=about"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    ref={(el) => (socialIconsRef.current[1] = el)}
  >
    <FaFacebookF />
  </a>
  <a
    href="https://www.linkedin.com/company/varixia-advanced-tech-lab/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    ref={(el) => (socialIconsRef.current[2] = el)}
  >
    <FaLinkedinIn />
  </a>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
