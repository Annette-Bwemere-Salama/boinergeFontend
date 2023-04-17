import React from 'react'
import { useState } from 'react'

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
    <>

      <div className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80)`
        }}>
        <div className="flex flex-col lg:flex lg:flex-row xl:flex xl:flex-row">
          <div className=" flex flex-col items-center">
            <img src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Coor-Logo.wine.svg" width="150" alt="" srcSet="" />
            <h1 className="mb-2 text-2xl">BoinergeTa</h1>
            <span className="text-gray-300">Enter Login Details</span>
          </div>
          <form action="#">
            <div className=" ">
              <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="id@email.com" />
            </div>

            <div className="">
              <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="name" placeholder="*********" />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button type="submit" className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Login
