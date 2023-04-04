import React, { Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../../stylesheets/user/userPaymentSuccess.css'

function SuccessPage() {

    const location = useLocation()
    const paymentData = location.state.paymentData
    console.log(paymentData)
  return (
    <Fragment>
        <div className='mainDivPaymentSuccess'>
            <div className='paymentSuccessParentDiv'>
                <div className='paymentSuccessDiv'>
                    <div className='paymentSuccessImg'>
                        <img className='mx-auto h-full' alt='paymentImg' src='https://img.freepik.com/premium-vector/green-check-mark-icon-symbol-logo-circle-tick-symbol-green-color-vector-illustration_685751-503.jpg?w=2000'/>
                    </div>
                    <div className='flex justify-center'>
                        <h1 className='font-medium text-lg'>Payment Success</h1>
                    </div>
                    <hr className='mt-3 w-3/4 mx-auto'/>

                    <div className='flex justify-center mt-4'>
                        <h1 className='font-medium '>{paymentData.showData.moviename}</h1>
                    </div>

                    <div className='bookingDetailsDiv'>
                        <div className='px-20'>
                        <h1 className='detailsFont'>Seat No :- {paymentData.selectedSeats.map((seat)=> seat.id+',')}</h1>
                        <h1 className='detailsFont'>Date :- {paymentData.showDate}</h1>
                        <h1 className='detailsFont'>Time :- {paymentData.showData.showtime}</h1>
                        <h1 className='detailsFont'>Theater : {paymentData.showData.theatername}</h1>
                        </div>
                    </div>

                    <div className='paymentDetailsDiv '>
                        <div className='px-20 flex justify-between'>
                            <h1 className='detailsFont'>SubTotal</h1>
                            <h1 className='detailsFont'>{(paymentData.showData.ticketprice) * paymentData.selectedSeats.length}/-</h1>
                        </div>
                        <div className='px-20 flex justify-between'>
                            <h1 className='detailsFont text-sm'>convenienceFee</h1>
                            <h1 className='detailsFont text-sm'>{((paymentData.showData.ticketprice) * paymentData.selectedSeats.length)/20}/-</h1>
                        </div>
                        <div className='px-20 mt-2 flex justify-between'>
                            <h1 className='font-normal text-lg'>Total</h1>
                            <h1 className=' text-lg'>{paymentData.price}/-</h1>
                        </div>
                    </div>
                    
                    <Link to={"/"}>
                    <div className='backToHomeButtonDiv'>
                        <button className='px-2 py-1 bg-black font-medium rounded-lg text-white'> Home</button>
                    </div>
                    </Link>


                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default SuccessPage
