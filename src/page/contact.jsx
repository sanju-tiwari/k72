import React from "react";
import Contactani from "../component/animation/contactani";

function Contact() {
  return (
    <div className=" bg-black  h-auto w-screen ">
      <div className=" flex items-center justify-center flex-col h-full w-full " >
        <div className=" h-full w-full overflow-hidden " >
         <div className=" text-white md:text-[6rem] text-4xl  mt-15 leading-[3rem] xl:text-[13rem] md:mt-5  md:leading-[5rem] xl:leading-[11.5rem] font-[font1] uppercase text-center " >
            <h1>To talk <br /> about <br /> your <br /> project</h1>
         </div>
         <Contactani/>
        </div>
          <div className=" h-full w-full overflow-hidden md:mt-5 " >
         <div className=" text-white md:text-[6rem] text-4xl leading-[3rem] xl:text-[13rem] md:mt-5  md:leading-[5rem] xl:leading-[11.5rem] font-[font1] uppercase text-center  " >
            <h1>To talk <br /> about <br /> result </h1>
         </div>
         <Contactani/>
        </div>
          <div className=" h-full w-full overflow-hidden md:mt-5 " >
         <div className=" text-white md:text-[6rem] text-4xl leading-[3rem] xl:text-[13rem] md:mt-5  md:leading-[5rem] xl:leading-[11.5rem] font-[font1] uppercase text-center  " >
            <h1>To talk <br /> about <br /> your <br /> brand</h1>
         </div>
         <Contactani/>
        </div>
          <div className=" h-full w-full overflow-hidden md:mt-5 " >
         <div className="text-white md:text-[6rem] text-4xl leading-[3rem] xl:text-[13rem] md:mt-5  md:leading-[5rem] xl:leading-[11.5rem] font-[font1] uppercase text-center " >
            <h1>To talk <br /> about <br /> natural <br />wine</h1>
         </div>
         <Contactani/>
        </div>
      </div>
    </div>
  );
}

export default Contact;
