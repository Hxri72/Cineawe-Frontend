import React,{ Fragment } from 'react'
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toast'
import './index.css'
import UserRoute from './routes/user/userRoute'
import OwnerRoute from './routes/owners/owner'
import AdminRoute from './routes/admin/adminRoute'
import Loader from './Pages/loader'
import { useSelector } from 'react-redux'
import NotFound from './Pages/user/userErrorPage/NotFound'


function App(){
  const {loading} = useSelector((state) => state.loaders)
  return (
    <Fragment>
      {loading && 
        <Loader/>
      }
      <BrowserRouter>
      <ToastContainer className='Toast' delay={3000} position='top-center' />

        <Routes>

          <Route path='/*' element={<UserRoute/>}/>

          <Route path='/owner/*' element={<OwnerRoute/>}/>

          <Route path='/admin/*' element={<AdminRoute/>}/>

        </Routes>
        
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
