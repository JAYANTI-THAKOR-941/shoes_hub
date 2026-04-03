
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

    const user = JSON.parse(localStorage.getItem('userToken'));

    if(!user || !user.role == 'admin'){
        return <Navigate to='/login' replace/>
    }
    
    return <Outlet/>
}

export default ProtectedRoute