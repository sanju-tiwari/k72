import React from "react";
import { GoDotFill } from "react-icons/go";
import { TbWorldSearch } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function Blog() {
  const navigate = useNavigate()
  const handleclick = ()=>{
    navigate("/contact")
    
  }

  return (
    <div className="bg-black w-screen">
      <div className=" ">
        <div className=" p-[10vh]   md:p-[15vh] xl:p-[25vh] relative overflow-hidden ">
          <h1 className=" md:relative absolute left-0 text-white flex items-center text-xl md:text-2xl font-[font2] ">
            {" "}
            <span className=" mr-2 font-bold ">
              <GoDotFill />
            </span>{" "}
            Blog{" "}
          </h1>
        </div>
        <div className=" h-full w-full ">
          <div className=" w-full h-0.5 bg-white "></div>
          <div className=" mt-5 flex md:flex-row flex-col items-center md:justify-between xl:justify-around ">
            <div className=" flex flex-col  group " >
              <div className=" h-[20rem] md:w-[25rem] lg:w-[30rem] xl:h-[25rem] xl:w-[40rem] bg-red-500  hover:rounded-4xl duration-150 ease-in-out ">
                <img
                  className=" h-full w-full object-cover hover:rounded-4xl duration-150 ease-in-out   "
                  src="/image/img.png"
                  alt=""
                />
              </div>
               <div className=" w-full  uppercase">
                   <h1 className=" text-2xl uppercase text-white  flex items-center  mt-5 mb-5 " > <span> <GoDotFill/></span> may 9 2025 </h1>
                    <p className=" lg:text-2xl xl:text-4xl group-hover:underline decoration-white   font-[font2] text-white "  >Predictive advertising : all is  <br /> revolutionizing targeting ............................................. </p>
               </div>
            </div>
            <div className=" flex flex-col group " >
              <div className=" xl:mt-0 h-[20rem] md:w-[25rem] lg:w-[30rem] xl:h-[23rem] xl:w-[40rem] bg-red-500 hover:rounded-4xl duration-150 ease-in-out  ">
                <img
                  src="public\image\img6.gif"
                  className="h-full w-full object-cover hover:rounded-4xl duration-150 ease-in-out "
                  alt=""
                />
              </div>
                      <div className=" w-full  uppercase  " >
                   <h1 className=" text-2xl uppercase text-white  flex items-center  mt-5 mb-5 " > <span> <GoDotFill/></span> may 9 2025 </h1>
                    <p className="  lg:text-2xl xl:text-4xl group-hover:underline decoration-white text-start  font-[font2] text-white "  >Consulting & customer relations <br/> a duo that doesn't brief each other,  <br /> that builds itself </p>
               </div>
            </div>
          </div>
             <div className=" hidden md:flex bg-black h-[10rem] w-full " >
        <div className='flex justify-between h-full w-full items-start ' >
          <div className='flex flex-row gap-x-2 ml-5 mt-10 ' >
                 <div className="uppercase md:h-15 w-15 xl:h-25 xl:w-45  hover:text-[#D3FD50] duration-150 ease-in-out  rounded-full text-center text-white md:text-4xl xl:text-[6rem] border-2  font-[font2] " >
                         <h1 className=" md:mt-0 xl:-mt-4 " >fb</h1>
                  </div>  
                    <div className="uppercase md:h-15 md:w-15 xl:h-25 xl:w-45 hover:text-[#D3FD50] duration-150 ease-in-out rounded-full text-center text-white md:text-4xl xl:text-[6rem] border-2  font-[font2] " >
                         <h1 className=" md:mt-0 xl:-mt-4 " >ig</h1>
                  </div>  
                    <div className="uppercase md:h-15 md:w-15 xl:h-25 xl:w-45 hover:text-[#D3FD50] duration-150 ease-in-out rounded-full text-center text-white md:text-4xl xl:text-[6rem] border-2  font-[font2] " >
                         <h1 className=" md:mt-0 xl:-mt-4 " >in</h1>
                  </div>  
                    <div className="uppercase md:h-15 md:w-15 xl:h-25 xl:w-45 hover:text-[#D3FD50] duration-150 ease-in-out rounded-full text-center text-white md:text-4xl xl:text-[6rem] border-2  font-[font2] " >
                         <h1 className=" md:mt-0 xl:-mt-4 " >be</h1>
                  </div>  
          </div>
          <div onClick={handleclick} className=' xl:h-25 md:h-15 md:w-65 xl:w-[35rem] mr-5 mt-10 text-center hover:text-[#D3FD50] duration-150 cursor-pointer ease-in-out border-2 rounded-full font-[font2]  md:text-4xl xl:lg:text-[6rem] text-white ' >
            <h1 className=" xl:-mt-4 " > Contact ❤️</h1>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
