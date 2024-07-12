import { useState } from 'react';
import {Routes,Route} from "react-router-dom";


import './App.css'
import Home from './pages/Home';
import Search from './pages/Search';
import Watch from './pages/Watch';
import Navbar from './components/Navbar';

function App() {
  

  return (
    <div className="container">
     <Navbar/>
    
    <Routes>
   
    <Route path='/' element={<Home/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/watch/:id' element={<Watch/>}/>
    


    </Routes>
    </div>
  )
}

export default App
