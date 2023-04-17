import React from 'react'
import { useState } from 'react'
// import { useNavigate } from "react-router-dom";


import "./login.css"
function Login() {

  // const navigate = useNavigate(null);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // let user = await
      // suite continuité
      alert(mail, password
        , "Fait avec succes ${mail}")
    } catch (error) {
      // setState({error})
      console.log({ error })
    }

  }
  return (
    // <div className='container'>
    //   <div className='blockImage'><h1>BoinergeT</h1></div>
    //   <div className='blockFormulaire'>
    //     <div className='form'>
    //       <form onSubmit={handleSubmit}>
    //         <label>
    //           Entez votre mail
    //         </label>
    //         <input type="email" value={mail} placeholder='ex:bwemereannette@gmail.com' className='mail'
    //           onChange={(e) => setMail(e.target.value)}
    //         />
    //         <label>

    //           Entez votre Mot de pass
    //         </label>
    //         <input type="passw ord" value={password} placeholder='ex:....' className='password'
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //         <div>
    //           <button className='loginButon'>Login</button>
    //           <button className='registerButton'
    //           //  onClick={() => {
    //           //   navigate("/Register")
    //           // }}
    //           >Register
    //           </button>
    //         </div>
    //       </form>
    //       <a href=''>Mot de passe Oublier?</a>
    //     </div>
    //   </div>

    // </div>
    <div class="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style="background-image:url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')">
      <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div class="text-white">
          <div class="mb-8 flex flex-col items-center">
            <img src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Coor-Logo.wine.svg" width="150" alt="" srcset="" />
            <h1 class="mb-2 text-2xl">BoinergeTa</h1>
            <span class="text-gray-300">Enter Login Details</span>
          </div>
          <form action="#">
            <div class="mb-4 text-lg">
              <input class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="id@email.com" />
            </div>

            <div class="mb-4 text-lg">
              <input class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="name" placeholder="*********" />
            </div>
            <div class="mt-8 flex justify-center text-lg text-black">
              <button type="submit" class="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>


  )
}

export default Login
