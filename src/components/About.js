import React, { useEffect } from 'react'
import BannerII from "./image/bannerII.png";
import AOS from "aos";
import 'aos/dist/aos.css'

const About = () => {

  useEffect(() => {
    AOS.init({duration: 1500})
  }, [])
  return (
    <section className='w-full min-h-[88vh] flex-col flex md:flex-row items-center justify-between md:pt-0 pt-[15vh] mb-[8vh]  lg:px-[10%] px-[5%]' id='about'  data-aos='zoom-in'>
        <span className='2sm:w-[400px] w-full h-[400px] flex items-center justify-center relative mb-[5vh] md:mb-0' data-aos='zoom-in'> 
          <span className='2sm:w-[350px] w-[260px] 2sm:h-[350px] h-[260px] flex items-center justify-center rounded-full bg-orange-400 overflow-visible border-[10px] border-orange-400 relative'>
            <span className='2sm:w-[350px] w-[260px] 2sm:h-[350px] h-[260px] flex items-center justify-center rounded-full bg-orange-400 overflow-hidden 2sm:border-[20px] border-[5px] border-orange-400 relative'>
              <img src={BannerII} alt='cleanerII' className='2sm:h-[330px] h-[280px] absolute top-[-20px] left-2 z-30'/>
            </span>

              <span className='2sm:w-fit w-[100px] 2sm:h-[100px] h-[70px] px-2 flex flex-col items-center justify-center gap-[15px] rounded-bl-[30px] rounded-tr-[30px] absolute bottom-[20px] left-[-25px] bg-orange-600 z-40 text-center 2sm:pt-0 pt-3'>
                <h2 className='2sm:text-[2rem] text-[1.7rem] font-bold 2sm:leading-[10px] leading-[1px]'>50+</h2>
                <p className='uppercase text-[11px] text-wrap'>satisfied clients</p>
              </span>
          </span>
        </span>
        <span className='md:w-[45%] w-full flex flex-col md:mt-0 mt-[10vh] md:text-start text-justify md:items-start items-center gap-[20px]' data-aos='zoom-in'>
          <div className='lg:w-2/3 2sm:w-[70%] w-full flex items-center justify-between gap-1'>
            <hr className='w-[33%] border-[px] border-orange-400 h-[1px]'/>
            <h2 className='text-orange-400 font-bold'>About Us</h2>
            <hr className='w-[33%] border-[px] border-orange-400 h-[1px]'/>
          </div>
          <h1 className='md:text-[2.6vw] sm:text-[4.7vw] text-[5.9vw] leading-[48px] font-bold capitalize'>we're cleaning since 2017</h1>
          <p>We provide specialized cleaning and janitorial services for all types and sizes of buildings. Our professional cleaning services span from residential homes, from small to large offices and commercial/ event centres to industrial. </p>
          <p>Warehouse and retail locations and centres, Our cleaning services in Nigeria spans across major cities (Victoria Island, Lekki, Ikeja, Ikoyi, Port Harcourt, Ibadan, Benin City, Abuja e.t.c) and major states (Lagos, FCT, Rivers, Oyo Edoe.t.c.).</p>
        </span>
    </section>
  )
}

export default About