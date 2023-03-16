import React from 'react'

import {Route,Routes} from 'react-router-dom'
import ProtectedRoute from '../../Components/user/protectedRoute/protectedRoute'
import PublicRoute from '../../Components/user/publicRoute/publicRoute'
import Home from '../../Pages/user/userHome/userHome'
import Login from '../../Pages/user/userLogin/userLogin'
import Signup from '../../Pages/user/userSignup/userSignup'
import Otp from '../../Pages/user/userSignup/userOTP'
import MovieDetails from '../../Pages/user/userMovieDetails/userMovieDetails'
import ShowSelect from '../../Pages/user/userShowSelect/ShowSelect'

function UserRoute() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} exact/>
            <Route path='/login' element={<PublicRoute><Login/></PublicRoute>} exact/>
            <Route path='/signup' element={<PublicRoute><Signup/></PublicRoute>} exact/>
            <Route path='/otp' element={<Otp/>} exact/>
            <Route path='/movie-details' element={<ProtectedRoute><MovieDetails/></ProtectedRoute>} exact/>
            <Route path='/show-select' element={<ProtectedRoute><ShowSelect/></ProtectedRoute>} exact/>

        </Routes>

    </div>
  )
}

export default UserRoute;
