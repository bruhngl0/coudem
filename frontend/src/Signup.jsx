import React,  {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Signup = () => {
   
 const [name, newName] = useState("")
 const [email, newEmail] = useState("")
 const [password, newPassword] = useState("")


 async function sendData(e) {
  e.preventDefault();
  
    const resData = await axios.post('http://localhost:3000/auth/signup', {
      name: name,
      email: email,
      password: password,
    });
     
    if(!resData){
    alert("400 bad request")
    }else{
      alert(JSON.stringify(resData.data))
    }
   
    
}
 
  
  
  return (
    <>
     <form onSubmit={sendData}>
      <input placeholder='name' value={name} onChange={(e)=> newName(e.target.value)}/>
      <input placeholder='email' value={email} onChange={(e)=> newEmail(e.target.value)}/>
      <input placeholder='password' value={password} onChange={(e)=> newPassword(e.target.value)}/>
      <button type="submit">sign up</button>
     </form>    
    
     <p>already registered? <Link to = {"/login"}>login</Link></p>
    </>
  )
}

export default Signup
