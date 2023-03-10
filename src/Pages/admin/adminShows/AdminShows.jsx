import React, { Fragment } from 'react'
import ManageShows from '../../../Components/admin/adminShows/ManageShows'
import Sidenav from '../../../Components/admin/Includes/Header'

function AdminShows() {
  return (
    <Fragment>
    <div className='adminMainDiv'>
        <div className='flex adminbase'>
            <Sidenav/>
            <ManageShows/>
        </div>
    </div>
    </Fragment>
  )
}

export default AdminShows
