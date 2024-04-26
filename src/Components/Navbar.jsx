import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar flex justify-between p-4 sticky text-white'>
        <Link to={"/"} className='font-serif text-3xl font-semibold logo'>StyleCurve</Link>
        <div className='flex items-center justify-evenly w-1/2 relative left-14 ml-4 navbar-menu'>
          <Link className='nav-item font-semibold drop-shadow-2xl text-lg hover:cursor-pointer hover:text-2xl' to={"/men"}>Men</Link>
          <p className='nav-item font-semibold drop-shadow-2xl text-lg hover:cursor-pointer hover:text-2xl'>Women</p>
          <Link to={"/trends"} className='nav-item font-semibold drop-shadow-2xl text-lg hover:cursor-pointer hover:text-2xl'>Trends</Link>
          <Link to={"/register"} className='nav-item font-semibold drop-shadow-2xl text-lg hover:cursor-pointer hover:text-2xl'>Account</Link>
        </div>
      </div>
  )
}



