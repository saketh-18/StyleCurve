import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Routes/Homepage';
import Mens from './Components/Routes/Mens';
import AddProduct from './Components/Routes/AddProduct.jsx';
import Register from './Components/Routes/Register.jsx';
import Tees from './Components/Routes/Tees.jsx';
import Login from './Components/Routes/Login.jsx';
// import Branded from './Components/Branded';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/men' element={<Mens />} />
          <Route path='/AddProduct' element={<AddProduct />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/tees' element={<Tees />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
