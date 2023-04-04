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
import SeatSelection from '../../Pages/user/userSeatSelection/SeatSelection'
import PaymentPage from '../../Pages/user/userPayment/PaymentPage'
import ListBookings from '../../Pages/user/userListBookings/ListBookings'
import NotFound from '../../Pages/user/userErrorPage/NotFound'
import PaymentSuccess from '../../Pages/user/userPaymentStatus/paymentSuccess'
import PaymentFailure from '../../Pages/user/userPaymentStatus/paymentFailure'

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
            <Route path='/seat-selection' element={<ProtectedRoute><SeatSelection/></ProtectedRoute>} exact/>
            <Route path='/payment' element={<ProtectedRoute><PaymentPage/></ProtectedRoute>} exact/>
            <Route path='/list-bookings' element={<ProtectedRoute><ListBookings/></ProtectedRoute>} exact/>
            <Route path='/payment-success' element={<ProtectedRoute><PaymentSuccess/></ProtectedRoute>} exact/>
            <Route path='/payment-failure' element={<ProtectedRoute><PaymentFailure/></ProtectedRoute>} exact/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>

    </div>
  )
}

export default UserRoute;
