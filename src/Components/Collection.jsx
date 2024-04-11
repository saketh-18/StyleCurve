import React from 'react'

export default function Collection() {
  return (
    <div className='h-screen bg-black text-white flex'>
      <div className='featured-products flex flex-col items-center w-full self-center'>
        <p className='font-semibold self-center text-4xl mb-10 f-heading'>Featured Styles</p>
        <div className='f-products flex flex-col sm:flex-row'>
          <div className='flex flex-col items-start mx-5 w-80 f-product p-5 rounded-lg' id='box'>
            <img src='https://www.snitch.co.in/cdn/shop/files/4MSS2735-05-M42.jpg?v=1712043616&width=1800' className=' w-full rounded-md' alt='jacket'/>
            <p className='text-xl font-light'>Checks Blue Shirt</p>
            <div className='price-rating flex sm:flex-row flex-col h-10 align-middle'>
              <p className='text-lg font-semibold self-center'>₹100</p>
              <img src='images/star-rating/4.5star-removebg-preview.png' className='w-2/3 ml-2 h-2/3 self-center'/>
              
            </div>
             <button class="bn3637 bn36" role="button">Buy now</button> 
          </div>
          <div className='flex flex-col items-start mx-5 w-80 f-product p-5 rounded-lg' id='box'>
            <img src='https://www.snitch.co.in/cdn/shop/files/4MSS2817-02-M24.jpg?v=1711522781&width=1800' className=' w-full rounded-md' alt='jacket'/>
            <p className='text-xl font-light'> FINESSE BLACK CROCHET SHIRT</p>
            <div className='price-rating flex sm:flex-row flex-col h-10 align-middle'>
              <p className='text-lg font-semibold self-center'>₹100</p>
              <img src='images/star-rating/4.5star-removebg-preview.png' className='w-2/3 ml-2 h-2/3 self-center'/>
              
            </div>
             <button class="bn3637 bn36" role="button">Buy now</button> 
          </div>
          <div className='flex flex-col items-start mx-5 w-80 f-product p-5 rounded-lg' id='box'>
            <img src='https://www.snitch.co.in/cdn/shop/files/4MSW9027-01-M58.jpg?v=1705749896&width=1800' className=' w-full rounded-md' alt='jacket'/>
            <p className='text-xl font-light'>FUZZY BLACK SWEATSHIRT</p>
            <div className='price-rating flex sm:flex-row flex-col h-10 align-middle'>
              <p className='text-lg font-semibold self-center'>₹100</p>
              <img src='images/star-rating/4.5star-removebg-preview.png' className='w-2/3 ml-2 h-2/3 self-center'/>
              
            </div>
             <button class="bn3637 bn36" role="button">Buy now</button> 
          </div>
          <div className='flex flex-col items-start mx-5 w-80 f-product p-5 rounded-lg' id='box'>
            <img src='https://www.snitch.co.in/cdn/shop/files/4MST2215-02-M34.jpg?v=1702634874&width=1800 ' className=' w-full rounded-md' alt='jacket'/>
            <p className='text-xl font-light'>PINK OVERSIZED T-SHIRT</p>
            <div className='price-rating flex sm:flex-row flex-col h-10 align-middle'>
              <p className='text-lg font-semibold self-center'>₹100</p>
              <img src='images/star-rating/4.5star-removebg-preview.png' className='w-2/3 ml-2 h-2/3 self-center'/>
              
            </div>
             <button class="bn3637 bn36" role="button">Buy now</button> 
          </div>
        </div>
      </div>
    </div>
  )
}


