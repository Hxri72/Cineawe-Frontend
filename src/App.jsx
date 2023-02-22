import {BrowserRouter,Route,Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toast'

import './index.css'
import Home from './Pages/user/userHome/userHome'
import Login from './Pages/user/userLogin/userLogin'
import Signup from './Pages/user/userSignup/userSignup'
import Otp from './Pages/user/userSignup/userOTP'
import AdminLogin from './Pages/admin/adminLogin/adminLogin'
import TheaterLogin from './Pages/theater_owners/theaterLogin/theaterLogin'
import AdminHome from './Pages/admin/adminHome/adminHome'
import AdminUser from './Pages/admin/adminUser/adminUser'
import ProtectedRoute from './Components/user/protectedRoute/protectedRoute'
import PublicRoute from './Components/user/publicRoute/publicRoute'
import PublicRouteAdmin from './Components/admin/publicRouteAdmin/publicRouteAdmin'
import OwnerSignup from './Pages/theater_owners/ownerSignup/ownerSignup'



function App()  {
 
  return (
    <div>
      {/* <div className='loader-parent'></div> */}
      <BrowserRouter>
      <ToastContainer className='Toast' delay={3000} position='top-center' />
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} exact/>
          <Route path='/login' element={<PublicRoute><Login/></PublicRoute>} exact/>
          <Route path='/signup' element={<PublicRoute><Signup/></PublicRoute>} exact/>
          <Route path='/otp' element={<Otp/>} exact/>

          <Route path='/owner' element={<TheaterLogin/>} exact/>
          <Route path='/ownersignup' element={<OwnerSignup/>} exact/>

          <Route path='/admin' element={<PublicRouteAdmin><AdminLogin/></PublicRouteAdmin>} exact/>
          <Route path='/adminhome' element={<AdminHome/>} exact/>
          <Route path='/adminuser' element={<AdminUser/>} exact/>

        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
