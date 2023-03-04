import React, { Fragment } from 'react'
import applogo from "../../../../Assets/user/userSignup/Cineawe.png"
import {Link} from 'react-router-dom'

function Header() {
  return (
    <Fragment>
    <div >
      <div className="flex justify-between">
        <div className="appLogo">
          <img src={applogo} alt="applogo" />
        </div>
        <div className='user-Credential-Buttons '>
          <Link to="/signup"><button className="signupBtn mr-6 mt-9">Signup</button></Link>
          <Link to="/login"><button className="signupBtn mr-10 mt-9">Login</button></Link>
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default Header
