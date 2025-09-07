 import React from "react";
import Video from "../component/Home/Video";
import HomeBottom from "../component/Home/HomeBottom";
import HomeUpperText from "../component/Home/HomeUpperText";

function Home() {
  return (
    <div className=" h-screen w-screen relative overflow-hidden " >
      <div className=" fixed h-screen w-screen bg-red-900 ">
        <Video />
      </div>
      <div className=" absolute lg:relative bottom-25 lg:bottom-0  lg:h-full  w-screen justify-between ">
        <HomeUpperText />
        <HomeBottom />
      </div>
    </div>
  );
}

export default Home;
