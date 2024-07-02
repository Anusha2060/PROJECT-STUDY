import React from 'react'
import BG from "../../assets/bg.jpg"
export default function Banner({children}) {
  return (
    <div className='relative h-screen'>
        <div className='h-full w-full bg-black bg-opacity-40 absolute top-0 left-0 '></div>
      <img src={BG} className=" h-full w-full" />
<div className='absolute top-0 left-0 right-0 bottom-0 h-full w-10/12 mx-auto z-10'>
{children}
</div>
    </div>
  )
}
