import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <div className='login'>
      <div className="logincontainer">
        <div className="loginLeft">
          <h3 className='loginLogo'>LINKUP</h3>
          <span className='loginDesc'>Redefining the way you connect</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <p className='loginMsg'>WELCOME BACK</p>
            <input 
              type="text" 
              className='loginInput'
              placeholder='Username'
            />
            <input 
              type="password" 
              className='loginInput'
              placeholder='Password'
            />
            <button className='loginButton'>Login</button>
            <span className='loginForgot'>Did you forget your password ?</span>
            <button className='signupButton'>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}
