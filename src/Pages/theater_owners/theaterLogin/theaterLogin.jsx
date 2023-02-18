import React from 'react'

import Header from '../../../Components/theater-owners/ownerLogin/Header/Header'
import Form from '../../../Components/theater-owners/ownerLogin/Form/Form'
import '../../../stylesheets/theater_owners/ownersLogin.css'

function TheaterLogin() {
  return (
    <div className='divwrapperOwner'>
      <Header/>
      <Form/>
    </div>
  )
}

export default TheaterLogin
