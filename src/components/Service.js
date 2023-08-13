import React, { useEffect } from 'react'
import carpet from "./image/carpet cleaning.jpg";
import window from "./image/window cleaning.jpg";
import bathroom from "./image/bathroom cleaning.jpg";
import furniture from "./image/furniture cleaning.jpg";
import AOS from "aos";
import 'aos/dist/aos.css'

const Service = () => {

    useEffect(() => {
        AOS.init({duration: 1500})
      }, [])
  return (
    <section className='w-full min-h-[68vh] flex flex-col items-center justify-start md:pt-0 pt-[15vh] mb-[8vh]  lg:px-[10%] px-[5%]' id='service' data-aos='zoom-in'>
        <div className='2sm:w-[85%] w-full flex items-center justify-center gap-[15px] mb-5'>
            <hr className='sm:w-[8%] 2sm:w-[20%] w-[33%] border-[0.5px] border-orange-400'/>
            <h2 className='font-bold text-orange-400 text-[22px]'>Services</h2>
            <hr className='sm:w-[8%] 2sm:w-[20%] w-[33%] border-[0.5px] border-orange-400'/>
        </div>
        <h1 className='md:text-[2.4vw] sm:text-[4.7vw] text-[1.9rem] leading-[48px] font-bold capitalize mb-[40px]'>what we do</h1>
        <div className='W-[90%] flex items-center justify-center flex-wrap'>
            <span className='w-[180px] flex flex-col items-center justify-center gap-3 m-[20px]' data-aos='zoom-in'>
                <span className='2sm:w-[160px] w-[140px] 2sm:h-[160px] h-[140px] rounded-full border-[5px] hover:border-0 border-white flex items-center justify-center cursor-pointer overflow-hidden duration-500'>
                    <img src={carpet} alt='carpet' className='w-full h-full hover:scale-[1.03] flex items-center justify-center duration-500'/>
                </span>
                <h3 className='capitalize text-[18px] font-medium mt-2'>carpet cleaning</h3>
            </span>
            <span className='w-[180px] flex flex-col items-center justify-center gap-3 m-[20px]' data-aos='zoom-in'>
                <span className='2sm:w-[160px] w-[140px] 2sm:h-[160px] h-[140px] rounded-full border-[5px] hover:border-0 border-white flex items-center justify-center cursor-pointer overflow-hidden duration-500'>
                    <img src={window} alt='window' className='w-full h-full hover:scale-[1.03] flex items-center justify-center duration-500'/>
                </span>
                <h3 className='capitalize text-[18px] font-medium mt-2'>window cleaning</h3>
            </span>
            <span className='w-[180px] flex flex-col items-center justify-center gap-3 m-[20px]' data-aos='zoom-in'>
                <span className='2sm:w-[160px] w-[140px] 2sm:h-[160px] h-[140px] rounded-full border-[5px] hover:border-0 border-white flex items-center justify-center cursor-pointer overflow-hidden duration-500'>
                    <img src={bathroom} alt='bathroom' className='w-full h-full hover:scale-[1.03] flex items-center justify-center duration-500'/>
                </span>
                <h3 className='capitalize text-[18px] font-medium mt-2'>bathroom cleaning</h3>
            </span>
            <span className='w-[180px] flex flex-col items-center justify-center gap-3 m-[20px]' data-aos='zoom-in'>
                <span className='2sm:w-[160px] w-[140px] 2sm:h-[160px] h-[140px] rounded-full border-[5px] hover:border-0 border-white flex items-center justify-center cursor-pointer overflow-hidden duration-500'>
                    <img src={furniture} alt='furniture' className='w-full h-full hover:scale-[1.03] flex items-center justify-center duration-500'/>
                </span>
                <h3 className='capitalize text-[18px] font-medium mt-2'>furniture cleaning</h3>
            </span>
        </div>
    </section>
  )
}

export default Service