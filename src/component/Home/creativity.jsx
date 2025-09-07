// AnimatedCreativity.js
import React from 'react';
// Make sure to import the CSS

function AnimatedCreativity() {
  return (
    <div className="relative flex items-center justify-center ">
      {/* The text */}
      {/* <h1 className="  text-[7.5vw] leading-[8vw] uppercase text-white">
        creativity
      </h1> */}
        <h1 className=" flex text-[8.5vw] leading-[8vw] uppercase text-white">
        the creativity
      </h1>
      {/* The SVG container */}
      <svg 
        className="absolute top-0 left-0 w-full h-full" 
        viewBox="0 0 820 140"
        fill="none" 
        stroke="#d4ff5a" 
        strokeWidth="3"
      >

        <path
          className="scribble-animation"
          d="M 30 80 C 150 -30, 650 -30, 790 80 S 650 190, 410 80 S 150 190, 30 80"
        />
      </svg>
    </div>
  );
}

export default AnimatedCreativity;
