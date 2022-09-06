import React, { useState } from 'react'
import {FcRight} from 'react-icons/fc'

const Login = (props) => {

  const {user, setUser} = props
  const [userTemp, setUserTemp] = useState('')

  return (
    <div className='container login-section'>
        <link rel="stylesheet" href="/styles/login.css" />
        <img src="/img/login_illu.png" className="login-img" alt="" />
        <div className="inpts">
            <input type="text" value={userTemp} onChange={(e)=>{setUserTemp(e.target.value)}} name="User" id="user" />
            <button className='inpts-user' onClick={()=>{setUser(userTemp)}} ><FcRight/></button>
        </div>
        <h5 className='text-white my-2'>Enter your Username to proceed...</h5>
    </div>
  )
}

export default Login
