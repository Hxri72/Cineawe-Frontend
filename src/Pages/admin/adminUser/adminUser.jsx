import React from 'react'
import Sidenav from '../../../Components/admin/adminHome/Includes/Header'
import ManageUser from '../../../Components/admin/adminHome/userManagement/userManagement'

function AdminUser() {
  return (
    <div className='adminMainDiv'>
        <div className='flex adminbase'>
            <Sidenav/>
            <ManageUser/>
        </div>
    </div>
  )
}

export default AdminUser
