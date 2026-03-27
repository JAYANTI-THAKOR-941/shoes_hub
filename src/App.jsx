
import React, { useState } from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductManagement from './admin/ProductManagement'
import ProductDescription from './pages/ProductDescription'
import Cart from './pages/Cart'
import Profile from './components/Profile';
import { UserProvider } from './context/UserContext'
import PageNotFound from './pages/PageNotFound'

// import { UserContext } from './context/UserContext';

const App = () => {

  // const [user,setUser] = useState({
  //   name:"Jayanti Thakor",
  //   email:"jayantithakor941@gmail.com"
  // })

  return (
    <div>

      {/* <UserContext.Provider value={user}>
        <Header/>
        <Profile/>
      </UserContext.Provider> */}
        <UserProvider>
          <Header/>
        </UserProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<UserProvider><Profile /></UserProvider>} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<ProductDescription />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<UserProvider><About /></UserProvider>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/manage-products' element={<ProductManagement/>} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App