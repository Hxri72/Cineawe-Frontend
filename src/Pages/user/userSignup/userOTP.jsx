import React, { Fragment } from 'react'
import Header from '../../../Components/admin/adminLogin/Header/Header'
import OtpForm from '../../../Components/user/userSignup/OtpForm'
import '../../../stylesheets/user/userOtp.css'

function userOTP() {
  return (
    <Fragment>
      <div className='coreDiv'>
        <div className='divwrapper'>
          <Header/>
          <OtpForm/>
        </div>
      </div>
    </Fragment>
  )
}

export default userOTP
