import React from 'react'

import '../../../stylesheets/admin/adminHome.css'
import Sidenav from '../../../Components/admin/adminHome/Header'
import Maindiv from '../../../Components/admin/adminHome/Dashboard'

function AdminHome() {

  // const navigate = useNavigate()

  // const handleLogout = (e) => {
  //   localStorage.removeItem("adminToken")
  //   navigate('/admin')
  // }
  return (
    <div className='adminMainDiv'>
      <div  className='flex adminbase'>
        <Sidenav/>
        <Maindiv/>
      </div>
      
    </div>
  )
}

export default AdminHome
