import React from 'react'

function  Form() {
    return (
      <div>
        <div className="grid lg:flex justify-end">
        <div className="formdivOwner mt-20 sm:mt-20 md:mt-20 lg:-mt-20">
          <h3 className="text-2xl">LOGIN</h3>
          <div className='mt-2 font-sans text-xl'>
            <small>Please enter the Email and Password</small>
          </div>
          
          <p></p>
          <form>
            <input className="signupInput " placeholder="Email"></input>
            <input className="signupInput" placeholder="Password"></input>
            <input className="signupInput" placeholder="Confirm Password"></input>
            <button className="submitbtn">Submit</button>
            
          </form>
        </div>
  
        </div>
  
      </div>
    )
  }


export default Form
