import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavbarColorContext, NavbarContext } from '../../context/navbarcontext'
import { useNavigate } from 'react-router-dom'
import { TbWorldSearch } from 'react-icons/tb'

function Navbarmenu() {
    const navlink = useNavigate()

     const handleclick = () => {
        setNavOpen(false); 
        navlink("/");
    };
       const handleclick1 = () => {
        setNavOpen(false); 
        navlink("/work");
    };
     const handleclick2 = () => {
        setNavOpen(false); 
        navlink("/agency");
    };
         const handleclick3 = () => {
        setNavOpen(false); 
        navlink("/contact");
    };
         const handleclick4 = () => {
        setNavOpen(false); 
        navlink("/blog");
    };
    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)
   const [navColor, setNavColor ] = useContext(NavbarColorContext)
    const [navOpen, setNavOpen] = useContext(NavbarContext)
    
      useEffect(() => {
    if (navOpen) {
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
    } else {
        document.body.style.overflow = 'auto';
        document.body.style.position = 'static';
        document.body.style.width = 'auto';
    }
    return () => {
        document.body.style.overflow = 'auto';
        document.body.style.position = 'static';
        document.body.style.width = 'auto';
    };
}, [navOpen]);


    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }
    useGSAP(function () {
        if (navOpen) {
            gsapAnimation()
        } else {
            gsapAnimationReverse()

        }
    }, [navOpen])



  return (
    <div
        ref={fullScreenRef}
      id="fullscreen"
      className=" fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 absolute "
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>

      <div ref={fullNavLinksRef}  className="relative ">
        <div className="navlink flex w-full justify-between lg:p-3 p-2 items-start">
          <div>
            <div className=" lg:w-32 w-24 cursor-pointer " onClick={handleclick} >
              <svg
                className=" w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </div>
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className=" lg:h-20 h-20 w-20 lg:w-22 relative cursor-pointer"
          >
            <div className="lg:h-30 h-28 lg:w-1 w-0.5 -rotate-45 origin-top absolute bg-[#D3FD50]"></div>
            <div className="lg:h-30 h-28 lg:w-1 w-0.5 right-0 rotate-45 origin-top absolute bg-[#D3FD50]"></div>
          </div>
        </div>
        <div className=" py-20 md:py-40 md:mt-30 xl:mt-0 xl:py-10 ">
          <div onClick={handleclick1} className="link cursor-pointer origin-top relative border-t-1 border-white">
            <h1 className="font-[font2] text-5xl   md:text-[6vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
              work
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] md:text-[6vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  See Everything 
                </h2>
                <img
                  className="lg:h-28 h-14 rounded-full shrink-0 lg:w-70 w-32 object-cover"
                  src="/image/img4.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] md:text-[6vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  See Everything
                </h2>
                <img
                  className="lg:h-28 h-14 rounded-full shrink-0 lg:w-70 w-32 object-cover"
                  src="/image/img5.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] md:text-[6vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  See everything
                </h2>
                <img
                  className="lg:h-28 h-14 rounded-full shrink-0 lg:w-70 w-32 object-cover"
                  src="/image/img4.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] md:text-[6vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  see everything
                </h2>
                <img
                  className="lg:h-28 h-14 rounded-full shrink-0 lg:w-70 w-32 object-cover"
                  src="/image/img5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        <div onClick={handleclick2} className='link cursor-pointer origin-top relative border-t-1 border-white'>
                        <h1 className='font-[font2] text-5xl md:text-[6vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>Agence</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>know us</h2>
                                <img className='lg:h-28 h-14 rounded-full shrink-0 md:w-70 w-32 object-cover' src="/image/img2.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>know us</h2>
                                <img className='lg:h-28 h-14 rounded-full shrink-0 md:w-70 w-32 object-cover' src="/image/img3.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>know us</h2>
                                <img className='lg:h-28 h-14 rounded-full shrink-0 lg:w-70 w-32 object-cover' src="/image/img2.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>know us</h2>
                                <img className='lg:h-28 h-14 rounded-full shrink-0 lg:w-70 w-32 object-cover' src="/image/img3.jpg" alt="" />
                            </div>
                        </div>
        </div>
           <div onClick={handleclick3} className='link cursor-pointer origin-top relative border-t-1 border-white'>
                        <h1 className='font-[font2] text-5xl md:text-[6vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>Contact</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>send us a fax</h2>
                                <img className='lg:h-28 h-14 rounded-full shrink-0 lg:w-70 w-32 object-cover' src="/image/heart-svgrepo-com.svg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>send us a fax</h2>
                                <img className='lg:h-28 h-14 rounded-full shrink-0 lg:w-70 w-32 object-cover' src="/image/heart-svgrepo-com.svg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>send us a fax</h2>
                                <img className='lg:h-28 h-14 rounded-full shrink-0 lg:w-70 w-32 object-cover' src="/image/heart-svgrepo-com.svg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>send us a fax</h2>
                                <img className='lg:h-28 h-14 rounded-full shrink-0 lg:w-70 w-32 object-cover' src='/image/heart-svgrepo-com.svg' alt="" />
                            </div>
                        </div>

        </div>
           <div onClick={handleclick4} className='link cursor-pointer origin-top relative border-y-1 border-white'>
            
                        <h1 className='font-[font2] text-5xl md:text-[6vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase'>Blogue</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>Read articles</h2>
                                <img className='lg:h-28 h-14 rounded-full shrink-0 lg:w-70 w-32 object-cover' src="/image/img.png" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>read articles</h2>
                                <img className='lg:h-28 h-14 rounded-full shrink-0 lg:w-70 w-32 object-cover' src="/image/img6.gif" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>read articles</h2>
                                <img className='lg:h-28 h-14 rounded-full shrink-0 lg:w-70 w-32 object-cover' src="/image/img.png" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] md:text-[6vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase'>read articles</h2>
                                <img className='lg:h-28 h-14 rounded-full shrink-0 lg:w-70 w-32 object-cover' src="/image/img6.gif" alt="" />
                            </div>
                        </div>

           </div>
         </div>
        <div className=" xl:flex hidden link bg-black h-[20rem] w-full -mt-10 " >
        <div className='flex justify-between h-full w-full items-start ' >
       
          <div className=' h-15 flex items-center justify-center w-[5rem] ml-5 mt-10 text-center hover:text-[#D3FD50] duration-150 cursor-pointer ease-in-out border-2 rounded-full font-[font2]  lg:text-[3em] text-white ' >
            <h1 className="  " > <TbWorldSearch /> </h1>
          </div>
             <div className='flex flex-row gap-x-2 mr-5 mt-10'>
                 <div className="uppercase h-15 w-30  hover:text-[#D3FD50] duration-150 ease-in-out  rounded-full text-center text-white lg:text-[4rem] border-2  font-[font2] " >
                         <h1 className=" -mt-4 " >fb</h1>
                  </div>  
                    <div className="uppercase h-15 w-30 hover:text-[#D3FD50] duration-150 ease-in-out rounded-full text-center text-white lg:text-[4rem] border-2  font-[font2] " >
                         <h1 className=" -mt-4 " >ig</h1>
                  </div>  
                    <div className="uppercase h-15 w-30 hover:text-[#D3FD50] duration-150 ease-in-out rounded-full text-center text-white lg:text-[4rem] border-2  font-[font2] " >
                         <h1 className=" -mt-4 " >in</h1>
                  </div>  
                    <div className="uppercase h-15 w-30 hover:text-[#D3FD50] duration-150 ease-in-out rounded-full text-center text-white lg:text-[4rem] border-2  font-[font2] " >
                         <h1 className=" -mt-4 " >be</h1>
                  </div>  
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Navbarmenu;
