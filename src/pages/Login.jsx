import React from 'react'
import { Link } from 'react-router-dom'
import './main.css';
const Login = () => {
  return (
    <div className='login-container'>
        <div className="login-form">
            <h2>Sign In</h2>
            <p>Enter your creditails to continue</p>
            <div className="input-group">
                <input type="text" name="email" placeholder='Email' />
            </div>
            <div className="input-group">
                <input type="text" name="password" placeholder='Password' />
            </div>
            <div className="input-group-2">
                <input type="checkbox" />
                <span>Remember Me</span>

                <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <button className='login-btn'>Sign In</button>
            <p>Don't have an account?<Link to="/register">Create one</Link></p>
        </div>
    </div>
  )
}

export default Login