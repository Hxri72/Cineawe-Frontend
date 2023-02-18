import React from 'react'
import Header from '../../../Components/theater-owners/ownerSignup/Header/header'
import Form from '../../../Components/theater-owners/ownerSignup/Form/form'
import Footer from '../../../Components/theater-owners/ownerSignup/Footer/footer'

function OwnerSignup() {
  return (
    <div className='ownerSignupDiv'>
      <div className='innerDivOwnerSignup'>
        <Header/>
        <Form/>
        <Footer/>
      </div>
    </div>
  )
}

export default OwnerSignup
