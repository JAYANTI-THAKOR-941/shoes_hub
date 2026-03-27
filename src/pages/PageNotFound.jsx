import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Page not Found.!!</h1>
        <button onClick={()=>navigate('/')}>Goto Home</button>
    </div>
  )
}

export default PageNotFound