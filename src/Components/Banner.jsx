import React from 'react'
import Navbar from './Navbar'

export default function Banner() {
  return (
    <div className='flex flex-col top-page-container w-full'>
    <div className='navbar-banner w-full'>
      <Navbar />
    </div>
    <div className='banner h-screen flex justify-start w-full'>
      <div className=' banner-text text-white text-left flex flex-col justify-center absolute top-0 w-full h-full bg-gradient-to-r from-black to-transparent'>
        <p className='text-4xl font-bold ml-4'>Get latest styles to your doorstep</p>
        <p className='ml-4'>Get 2 polos @899</p>
      </div>
    </div>
    </div>
  )
}
