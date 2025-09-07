import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import olive from "../../public/image/Olivier_480x640-480x640.jpg"

function Agency() {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/contact");
  };
  gsap.registerPlugin(ScrollTrigger);
  const imagedivRef = useRef(null);
  const imageRef = useRef(null);
  const img = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const scrollRef = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);

  const image = [
    "/image/CAMILLE_480X640_2-480x640.jpg",
    "/image/Carl_480x640-480x640.jpg",
    "/image/ChantalG_480x640-480x640.jpg",
    "/image/HugoJoseph_480x640-480x640.jpg",
    "/image/joel_480X640_3-480x640.jpg",
    "/image/Lawrence_480x640-480x640.jpg",
    "/image/MAXIME_480X640_2-480x640.jpg",
    "/image/MEGGIE_480X640_2-480x640.jpg",
    "/image/MEL_480X640-480x640.jpg",
    "/image/Michele_480X640-480x640.jpg",
    "/image/MyleneS_480x640-480x640.jpg",
    "/image/Olivier_480x640-480x640.jpg",
    "/image/SophieA_480x640-480x640.jpg",
  ];
  const imageCount = [
    {
      title: "Conseillere",
      name: "Sophie auger",
      img: "/image/CAMILLE_480X640_2-480x640.jpg",
    },
    {
      title: "Directeur conseil",
      name: "carl godbout",
      img: "/image/Carl_480x640-480x640.jpg",
    },
    {
      title: "Conceptrice redaction",
      name: "camille birere",
      img: "/image/ChantalG_480x640-480x640.jpg",
    },
    {
      title: "Conseillere",
      name: "claire robert",
      img: "/image/HugoJoseph_480x640-480x640.jpg",
    },
    {
      title: "Conseiller Principal",
      name: " Arnaud doyon ",
      img: "/image/joel_480X640_3-480x640.jpg",
    },
    {
      title: "VPP at directeur general",
      name: " Pierre-lau paiement",
      img: "/image/Lawrence_480x640-480x640.jpg",
    },
    {
      title: "Directrice artistique",
      name: " melanie laviolette ",
      img: "/image/MAXIME_480X640_2-480x640.jpg",
    },
    {
      title: "Directrice conseil",
      name: "michele riendeau",
      img: "/image/MEGGIE_480X640_2-480x640.jpg",
    },
    {
      title: " Stratege",
      name: "beatrice roussin",
      img: "/image/MEL_480X640-480x640.jpg",
    },
    {
      title: "Conseillere",
      name: " lou gravel-jean ",
      img: "/image/SophieA_480x640-480x640.jpg",
    },
    {
      title: " Planificatrice strategique principal ",
      name: "olivier roeyaerts",
      img: "/image/Michele_480X640-480x640.jpg",
    },
    {
      title: "Coordonatrice",
      name: "lawrence meunier",
      img: "/image/MyleneS_480x640-480x640.jpg",
    },
    {
      title: "Directrice consell",
      name: " isabelle beauchemin ",
      img: "/image/Olivier_480x640-480x640.jpg",
    },
    {
      title: "Directeur artistique",
      name: " hugo joseph ",
      img: "/image/SophieA_480x640-480x640.jpg",
    },
  ];
  useGSAP(() => {
    const imagePinTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: imagedivRef.current,
        start: "center 10%",
        end: "+=200%",
        pin: true,
        pinSpacing: true,
        pinType: "transform",
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          let imageIndex;
          if (self.progress < 1) {
            imageIndex = Math.floor(self.progress * image.length);
          } else {
            imageIndex = image.length - 1;
          }
          if (imageRef.current) {
            imageRef.current.src = image[imageIndex];
          }
        },
      },
    });

    gsap.to(scrollRef.current, {
      scrollTrigger: {
        trigger: scrollRef2.current,
        start: "-20% center",
        end: "-15% center",
        scrub: true,
      },
      backgroundColor: "black",
      color: "white",
      borderColor: "white",
      ease: "power2.inOut",
    });
    const slideOverTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: scrollRef2.current,
        pin: true,
        pinType: "transform",
        start: "top top",
        end: "+=100%",
        scrub: 1,
      },
    });

    slideOverTimeline.to(scrollRef3.current, {
      yPercent: -100,
      ease: "none",
    });

    slideOverTimeline.to(
      scrollRef2.current.querySelectorAll(".alex-container"),
      {
        opacity: 0,
        y: -20,
      },
      0
    );
  }, [scrollRef]);

  return (
    <div ref={scrollRef} className="overflow-x-hidden bg-color-white  ">
      <div className="section1 relative py-1  ">
        <div
          ref={imagedivRef}
          className="absolute overflow-hidden h-[20vw] rounded-3xl w-[15vw] top-[20rem] left-[30vw] "
        >
          <img
            ref={imageRef}
            src="/image/CAMILLE_480X640_2-480x640.jpg"
            alt="error in loading img"
            className="  hidden md:flex h-full object-cover w-full"
          />
        </div>
        <div className="relative ">
          <div className="  mt-[30vh] md:mt-[48vh] ">
            <h1 className=" text-[20vw] font-[font2] font-bold  text-center uppercase leading-[18vw]">
              Seven7y <br />
              two
            </h1>
          </div>
          <div className=" md:pl-[40%] mt-10 md:mt-28 ">
            <p className=" md:text-4xl lg:text-5xl xl:text-6xl font-[font2] ">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;Our curiosity fuels our creativity. We remain humble and say
              no to big egos, even yours. A brand is alive. It has values, a
              personality, a story. If we forget that, we may make good numbers
              in the short term, but we'll kill it in the long term. That's why
              we're committed to providing perspective, to building influential
              brands.
            </p>
          </div>
        </div>
      </div>
      <div className="section-2 h-[40rem] xl:h-auto w-screen   ">
        <div className=" flex flex-row items-start mt-15 md:mt-25 xl:mt-15  md:w-3/5 font-[font2] text-xl justify-around  gap-10 ">
          <div>
            <h1 className="font-[font2] font-bold ">Expertise</h1>
          </div>
          <div className=" flex flex-col  ">
            <h1>Strategy</h1>
            <h1>Advertising</h1>
            <h1>Branding</h1>
            <h1>Content</h1>
            <h1>Design</h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8 font-[font2] w-full text-lg leading-relaxed mt-20 md:mt-30 xl:mt-10 md:px-20 font-bold ">
          <p className="max-w-sm">
            <span className="font-semibold text-black">Our projects_</span> are
            born in humility, nurtured by curiosity, and sustained by creativity
            in all its forms.
          </p>
          <p className="max-w-sm">
            <span className="font-semibold text-black">Our creation_</span>{" "}
            thrives in an environment where talent is encouraged to shine—where
            you feel free to become the best version of yourself.
          </p>
          <p className="max-w-sm">
            <span className="font-semibold text-black">Our culture_</span> is
            rooted in openness. Together, our crew shapes an agency we are truly
            proud of.
          </p>
        </div>
      </div>
      <div className=" section-3  w-screen  mt-50 overflow-hidden  ">
        <div
          ref={scrollRef2}
          className=" first h-full w-full flex relative items-center justify-center  "
        >
          <div className="  h-full w-[35rem] rounded-4xl  ">
            <img
              className="  z-[10] h-full relative bg-red-500 w-full object-cover rounded-4xl "
              src={olive}
              alt="error in loading"
            />
            <div className="alex-container z-0   absolute top-5  left-0 w-full overflow-hidden text-[#D3FD50]  ">
              <div className="flex whitespace-nowrap  justify-between  font-[font2] alex-glow items-center ">
                <h1 className="uppercase text-4xl md:text-[15rem]  font-bold mr-[10rem] ">
                  Alex
                </h1>
                <h1 className="uppercase text-4xl md:text-[15rem]  font-bold">
                  Alex
                </h1>
              </div>
            </div>
            <div className="alex-container z-20 absolute bottom-5  left-0 w-full overflow-hidden text-[#D3FD50]  ">
              <div className="flex whitespace-nowrap  justify-between  font-[font2] alex-glow2 items-center ">
                <h1 className="uppercase text-4xl md:text-[10rem]  font-bold mr-[10rem] ">
                  SAUVAGEAU{" "}
                  <span className=" ml-2 text-2xl text-white ">
                    Directeur artistique
                  </span>{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={scrollRef3}
          className=" second h-full w-full flex relative items-center justify-center z-60 "
        >
          <div className=" z-40 h-full w-[35rem] rounded-4xl  ">
            <img
              className=" z-[10] h-full w-full relative object-cover rounded-4xl "
              src="/image/MyleneS_480x640-480x640.jpg"
              alt=""
            />
            <div className="alex-container z-0   absolute top-5  left-0 w-full overflow-hidden text-[#D3FD50]  ">
              <div className="flex whitespace-nowrap  justify-between  font-[font2] alex-glow items-center ">
                <h1 className="uppercase text-4xl md:text-[10rem] font-bold mr-[10rem] ">
                  MICHÈLE
                </h1>
                <h1 className="uppercase text-4xl md:text-[10rem]  font-bold">
                  MICHÈLE
                </h1>
              </div>
            </div>
            <div className="alex-container z-20 absolute bottom-5  left-0 w-full overflow-hidden text-[#D3FD50]  ">
              <div className="flex whitespace-nowrap  justify-between  font-[font2] alex-glow2 items-center ">
                <h1 className="uppercase text-4xl md:text-[10rem]  font-bold mr-[10rem] ">
                  RIENDEAU
                  <span className=" ml-2 text-2xl text-white ">
                    Directrice de la stratégie
                  </span>{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" section-4  -mt-[20rem] md:-mt-[40rem]  ">
        {imageCount.map((items, i) => (
          <div
            key={i}
            className="group w-full h-20 mb-5 relative border-[1px] rounded-2xl border-white hover:cursor-pointer"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <div
                className="w-full h-full absolute -top-full left-0 bg-[#D3FD50] 
                   group-hover:top-0 transition-all duration-500 ease-in-out z-10"
              ></div>
              <div
                className="relative flex items-center h-full w-full justify-between z-20 
                   transition-colors duration-300 group-hover:text-black"
              >
                <h2 className="font-[font2] text-sm md:text-xl ml-5 ">
                  {items.title}
                </h2>
                <h1 className="font-[font2] uppercase text-sm md:text-2xl mr-5 ">
                  {items.name}
                </h1>
              </div>
            </div>

            <div
              className="h-[20rem] md:flex hidden w-[15rem] absolute rounded-2xl bg-red-500 
                 -right-full top-1/2 -translate-y-1/2 opacity-0  
                 group-hover:left-75 group-hover:top-25 group-hover:opacity-100 
                 transition-all duration-150 ease-in-out z-30  "
            >
              <img
                className=" h-full w-full object-cover rounded-2xl "
                src={items.img}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      <div className="h-auto w-full flex flex-col  relative overflow-hidden ">
        <div className=" hidden md:flex bg-black h-[12rem] w-full ">
          <div className="flex justify-between h-full w-full items-start ">
            <div className="flex flex-row gap-x-2 ml-5 mt-10 ">
              <div className="uppercase md:h-15 w-15 xl:h-25 xl:w-45  hover:text-[#D3FD50] duration-150 ease-in-out  rounded-full text-center text-white md:text-4xl xl:text-[6rem] border-2  font-[font2] ">
                <h1 className=" md:mt-0 xl:-mt-4 ">fb</h1>
              </div>
              <div className="uppercase md:h-15 md:w-15 xl:h-25 xl:w-45 hover:text-[#D3FD50] duration-150 ease-in-out rounded-full text-center text-white md:text-4xl xl:text-[6rem] border-2  font-[font2] ">
                <h1 className=" md:mt-0 xl:-mt-4 ">ig</h1>
              </div>
              <div className="uppercase md:h-15 md:w-15 xl:h-25 xl:w-45 hover:text-[#D3FD50] duration-150 ease-in-out rounded-full text-center text-white md:text-4xl xl:text-[6rem] border-2  font-[font2] ">
                <h1 className=" md:mt-0 xl:-mt-4 ">in</h1>
              </div>
              <div className="uppercase md:h-15 md:w-15 xl:h-25 xl:w-45 hover:text-[#D3FD50] duration-150 ease-in-out rounded-full text-center text-white md:text-4xl xl:text-[6rem] border-2  font-[font2] ">
                <h1 className=" md:mt-0 xl:-mt-4 ">be</h1>
              </div>
            </div>
            <div
              onClick={handleclick}
              className=" xl:h-25 md:h-15 md:w-65 xl:w-[35rem] mr-5 mt-10 text-center hover:text-[#D3FD50] duration-150 cursor-pointer ease-in-out border-2 rounded-full font-[font2]  md:text-4xl xl:lg:text-[6rem] text-white "
            >
              <h1 className=" xl:-mt-4 "> Contact ❤️</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agency;
