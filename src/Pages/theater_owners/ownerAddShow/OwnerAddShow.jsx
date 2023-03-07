import React, { Fragment } from 'react'
import SideNav from '../../../Components/theater-owners/Includes/sideNav'
import AddShow from '../../../Components/theater-owners/ownerShowManagement/AddShow'

function OwnerAddShow() {
  return (
    <Fragment>
    <div className='adminMainDiv'>
      <div  className='flex adminbase'>
        <SideNav/>
        <AddShow/>
      </div>
    </div>
  </Fragment>
  )
}

export default OwnerAddShow
