import React, { Fragment } from 'react'
import ManageTheater from '../../../Components/admin/adminTheater/ManageTheater'
import Sidenav from '../../../Components/admin/Includes/Header'

function AdminTheater() {
  return (
    <Fragment>
    <div className='adminMainDiv'>
        <div className='flex adminbase'>
            <Sidenav/>
            <ManageTheater/>
        </div>
    </div>
    </Fragment>
  )
}

export default AdminTheater
