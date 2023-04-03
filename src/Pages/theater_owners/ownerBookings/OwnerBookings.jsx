import React, { Fragment } from 'react'
import SideNav from '../../../Components/theater-owners/Includes/sideNav'
import ManageBooking from '../../../Components/theater-owners/ownerBookings/ownerBookings'

function OwnerBookings() {
  return (
    <Fragment>
    <div className='adminMainDiv'>
      <div  className='flex adminbase'>
        <SideNav/>
        <ManageBooking/>
      </div>
    </div>
    </Fragment>
  )
}

export default OwnerBookings
