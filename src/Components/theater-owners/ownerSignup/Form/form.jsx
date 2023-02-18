import React from 'react'
import '.././../../../stylesheets/theater_owners/ownersSignup.css'

function Form() {
  return (
    <div className='ownerSignupformdiv'>
      <div className='flex justify-center lg:justify-end mr-32 md:justify-center ml-32 sm:justify-center'>
        <div className='ownerSignupForm'>
            <div className='grid justify-center p-12 gap-11'>
            <h1 className='text-2xl font-medium text-white'>SIGN UP</h1>
            <form className='grid gap-4'>
              <input className='ownerSignupInputField' type='text' name='fullname' placeholder='Fullname'></input>
              <input className='ownerSignupInputField' type='email' name='email' placeholder='Email'></input>
              <input className='ownerSignupInputField' type='password' name='password' placeholder='Password'></input>
              <input className='ownerSignupInputField' type='password' name='confirmPassword' placeholder='Confirm Password'></input>
              <small className='text-gray-400'> you are accepted to all terms and conditions</small>
              <div className='flex justify-center '>
              <button className='border-2 mt-4 w-24 rounded-md h-10 font-medium border-gray-900 text-white hover:bg-gray-900'>
                SIGNUP
              </button>
              </div>
            </form>

          </div>
              
        </div>
      </div>
    </div>
  )
}

export default Form
