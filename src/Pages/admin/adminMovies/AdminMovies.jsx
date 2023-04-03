import React, { Fragment } from 'react'
import MovieManage from '../../../Components/admin/adminMovies/MovieManage'
import Sidenav from '../../../Components/admin/Includes/Header'

function AdminMovies() {
  return (
    <Fragment>
    <div className='adminMainDiv'>
        <div className='flex adminbase'>
            <Sidenav/>
            <MovieManage/>
        </div>
    </div>
    </Fragment>
  )
}

export default AdminMovies
