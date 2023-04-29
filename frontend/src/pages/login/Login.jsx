import React, { useContext, useRef } from 'react'
import "./Login.css";
import { loginCall } from '../../actionCalls';
import { AuthContext } from '../../state/AuthContext';
import { Link } from 'react-router-dom';


export default function Login() {

  const username = useRef();
  const password = useRef();

  const {user, isFetching, error, dispatch} = useContext(AuthContext)


  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      {
        username:username.current.value,
        password:password.current.value,
      },
      dispatch);
  }

  console.log(user);

  return (
    <div className='login'>
      <div className="logincontainer">
        <div className="loginLeft">
          <h3 className='loginLogo'>LINKUP</h3>
          <span className='loginDesc'>Redefining the way you connect</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className='loginMsg'>WELCOME BACK</p>
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
            <button className='loginButton'>Login</button>
            <span className='loginForgot'>Did you forget your password ?</span>
            <div className="signupButtonContainer">
              <Link to="/register">
                <button className='signupButton'>Sign Up</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
