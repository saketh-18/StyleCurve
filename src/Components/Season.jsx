import React from 'react';
import { Link } from 'react-router-dom';

export default function Season() {
  return (
    <div className='flex flex-col w-full h-screen items-center bg-black'>
    <p className='font-light text-white text-5xl font-sans mt-14'>SEASONAL ⛱️</p>
      <div className='flex w-full h-5/6 self-end justify-around align-bottom relative top-24'> 
        <Link to={"/basics"} className='h-3/4 w-1/5 essentials rounded-md seasonal-card flex'><p className='z-20 ml-3 font-thin text-2xl seasonal-type self-end'>Essentials</p></Link>
        <Link to={"/cargos"} className='h-3/4 w-1/5 cargos rounded-md     seasonal-card flex'><p className='z-20 ml-3 font-thin text-2xl seasonal-type self-end'>Cargos</p></Link>
        <Link to={"/chinos"} className='h-3/4 w-1/5 chinos rounded-md     seasonal-card flex'><p className='z-20 ml-3 font-thin text-2xl seasonal-type self-end'>Chinos</p></Link>
        <Link to={"/tees"} className='h-3/4 w-1/5 oversized rounded-md  seasonal-card flex'><p className='z-20 ml-3 font-thin text-2xl seasonal-type self-end'>Oversized</p></Link>
      </div>
    </div>
  )
}
