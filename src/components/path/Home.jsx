import React, { useEffect, useState } from "react";
import img from "../images/c2d5051c-fe8b-44e4-9fd7-bbdac67ee494.jpeg";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact"
const Home = () => {
  const items = ["Designer", "Developer", "Freelancer", "Photographer"];
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const typeText = () => {
      const item = items[currentItemIndex];
      let index = 0;
      const interval = setInterval(() => {
        setText(item.slice(0, index));
        index++;
        if (index > item.length) {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentItemIndex((currentItemIndex + 1) % items.length);
          }, 2000); // Wait 2 seconds before typing the next item
        }
      }, 100); // Typing speed (milliseconds)
    };

    typeText();
  }, [currentItemIndex]);

  return (
    <div>
      <div className="relative bg-cover bg-center w-full h-screen rounded-3xl p-10" style={{backgroundImage: `url(${img})`}}>
      
      <div className="">
        <div className="">
          {/* <img className=" opacity-70" src={img} alt="" /> */}
          
         
            <div className="absolute left-0 top-2/4 p-5">
              {/* <p className="text-sm">
                <small className="text-3xl text-left font-semibold">HELLO THERE , WELCOME TO MY PORFOLIO !</small>
              </p> */}

              <p className="text-4xl text-left font-serif font-bold">I AM Akash Biswas,A Full Stack Developer ! </p>

              <p className="text-left font-bold text-3xl mt-3 mb-6">
                {" "}
                & <span className="typed"> {text}</span>
              </p>
              <div className="mt-2 flex justify-left gap-3">
                <Link to="/resume ">
                  {" "}
                  <button className="btn btn-success">
                    Download-CV
                  </button>
                </Link>
                <Link to="/contact">
                  {" "}
                  <button className="btn btn-success">
                    contact me
                  </button>
                </Link>
              </div>
            </div>
          
        </div>
      </div>
      </div>




      {/* about secion started ..... */}

      <div className="mt-20">
      <About></About>

      </div>

      <div className="mt-20">
        <Contact></Contact>

      </div>

      
      
    </div>
  );
};

export default Home;
