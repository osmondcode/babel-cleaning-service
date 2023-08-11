import React, { useEffect } from 'react'
import AOS from "aos";
import 'aos/dist/aos.css'

const SideBar = ({translate, handleSwitch}) => {

  useEffect(() => {
    AOS.init({duration: 1500})
  }, [])
  return (
    <div className='w-full h-[88vh] fixed flex items-start justify-start top-[12vh] left-0 bg-black/80 z-50' >
        <div className={`Translate ${translate ? 'translate-down' : ''}`} data-aos='fade-down'>
            <a onClick={handleSwitch} className='text-[18px] hover:text-orange-400' href='#home'>Home</a>
            <a onClick={handleSwitch} className='text-[18px] hover:text-orange-400' href='#about'>About</a>
            <a onClick={handleSwitch} className='text-[18px] hover:text-orange-400' href='#service'>Service</a>
            <a onClick={handleSwitch} className='text-[18px] hover:text-orange-400' href='#pricing'>Pricing</a>
            <a onClick={handleSwitch} className='text-[18px] hover:text-orange-400' href='#team'>Team</a>
            <a onClick={handleSwitch} className='text-[18px] hover:text-orange-400' href='#contact'>Contact</a>
        </div>
    </div>
  )
}

export default SideBar