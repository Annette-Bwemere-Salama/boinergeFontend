import React from 'react'
import { useState } from 'react'
// import Register from "../register/Register.jsx"
import { useNavigate } from "react-router-dom";


import "./login.css"
function Login() {

  const navigate = useNavigate(null);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();

    try {
      // let user = await
      // suite continuité
      alert(mail, password
        ,"Fait avec succes ${mail}")
    } catch (error) {
      // setState({error})
      console.log({error})
    }
   
  }
  return (
    <div className='container'>
      <div className='blockImage'><h1>BoinergeT</h1></div>
      <div className='blockFormulaire'>
          <div className='form'>
              <form onSubmit={handleSubmit}>
                <label>
                  Entez votre mail
                </label>
                  <input type="email" value={mail} placeholder='ex:bwemereannette@gmail.com' className='mail' 
                  onChange={(e)=> setMail(e.target.value)}
                  />
                <label>
                  
                  Entez votre Mot de pass
                </label> 
                <input type="passw ord" value={password} placeholder='ex:....' className='password'
                  onChange={(e)=> setPassword(e.target.value)}
                />
                  <div>
                  <button className='loginButon'>Login</button>
                  <button  className='registerButton' onClick={()=>{
                    navigate("/Register")
                  }}>Register
                  </button>
                  </div>
              </form>
           <a href=''>Mot de passe Oublier?</a>          
          </div>
        </div>
  
    </div>
      

  )
}

export default Login
