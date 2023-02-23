import React from 'react'

import Header from '../../../Components/theater-owners/ownerLogin/Header/Header'
import Form from '../../../Components/theater-owners/ownerLogin/Form/Form'
import '../../../stylesheets/theater_owners/ownersLogin.css'
import { Fragment } from 'react'

function TheaterLogin() {
  return (
  <Fragment>
    <div className='divwrapperOwner'>
      <Header/>
      <Form/>
    </div>
  </Fragment>
  )
}

export default TheaterLogin
