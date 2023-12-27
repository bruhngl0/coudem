import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Login = () => {

  const [email, newEmail] = useState("")
  const [password, newPassword] = useState("")

 const nav = useNavigate()

  async function logData(e) {
    e.preventDefault();
  
    try {
      const resData = await axios.post('http://localhost:3000/auth/signin', {
        email: email,
        password: password,
      });
  
        nav("/home")
    } catch (error) {
      console.error('Error:', error);
      alert('user not registered.');
    }
  }


  return (
    <>    
    <form onSubmit={logData}>
      
      <input placeholder='email'  value={email} onChange={(e)=> newEmail(e.target.value)}/>
      <input placeholder='password' value = {password} onChange={(e)=> newPassword(e.target.value)}/>
      <button type= "submit">login</button>
     </form>    
     
     <p>not registered yet? <Link to = {"/signup"}>Sign Up</Link></p>
     </>

  )
}

export default Login
