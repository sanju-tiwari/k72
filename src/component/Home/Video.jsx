import React from 'react'
import videos from "../../../public/image/video.mp4"

function Video() {
  return (
    <div className='h-full w-full' >
      <video className=' h-full w-full object-cover ' autoPlay muted loop src={videos}></video>
    </div>
  )
}

export default Video
