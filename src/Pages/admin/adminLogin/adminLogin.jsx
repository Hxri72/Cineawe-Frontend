import React, { Fragment } from 'react'

import Header from '../../../Components/admin/adminLogin/Header/Header'
import Form from '../../../Components/admin/adminLogin/Form/Form'
import '../../../stylesheets/admin/adminLogin.css'

function AdminLogin() {
  return (
    <Fragment>
      <div className='div-wrapper'>
        <Header/>
        <Form/>
      </div>
    </Fragment>
  )
}

export default AdminLogin
