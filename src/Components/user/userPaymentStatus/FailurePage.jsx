import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function FailurePage() {
  return (
    <Fragment>
        <div className='mainDivPaymentSuccess'>
            <div className='paymentSuccessParentDiv'>
                <div className='paymentSuccessDiv'>
                    <div className=' w-full h-3/4 flex flex-col justify-center'>
                    
                    <div className='paymentSuccessImg'>
                        <img className='mx-auto h-full' alt='paymentImg' src='https://img.freepik.com/premium-vector/red-cross-mark-icon-negative-choice-symbol-sign-app-button_744955-339.jpg?w=740'/>
                    </div>
                    <div className='flex justify-center'>
                        <h1 className='font-medium text-lg'>Payment Failed</h1>
                    </div>
                    <div className='flex justify-center'>
                        <h1 className='font-thin text-lg'>Please Try Again</h1>
                    </div>

                    <Link to={"/"}>
                    <div className='backToHomeButtonDiv'>
                        <button className='px-2 py-1 bg-black font-medium rounded-lg text-white'> Home</button>
                    </div>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default FailurePage
