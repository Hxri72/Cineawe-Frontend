import React, { Fragment } from 'react'
import Header from '../../../Components/user/userPayment/Header'
import PaymentSection from '../../../Components/user/userPayment/PaymentSection'

function PaymentPage() {
  return (
    <Fragment>
      <div className='maindiv'>
        <Header/>
        <PaymentSection/>
      </div>
    </Fragment>
  )
}

export default PaymentPage
