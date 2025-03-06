import React from "react";

const Section = ({ imageSrc }) => {
  return (
    <div className="mx-3 bg-neutral-100 rounded-2xl">
      <div>
        <img src={imageSrc} alt="Banner Image" className="w-2/3 mx-auto py-20" />
      </div>
    </div>
  );
};

export default Section;
