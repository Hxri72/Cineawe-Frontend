import React from 'react'
import Header from '../../../Components/admin/adminLogin/Header/Header'
import OtpForm from '../../../Components/user/userSignup/OtpForm'
import '../../../stylesheets/user/userOtp.css'

function userOTP() {
  return (
    <div className='divwrapper'>
      <Header/>
      <OtpForm/>
      
    </div>
  )
}

export default userOTP
