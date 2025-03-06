import React from "react";

const Foco = ({ titulo, texto }) => {
  return (
    <div className=" my-20">
      <div className="text-4xl font-medium mb-5">{titulo}</div>
      <div className="text-xl text-slate-700 ">{texto}</div>
    </div>
  );
};

export default Foco;
