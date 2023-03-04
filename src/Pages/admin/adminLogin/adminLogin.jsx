import React, { Fragment } from 'react'

import Header from '../../../Components/admin/adminLogin/Header/Header'
import Form from '../../../Components/admin/adminLogin/Form/Form'
import '../../../stylesheets/admin/adminLogin.css'

function AdminLogin() {
  return (
    <Fragment>
      <div className='coreDiv'>
        <div className='div-wrapperAdmin'>
          <Header/>
          <Form/>
        </div>
      </div>
    </Fragment>
  )
}

export default AdminLogin
