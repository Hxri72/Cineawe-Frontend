import React, { Fragment } from 'react'
import Header from '../../../Components/theater-owners/ownerSignup/Header/header'
import Form from '../../../Components/theater-owners/ownerSignup/Form/form'
import Footer from '../../../Components/theater-owners/ownerSignup/Footer/footer'

function OwnerSignup() {
  return (
    <Fragment>
      <div className='ownerSignupDiv'>
        <div className='innerDivOwnerSignup'>
          <section className='containerDiv'>
          <Header/>
          <Form/>
          <Footer/>
          </section>
        </div>
      </div>
    </Fragment>
  )
}

export default OwnerSignup
