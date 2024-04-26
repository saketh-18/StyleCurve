import React , {useState} from 'react';
import  axios  from 'axios';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const navigate = useNavigate();
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [redirect , setRedirect] = useState(false);

    function handleLogin(){
      navigate("/login");
    }

    async function parseRegister(e){
      try {
      const response = await axios.post("http://localhost:5000/register" , {
          username : username ,
          password : password ,
      })
      setRedirect(true);
      console.log(response); }
      catch(e) {
        console.log(e);
      }

      if(redirect){
        navigate('/');
      }

    }
  return (
    <div className='register-page w-full h-screen'>
    <Navbar />
    <div  className='flex justify-center items-center w-full register'>
    <div className='flex justify-between w-2/6 rounded-md items-center register-container p-2 flex-col '>
    <p className='text-white font-semibold text-4xl'>Register</p>
      <input  placeholder='Username' value={username} onChange={(e) => {setUsername(e.target.value)}} className='p-2 rounded-md text-black focus:outline-none w-full      my-2      '/>
      <input  placeholder='Password' value={password} onChange={(e) => {setPassword(e.target.value)}} className='p-2 rounded-md text-black focus:outline-none w-full      my-2      '/>
      <button onClick={parseRegister} className='bg-white text-black p-2 rounded-lg mt-2 w-full register-button hover:bg-slate-300 focus:font-semibold focus:bg-slate-700 my-2'>Register</button>
      <a href='' className='text-white text-lg hover:underline ' onClick={handleLogin}>Login Instead?</a>
    </div>
    </div>
    </div>
  )
}
