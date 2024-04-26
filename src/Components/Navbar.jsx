import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate();
  const [redirect , setRedirect] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
        try {
          const res = await fetch("http://localhost:5000/profile", {
            method: 'GET',
            credentials: 'include'
          });
          if (res.ok) {
            setRedirect(true);
          } else {
            setRedirect(false);
          }
        } catch (error) {
          console.error("Error:", error);
          // Handle error, maybe show an alert or log it
        }
    } 
    checkLogin();
  } , []);

  function handleAccount(){
    if(redirect){
      navigate("/profile");
    }
    else {
      navigate("/register")
    }
  }

  return (
    <div className='navbar flex justify-between p-4 sticky text-white'>
        <Link to={"/"} className='font-serif text-3xl font-semibold logo'>StyleCurve</Link>
        <div className='flex items-center justify-evenly w-1/2 relative left-14 ml-4 navbar-menu'>
          <Link className='nav-item font-semibold drop-shadow-2xl text-lg hover:cursor-pointer hover:text-2xl' to={"/men"}>Explore</Link>
          <Link to={"/trends"} className='nav-item font-semibold drop-shadow-2xl text-lg hover:cursor-pointer hover:text-2xl'>Trends</Link>
          <p onClick={handleAccount} className='nav-item font-semibold drop-shadow-2xl text-lg hover:cursor-pointer hover:text-2xl'>Account</p>
        </div>
      </div>
  )
}



