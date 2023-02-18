import React from 'react'
import applogo from "../../../../Assets/user/userSignup/Cineawe.png"
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div >
      <div className="flex justify-between">
        <div className="appLogo">
          <img src={applogo} alt="applogo" />
        </div>
        <div>
          <Link to="/signup"><button className="signupBtn mr-6 mt-9">Signup</button></Link>
          <Link to="/login"><button className="signupBtn mr-10 mt-9">Login</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Header
