import React from 'react'
import './login.css'
import collegeLogo from './collegelogo.jpeg';

const login = () => {
  return (
    <div className='loginsignup'>
    <div className="loginsignup-container">
    <img src={collegeLogo}alt="College Logo" className="college-logo"/>
    <h1>Login</h1>
    <div className="loginsignup-fields"></div>
    <input type="email" placeholder='email/username'/>
    <input type="password" placeholder ='Password'/>

    </div>
    <button>Continue</button>
    <p className="loginsignup-login"> Login by your enrollement no.</p>

    
    
    
    </div>
  )
}

export default login