import React, { Fragment } from 'react'
import Header from '../../../Components/user/userLogin/Header/Header'
import Form from '../../../Components/user/userLogin/form/form'
import '../../../stylesheets/user/userLogin.css'

function Login() {
  return (
    <Fragment>
      <div className='divwrapper'>
        <Header/>
        <Form/>
      </div>
    </Fragment>
  )
}

export default Login
