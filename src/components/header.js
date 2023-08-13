import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const header = ({handleSwitch, sideBar}) => {
  return (
    <nav className='w-full h-[12vh] sticky top-0 left-0 bg-black z-50 flex items-center justify-between  lg:px-[10%] px-[5%]'>
        <a href='#' className='w-fit flex flex-col'>
            <p className='text-[1.3rem] font-extrabold uppercase text-orange-400 leading-[18px] text-justify'>cy cleaning</p>
            <p className='uppercase text-[18px] service font-bold'>service</p>
        </a>
        <button className='flex md:hidden p-1 border-[0.5px] border-white rounded-md text-[1.2rem]' onClick={handleSwitch}>
          {sideBar ? <FaTimes/> : <FaBars/>}
        </button>

        <span className='md:flex hidden items-start justify-center'>
            <a className='mr-[12px] hover:text-orange-400 duration-500' href='#home'>Home</a>
            <a className='mr-[12px] hover:text-orange-400 duration-500' href='#about'>About</a>
            <a className='mr-[12px] hover:text-orange-400 duration-500' href='#service'>Services</a>
            <a className='mr-[12px] hover:text-orange-400 duration-500' href='#pricing'>Pricing</a>
            <a className='mr-[12px] hover:text-orange-400 duration-500' href='#team'>Team</a>
            <a className='mr-[12px] hover:text-orange-400 duration-500' href='#contact'>Contact</a>
        </span>
    </nav>
  )
}

export default header