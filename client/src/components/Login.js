import React, { useState } from 'react'
import {FcRight} from 'react-icons/fc'

const Login = (props) => {

  const {user, setUser, password, setPassword, flash, setFlash} = props
  const [userTemp, setUserTemp] = useState('')
  const [passTemp, setPassTemp] = useState('')
  const host = 'http://localhost:5000'
    
  const loginApi = async (endpoints,data_json, method) =>{
    const response = await fetch(`${host}${endpoints}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data_json) // body data type must match "Content-Type" header
    });
    const json = await response.json();

    if (json.status === true){
      setFlash({msg:`Logged in as ${json.username}!`,category:'success'})
      setUser(json.username)
    }
    else{
      setFlash({msg:json.error,category:'danger'})
      console.log(json.error);
      setUser('default')
    }

    return json
  }
  
  const signupApi = async (endpoints,data_json, method) =>{
    const response = await fetch(`${host}${endpoints}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data_json) // body data type must match "Content-Type" header
    });
    const json = await response.json();
    if (json.status === 'success'){
      setFlash({msg:`Logged in as ${json.username}!`,category:'success'})
      setUser(json.username)
    }
    else{
      setFlash({msg:json.error,category:'danger'})
      console.log(json.error);
      setUser('default')
    }
      return json
  }

  const login = (username,pass) =>{
    const data_json = {
      username: username,
      password: pass
    }
    const endpoints = '/api/auth/login'
    loginApi(endpoints,data_json,'POST')
  }

  const signUp = (username) =>{
    const data_json = {
      username: username,
      password: password
    }
    const endpoints = '/api/auth/createuser'
    signupApi(endpoints,data_json,'POST')
  }

  return (
    <div className='container login-section'>
        <link rel="stylesheet" href="/styles/login.css" />
        <img src="/img/login_illu.png" className="login-img" alt="" />
        <div className="inpts">
            <input type="text" value={userTemp} onChange={(e)=>{setUserTemp(e.target.value)}} name="User" id="user" placeholder='Enter your username..' />
            <input type="password" value={passTemp} onChange={(e)=>{setPassTemp(e.target.value)}} name="password" id="password" placeholder='Enter your password..' />
            <div className="inpts-btns d-flex my-2">
              <button className='inpts-user' onClick={()=>{login(userTemp,passTemp)}} >Login</button>
              <button className='inpts-user' onClick={()=>{setPassword(passTemp);signUp(userTemp)}} >SignUp</button>
            </div>
        </div>
    </div>
  )
}

export default Login
