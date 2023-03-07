import React, { Fragment } from 'react'
import SideNav from '../../../Components/theater-owners/Includes/sideNav'
import Dashboard from '../../../Components/theater-owners/ownerDashboard/Dashboard'


function OwnerHome() {
  return (
    <Fragment>
      <div className='adminMainDiv'>
        <div  className='flex adminbase'>
          <SideNav/>
          <Dashboard/>
        </div>
      </div>
    </Fragment>
  )
}

export default OwnerHome
