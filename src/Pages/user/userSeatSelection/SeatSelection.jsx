import React, { Fragment } from 'react'
import Footer from '../../../Components/user/userHome/footer'
import Header from '../../../Components/user/userHome/Header'
import SeatSelect from '../../../Components/user/userSeatSelection/userSeatSelection'

function SeatSelection() {
  return (
    <Fragment>
      <div className='maindiv'>
        <Header/>
        <SeatSelect/>
        <Footer/>
      </div>
    </Fragment>
  )
}

export default SeatSelection
