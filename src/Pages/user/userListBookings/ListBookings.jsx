import React, { Fragment } from 'react'
import Header from '../../../Components/user/userHome/Header'
import ListBooking from '../../../Components/user/userListBookings/ListBooking'

function ListBookings() {
  return (
    <Fragment>
      <div className='maindiv'>
        <Header/>
        <ListBooking/>
      </div>
    </Fragment>
  )
}

export default ListBookings
