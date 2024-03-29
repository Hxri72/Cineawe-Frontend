import React, { Fragment } from 'react'
import {Routes,Route} from 'react-router-dom'

import TheaterLogin from '../../Pages/theater_owners/theaterLogin/theaterLogin'
import OwnerSignup from '../../Pages/theater_owners/ownerSignup/ownerSignup'
import OwnerHome from '../../Pages/theater_owners/ownerHome/ownerHome'
import PublicRouteOwner from '../../Components/theater-owners/publicRouteOwner/publicRouteOwner'
import ProtectedRouteOwner from '../../Components/theater-owners/protectedRouteOwner/protectedRouteOwner'
import TheaterManagement from '../../Pages/theater_owners/ownerTheaterManagement/ownerTheaterManagement'
import OwnerAddTheater from '../../Pages/theater_owners/ownerTheaterManagement/ownerAddTheater'
import OwnerShowManagement from '../../Pages/theater_owners/ownerShowManagement/OwnerShowManagement'
import OwnerAddShow from '../../Pages/theater_owners/ownerAddShow/OwnerAddShow'
import OwnerShowDetails from '../../Pages/theater_owners/ownerShowManagement/OwnerShowDetails'
import OwnerEditTheater from '../../Pages/theater_owners/ownerEditTheater/OwnerEditTheater'
import OwnerBookings from '../../Pages/theater_owners/ownerBookings/OwnerBookings'
import NotFound from '../../Pages/user/userErrorPage/NotFound'


function OwnerRoute() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<PublicRouteOwner><TheaterLogin/></PublicRouteOwner>} exact/>
        <Route path='/ownersignup' element={<PublicRouteOwner><OwnerSignup/></PublicRouteOwner>} exact/>
        <Route path='/owner-Home' element={<ProtectedRouteOwner><OwnerHome/></ProtectedRouteOwner>}/>
        <Route path='/owner-theater-management' element={<ProtectedRouteOwner><TheaterManagement/></ProtectedRouteOwner>}/>
        <Route path='/owner-add-theater' element={<ProtectedRouteOwner><OwnerAddTheater/></ProtectedRouteOwner>}/>
        <Route path='/owner-show-management' element={<ProtectedRouteOwner><OwnerShowManagement/></ProtectedRouteOwner>}/>
        <Route path='/owner-add-show' element={<ProtectedRouteOwner><OwnerAddShow/></ProtectedRouteOwner>}/>
        <Route path='/owner-show-details' element={<ProtectedRouteOwner><OwnerShowDetails/></ProtectedRouteOwner>}/>
        <Route path='/owner-edit-theater' element={<ProtectedRouteOwner><OwnerEditTheater/></ProtectedRouteOwner>}/>
        <Route path='/owner-bookings' element={<ProtectedRouteOwner><OwnerBookings/></ProtectedRouteOwner>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Fragment>
  )
}

export default OwnerRoute