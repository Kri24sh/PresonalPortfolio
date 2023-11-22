import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";

import { Link } from "react-router-dom";

const Project = () => {
  const portfolios = [
    {
      id: 10,
      src: arrayDestruct,
      hrefcode:"https://github.com/Kri24sh/Sportify-Clone-HTML-CSS-and-JS.git",
      hrefDemo:"https://kri24sh.github.io/Sportify-Clone-HTML-CSS-and-JS",
    },
    {
      id: 30,
      src: navbar,
      hrefcode:"https://github.com/Kri24sh/Sportify-Clone-HTML-CSS-and-JS.git",
      hrefDemo:"https://random-password-generator-bay.vercel.app/",
    },
    {
      id: 20,
      src: reactParallax,
      hrefcode:"https://github.com/Kri24sh/TODO-LIST",
      hrefDemo:"https://github.com/Kri24sh/TODO-LIST",
    },
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 pt-[100px] md:pt-24 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,hrefcode ,hrefDemo }) => (
            <div key={id} className="shadow-md mb-10 md:mb-0 shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6  py-3 m-4 duration-200 hover:scale-105">
                  
                  <a href={hrefDemo} target="_blank">Demo</a>  
                
                </button>
                <div className="h-14 bg-white w-[1px] border"></div>
                <button className="w-1/2 px-6 py-3 m-4  duration-200 hover:scale-105">
                  <a href={hrefcode} target="_blank">
                  Code
                  </a>
                  
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
