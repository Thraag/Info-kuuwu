import React from "react";
import Button from "./Button";

const Banner = () => {
  return (
    <div className=" mt-24">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-1/2">
          <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-medium leading-[0.9]">
            Kuuwu, la construcción y Chile.
          </h1>
          <p className="text-xl  lg:text-xl mt-4 lg:mt-14 text-slate-700">
            ¡Hola! Somos el equipo de Kuuwu.com y a continuación te contaremos brevemente de qué trata nuestra aplicación.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
          <img 
            src="/BIMG.png" 
            alt="Banner Image" 
            className="w-full max-w-[400px] h-auto object-contain hidden  md:block lg:block" 
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
