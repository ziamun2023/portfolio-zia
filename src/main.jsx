import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { router } from './Route.jsx'
import { RouterProvider } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';
import AuthProvider from './provider/AuthProvider.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(

  
  <React.StrictMode>

<ParallaxProvider>
<div >

<AuthProvider><RouterProvider router={router} /></AuthProvider>

</div>
    </ParallaxProvider>


  </React.StrictMode>,
)
