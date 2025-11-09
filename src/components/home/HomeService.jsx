"use client";
import React, { useRef, useEffect } from "react";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import Image from "next/image"; 
import ServiceImage from "../../assets/images/ui.webp"; 
import gsap from "gsap";

const services = [
  {
    id: 1,
    title: "UI/UX Design",
    desc: "We design intuitive user experiences focused on engagement and simplicity.focused on engagement and simplicity.",
    img: ServiceImage,
  },
  {
    id: 2,
    title: "Branding",
    desc: "We build powerful brand identities that leave lasting impact.focused on engagement and simplicity.",
    img: ServiceImage,
  },
  {
    id: 3,
    title: "Animation",
    desc: "Professional motion graphics & animation for digital storytelling. focused on engagement and simplicity.",
    img: ServiceImage,
  },
  {
    id: 4,
    title: "3D Design",
    desc: "High quality product visualization & stunning 3D renders. focused on engagement and simplicity.",
    img: ServiceImage,
  },
  {
    id: 5,
    title: "Graphic Design",
    desc: "From logos to layouts, we craft stunning visual content. focused on engagement and simplicity.",
    img: ServiceImage,
  },
];

const HomeService = () => {
  // refs for GSAP
  const boxRefs = useRef([]);
  const imgRefs = useRef([]);
  const titleRefs = useRef([]);
  const descRefs = useRef([]);
  const iconRefs = useRef([]);

  // Clear duplicates
  boxRefs.current = [];
  imgRefs.current = [];
  titleRefs.current = [];
  descRefs.current = [];
  iconRefs.current = [];

  const addRefs = (refArray, el) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  // GSAP initial setup
  useEffect(() => {
    imgRefs.current.forEach((img) =>
      gsap.set(img, { x: 60, autoAlpha: 0, scale: 1, rotation: 0 })
    );
  }, []);

  // Hover animations
  const handleMouseEnter = (index) => {
    gsap.to(titleRefs.current[index], { color: "#fff", scale: 1.05, duration: 0.3 });
    gsap.to(descRefs.current[index], { color: "#fff", duration: 0.3 });
    gsap.to(iconRefs.current[index], { borderColor: "#fff", color: "#fff", duration: 0.3 });

    gsap.to(imgRefs.current[index], {
      x: 0,
      autoAlpha: 1,
      scale: 1.03,
      rotation: 2,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(titleRefs.current[index], { color: "#555", scale: 1, duration: 0.3 });
    gsap.to(descRefs.current[index], { color: "#555", duration: 0.3 });
    gsap.to(iconRefs.current[index], { borderColor: "#555", color: "#555", duration: 0.3 });

    gsap.to(imgRefs.current[index], {
      x: 60,
      autoAlpha: 0,
      scale: 1,
      rotation: 0,
      duration: 0.5,
      ease: "power3.inOut",
    });
  };

  return (
    <div id="HomeService">
      <div className="container">
        <div className="HomeServiceHead">
          <h2>Our Services</h2>
        </div>

        <div className="HomeServiceMain">
          {services.map((item, index) => (
            <div
              className="ServiceBox"
              key={item.id}
              ref={(el) => addRefs(boxRefs, el)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="ServiceBoxLeft">
                <h2 ref={(el) => addRefs(titleRefs, el)}>{item.title}</h2>
                <p ref={(el) => addRefs(descRefs, el)}>{item.desc}</p>
              </div>

              {/* Hover image */}
              <div className="ServiceImgBox" ref={(el) => addRefs(imgRefs, el)}>
                <Image src={item.img} alt={item.title} fill />
              </div>

              {/* Arrow icon */}
              <div className="ServiceIconBox" ref={(el) => addRefs(iconRefs, el)}>
                <GoArrowRight className="icon-default" />
                <GoArrowUpRight className="icon-hover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeService;
