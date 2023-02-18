import React from 'react'
import Header from '../../../Components/user/userLogin/Header/Header'
import Form from '../../../Components/user/userLogin/form/form'
import '../../../stylesheets/user/userLogin.css'

function Login() {
  return (
    <div className='divwrapper'>
      <Header/>
      <Form/>
    </div>
  )
}

export default Login
