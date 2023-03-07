import React, { Fragment } from 'react'
import SideNav from '../../../Components/theater-owners/Includes/sideNav'
import AddTheater from '../../../Components/theater-owners/ownerTheaterManagement/AddTheater'

function OwnerAddTheater() {
  return (
    <Fragment>
    <div className='adminMainDiv'>
      <div  className='flex adminbase'>
        <SideNav/>
        <AddTheater/>
      </div>
    </div>
  </Fragment>
  )
}

export default OwnerAddTheater
