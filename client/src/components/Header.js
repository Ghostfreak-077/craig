import React from 'react'
import { Link } from 'react-router-dom'
import {FiLogIn,FiLogOut} from 'react-icons/fi'

const Header = (props) => {
  const {user, setUser} = props
  return (
    <div className='header bg-dark d-flex text-white px-5 py-2'>
        <link rel="stylesheet" href="/styles/header.css" />
      <div className="header-logo me-auto"><img src="/img/Craig.png" alt="" /></div>
      <button className="addtask" ><Link to="/add">Add Task</Link></button>
      <div className='profile-svg' onClick={()=>{setUser('default')}} >{user==='default'?<FiLogIn/>:<FiLogOut/>}</div>
    </div>
  )
}

export default Header
