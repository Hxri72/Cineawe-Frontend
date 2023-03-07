import React, { Fragment } from 'react'
import SideNav from '../../../Components/theater-owners/Includes/sideNav'
import ShowManage from '../../../Components/theater-owners/ownerShowManagement/OwnerShowManagement'

function OwnerShowManagement() {
  return (
    <Fragment>
    <div className='adminMainDiv'>
      <div  className='flex adminbase'>
        <SideNav/>
        <ShowManage/>
      </div>
    </div>
  </Fragment>
  )
}

export default OwnerShowManagement
