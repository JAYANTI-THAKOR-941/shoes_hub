import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css';
// import { UserContext } from '../context/UserContext';

const Header = () => {

  const navigate = useNavigate();

  // const user = useContext(UserContext);

    const user = JSON.parse(localStorage.getItem('userToken'));

    const handleLogout = ()=>{
      localStorage.removeItem('userToken');
      alert('Logout successfully.!!');
      window.location.reload();
    }
  return (
    <div className='header'>
      <div className="logo">
        <h1>Foodie<span>Fiesta</span></h1>
      </div>
      <div className="nav-links">
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
        <Link to='/services'>Services</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/contact'>Contact Us</Link>
      </div>
      <div className="btns">
          {/* <button onClick={()=>navigate('/profile')}>{user.name[0]}</button> */}
          {user ? <button onClick={handleLogout}>Logout</button>:<button onClick={()=>navigate('/login')}>Login</button>}
      </div>
    </div>
  )
}

export default Header