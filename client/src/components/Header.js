import React from 'react'
import {FiLogIn,FiLogOut} from 'react-icons/fi'

const Header = (props) => {
  const {user, setUser} = props
  return (
    <div className='header bg-dark d-flex text-white px-5 py-2'>
        <link rel="stylesheet" href="/styles/header.css" />
      <div className="logo me-auto"><i><b>Craig</b></i></div>
      <button className="addtask" ><a href="/add">Add Task</a></button>
      <div className='profile-svg' onClick={()=>{setUser('default')}} >{user==='default'?<FiLogIn/>:<FiLogOut/>}</div>
    </div>
  )
}

export default Header
