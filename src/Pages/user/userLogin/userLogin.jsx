import React, { Fragment } from 'react'
import Header from '../../../Components/user/userLogin/Header/Header'
import Form from '../../../Components/user/userLogin/form/form'
import '../../../stylesheets/user/userLogin.css'

function Login() {
  return (
    <Fragment>
      <div className='coreDiv'>
        <div className='divwrapper-userLogin'>
          <Header/>
          <Form/>
        </div>
      </div>
    </Fragment>
  )
}

export default Login
