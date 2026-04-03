import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './main.css';
const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();



    const handleLogin = (e)=>{
        e.preventDefault();

        const userToken = {
            email,
            role:'admin'
        }

        localStorage.setItem('userToken',JSON.stringify(userToken));
        alert('Login successfully.!!');
        navigate('/');
    }

  return (
    <div className='login-container'>
        <div className="login-form">
            <h2>Sign In</h2>
            <p>Enter your creditails to continue</p>
            <div className="input-group">
                <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
            </div>
            <div className="input-group">
                <input type="text" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
            </div>
            <div className="input-group-2">
                <input type="checkbox" />
                <span>Remember Me</span>

                <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <button className='login-btn' onClick={handleLogin}>Sign In</button>
            <p>Don't have an account?<Link to="/register">Create one</Link></p>
        </div>
    </div>
  )
}

export default Login