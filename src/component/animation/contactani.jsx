import React from "react";

function Contactani() {
  return (
    <div className="h-full w-full relative overflow-hidden  ">
      <div className="h-[15rem] relative w-full overflow-hidden -rotate-3 ">
        {/* The moveLink container will now use the animation */}
        <div className="moveLink2 absolute flex top-10 bg-[#D3FD50] ">
          {/* First copy of the content */}
          <div className=" flex items-center">
            <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-4xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
              hello@k72.ca
            </h2>
            <img
              className="lg:h-28 h-14 rounded-full shrink-0 lg:w-70 w-32 object-cover mx-4"
              src="/image/heart-svgrepo-com.svg" // Corrected path for public folder
              alt="A heart icon"
            />
            <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-4xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
               hello@k72.ca
            </h2>
            <img
              className="lg:h-28 h-14 rounded-full shrink-0 lg:w-70 w-32 object-cover mx-4"
              src="/image/heart-svgrepo-com.svg" // Corrected path for public folder
              alt="A heart icon"
            />
          </div>
          {/* Second copy of the content for a seamless loop */}
          <div className=" flex items-center">
            <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-4xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
               hello@k72.ca
            </h2>
            <img
              className="lg:h-28 h-14 rounded-full shrink-0 lg:w-70 w-32 object-cover mx-4"
              src="/image/heart-svgrepo-com.svg" // Corrected path for public folder
              alt="A heart icon"
            />
            <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-4xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
               hello@k72.ca
            </h2>
            <img
              className="lg:h-28 h-14 rounded-full shrink-0 lg:w-70 w-32 object-cover mx-4"
              src="/image/heart-svgrepo-com.svg" // Corrected path for public folder
              alt="A heart icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactani;
