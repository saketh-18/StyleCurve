import React from 'react';

export default function Navbar() {
  return (
    <div className='navbar flex justify-between p-4 sticky text-white'>
        <p className='font-serif text-3xl font-semibold logo'>StyleCurve</p>
        <div className='flex items-center justify-evenly w-1/2 relative left-14 ml-4 navbar-menu'>
          <p className='font-semibold drop-shadow-2xl text-lg'>Men</p>
          <p className='font-semibold drop-shadow-2xl text-lg'>Women</p>
          <p className='font-semibold drop-shadow-2xl text-lg'>Trends</p>
          <p className='font-semibold drop-shadow-2xl text-lg'>Account</p>
        </div>
      </div>
  )
}



