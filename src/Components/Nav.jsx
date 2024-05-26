import React from 'react'
import Logo from "../../assets/logo.png";

function Nav() {
  return (
    <nav className='flex justify-around w-screen items-center bg-red-400 h-full'>
    <img src={Logo} className="h-38 w-56 lg:h-36 w-54 mt-3"/>

ANUSHA
<div className='bg-red-500 h-2'> ANUSHA </div>
    </nav>
  )
}

export default Nav;