"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { PiLineVertical } from "react-icons/pi";

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const bannerContentRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "Connect. Automate. Innovate.",
      // categoryLeft: "VIDEO / AI",
      // categoryRight: "INDUSTRY   TECHNOLOGY",
      video: "/videos/bannerVideo.mp4",
    },
  ];

  // const totalSlides = slides.length;

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % totalSlides);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  // };

  // useEffect(() => {
  //   if (bannerContentRef.current) {
  //     gsap.to(bannerContentRef.current.children, {
  //       opacity: 0,
  //       x: -100,
  //       duration: 0.4,
  //       stagger: 0.1,
  //       onComplete: () => {
  //         gsap.fromTo(
  //           bannerContenftRef.current.children,
  //           { opacity: 0, x: 100 },
  //           { opacity: 1, x: 0, duration: 0.6, stagger: 0.1 }
  //         );
  //       },
  //     });
  //   }
  // }, [currentSlide]);

  // const renderCategoryLeft = (text) => {
  //   const parts = text.split(" / ");
  //   return (
  //     <>
  //       <span className="fixed-color">{parts[0]} / </span>
  //       <span className="change-color">{parts[1]}</span>
  //     </>
  //   );
  // };

  // const renderCategoryRight = (text) => {
  //   const parts = text.split("  ");
  //   return (
  //     <>
  //       <span className="fixed-color">{parts[0]} </span>
  //       <span className="change-color">{parts[1]}</span>
  //     </>
  //   );
  // };

  return (
    <div id="HomeBanner">
      <div className="BannerMain">
        <video className="BannerVideo" autoPlay muted loop>
          <source src={slides[currentSlide].video} type="video/mp4" />
        </video>

        <div className="BannerOverlay"></div>

        {/* <div className="SideNav leftNav">
          <div className="NavInner">
            <button className="NavText" onClick={prevSlide}>
              PREV
            </button>
          </div>
        </div>

        <div className="SideNav rightNav">
          <div className="NavInner">
            <button className="NavText" onClick={nextSlide}>
              NEXT
            </button>
          </div>
        </div> */}

        <div className="BannerContent" ref={bannerContentRef}>
          <div className="SlideCounter">
            {/* <span className="CurrentSlide">
              {(currentSlide + 1).toString().padStart(2, "0")}
            </span>
            <span className="TotalSlides">
              /{totalSlides.toString().padStart(2, "0")}
            </span> */}
          </div>

          <h1 className="BannerTitle">
            {slides[currentSlide].title.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h1>

          {/* <div className="DanceBannerBox">
            <div className="ArtsBox">
              <p>{renderCategoryLeft(slides[currentSlide].categoryLeft)}</p>
            </div>
            <div className="IndustryBox">
              <p>{renderCategoryRight(slides[currentSlide].categoryRight)}</p>
            </div>
          </div> */}

          <div className="BannerContact">
            {/* <div className="ContactBox">
              <a href="#contact" className="lets-talk">
                LET'S TALK
                <span className="underline"></span>
              </a>
            </div> */}
            <div className="SocialIconBox">
              <a
                href="https://www.instagram.com/varixialabs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="http://facebook.com/profile.php?id=61581803855154&sk=about"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/varixia-advanced-tech-lab/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          {/* <div className="SlideArrows">
            <div className="Arrows">
              <button className="ArrowBtn" onClick={prevSlide}>
                <RiArrowLeftWideFill />
              </button>
              <PiLineVertical />
              <button className="ArrowBtn" onClick={nextSlide}>
                <RiArrowRightWideFill />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
