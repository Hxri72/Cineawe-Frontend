import React, { Fragment } from 'react'
import SideNav from '../../../Components/theater-owners/Includes/sideNav'
import TheaterManage from '../../../Components/theater-owners/ownerTheaterManagement/TheaterManagement'

function TheaterManagement() {
  return (
    <Fragment>
    <div className='adminMainDiv'>
      <div  className='flex adminbase'>
        <SideNav/>
        <TheaterManage/>
      </div>
    </div>
  </Fragment>
  )
}

export default TheaterManagement
