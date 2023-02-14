import React from 'react'
import { useState } from 'react'
import "./register.css"
function Register() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    // suite continuité
    alert(mail, password
      ,"Fait avec succes ${mail}")
  }
  return (
    <div className='container'>
      <div className='blockImage'><h1>BoinergeT</h1></div>
      <div className='blockFormulaire'>
          <div className='form'>
              <form onSubmit={handleSubmit}>
                <label>Entez votre mail
                </label>
                  <input type="email" value={mail} placeholder='ex:bwemereannette@gmail.com' className='mail' 
                  onChange={(e)=> setMail(e.target.value)}
                  />
                   <label>Entez votre nom
                </label>
                  <input type="name" value={mail} placeholder='ex:annette' className='name' 
                  onChange={(e)=> setMail(e.target.value)}
                  />
                     <label>Entez votre PostNom
                </label>
                  <input type="lastename" value={mail} placeholder='ex:bwemereannette' className='mail' 
                  onChange={(e)=> setMail(e.target.value)}
                  />
                <label>Entez votre Mot de pass
                </label> 
                <input type="password" value={password} placeholder='ex:....' className='password'
                  onChange={(e)=> setPassword(e.target.value)}
                />
                  <div>

                  <button className='registerButton'>Register</button>
                  <button className='RegisterButon'>Register</button>
                  </div>
              </form>
          </div>
        </div>
    

    </div>
      

  )
}

export default Register
