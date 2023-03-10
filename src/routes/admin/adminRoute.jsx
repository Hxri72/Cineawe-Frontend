import React from 'react'
import { Routes,Route } from 'react-router'

import AdminLogin from '../../Pages/admin/adminLogin/adminLogin'
import AdminHome from '../../Pages/admin/adminHome/adminHome'
import AdminUser from '../../Pages/admin/adminUser/adminUser'
import AdminOwner from '../../Pages/admin/adminOwner/adminOwner'
import PublicRouteAdmin from '../../Components/admin/publicRouteAdmin/publicRouteAdmin'
import ProtectedRouteAdmin from '../../Components/admin/protectedRouteAdmin/protectedRouteAdmin'
import AdminTheater from '../../Pages/admin/adminTheater/AdminTheater'
import AdminShows from '../../Pages/admin/adminShows/AdminShows'
import AdminShowsManage from '../../Pages/admin/adminShows/AdminShowsManage'

function  AdminRoute() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<PublicRouteAdmin><AdminLogin/></PublicRouteAdmin>} exact/>
          <Route path='/adminhome' element={<ProtectedRouteAdmin><AdminHome/></ProtectedRouteAdmin>} exact/>
          <Route path='/adminuser' element={<ProtectedRouteAdmin><AdminUser/></ProtectedRouteAdmin>} exact/> 
          <Route path='/adminowner' element={<ProtectedRouteAdmin><AdminOwner/></ProtectedRouteAdmin>} exact/>
          <Route path='/admin-theater' element={<ProtectedRouteAdmin><AdminTheater/></ProtectedRouteAdmin>} exact/>
          <Route path='/admin-shows' element={<ProtectedRouteAdmin><AdminShows/></ProtectedRouteAdmin>} exact/>
          <Route path='/admin-shows-manage' element={<ProtectedRouteAdmin><AdminShowsManage/></ProtectedRouteAdmin>} exact/>
      </Routes>
    </div>
  )
}

export default AdminRoute
