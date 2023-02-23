import React from 'react'
import { Routes,Route } from 'react-router'

import AdminLogin from '../../Pages/admin/adminLogin/adminLogin'
import AdminHome from '../../Pages/admin/adminHome/adminHome'
import AdminUser from '../../Pages/admin/adminUser/adminUser'
import PublicRouteAdmin from '../../Components/admin/publicRouteAdmin/publicRouteAdmin'

function AdminRoute() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<PublicRouteAdmin><AdminLogin/></PublicRouteAdmin>} exact/>
          <Route path='/adminhome' element={<AdminHome/>} exact/>
          <Route path='/adminuser' element={<AdminUser/>} exact/>
      </Routes>
    </div>
  )
}

export default AdminRoute
