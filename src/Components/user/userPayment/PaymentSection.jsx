import React, { Fragment } from 'react'

function PaymentSection() {
  return (
    <Fragment>
        <div className='paymentMainDiv'>
            <div className='contactDetailsDiv'>
                <div className='contactHeaderDiv'>
                    <h1 className='text-2xl font-bold'>Contact Details</h1>
                </div>
                <div className='contactFormDiv'>
                    <form className='flex '>
                        <div >
                            <input className='formInputDiv' placeholder='Email'></input>
                        </div>
                        <div >
                            <input className='formInputDiv' placeholder='Phone'></input>
                        </div>
                        <div>
                            <button className='submitButtonContact'>Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default PaymentSection
