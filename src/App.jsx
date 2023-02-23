import { Fragment } from 'react'
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toast'

import './index.css'

import UserRoute from './routes/user/userRoute'
import OwnerRoute from './routes/owners/owner'
import AdminRoute from './routes/admin/adminRoute'




function App()  {
 
  return (
    <Fragment>
    <div>
      {/* <div className='loader-parent'></div> */}
      <BrowserRouter>
      <ToastContainer className='Toast' delay={3000} position='top-center' />
        <Routes>
          <Route path='/*' element={<UserRoute/>} />

          <Route path='/owner/*' element={<OwnerRoute/>}/>

          <Route path='/admin/*' element={<AdminRoute/>}/>
        </Routes>
        
      </BrowserRouter>
      
    </div>
    </Fragment>
  );
}

export default App;
