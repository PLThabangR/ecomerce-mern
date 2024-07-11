import { useState,useEffect } from 'react';
import { Route,Routes,useLocation } from 'react-router-dom';
import Home from './pages/Home';


import './App.css'


function App() {


  return (
    <>
   <div className="app">
   <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/> */}
    </Routes>
   </div>
    </>
  )
}

export default App
