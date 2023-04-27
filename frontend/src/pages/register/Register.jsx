import React from 'react'
import "./Register.css"

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
            <p className='loginMsg'>Create Account</p>
            <input 
              type="text" 
              className='loginInput'
              placeholder='Full Name'
            />
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
            <input 
              type="password" 
              className='loginInput'
              placeholder='Confirmation password'
            />
            <button className='loginButton'>Sign Up</button>
            <button className='signupButton'>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}
