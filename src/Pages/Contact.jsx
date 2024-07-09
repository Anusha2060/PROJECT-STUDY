import React from 'react'
import Banner from '../Components/UI/banner'

function Contact() {
  return (
    <div>
        <Banner>
        <div  className="h-full w-full flex flex-col justify-center items-center gap-3 text-white">
          <div className="capitalize text-5xl font-bold">Contact us</div>
          <div className="w-5/12 text-md text-center">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </div>
        </div>
      </Banner>
      <div className='grid grid-cols-5'>
        <div className='col-span-2'>FORM</div>
        <div className='grid grid-cols-2 gap-4 col-span-3'>
          <input type="text" placeholder='Your Name' className='px-3 w-full h-10 rounded-sm border outline-orange-500'  />          
          <input type="text" placeholder='Your Email' className='px-3 w-full h-10 rounded-sm border outline-orange-500'  />          
          <input type="text" placeholder='Subject' className='px-3 col-span-2 w-full h-10 rounded-sm border outline-orange-500' />  
          <textarea name="" placeholder='Your message' rows={8} className='px-3 resize-none col-span-2  w-full rounded-sm border outline-orange-500' id=""></textarea>        
        </div>
      </div>
    </div>
  )
}

export default Contact;