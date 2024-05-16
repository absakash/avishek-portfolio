import React from 'react';
import image from "../images/c2d5051c-fe8b-44e4-9fd7-bbdac67ee494.jpeg";
import "./HomeUpdate.css";
import About from "./About";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { TbHtml, TbBrandCpp } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

const IconBackgroundChanger = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const icons = [FaReact, BiLogoMongodb, FaNodeJs, IoLogoJavascript, TbHtml, SiTailwindcss, TbBrandCpp];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % icons.length);
    }, 800);

    return () => clearInterval(interval);
  }, [icons.length]);

  return (
    <div className="flex justify-center justify-around mt-5">
      {icons.map((Icon, index) => (
        <div key={index}
             className={`p-3 rounded-full transition-all ease-in-out duration-300 ${
               index === activeIndex ? 'bg-emerald-500 scale-110' : 'bg-red-500'
             }`}>
          <Icon className={`w-6 h-6 text-white transition-transform duration-300 ${
            index === activeIndex ? 'scale-125' : 'scale-100'
          }`} />
        </div>
      ))}
    </div>
  );
};

const HomeUpdate = () => {
  return (
    <div className='bg-red-100'>
      <div className="flex justify-center items-center ">
        <div className="shape-animate  flex justify-center">
          <img className="object-cover" src={image} alt="Akash Biswas" />
        </div>
      </div>

      <div className="mt-[-20px] ml-5 mr-5">
        <p className="text-xl text-center"> <span className='font-serif font-bold text-red-500 text-3xl'>H</span>ello, I'm</p>
        <p className="text-4xl text-center">Akash Biswas</p>
        <div className="flex justify-center items-center text-center mx-auto p-4 max-w-4xl">
          I am a MERN Stack Developer, working is my hoby & <br />
          I love to build something new and gain knowledge.
        </div>
      </div>

      <div>
        <div className="flex justify-center">
          <div>
            <p className="font-bold ">Working with</p>
            <h1 className="border w-[90px] border-[3px] rounded-xl border-teal-400 text-center "></h1>
          </div>
        </div>
        <IconBackgroundChanger />
      </div>

      <div id="about" className="mt-60">
        <About />
      </div>
    </div>
  );
};

export default HomeUpdate;
