import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {

    const user = useContext(UserContext)

  return (
    <div>
        <h3>Name:{user.name}</h3>
        <h3>Email:{user.email}</h3>
    </div>
  )
}

export default Profile