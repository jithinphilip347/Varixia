"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const cursorOuter = useRef(null);
  const cursorInner = useRef(null);
  const cursorText = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorOuter.current, {
        x: e.clientX - cursorOuter.current.offsetWidth / 2,
        y: e.clientY - cursorOuter.current.offsetHeight / 2,
        duration: 0.3,
        ease: "power3.out",
      });

      gsap.to(cursorInner.current, {
        x: e.clientX - cursorInner.current.offsetWidth / 2,
        y: e.clientY - cursorInner.current.offsetHeight / 2,
        duration: 0.1,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Button hover effect
    // All clickable elements selector
    const clickableElements = document.querySelectorAll(
    'button, a, li, .cursor-hover, .HomeGalleryItem, .NavContact, .NavLink li, .ContactBox a, .SocialIconBox a, .FooterSocialIcon a'
    );

    clickableElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        gsap.to(cursorOuter.current, {
        scale: 2,
        backgroundColor: "#eee",
        borderWidth: 0,
        duration: 0.3,
        });
        gsap.to(cursorInner.current, { opacity: 0, duration: 0.3 });
        cursorText.current.innerHTML = "Click<br>Here";
        gsap.to(cursorText.current, { opacity: 1, duration: 0.3 });
    });

    el.addEventListener("mouseleave", () => {
        gsap.to(cursorOuter.current, {
        scale: 1,
        backgroundColor: "transparent",
        borderWidth: 1,
        duration: 0.3,
        });
        gsap.to(cursorInner.current, { opacity: 1, duration: 0.3 });
        gsap.to(cursorText.current, { opacity: 0, duration: 0.3 });
    });
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className="cursor-outer" ref={cursorOuter}>
        <div className="cursor-text" ref={cursorText}></div>
      </div>
      <div className="cursor-inner" ref={cursorInner}></div>
    </>
  );
};

export default Cursor;
