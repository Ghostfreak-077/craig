import React from 'react'
import {CgProfile} from 'react-icons/cg'

const Header = () => {
  return (
    <div className='header bg-dark d-flex text-white px-5 py-2'>
        <link rel="stylesheet" href="/styles/header.css" />
      <div className="logo me-auto"><i><b>Craig</b></i></div>
      <div className='profile-svg'><CgProfile/></div>
    </div>
  )
}

export default Header
