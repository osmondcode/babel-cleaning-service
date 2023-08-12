import React, { useEffect } from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'
import AOS from "aos";
import 'aos/dist/aos.css'

const Pricing = () => {

    useEffect(() => {
        AOS.init({duration: 1500})
      }, [])
  return (
    <section className='w-full min-h-[88vh] flex flex-col items-center justify-start md:pt-0 pt-[15vh]  lg:px-[10%] px-[5%]' id='pricing' data-aos='zoom-in'>
        <div className='2sm:w-[85%] w-full flex items-center justify-center gap-[15px] mb-5'>
            <hr className='sm:w-[8%] 2sm:w-[20%] w-[33%] border-[0.5px] border-orange-400'/>
            <h2 className='font-bold text-orange-400 text-[22px]'>Pricing</h2>
            <hr className='sm:w-[8%] 2sm:w-[20%] w-[33%] border-[0.5px] border-orange-400'/>
        </div>
        <h1 className='md:text-[2.4vw] sm:text-[4.7vw] text-[1.9rem] leading-[48px] font-bold capitalize '>our pricing plans</h1>

        <div className='md:w-[90%] w-full flex items-center lg:justify-between justify-center mt-9 flex-wrap'>

            <span className='2sm:w-[300px] w-[95%] bg-orange-50 text-black flex flex-col items-center justify-center rounded-xl pt-7 pb-3 px-5 shadow-md cursor-pointer hover:shadow-lg hover:shadow-orange-950 duration-500 shadow-orange-900 my-[40px] ' data-aos='zoom-in'>
                <h2 className='font-bold text-orange-400 text-[25px] mb-[15px]'>Daily</h2>
                <span className='w-[120px] h-[120px] flex flex-col items-center justify-center gap-[5px] rounded-full border-[5px] border-orange-400 mb-[25px] leading-5'>
                    <h1 className='font-medium text-[1.3rem]'>₦15,000</h1>
                </span>
                <div className='w-full flex flex-col gap-[5px] text-slate-700'>

                    <span className='flex items-center justify-start text-slate-800 gap-[15px]'>
                        <FaCheck/>
                        <p className='capitalize text-[18px]'>carpet cleaning</p>
                    </span>

                    <span className='flex items-center justify-start text-slate-800 gap-[15px]'>
                        <FaCheck/>
                        <p className='capitalize text-[18px]'>window cleaning</p>
                    </span>

                    <span className='flex items-center justify-start text-slate-800 gap-[15px]'>
                        <FaCheck/>
                        <p className='capitalize text-[18px]'>bathroom cleaning</p>
                    </span>

                    <span className='flex items-center justify-start text-slate-800 gap-[15px]'>
                        <FaCheck/>
                        <p className='capitalize text-[18px]'>furniture cleaning</p>
                    </span>
                    

                </div>
                <button className='px-5 rounded-3xl font-medium border-[3px] duration-500 border-transparent hover:border-[3px] hover:border-orange-400 hover:bg-transparent py-2 capitalize mt-3 mb-1 bg-orange-400 text-white hover:text-black'>get started</button>
            </span>


            <span className='2sm:w-[300px] w-[95%] bg-orange-50 text-black flex flex-col items-center justify-center rounded-xl pt-7 pb-3 px-5 shadow-md cursor-pointer hover:shadow-lg hover:shadow-orange-950 duration-500 shadow-orange-900 my-[40px] lg:mx-0 2sm:mx-[40px] mx-0' data-aos='zoom-in'>
                <h2 className='font-bold text-orange-400 text-[25px] mb-[15px]'>Weekly</h2>
                <span className='w-[120px] h-[120px] flex flex-col items-center justify-center gap-[5px] rounded-full border-[5px] border-orange-400 mb-[25px] leading-5'>
                    <h1 className='font-medium text-[1.3rem]'>₦35,000</h1>
                </span>
                <div className='w-full flex flex-col gap-[5px] text-slate-700'>

                    <span className='flex items-center justify-start text-slate-800 gap-[15px]'>
                        <FaCheck/>
                        <p className='capitalize text-[18px]'>carpet cleaning</p>
                    </span>

                    <span className='flex items-center justify-start text-slate-800 gap-[15px]'>
                        <FaCheck/>
                        <p className='capitalize text-[18px]'>window cleaning</p>
                    </span>

                    <span className='flex items-center justify-start text-slate-800 gap-[15px]'>
                        <FaCheck/>
                        <p className='capitalize text-[18px]'>bathroom cleaning</p>
                    </span>

                    <span className='flex items-center justify-start text-slate-800 gap-[15px]'>
                        <FaCheck/>
                        <p className='capitalize text-[18px]'>furniture cleaning</p>
                    </span>

                </div>

                <button className='px-5 rounded-3xl font-medium border-[3px] duration-500 border-transparent hover:border-[3px] hover:border-orange-400 hover:bg-transparent py-2 capitalize mt-3 mb-1 bg-orange-400 text-white hover:text-black'>get started</button>
            </span>


            <span className='2sm:w-[300px] w-[95%] bg-orange-50 text-black flex flex-col items-center justify-center rounded-xl pt-7 pb-3 px-5 shadow-md cursor-pointer hover:shadow-lg hover:shadow-orange-950 duration-500 shadow-orange-900 my-[40px] ' data-aos='zoom-in'>
                <h2 className='font-bold text-orange-400 text-[25px] mb-[15px]'>Monthly</h2>
                <span className='w-[120px] h-[120px] flex flex-col items-center justify-center gap-[5px] rounded-full border-[5px] border-orange-400 mb-[25px] leading-5'>
                    <h1 className='font-medium text-[1.2rem]'>₦130,000</h1>
                </span>
                <div className='w-full flex flex-col gap-[5px] text-slate-700'>

                    <span className='flex items-center justify-start text-slate-800 gap-[15px]'>
                        <FaCheck/>
                        <p className='capitalize text-[18px]'>carpet cleaning</p>
                    </span>

                    <span className='flex items-center justify-start text-slate-800 gap-[15px]'>
                        <FaCheck/>
                        <p className='capitalize text-[18px]'>window cleaning</p>
                    </span>

                    <span className='flex items-center justify-start text-slate-800 gap-[15px]'>
                        <FaCheck/>
                        <p className='capitalize text-[18px]'>bathroom cleaning</p>
                    </span>

                    <span className='flex items-center justify-start text-slate-800 gap-[15px]'>
                        <FaCheck/>
                        <p className='capitalize text-[18px]'>furniture cleaning</p>
                    </span>
                    

                </div>

                <button className='px-5 rounded-3xl font-medium border-[3px] duration-500 border-transparent hover:border-[3px] hover:border-orange-400 hover:bg-transparent py-2 capitalize mt-3 mb-1 bg-orange-400 text-white hover:text-black'>get started</button>
            </span>


        </div>
    </section>
  )
}

export default Pricing