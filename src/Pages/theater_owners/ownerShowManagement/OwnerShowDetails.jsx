import React, { Fragment } from 'react'
import SideNav from '../../../Components/theater-owners/Includes/sideNav'
import ShowDetails from '../../../Components/theater-owners/ownerShowManagement/ShowDetails'

function OwnerShowDetails() {
  return (
    <Fragment>
    <div className='adminMainDiv'>
      <div  className='flex adminbase'>
        <SideNav/>
        <ShowDetails/>
      </div>
    </div>
    </Fragment>
  )
}

export default OwnerShowDetails
