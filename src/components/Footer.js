import React, { useEffect } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import AOS from "aos";
import 'aos/dist/aos.css'


const Footer = () => {
    useEffect(() => {
        AOS.init({duration: 1500})
      }, [])
  return (
    <div className='w-full bg-orange-400 flex flex-col items-center justify-center gap-3 min-h-[15vh] py-3' >
        <h2 className='capitalize font-semibold text-[1.3rem]' >follow us</h2>
        <div className='flex items-center justify-between gap-[10px]' >
            <span className='w-[40px] text-white border-[3px] border-transparent hover:border-[3px] hover:border-o bg-black h-[40px] flex items-center justify-center rounded-full cursor-pointer'>
                <FaTwitter/>
            </span>
            <span className='w-[40px] text-white border-[3px] border-transparent hover:border-[3px] hover:border-o bg-black h-[40px] flex items-center justify-center rounded-full cursor-pointer'>
                <FaFacebookF/>
            </span>
            <span className='w-[40px] text-white border-[3px] border-transparent hover:border-[3px] hover:border-o bg-black h-[40px] flex items-center justify-center rounded-full cursor-pointer'>
                <FaInstagram/>
            </span>
            <span className='w-[40px] text-white border-[3px] border-transparent hover:border-[3px] hover:border-o bg-black h-[40px] flex items-center justify-center rounded-full cursor-pointer'>
                <FaLinkedinIn/>
            </span>
        </div>
        <p className='capitalize text-black'>copyright &copy; 2023. all right reserved</p>
        <p className='capitalize text-black'>Designed by osmondcode</p>
    </div>
  )
}

export default Footer