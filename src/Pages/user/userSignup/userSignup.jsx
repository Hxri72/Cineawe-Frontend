import React,{Fragment} from 'react'

import '../../../stylesheets/user/userSignup.css'
import Signup from '../../../Components/user/userSignup/userSignup'



function signup() {
  return (
    <Fragment>
      <div className='coreDiv'>
        <div className='content-wrapper'>
          <Signup/>
        </div>
      </div>
    </Fragment>
  )
}

export default signup
