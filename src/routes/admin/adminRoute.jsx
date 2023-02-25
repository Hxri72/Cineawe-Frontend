import React from 'react'
import { Routes,Route } from 'react-router'

import AdminLogin from '../../Pages/admin/adminLogin/adminLogin'
import AdminHome from '../../Pages/admin/adminHome/adminHome'
import AdminUser from '../../Pages/admin/adminUser/adminUser'
import AdminOwner from '../../Pages/admin/adminOwner/adminOwner'
import PublicRouteAdmin from '../../Components/admin/publicRouteAdmin/publicRouteAdmin'

function AdminRoute() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<PublicRouteAdmin><AdminLogin/></PublicRouteAdmin>} exact/>
          <Route path='/adminhome' element={<AdminHome/>} exact/>
          <Route path='/adminuser' element={<AdminUser/>} exact/> 
          <Route path='/adminowner' element={<AdminOwner/>} exact></Route>
      </Routes>
    </div>
  )
}

export default AdminRoute
