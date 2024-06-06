import React from "react";
import { FaAngleRight, FaHome } from "react-icons/fa";
import me from "../images/hero-kbg.jpeg";
import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  return (
    <div id="#about" className="ml-14 mr-14 md:mt-10 mt-5 ">
      <div>
        <h1 className="text-3xl font-bold text-left">About</h1>
        <h1 className="border w-16 border-2 border-teal-400">
          {/* <span class="absolute left-0 w-0 bg-teal-400 h-0.5 bottom-0 transition-width duration-300 ease-in-out group-hover:w-full"></span> */}
        </h1>
      </div>



      <div className="my-5">
        <p className="text-left">
          I am Akash Biswas. I am developer and working with the path Mern stack
          development. I love do do my work .......
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-2 md:grid-cols-1 gap-10">
        <div className="flex justify-center mt-5">
          <div className="shape-animate flex items-center justify-center">
            <img className="h-[350px] w-[350px]" src={me} alt="" />
          </div>
        </div>

        <div className="text-left mt-5 lg:w-full">
          <h1 className="text-3xl font-semibold">Full stack Web Developer.</h1>
          {/* <h1 className="mt-2 border w-[400px] border-2 border-teal-400"></h1> */}

          <p className="mt-3 text-left mb-2">
            <span className="text-2xl text-red-500 font-extrabold">I </span>'m
            experiencing in building full-stack web solutions using MongoDB,
            Express.js, React, and Node.js. My skills also include HTML, CSS,
            and JavaScript, along with various libraries and frameworks.
          </p>

          {/* birthday session */}

          <div className="">
            <li className=" list-none bg-gray-200 rounded-2xl  hover:text-emerald-500 hover:scale-105 text-lg hover:bg-rose-300">
              <Link className="flex items-center">
                <FaAngleRight></FaAngleRight>
                <span className=" font-bold text-lg">Birthday</span> : 02 July
                2000
              </Link>
            </li>
            <li className=" list-none  hover:text-emerald-500 hover:scale-105 text-lg  bg-gray-200 rounded-2xl mt-2  hover:bg-emerald-400">
              <Link className="flex items-center">
                <FaAngleRight></FaAngleRight>
                <span className=" font-bold text-lg">Website :</span>{" "}
                www.example.com
              </Link>
            </li>
            <li className=" list-none  hover:text-emerald-500 hover:scale-105 text-lg  bg-gray-200 rounded-2xl mt-2 hover:bg-blue-800">
              <Link className="flex items-center">
                <FaAngleRight></FaAngleRight>
                <span className=" font-bold text-lg">City :</span> Magura
              </Link>
            </li>
            <li className=" list-none  hover:text-emerald-500 hover:scale-105 text-lg  bg-gray-200 rounded-2xl mt-2 ">
              <Link className="flex items-center ">
                <FaAngleRight></FaAngleRight>
                <span className=" font-bold text-lg">Phone :</span> +880
                1734174468
              </Link>
            </li>
            <li className=" list-none  hover:text-emerald-500 hover:scale-105 text-lg  bg-gray-200 rounded-2xl mt-2 hover:bg-purple-700">
              <Link className="flex items-center">
                <FaAngleRight></FaAngleRight>
                <span className=" font-bold text-lg">Age :</span> 24
              </Link>
            </li>
            <li className=" list-none  hover:text-emerald-500 hover:scale-105 text-lg  bg-gray-200 hover:bg-red-300 rounded-2xl mt-2">
              <Link className="flex items-center">
                <FaAngleRight></FaAngleRight>
                <span className=" font-bold text-lg">Degree :</span> B.tech in
                IT
              </Link>
            </li>
            <li className=" list-none  hover:text-emerald-500 hover:scale-105 text-lg  bg-gray-200 rounded-2xl mt-2 hover:bg-orange-300">
              <Link className="flex items-center">
                <FaAngleRight></FaAngleRight>
                <span className=" font-bold text-lg">Email :</span>{" "}
                akashboswas2@gmail.com
              </Link>
            </li>
            <li className=" list-none  hover:text-emerald-500 hover:scale-105 text-lg  bg-gray-200 rounded-2xl mt-2 hover:bg-sky-300">
              <Link className="flex items-center">
                <FaAngleRight></FaAngleRight>
                <span className=" font-bold text-lg">Freelance :</span>{" "}
                Available
              </Link>
            </li>
          </div>
        </div>
      </div>


     {/* after the image part ... description  */}


     <div>
     <div className="mt-5 mb-5">
        <div className="text-left ">
          <h1 className="text-3xl font-semibold mt-6">Skills</h1>
          <h1 className="border w-16 border-2 border-teal-400"></h1>
          <p className="mt-3">
            MERN Stack Development, React.js, Node.js, Express.js, MongoDB,
            JavaScript, HTML, CSS, RESTful APIs, Database Design, Frontend
            Development, Backend Development, UI/UX Design'
          </p>
        </div>
      </div>

    

      <div className="grid md:grid-cols-2 gap-4 text-left p-10">
        {[
          { skill: "HTML", level: 100 },
          { skill: "MongoDB", level: 70 },
          { skill: "React", level: 90 },
          { skill: "JavaScript", level: 80 },
          { skill: "C", level: 80 },
          { skill: "C++", level: 80 },
          { skill: "Python", level: 70 },
          { skill: "UI", level: "learning" },
        ].map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-blue-700">{item.skill}</p>
              <p className="font-semibold text-purple-600">
                {typeof item.level === "number" ? `${item.level}%` : item.level}
              </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
              {typeof item.level === "number" && (
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full"
                  style={{
                    width: `${item.level}%`,
                    transition: "width 0.3s ease-in-out",
                  }}
                ></div>
              )}
            </div>
          </div>
        ))}
      </div>
     </div>
    </div>
  );
};

export default About;
