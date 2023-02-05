import React from 'react'
import applogo from "../../../../Assets/user/userSignup/Cineawe.png"

function Header() {
  return (
    <div >
      <div className="flex justify-between">
        <div className="appLogo">
          <img src={applogo} alt="applogo" />
        </div>
        <div>
          <button className="signupBtn mr-6 mt-9">Signup</button>
          <button className="signupBtn mr-10 mt-9">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Header
