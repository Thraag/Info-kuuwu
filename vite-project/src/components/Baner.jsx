import React from "react";

const Banner = () => {
  return (
    <div className="mx-28 mt-28">
      <div className="flex w-full">
        <div className="w-1/2 ">
          <h1 className="text-8xl font-medium  leading-[0.9]">
           Kuuwu, la construccion y Chile.
          </h1>
          <p className="text-xl mt-14 text-slate-700">
            ¡Hola! Soy Joaquín Aurelio, Constructor civil y UX/UI de Kuuwu y a 
            continuacion te contare brevemente de que trata nuestra aplicacion.
          </p>
        </div>
        <div className="w-1/2">
          <img src="/BIMG.png" alt="Banner Image" className="w-full" />
        </div>
      </div>
      {/* Contenido aquí */}
    </div>
  );
};

export default Banner;
