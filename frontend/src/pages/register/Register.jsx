import React, { useRef } from 'react'
import "./Register.css"
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom"


export default function Register() {
  const username = useRef();
  const fullname = useRef();
  const password = useRef();
  const confirmationPassword = useRef();

  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(password.current.value !== confirmationPassword.current.value){
      confirmationPassword.current.setCustomValidity("Incorrect password")
    }else{
      try {
        const user = {
          fullname : fullname.current.value,
          username : username.current.value,
          password : password.current.value,
          confirmationPassword : confirmationPassword.current.value,
        };
        //Register API
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className='login'>
      <div className="logincontainer">
        <div className="loginLeft">
          <h3 className='loginLogo'>LINKUP</h3>
          <span className='loginDesc'>Redefining the way you connect</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className='loginMsg'>Create Account</p>
            <input 
              type="text" 
              className='loginInput'
              placeholder='Full Name'
              required
              ref={fullname}
            />
            <input 
              type="text" 
              className='loginInput'
              placeholder='Username'
              required
              ref={username}
            />
            <input 
              type="password" 
              className='loginInput'
              placeholder='Password'
              required
              minLength="5"
              ref={password}
            />
            <input 
              type="password" 
              className='loginInput'
              placeholder='Confirmation password'
              required
              minLength="5"
              ref={confirmationPassword}
            />
            <button className='loginButton' type='submit'>Sign Up</button>
            <div className="signupButtonContainer">
              <Link to="/login">
                <button className='signupButton'>Login</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
