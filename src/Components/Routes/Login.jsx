import React, { useState } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [username , setUsername] = useState('');
  const [password , setPassword] = useState('');

  async function parseLogin(e){
    try {
    const response = await axios.post("http://localhost:5000/login" , {
        username : username ,
        password : password ,
    })
    if(response.status == 200){
      navigate("/");
    }
    else {
      console.log("error logging in the user");
    }
  }
    catch(e) {
      console.log(e);
    } 
  }

    return (
        <div className='register-page w-full h-screen'>
        <Navbar />
        <div  className='flex justify-center items-center w-full register'>
        <div className='flex justify-between h-1/2 w-1/4 rounded-md items-center register-container p-2 flex-col '>
        <p className='text-white font-semibold text-4xl'>Log in</p>
          <input  placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} className='p-2 rounded-md text-black focus:outline-none w-full'/>
          <input  placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='p-2 rounded-md text-black focus:outline-none w-full'/>
          <button onClick={parseLogin} className='bg-white text-black p-2 rounded-lg mt-2 w-full'>Login</button>
        </div>
        </div>
        </div>
      )
}
