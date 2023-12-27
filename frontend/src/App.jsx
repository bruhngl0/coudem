import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
     <h1>DEMO COURSE SELLING WEBSITE</h1>
     <button ><Link to={'/signup'}>SignUp</Link></button>
     <button><Link to = {'/login'}>login</Link></button>
    </>
  )
}

export default App
