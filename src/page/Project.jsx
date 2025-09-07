import { useGSAP } from "@gsap/react"
import ProjectCard from "../component/Project/projectCard"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useNavigate } from "react-router-dom"


function Project() {
    const navigate = useNavigate()
  const handleclick = ()=>{
    navigate("/contact")
    
  }
  gsap.registerPlugin(ScrollTrigger)
  
  const project = [
    {
    image1:"/image/1.jpg",
    image2:"/image/2.jpg"
  },
     {
    image1:"/image/3.jpg",
    image2:"/image/4.jpg"
  },
     {
    image1:"/image/5.jpg",
    image2:"/image/6.jpg"
  },
     {
    image1:"/image/7.jpg",
    image2:"/image/8.jpg"
  },
     {
    image1:"/image/9.jpg",
    image2:"/image/10.jpg"
  },
     {
    image1:"/image/11.jpg",
    image2:"/image/12.jpg"
  },
  ]

  useGSAP(()=>{
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  },[])

  return (

    <>
    <div className=' lg:p-4 p-2 h-auto  ' >
      <div className=' pt-[33vh] ' >
        <h1  className=" font-[font2] lg:text-[9.5vw] text-7xl uppercase ">work</h1>
      </div>
      <div className=" -lg:mt-20 lol " >
            {project.map((items , i)=>{
               return (
                <div> 
                <div className=' hidden hero w-full h-[40rem] mb-4 xl:flex lg:flex-row flex-col lg:gap-4 gap-2 ' >
                     <ProjectCard image={items.image1} image2={items.image2} />
                </div>
                    <div className=' xl:hidden   hero w-full h-[40rem] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2 ' >
                     <ProjectCard image={items.image1} image2={items.image2} />
                </div>
                </div>
                
               )
            })}
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
    </>
  )
}

export default Project
