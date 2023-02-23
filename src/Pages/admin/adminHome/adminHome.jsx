import React, { Fragment } from 'react'

import '../../../stylesheets/admin/adminHome.css'
import Sidenav from '../../../Components/admin/adminHome/Includes/Header'
import Maindiv from '../../../Components/admin/adminHome/Dashboard/Dashboard'

function AdminHome() {

  // const navigate = useNavigate()

  // const handleLogout = (e) => {
  //   localStorage.removeItem("adminToken")
  //   navigate('/admin')
  // }
  return (
    <Fragment>
      <div className='adminMainDiv'>
        <div  className='flex adminbase'>
          <Sidenav/>
          <Maindiv/>
        </div>
      </div>
    </Fragment>
  )
}

export default AdminHome
