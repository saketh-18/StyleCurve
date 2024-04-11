import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar';

function AddProduct() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    rating: '',
    image: '',
    gender: '',
    type: '' ,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/postProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Data submitted successfully!');
        navigate("/men");
      } else {
        console.error('Failed to submit data.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='add-product-outer-container w-full'>
    <div><Navbar /></div>
    <div className='bg-black flex flex-col add-product-contaitner justify-center items-center w-full h-screen text-white'>
    <p className='font-semibold text-4xl mb-5'>Add Products</p>
    <form onSubmit={handleSubmit} className='flex justify-center w-80 flex-col items-center add-product p-4 rounded-lg text-white'>
      <label className='flex justify-between w-full text-lg font-light '>
        Title:
        <input  className='rounded-sm focus:outline-none add-product-input border-input text-black' type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <br />
      <label className='flex justify-between w-full text-lg font-light '>
        Price:
        <input  className='rounded-sm focus:outline-none add-product-input border-input text-black' type="number" name="price" value={formData.price} onChange={handleChange} />
      </label>
      <br />
      <label className='flex justify-between w-full text-lg font-light '>
        Rating:
        <input  className='rounded-sm focus:outline-none add-product-input border-input text-black' type="number" name="rating" value={formData.rating} onChange={handleChange} />
      </label>
      <br />
      <label className='flex justify-between w-full text-lg font-light '>
        Image:
        <input  className='rounded-sm focus:outline-none add-product-input border-input text-black' type="text" name="image" value={formData.image} onChange={handleChange} />
      </label>
      <br />
      <label className='flex justify-between w-full text-lg font-light '>
        Gender:
        <input  className='rounded-sm focus:outline-none add-product-input border-input text-black' type="text" name="gender" value={formData.gender} onChange={handleChange} />
      </label>
      <br />
      <label className='flex justify-between w-full text-lg font-light '>
        Type:
        <input  className='rounded-sm focus:outline-none add-product-input border-input text-black' type="text" name="type" value={formData.type} onChange={handleChange} />
      </label>
      <br />
      <button type="submit" className='bg-white text-black p-2 rounded-md w-full text-lg font-semibold'>Submit</button>
    </form>
    </div>
    </div>
  );
}

export default AddProduct;
