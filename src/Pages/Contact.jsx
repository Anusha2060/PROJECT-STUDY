import React, { useEffect } from 'react'
import Banner from '../Components/UI/banner'
import { CiLocationOn } from "react-icons/ci";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const contatdata=[
    {
      icon:<CiLocationOn/>,
      title:'Location:',
      description:'43 Raymouth Rd. Baltemoer, London 3910',
    },
    {
      icon:<CiLocationOn/>,
      title:'Open Hours:',
      description:'Sunday-Friday:',
      time:'11:00 AM - 23:00 PM'
    },
    {
      icon:<CiLocationOn/>,
      title:'Email:',
      description:'@Colorlib',
    },
    {
      icon:<CiLocationOn/>,
      title:'Call:',
      description:'+1 1234 55488 55',
    },
  ]
  return (
    <div className='grid gap-36'>
        <Banner>
        <div  className="h-full w-full flex flex-col justify-center items-center gap-3 text-white">
          <div className="capitalize text-5xl font-bold">Contact us</div>
          <div className="w-5/12 text-md text-center">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </div>
        </div>
      </Banner>
      <div className='grid grid-cols-5 w-10/12 mx-auto'>
        <div className='flex flex-col gap-20 col-span-2'>
          <div className='flex flex-col gap-1'>
            <div className='text-2xl font-bold text-orange-500'>Contact</div>
            <div className='text-6xl font-semibold'>Get in touch</div>
          </div>
            <div className='flex flex-col gap-6'>
              {
              contatdata.map((val,i)=>{
                return(
                  <div className="flex items-center gap-3 py-2 px-2">
                    <div className="h-12 w-12 bg-orange-500 text-white rounded-full flex justify-center items-center text-3xl ">
                      {val.icon}
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className='text-lg font-medium text-gray-800'>{val.title}</div>
                      <div className='text-gray-700 text-md'>{val.description}</div>
                      {
                        val.time && 
                        <div className='text-gray-700 text-md'>{val.time}</div>
                      }
                    </div>
                  </div>
                )
              })

              }
            </div>
        </div> 
        <div className='grid grid-cols-2 gap-4 col-span-3 mt-44'>
          <input type="text" placeholder='Your Name' className='px-3 w-full h-10 rounded-sm border border-gray-600 outline-orange-500'  />          
          <input type="text" placeholder='Your Email' className='px-3 w-full h-10 rounded-sm border  border-gray-600 outline-orange-500'  />          
          <input type="text" placeholder='Subject' className='px-3 col-span-2 w-full h-10 rounded-sm border  border-gray-600 outline-orange-500' />  
          <textarea name="" placeholder='Your message' rows={8} className='px-3 resize-none col-span-2  w-full rounded-sm border  border-gray-600 outline-orange-500' id=""></textarea>        
          <button className='bg-orange-500 w-44 h-fit py-3 text-white rounded-full font-semibold cursor-pointer  hover:bg-orange-400 transition-all ease-in-out duration-500 delay-75'>Send Message</button>
        </div>

      </div>
    </div>
  )
}

export default Contact;