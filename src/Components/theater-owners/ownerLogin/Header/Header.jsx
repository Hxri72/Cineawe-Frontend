import React, { Fragment } from 'react'
import applogo from '../../../../Assets/user/userSignup/Cineawe.png'

function Header() {
  return (
    <Fragment>
    <div>
        <div className="applogoOwner">
          <img src={applogo} alt="applogo" />
        </div>
    </div>
    </Fragment>
  )
}

export default Header
