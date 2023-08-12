import React, { useEffect, useRef, useState } from 'react'
import { FaEnvelope, FaMapPin, FaPhoneAlt, FaCheck } from 'react-icons/fa'
import AOS from "aos";
import 'aos/dist/aos.css'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const [subBtn, setSubBtn] = useState(<button type='submit' className='capitalize 2sm:w-fit w-full px-5 mt-2 font-bold py-2 rounded-3xl bg-orange-400 text-black'>send message</button>)

    const sendEmail = (e) => {
  
      emailjs.sendForm('service_48vlm84', 'template_ziujsjo', form.current, 'TSWkCyKGt6hPUK9rH')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        setSubBtn(<p className='capitalize 2sm:w-fit w-full flex items-center justify-center gap-2 px-5 mt-2 font-semibold py-2 rounded-3xl bg-orange-400 text-black'>message sent <FaCheck/></p>)
    };

    
  useEffect(() => {
    AOS.init({duration: 1500})
  }, [])
  return (
    <div className='w-full min-h-[88vh] flex flex-col items-center justify-start md:pt-0 pt-[15vh] mb-[10vh]  lg:px-[10%] px-[5%]' id='contact' data-aos='zoom-in'>

        <div className='2sm:w-[85%] w-full flex items-center justify-center gap-[15px] mb-5' >
            <hr className='sm:w-[8%] 2sm:w-[20%] w-[33%] border-[0.5px] border-orange-400'/>
            <h2 className='font-bold text-orange-400 text-[22px]'>Contact</h2>
            <hr className='sm:w-[8%] 2sm:w-[20%] w-[33%] border-[0.5px] border-orange-400'/>
        </div>
        <h1 className=' sm:text-[2.1rem] text-[1.7rem] leading-[48px] font-bold capitalize mb-[40px]'>Have Any Question?</h1>

        <div className='w-full flex md:flex-row flex-col items-start justify-between mt-5' data-aos='zoom-in'>
            <span className='md:w-[38%] w-full mb-[8vh] md:mb-0 flex flex-col items-center justify-start'>
                <div className='w-full flex items-center justify-start border-b-[1px] border-slate-300 pb-4'>
                    <span className='sm:p-[15px] p-[8px] flex items-center justify-center'>
                        <span className='sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] flex items-center justify-center bg-orange-400 text-black rounded-full'>
                            <FaMapPin className='text-[1.3rem]'/>
                        </span>
                    </span>
                    <span>
                        <h2 className='2sm:text-[22px] text-[18px] leading-5 font-bold capitalize mb-1'>address</h2>
                        <p className='capitalize 2sm:text-[18px] text-[14px] text-slate-200'>Ekpoma, edo state nigeria</p>
                    </span>
                </div>
                <div className='w-full flex items-center justify-start border-b-[1px] border-slate-300 pb-4 my-4'>
                    <span className='sm:p-[15px] p-[8px] flex items-center justify-center'>
                        <span className='sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] flex items-center justify-center bg-orange-400 text-black rounded-full'>
                            <FaPhoneAlt className='text-[1.3rem]'/>
                        </span>
                    </span>
                    <span>
                        <h2 className='2sm:text-[22px] text-[18px] leading-5 font-bold capitalize mb-1'>call us</h2>
                        <p className='capitalize 2sm:text-[18px] text-[14px] text-slate-200'>234 (0) 701 9661 912</p>
                    </span>
                </div>
                <div className='w-full flex items-center justify-start pb-4'>
                    <span className='sm:p-[15px] p-[8px] flex items-center justify-center'>
                        <span className='sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] flex items-center justify-center bg-orange-400 text-black rounded-full'>
                            <FaEnvelope className='text-[1.3rem]'/>
                        </span>
                    </span>
                    <span>
                        <h2 className='2sm:text-[22px] text-[18px] leading-5 font-bold capitalize mb-1'>email us</h2>
                        <p className='2sm:text-[18px] text-[14px] text-slate-200'>tracyugbodaga@gmail.com</p>
                    </span>
                </div>
            </span>
            <span className='md:w-[60%] w-full flex flex-col item-start justify-center' data-aos='zoom-in'>
                <form className='flex flex-col items-start justify-center gap-[20px]' ref={form} onSubmit={sendEmail}>
                    <input type='text' placeholder='Name' name='Name' className='md:w-[90%] w-full text-[18px] rounded-lg py-2 px-3 bg-transparent border-[1px] border-slate-400 outline-none' required/>
                    <input type='email' placeholder='Email' name='Email' className='md:w-[90%] w-full text-[18px] rounded-lg py-2 px-3 bg-transparent border-[1px] border-slate-400 outline-none' required/>
                    <input type='number' placeholder='Phone' name='Phone' className='md:w-[90%] w-full text-[18px] rounded-lg py-2 px-3 bg-transparent border-[1px] border-slate-400 outline-none' required/>
                    <textarea name='message' placeholder='Message' className='md:w-[90%] w-full text-[18px] h-[300px] resize-none rounded-lg py-2 px-3 bg-transparent border-[1px] border-slate-400 outline-none' required></textarea>
                    {subBtn}
                </form>
            </span>
        </div>

    </div>
  )
}

export default Contact