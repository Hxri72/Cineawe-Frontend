import {BrowserRouter,Route,Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toast'

import './index.css'
import Home from './Pages/user/userHome'
import Login from './Pages/user/userLogin/userLogin'
import Signup from './Pages/user/userSignup/userSignup'
import AdminLogin from './Pages/admin/adminLogin/adminLogin'
import TheaterLogin from './Pages/theater_owners/theaterLogin/theaterLogin'

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <ToastContainer className='Toast' delay={3000} position='top-center' />
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/login' element={<Login/>} exact/>
          <Route path='/signup' element={<Signup/>} exact/>
          <Route path='/admin' element={<AdminLogin/>} exact/>
          <Route path='/owner' element={<TheaterLogin/>} exact/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
