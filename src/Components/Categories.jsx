import React from 'react'

export default function Categories() {
  return (
    <div className='flex flex-col items-center bg-black w-full category-container justify-between'>
        <p className='font-thin text-4xl text-white'>Shop By Categories</p>
        <div className='flex flex-row category-scroll justify-between w-full'>
            <div className='bg-white w-32 h-32 category ml-2 mr-2 text-center justify-center items-center flex '><p className='font-bold  italic'>CHINOS</p></div>
            <div className='bg-white w-32 h-32 category ml-2 mr-2 text-center justify-center items-center flex '><p className='font-bold  italic'>CASUAL</p></div>
            <div className='bg-white w-32 h-32 category ml-2 mr-2 text-center justify-center items-center flex '><p className='font-bold  italic'>FORMAL</p></div>
            <div className='bg-white w-32 h-32 category ml-2 mr-2 text-center justify-center items-center flex '><p className='font-bold  italic'>SUMMER</p></div>
            <div className='bg-white w-32 h-32 category ml-2 mr-2 text-center justify-center items-center flex '><p className='font-bold  italic'>OVERSIZED</p></div>
            <div className='bg-white w-32 h-32 category ml-2 mr-2 text-center justify-center items-center flex '><p className='font-bold  italic'>WESTREN</p></div>
            <div className='bg-white w-32 h-32 category ml-2 mr-2 text-center justify-center items-center flex '><p className='font-bold  italic'>INDIAN</p></div>
        </div>
    </div>
  )
}
