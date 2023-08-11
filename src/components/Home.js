import React, { useEffect } from 'react'
import BannerI from "./image/bannerI.png";
import AOS from "aos";
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() => {
    AOS.init({duration: 1500})
  }, [])
  return (
    <section className='w-full min-h-[88vh] flex-col-reverse flex md:flex-row items-center justify-between md:pt-0 mt-[1vh] pt-[15vh]   lg:px-[10%] px-[5%]' id='home' data-aos='zoom-in'>
        <span className='md:w-[45%] w-full flex flex-col md:mt-0 mt-[10vh] text-start gap-[20px]' data-aos='zoom-in'>
            <h1 className='md:text-[3.4vw] sm:text-[4.7vw] text-[5.9vw] leading-[48px] font-bold capitalize'>need cleaning service?</h1>
            <p className='md:text-start text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente repellendus et quae porro esse aliquam dignissimos vero</p>
            <button className='w-fit h-fit px-5 py-2 bg-orange-400 rounded-3xl hover:scale-[1.03] duration-500'>Know More</button>
        </span>
        <span className='2sm:w-[400px] w-full h-[400px] flex items-center justify-center relative mb-[5vh] md:mb-0' data-aos='zoom-in'>
            <div className='2sm:w-[320px] w-[220px] 2sm:h-[320px] h-[220px] flex items-center justify-center rounded-full bg-orange-400 overflow-visible'>
                <img src={BannerI} alt='cleaner'  className='h-[450px] 2sm:h-[550px] left-auto absolute top-[-75px] 2sm:top-[-125px] z-40'/>
            </div>
        </span>
    </section>
  )
}

export default Home