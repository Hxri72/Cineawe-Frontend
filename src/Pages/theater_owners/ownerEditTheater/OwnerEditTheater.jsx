import React, { Fragment } from 'react'
import SideNav from '../../../Components/theater-owners/Includes/sideNav'
import EditTheater from '../../../Components/theater-owners/ownerTheaterManagement/EditTheater'

function OwnerEditTheater() {
  return (
    <Fragment>
    <div className='adminMainDiv'>
      <div  className='flex adminbase'>
        <SideNav/>
        <EditTheater/>
      </div>
    </div>
  </Fragment>
  )
}

export default OwnerEditTheater
