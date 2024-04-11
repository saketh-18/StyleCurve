import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';

export default function Mens() {
    const [Products , setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
            const res = await fetch("http://localhost:5000/getMens" , {
                method : 'GET'
            });
            if(res.ok){
                const data = await res.json();
                console.log(data);
                setProducts(data);
            }
            else {
                console.log("error fetching Products");
            }
        }
        catch(e){
            console.log(e);
        }
    };
    getProducts();
    } , []);
  return (
  <>
  <Navbar />
    <div className='flex bg-black justify-center flex-wrap'>
        {
            Products.map((product , index) => {
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
