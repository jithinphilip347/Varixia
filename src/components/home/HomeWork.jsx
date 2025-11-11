"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Project1 from "../../../public/images/project1.webp";
import Project2 from "../../../public/images/project2.webp";
import Project3 from "../../../public/images/project3.webp";
import Project4 from "../../../public/images/project4.webp";
import Project5 from "../../../public/images/project5.webp";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, image: Project1, name: "Project 1", desc: "Lorem ipsum dolor sit amet." },
  { id: 2, image: Project2, name: "Project 2", desc: "Consectetur adipiscing elit." },
  { id: 3, image: Project3, name: "Project 3", desc: "Sed do eiusmod tempor incididunt." },
  { id: 4, image: Project4, name: "Project 4", desc: "Ut labore et dolore magna aliqua." },
  { id: 5, image: Project5, name: "Project 5", desc: "Duis aute irure dolor in reprehenderit." },
];

const HomeWork = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContent = scrollRef.current;

    ScrollTrigger.getAll().forEach((t) => t.kill());

    const mm = window.matchMedia("(min-width: 1025px)");

    if (mm.matches) {
      const scrollDistance = scrollContent.scrollWidth - window.innerWidth;

      gsap.to(scrollContent, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
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
              <Image
                src={project.image}
                alt={project.name}
                fill
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
