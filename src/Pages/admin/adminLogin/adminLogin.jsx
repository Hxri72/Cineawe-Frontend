import React from 'react'

import Header from '../../../Components/admin/adminLogin/Header/Header'
import Form from '../../../Components/admin/adminLogin/Form/Form'
import '../../../stylesheets/admin/adminLogin.css'

function AdminLogin() {
  return (
    <div className='div-wrapper'>
      <Header/>
      <Form/>
    </div>
  )
}

export default AdminLogin
