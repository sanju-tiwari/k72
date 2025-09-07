import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

function Stair({children}) {
  const parentdiv = useRef(null);
  const stairdiv = useRef(null);
  const location = useLocation().pathname;
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(stairdiv.current, {
      display: "block",
    });
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.to('.stair', {
      y: "100%",
      stagger: {
        amount: 0.25,
      },
    });
    tl.to(stairdiv.current , {
        display : "none"
    })
    tl.to(".stair",{
        y:"0%"
    })
    gsap.from(parentdiv.current , {
        opacity:0,
        delay : 2,
        scale:1.2
    })
  }, [location]);

  return (
    <div>
      <div ref={stairdiv} className=" h-screen w-full z-20 top-0 fixed  ">
       <div className=' flex h-full w-full '  >
       <div className="stair h-full w-1/5 bg-black "></div>
        <div className="stair h-full w-1/5 bg-black "></div>
        <div className="stair h-full w-1/5 bg-black "></div>
        <div className="stair h-full w-1/5 bg-black "></div>
        <div className="stair h-full w-1/5 bg-black "></div>
       </div>
      </div>
      <div ref={parentdiv} > 
              {children}
      </div>
    </div>
  );
}

export default Stair;
