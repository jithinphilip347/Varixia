"use client";
import React from "react";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";

import Project1 from "../../assets/images/project1.webp";
import Project2 from "../../assets/images/project2.webp";
import Project3 from "../../assets/images/project3.webp";
import Project4 from "../../assets/images/project4.webp";
import Project5 from "../../assets/images/project5.webp";

const projects = [
  { id: 1, image: Project1, name: "Project 1", desc: "Lorem ipsum content" },
  { id: 2, image: Project2, name: "Project 2", desc: "Lorem ipsum content" },
  { id: 3, image: Project3, name: "Project 3", desc: "Lorem ipsum content" },
  { id: 4, image: Project4, name: "Project 4", desc: "Lorem ipsum content" },
  { id: 5, image: Project5, name: "Project 5", desc: "Lorem ipsum content" },
];

const HomeWork = () => {
  return (
    <div id="HomeWork">
      <div className="HomeWorkHead">
        <h2>Our Works</h2>
      </div>
      <div className="container">
        <div className="HomeWorkMain">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`HomeWorkBox ${
                index % 2 === 0 ? "leftImage" : "rightImage"
              }`}
            >
              <div className={`HomeWorkImgBox animate__animated ${
                  index % 2 === 0 ? "animate__fadeInLeft" : "animate__fadeInRight"
                }`}>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="HomeWorkContentBox">
                <div className="HomeWorkContent animate__animated animate__fadeInDown">
                  <h2>{project.name}</h2>
                  <p>{project.desc}</p>
                </div>
                <div className="HomeWorkContent animate__animated animate__fadeInUp">
                  <p>View Website</p>
                  <div className="ButtonBox">
                    <HiArrowUpRight />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeWork;
