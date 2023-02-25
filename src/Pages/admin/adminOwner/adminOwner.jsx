import React, { Fragment } from 'react'
import ManageOwner from '../../../Components/admin/adminOwners/ownersManagement'
import Sidenav from '../../../Components/admin/Includes/Header'

function AdminOwner() {
  return (
    <Fragment>
    <div className='adminMainDiv'>
        <div className='flex adminbase'>
            <Sidenav/>
            <ManageOwner/>
        </div>
    </div>
    </Fragment>
  )
}

export default AdminOwner
