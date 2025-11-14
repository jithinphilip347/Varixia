"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    image: "/images/Apex-gym.png",
    name: "Apex Gym",
    desc: "A modern fitness website designed for a premium gym, featuring training programs, membership plans, and trainer profiles.",
  },
  {
    id: 2,
    image: "/images/club-travex.png",
    name: "Club Travex",
    desc: "A dynamic travel booking platform showcasing international tour packages, destination highlights, and seamless inquiry options.",
  },
  {
    id: 3,
    image: "/images/yogify.png",
    name: "Yogify",
    desc: "An ecommerce website offering spiritual products including Rudraksha malas, meditation accessories, and wellness essentials.",
  },
  {
    id: 4,
    image: "/images/gcc.png",
    name: "GCC Academy",
    desc: "A coaching institute website providing MOH, DHA, HAAD exam training with course details, schedules, and expert medical faculty.",
  },
  {
    id: 5,
    image: "/images/xkeiwellness.png",
    name: "XKEI Wellness",
    desc: "A fitness and nutrition guidance platform offering personalized diet plans, workout routines, and wellness consulting.",
  },
  {
    id: 6,
    image: "/images/xkeiwellnessstore.png",
    name: "XKEI Wellness Store",
    desc: "An online store specializing in protein powders, gym supplements, and fitness nutrition products.",
  },
];

const HomeWork = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContent = scrollRef.current;

    ScrollTrigger.getAll().forEach((t) => t.kill());

    if (window.innerWidth > 1024) {
      scrollContent.style.paddingLeft = "0px";
      scrollContent.style.marginLeft = "0px";

      const scrollDistance = scrollContent.scrollWidth - window.innerWidth;

      gsap.to(scrollContent, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top+=200 top", // 🔥 FIX: Wait until full card is visible
          end: `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="HomeWork" ref={sectionRef}>
      <div className="HomeWorkHead">
        <h2>Our Works</h2>
      </div>

      <div className="HomeWorkScroll" ref={scrollRef}>
        {projects.map((project) => (
          <div key={project.id} className="HomeWorkCard">
            <div className="HomeWorkImgBox">
              <img
                src={project.image}
                alt={project.name}
                fill
                sizes="100%"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="HomeWorkDetails">
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <div className="viewButton">
                <span>View Website</span>
                <HiArrowUpRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeWork;
