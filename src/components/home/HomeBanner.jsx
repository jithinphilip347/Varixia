"use client"
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaInstagram, FaFacebookF, FaYoutube  , FaTiktok } from 'react-icons/fa';
import { RiArrowLeftWideFill , RiArrowRightWideFill } from "react-icons/ri";
import { PiLineVertical } from "react-icons/pi";


const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const bannerContentRef = useRef(null);
  
  // Sample data for slides
  const slides = [
    {
      id: 1,
      title: "Connect. Automate. Innovate.",
      categoryLeft: "VIDEO / DANCE",
      categoryRight: "INDUSTRY   ARTS",
      video: "/videos/bannerVideo.mp4"
    },
    
    // {
    //   id: 2,
    //   title: "Creative\nExpressions",
    //   categoryLeft: "PHOTOGRAPHY / MUSIC",
    //   categoryRight: "INDUSTRY   MUSIC",
    //   video: "/videos/bannerVideo2.mp4"
    // },
    // {
    //   id: 3,
    //   title: "Dance\nAcademy",
    //   categoryLeft: "PERFORMANCE / ARTS",
    //   categoryRight: "INDUSTRY   ARTS",
    //   video: "/videos/bannerVideo3.mp4"
    // }
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  // Animation with GSAP
  useEffect(() => {
    if (bannerContentRef.current) {
      // Animate out
      gsap.to(bannerContentRef.current.children, {
        opacity: 0,
        x: -100,
        duration: 0.4,
        stagger: 0.1,
        onComplete: () => {
          // Animate in
          gsap.fromTo(bannerContentRef.current.children, 
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 0.6, stagger: 0.1 }
          );
        }
      });
    }
  }, [currentSlide]);

  // Function to render categoryLeft with different colors
  const renderCategoryLeft = (text) => {
    const parts = text.split(' / ');
    return (
      <>
        <span className="fixed-color">{parts[0]} / </span>
        <span className="change-color">{parts[1]}</span>
      </>
    );
  };

  // Function to render categoryRight with different colors
  const renderCategoryRight = (text) => {
    const parts = text.split('  ');
    return (
      <>
        <span className="fixed-color">{parts[0]}  </span>
        <span className="change-color">{parts[1]}</span>
      </>
    );
  };

  return (
    <div id="HomeBanner">
      <div className="BannerMain">
        <video className="BannerVideo" autoPlay muted loop>
          <source src={slides[currentSlide].video} type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="BannerOverlay"></div>

        {/* Left Navigation */}
        <div className="SideNav leftNav">
          <div className="NavInner">
            <button className="NavText" onClick={prevSlide}>PREV</button>
          </div>
        </div>

        {/* Right Navigation */}
        <div className="SideNav rightNav">
          <div className="NavInner">
            <button className="NavText" onClick={nextSlide}>NEXT</button>
          </div>
        </div>

        {/* Center Content */}
        <div className="BannerContent" ref={bannerContentRef}>
          <div className="SlideCounter">
            <span className="CurrentSlide">{(currentSlide + 1).toString().padStart(2, '0')}</span>
            <span className="TotalSlides">/{totalSlides.toString().padStart(2, '0')}</span>
          </div>
          
          <h1 className="BannerTitle">
            {slides[currentSlide].title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h1>
          
          <div className="DanceBannerBox">
            <div className="ArtsBox">
              <p>{renderCategoryLeft(slides[currentSlide].categoryLeft)}</p>
            </div>
            <div className="IndustryBox">
              <p>{renderCategoryRight(slides[currentSlide].categoryRight)}</p>
            </div>
          </div>
          
          <div className="BannerContact">
            <div className="ContactBox">
              <a href="#contact" className="lets-talk">
                LET'S TALK
                <span className="underline"></span>
              </a>
            </div>
            <div className="SocialIconBox">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaTiktok />
              </a>
            </div>
          </div>
          <div className='SlideArrows'>
            <div className='Arrows'>
              <button className="ArrowBtn" onClick={prevSlide}>
                <RiArrowLeftWideFill />
              </button>
              <PiLineVertical />
              <button className="ArrowBtn" onClick={nextSlide}>
                <RiArrowRightWideFill />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner