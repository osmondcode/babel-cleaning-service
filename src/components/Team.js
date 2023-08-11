import React, { useEffect } from 'react'
import CarCleaner from "./image/car-cleaner.png";
import LaundryMan from "./image/laundry man.png";
import TeamLeader from "./image/team leander.png";
import AOS from "aos";
import 'aos/dist/aos.css'

const Team = () => {

    useEffect(() => {
        AOS.init({duration: 1500})
      }, [])
  return (
    <section className='w-full min-h-[88vh] flex flex-col items-center justify-start md:pt-0 pt-[15vh]  lg:px-[10%] px-[5%]' id='team' data-aos='zoom-in'>

        <div className='2sm:w-[85%] w-full flex items-center justify-center gap-[15px] mb-5'>
            <hr className='sm:w-[8%] 2sm:w-[20%] w-[33%] border-[0.5px] border-orange-400'/>
            <h2 className='font-bold text-orange-400 text-[22px]'>Team</h2>
            <hr className='sm:w-[8%] 2sm:w-[20%] w-[33%] border-[0.5px] border-orange-400'/>
        </div>
        <h1 className='md:text-[2.4vw] sm:text-[4.7vw] text-[1.9rem] font-bold capitalize mb-[40px]'>meet our team</h1>

        <div className='w-full flex items-center md:justify-between justify-center flex-wrap'>
            <span className='w-fit flex flex-col items-center justify-center relative my-[40px]' data-aos='zoom-in'>
                <div className='2sm:w-[320px] w-[240px] h-[240px] 2sm:h-[320px] flex items-center justify-center rounded-full bg-orange-200 overflow-hidden border-[8px] border-orange-200'>
                    <img src={TeamLeader} alt='team leader' className='w-[90%] h-[90%] object-cover'/>
                </div>
                <span className='w-[180px] 2sm:py-4 py-2 bg-orange-400 flex flex-col items-center justify-center text-center absolute z-40 bottom-[-20px] left-auto rounded-tr-[50px] rounded-bl-[50px] hover:rounded-tr-none hover:rounded-bl-none hover:rounded-tl-[50px] hover:rounded-br-[50px] duration-500 cursor-pointer'>
                    <h2 className='text-[1.2rem] font-semibold leading-5'>Precious Will</h2>
                    <p className='text-[16px]'>Team Leader</p>
                </span>
            </span>
            <span className='w-fit flex flex-col items-center justify-center relative m-[40px]' data-aos='zoom-in'>
                <div className='2sm:w-[320px] w-[240px] h-[240px] 2sm:h-[320px] flex items-center justify-center rounded-full bg-orange-200 overflow-hidden p-4'>
                    <img src={CarCleaner} alt='team leader' className='w-full h-full object-cover'/>
                    </div>
                <span className='w-[180px] 2sm:py-4 py-2 bg-orange-400 flex flex-col items-center justify-center text-center absolute z-40 bottom-[-20px] left-auto rounded-tr-[50px] rounded-bl-[50px] hover:rounded-tr-none hover:rounded-bl-none hover:rounded-tl-[50px] hover:rounded-br-[50px] duration-500 cursor-pointer'>
                    <h2 className='text-[1.2rem] font-semibold leading-5'>Smith Jennifer</h2>
                    <p className='text-[16px]'>Car Cleaner</p>
                </span>
            </span>
            <span className='w-fit flex flex-col items-center justify-center relative my-[40px]' data-aos='zoom-in'>
                <div className='2sm:w-[320px] w-[240px] h-[240px] 2sm:h-[320px] flex items-center justify-center rounded-full bg-orange-200 overflow-hidden p-4'>
                        <img src={LaundryMan} alt='laundry man' className='w-full h-full object-cover'/>
                    </div>
                <span className='w-[180px] 2sm:py-4 py-2 bg-orange-400 flex flex-col items-center justify-center text-center absolute z-40 bottom-[-20px] left-auto rounded-tr-[50px] rounded-bl-[50px] hover:rounded-tr-none hover:rounded-bl-none hover:rounded-tl-[50px] hover:rounded-br-[50px] duration-500 cursor-pointer'>
                    <h2 className='text-[1.2rem] font-semibold leading-5'>Marcos Juan</h2>
                    <p className='text-[16px]'>Laundery Personel</p>
                </span>
            </span>
        </div>

    </section>
  )
}

export default Team