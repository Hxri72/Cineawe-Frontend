import React, { Fragment } from 'react'
import AdminBooking from '../../../Components/admin/adminBookings/AdminBookings'
import Sidenav from '../../../Components/admin/Includes/Header'
import '../../../stylesheets/admin/adminHome.css'


function AdminBookings() {
  return (
    <Fragment>
      <div className='adminMainDiv'>
        <div  className='flex adminbase'>
          <Sidenav/>
          <AdminBooking/>
        </div>
      </div>
    </Fragment>
  )
}

export default AdminBookings
