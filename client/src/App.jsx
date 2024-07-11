import { useState,useEffect } from 'react';
import { Route,Routes,useLocation } from 'react-router-dom';

import './App.css'

//Pages
import ItemDetails from './pages/itemDetails/ItemDetails';
import Home from './pages/Home';
import Checkout from './pages/checkout/Checkout';
import Comrfimation from './pages/checkout/Comrfimation';
import Navbar from './pages/global/Navbar';


function App() {


  return (
    <>
   <div className="app">
   <Navbar/>
   <Routes>
   
      <Route path="/" element={<Home/>}/>
  <Route path="/item/itemID" element={<ItemDetails/>}/>
      <Route path="/checkout" element={<Checkout/>}/> 
      <Route path="/checkout/success" element={<Comrfimation/>}/> 

    </Routes>
   </div>
    </>
  )
}

export default App
