import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


const Home = () => {
  return (
    <>
  
      <div className="max-h-screen overflow-hidden">
      <Navbar/>
    </div>
    <div className="">
        <Sidebar/>
    </div>
    
    </>
  )
}

export default Home