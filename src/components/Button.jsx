import React from "react";

function Button() {
  const handleClick = () => {
    window.open("https://www.kuuwu.com", "_blank");
  };

  return (
    <div className="flex justify-center">
      <button
        className="text-2xl mb-28 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm transition-colors"
        onClick={handleClick}
      >
        ¡Registrarme!
      </button>
    </div>
  );
}

export default Button;
