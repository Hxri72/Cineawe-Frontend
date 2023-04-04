import React, { Fragment } from 'react'
import Header from '../../../Components/user/userPayment/Header'
import FailurePage from '../../../Components/user/userPaymentStatus/FailurePage'

function PaymentFailure() {
  return (
    <Fragment>
      <div className='maindiv'>
        <Header/>
        <FailurePage/>
      </div>
    </Fragment>
  )
}

export default PaymentFailure
