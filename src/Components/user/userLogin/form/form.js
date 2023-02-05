import React from 'react'
import {Link} from 'react-router-dom'

function form() {
  return (
    <div>
      <div className="grid lg:flex justify-between">
      <div className='flex -ml-24 mt-16'>
        <div className='cinedivonelog w-60 '>
            <img className='rounded-3xl' src='https://www.indiewire.com/wp-content/uploads/2019/12/JokerPoster1200_5ca3c435318d42.29270548.jpg?w=800' alt='filmpic'></img>
        </div>
        <div className='cinedivtwolog w-60 '>
            <img className='rounded-3xl' src='https://assets.mubicdn.net/images/notebook/post_images/31857/images-w1400.jpg?1607290863' alt='filmpic'></img>
        </div>
      </div>

      <div className="formDiv mt-20 sm:mt-20 md:mt-20 lg:-mt-20">
        <h3 className="text-2xl">Welcome Back!</h3>
        <small >Please enter the Email and Password</small>
        <p></p>
        <form>
          <input className="signupInput " placeholder="Email"></input>
          <input className="signupInput" placeholder="Password"></input>
          <input className="signupInput" placeholder="Confirm Password"></input>
          <button className="submitbtn">Submit</button>
          <br/>
          <div className='ml-10 mt-4'>
          <Link  to='/signup' >Don't have an account? Signup</Link>
          </div>
          
        </form>
      </div>

      </div>

    </div>
  )
}

export default form
