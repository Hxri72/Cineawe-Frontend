import React, { Fragment } from 'react'
import applogo from '../../../../Assets/user/userSignup/Cineawe.png'

function Header() {
  return (
    <Fragment>
    <div className='ownerSignupHeader'>
        <div className='applogoOwnerSignup xl:h-48 w-60 -ml-10 sm:-ml-10 '>
            <img alt='applogo' src={applogo}/>
        </div>

        <div>
            
        </div>
    </div>
    </Fragment>
  )
}

export default Header
