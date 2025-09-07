import React from 'react'
import { Link } from 'react-router-dom'

function HomeBottom() {
  return (
    <div className=' hidden font-[font2] lg:flex items-center justify-center text-white gap-2 mt-6   ' >
      <Link to='/work' className='text-[6vw] leading-[5.5vw]  hover:border-[#D3FD50] hover:text-[#D3FD50] duration-150 ease-in-out border-5 border-white rounded-full px-10 pt-3 uppercase ' >Work</Link>
      <Link to='/agency' className='text-[6vw] leading-[5.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] duration-150 ease-in-out border-5 border-white rounded-full px-10 pt-3 uppercase ' >Agency</Link>
    </div>
  )
}
  
export default HomeBottom
