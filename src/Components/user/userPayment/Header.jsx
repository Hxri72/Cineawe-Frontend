import React, { Fragment } from 'react'
import applogo from '../../../Assets/user/userSignup/Cineawe.png'
import '../../../stylesheets/user/userPayment.css'

function Header() {
  return (
    <Fragment>
        <div className='paymentHeaderDiv'>
            <div className='appLogoDiv'>
                <img src={applogo} alt='applogo'/>
            </div>
        </div>
    </Fragment>
  )
}

export default Header
