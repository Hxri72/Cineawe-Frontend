import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function  Form() {
    return (
      <Fragment>

      <div>
        <div className="grid lg:flex justify-center">
        <div className="formdivOwner">
          <h3 className="text-2xl font-medium text-white">LOGIN</h3>
          <div className='mt-2 font-sans text-xl'>
            <small className='text-sm text-slate-400'>Please enter the Email and Password</small>
          </div>
          
          <p></p>
          <form>
            <input className="signupInputowner " placeholder="Email"></input>
            <input className="signupInputowner" placeholder="Password"></input>
            <div className='flex justify-center mt-5'>
            <button className="border-2 mt-4 w-24 rounded-md h-10 font-medium border-gray-900 text-white hover:bg-gray-900">Login</button>

            </div>
            
          </form>
          <div className='mt-7'>
          <Link to={'ownersignup'}>
          <small className='text-slate-300 font-medium text-sm'>Didn't have an account? <span className='text-red-400'>Signup</span></small>
          </Link>
          </div>
          
        </div>
  
        </div>
  
      </div>
      </Fragment>
    )
  }


export default Form
