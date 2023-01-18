import React from 'react'
import "./login.css"
function Login() {
  return (
    <div className='container'>
      <div className='blockImage'>img</div>
      <div className='blockFormulaire'>
          <div className='form'>
              <form>
                <label>Entez votre mail:
                  <input type="mail" placeholder='ex:bwemereannette@gmail.com'/>
                </label>
<br></br>

                <label>Entez votre Mot de pass:
                  <input type="password" placeholder='ex:.......'/>
                </label> 
                <button><input type="submit" /></button>
              </form>
          </div>
        </div>
    

    </div>
      

  )
}

export default Login
