import React from "react";
import { RiDownloadLine } from "react-icons/ri";

const About = () => {
  return (
    <div id="about" className="w-full min-h-screen p-6 sm:p-10 font-[fixen] relative">
      {/* Main container */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-60 relative items-center lg:items-start">
        
        {/* Left Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl mt-10 lg:mt-20 border-b-2 border-b-blue-400 inline-block">
            About
          </h1>
          <p className="mt-5 text-lg sm:text-xl leading-relaxed text-gray-300">
            Hey, my name is <span className="text-blue-400">Navin Subedi</span> and I use{" "}
            <span className="text-blue-400">Nash</span> as my nickname across social media.
            I’m a front-end and backend web developer from Myanmar. I’m always curious to
            learn more when it comes to new technologies and creative coding.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-2 mt-6 text-lg font-[fixen-sans] cursor-pointer hover:border-b-blue-500 hover:border-b-2 transition-all w-fit mx-auto lg:mx-0">
            <RiDownloadLine /> <p>Resume</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative w-full lg:w-1/2 flex flex-col items-center">
          {/* Badge Circle */}
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center z-10 mb-8 lg:mb-0">
            <img
              src="https://i.ibb.co/v46DDnBq/image.png"
              alt="badge"
              className="w-full h-full rounded-full border-2 border-blue-400 object-cover"
            />

            {/* Circular text */}
            <svg className="svg absolute w-52 h-52 sm:w-60 sm:h-60" viewBox="0 0 100 100">
              <defs>
                <path
                  id="circlePath"
                  d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                />
              </defs>
              <text fill="gray" fontSize="10">
                <textPath href="#circlePath" startOffset="50%">
                  Navin Subedi • Nash •
                </textPath>
              </text>
            </svg>

            <svg className="svg rotate-180 absolute w-52 h-52 sm:w-60 sm:h-60" viewBox="0 0 100 100">
              <defs>
                <path
                  id="circlePath"
                  d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                />
              </defs>
              <text fill="gray" fontSize="10">
                <textPath href="#circlePath" startOffset="50%">
                  Navin Subedi • Nash •
                </textPath>
              </text>
            </svg>
          </div>

          {/* Main Image */}
          <div className="relative w-[80vw] sm:w-[60vw] lg:w-[40vw] rounded-[5vw] overflow-hidden">
            <img
              className="w-full h-auto object-cover hover:scale-110 transition-all rounded-[5vw]"
              src="https://i.ibb.co/5WWD0RNx/Gemini-Generated-Image-aoqkegaoqkegaoqk-min.png"
              alt="about main"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
