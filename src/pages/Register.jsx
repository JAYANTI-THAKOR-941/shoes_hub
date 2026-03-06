import React from 'react'
import { Link } from 'react-router-dom'
import './main.css';
const Register = () => {
  return (
    <div className='login-container'>
        <div className="login-form">
            <h2>Sign Up</h2>
            <p>Join our ShoesHub Family</p>
             <div className="input-group">
                <input type="text" name="email" placeholder='Name' />
            </div>
            <div className="input-group">
                <input type="text" name="email" placeholder='Email' />
            </div>
            <div className="input-group">
                <input type="text" name="password" placeholder='Password' />
            </div>
            <button className='login-btn'>Sign Up</button>
            <p>Already have an account?<Link to="/login">Login</Link></p>
        </div>
    </div>
  )
}

export default Register