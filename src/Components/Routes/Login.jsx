import React from 'react';
import Navbar from '../Navbar';

export default function Login() {
    return (
        <div className='register-page w-full h-screen'>
        <Navbar />
        <div  className='flex justify-center items-center w-full register'>
        <div className='flex justify-between h-1/2 w-1/4 rounded-md items-center register-container p-2 flex-col '>
        <p className='text-white font-semibold text-4xl'>Log in</p>
          <input  placeholder='Username' value={username} onChange={(e) => {setUsername(e.target.value)}} className='p-2 rounded-md text-black focus:outline-none w-full'/>
          <input  placeholder='Password' value={password} onChange={(e) => {setPassword(e.target.value)}} className='p-2 rounded-md text-black focus:outline-none w-full'/>
          <button onClick={parseRegister} className='bg-white text-black p-2 rounded-lg mt-2 w-full'>Register</button>
        </div>
        </div>
        </div>
      )
}
