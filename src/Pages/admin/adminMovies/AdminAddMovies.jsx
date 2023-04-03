import React, { Fragment } from 'react'
import AddMovie from '../../../Components/admin/adminMovies/addMovie'
import Sidenav from '../../../Components/admin/Includes/Header'

function AdminAddMovies() {
  return (
    <Fragment>
    <div className='adminMainDiv'>
        <div className='flex adminbase'>
            <Sidenav/>
            <AddMovie/>
        </div>
    </div>
    </Fragment>
  )
}

export default AdminAddMovies
