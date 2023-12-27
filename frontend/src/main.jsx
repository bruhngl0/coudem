import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


import App from './App.jsx'
import Signup from './Signup.jsx'
import Login from './Login.jsx'
import HomeScreen from './HomeScreen.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path:'/', element: <App />
  },

  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <HomeScreen />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
