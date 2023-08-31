import React from "react";
import rectangle_1 from '../assets/Rectangle_1.png';


const Hero = ({ appType, tagLine, mainActionText, extraActionText }) => {
  return (
    <div id="product">
      <div style={{ textShadow: '0px 1px 1px gray' }} className="flex flex-col items-center justify-start font-sans min-h-96 bg-gray-50 lg:pt-10 bg-hero bg-cover">
        <div>
          <p className="p-3 pt-12 text-lg font-bold text-gray-500 lg:text-white">{appType}</p>
        </div>
        <div>
          <p className="p-2 text-4xl font-bold text-center text-blue-800 lg:mx-auto lg:w-4/6 lg:text-5xl lg:text-black">
            {tagLine}
          </p>
        </div>
        <div className='flex flex-col items-center justify-center w-full h-full'>
          <img className=" left-0 lg:left-auto lg:-mt-2" src={rectangle_1} alt="" />
        </div>
        <div id="faq" className="pt-20 text-1xl font-semibold text-center text-white lg:font-bold">save the date  </div>
        <div id="faq" className=" text-3xl font-semibold text-center text-white lg:font-bold">1st November 2023 </div>
        <div className="relative z-50 flex flex-col items-center justify-between h-48 lg:space-x-8 pt-7 lg:pt-0 lg:flex-row lg:justify-between lg:w-90">
          <button
            className="pt-3 pb-3 pl-12 pr-12 text-2xl font-semibold text-center text-white transition-all bg-green-400 rounded-full shadow-2xl lg:ml-5 hover:bg-green-500 focus:outline-none ring-4 ring-white lg:ring-2 lg:font-medium "
          >
            {mainActionText}
          </button>
          <button
            className="pt-3 pb-3 text-2xl font-semibold text-center text-green-400 transition-all rounded-full shadow-2xl lg:mr-5 hover:text-green-400 hover:bg-gray-50 pl-11 pr-11 bg-gray-50 focus:outline-none ring-4 ring-green-400 lg:font-medium lg:text-gray-50 lg:bg-opacity-0 lg:ring-2 lg:ring-white mb-2"
          >
            {extraActionText}
          </button>
        </div>


      </div>
      {/* <div className="z-0 flex flex-row items-start justify-center w-screen h-screen pt-20 -mb-16 bg-gray-50 lg:bg-whitelg:w-full lg:h-96 lg:pt-0"> */}
      {/* <img className="absolute left-0 lg:left-auto lg:-mt-36" src={rectangle_1} alt="" /> */}
      {/* <img className="absolute right-0 lg:right-auto lg:ml-24 lg:-mt-16" src={rectangle_2} alt="" /> */}
      {/* </div> */}
    </div>
  );
};

export default Hero;
