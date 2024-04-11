import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';

export default function Tees() {
    const [Tees , setTees] = useState();

    useEffect(() => {
        const getTees = async () => {
          try {
            const res = await fetch("http://localhost:5000/getTees" , {
              method : "get",
            })
            if(res.ok){
              const data = await res.json();
              console.log(data)
              setTees(data);
              
            }
            else {
              console.log("error fetching Products");
            }
          }
          catch(e) {
            console.error(e);
          }
        };
        getTees();
    } , [])
  return (
    <>
  <Navbar />
    <div className='flex bg-black justify-center flex-wrap'>
        {
           Tees.map((product , index) => {
                return (
                    <div key={index} className='flex w-1/6 flex-col items-start m-3'>
                        <img src={`${product.image}`} className='rounded-lg'/>
                        <p className='text-xl font-light text-white'>{`${product.title}`}</p>
                        <p className='text-lg text-white'>{`₹${product.price}`}</p>
                        <p className='text-md font-normal text-white'> S  M  L  XL</p>
                    </div>
                )
            })
        }
    </div>
</>
  )
}
