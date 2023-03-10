import React, { Fragment } from 'react'
import ManageShowsAdmin from '../../../Components/admin/adminShows/ManageShowsAdmin'
import Sidenav from '../../../Components/admin/Includes/Header'

function AdminShowsManage() {
  return (
    <Fragment>
    <div className='adminMainDiv'>
        <div className='flex adminbase'>
            <Sidenav/>
            <ManageShowsAdmin/>
        </div>
    </div>
    </Fragment>
  )
}

export default AdminShowsManage
