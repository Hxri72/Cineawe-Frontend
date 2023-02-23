import React from 'react'
import {Routes,Route} from 'react-router-dom'

import TheaterLogin from '../../Pages/theater_owners/theaterLogin/theaterLogin'
import OwnerSignup from '../../Pages/theater_owners/ownerSignup/ownerSignup'

function OwnerRoute() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<TheaterLogin/>} exact/>
        <Route path='/ownersignup' element={<OwnerSignup/>} exact/>
      </Routes>
    </div>
  )
}

export default OwnerRoute