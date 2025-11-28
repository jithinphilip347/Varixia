"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const HomeBanner = () => {
  const [currentSlide] = useState(0);
  const bannerContentRef = useRef(null);
  const videoRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "Connect. Automate. Innovate.",
      video: "/videos/bannerVideo.mp4",
    },
  ];

  // Try to play only once on mount, not on every render
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    // Some browsers require a user gesture, so we catch the error silently
    const playVideo = async () => {
      try {
        await videoEl.play();
      } catch (err) {
        // Autoplay might be blocked; that's okay
        console.warn("Autoplay blocked:", err);
      }
    };

    playVideo();

    // Cleanup: release the media player on unmount
    return () => {
      try {
        videoEl.pause();
        videoEl.removeAttribute("src");
        // Force reload to release underlying player in some browsers
        videoEl.load();
      } catch (err) {
        console.warn("Error cleaning up video:", err);
      }
    };
  }, []);

  return (
    <div id="HomeBanner">
      <div className="BannerMain">
        <video
          ref={videoRef}
          className="BannerVideo"
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={slides[currentSlide].video} type="video/mp4" />
        </video>

        <div className="BannerOverlay" />

        <div className="BannerContent" ref={bannerContentRef}>
          <h1 className="BannerTitle">
            {slides[currentSlide].title.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h1>

          <div className="BannerContact">
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
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
