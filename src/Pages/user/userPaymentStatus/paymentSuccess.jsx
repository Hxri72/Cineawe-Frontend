import React, { Fragment } from 'react'
import Header from '../../../Components/user/userPayment/Header'
import SuccessPage from '../../../Components/user/userPaymentStatus/SuccessPage'


function PaymentSuccess() {
  return (
    <Fragment>
      <div className='maindiv'>
        <Header/>
        <SuccessPage/>
      </div>
    </Fragment>
  )
}

export default PaymentSuccess
