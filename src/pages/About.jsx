import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const About = () => {

  const user = useContext(UserContext);

  return (
    <div>
      <h2>About Us</h2>
      <h3>Welcome,{user.name}</h3>
    </div>
  )
}

export default About