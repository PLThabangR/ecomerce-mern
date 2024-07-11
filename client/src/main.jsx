import React,{useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';
import { theme } from './theme.js';
import {BrowserRouter} from "react-router-dom";
import {useLocation } from 'react-router-dom';


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
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
      <ScrollToTop/>
      <App />
      </BrowserRouter>
   
    </ThemeProvider>
 
  </React.StrictMode>,
)
