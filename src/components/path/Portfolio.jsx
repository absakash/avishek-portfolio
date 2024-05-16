import React from "react";
import { Link } from "react-router-dom";
import calculator from "../images/calculator.jpeg";
import car from "../images/car.jpeg";
import shopping from "../images/shoping.jpeg";
import parlout from "../images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "Calculator",
      image: calculator,
      link: "https://chic-sherbet-8bcf9c.netlify.app/",
    },
    {
      id: 2,
      name: "Car",
      image: car,
      link: "https://prismatic-kringle-893d96.netlify.app/",
    },
    {
      id: 3,
      name: "Amazon Clone",
      image: shopping,
      link: "https://frabjous-kringle-c1134c.netlify.app/",
    },
    {
      id: 4,
      name: "PiArrowLineUpRightBold",
      image: parlout,
      link: "https://frabjous-torrone-ea9131.netlify.app/",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4">
      <h1 className="text-4xl text-red-500 font-serif mb-10 text-center">My Created Sites</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(project => (
          <div key={project.id} className="max-w-sm mx-auto">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} loading="lazy" className="w-full h-auto object-cover"/>
              <p className="text-center mt-2">{project.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
