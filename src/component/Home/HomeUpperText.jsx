import React from 'react'
import Video from './Video'
import AnimatedCreativity from './creativity'

function HomeUpperText() {
  return (
    <div className=' font-[font1] pt-5 text-center uppercase text-white ' >
      <div className=' text-[8.5vw] flex items-center justify-center leading-[9vw] uppercase ' >
        The spark    
      </div>
      <div className=' text-[8.5vw] flex items-center justify-center leading-[9vw] uppercase ' >
        Who <div className=' h-[7vw]  w-[16vw]  rounded-full -mt-3 overflow-hidden'> <Video/> </div>
      </div>
      <div className=' text-[8.5vw] flex items-center justify-center leading-[9vw] uppercase ' >
        generates
      </div>
      <div className=' text-[8.5vw] flex items-center justify-center leading-[7vw] uppercase ' >
        <AnimatedCreativity/>
      </div>
    </div>
  )
}

export default HomeUpperText
