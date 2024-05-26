import React from 'react'
import logo from "../assets/logo.png";

function Nav() {
  return (
    <nav className="flex 3 p-3" >
    <img src={logo} className='h-28 w-28' />

    <div>ANUSHA</div>

    </nav>
  )
}

export default Nav;