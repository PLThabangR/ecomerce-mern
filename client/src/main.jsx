import React,{useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter,useLocation} from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './pages/state'

//Setup rdux toolkit
const store = configureStore({
  reducer:{cart:cartReducer}
})


//function to Make pages to start from the top 
const ScrollToTop =()=>{
  const {pathname} = useLocation()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])
  return null
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop/>
    
      <App />
     
      
      </BrowserRouter>
      </Provider>
   
 
 
  </React.StrictMode>,
)
