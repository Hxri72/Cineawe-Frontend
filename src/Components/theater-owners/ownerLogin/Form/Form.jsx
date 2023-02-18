import React from 'react'

function  Form() {
    return (
      <div>
        <div className="grid lg:flex justify-end">
        <div className="formdivOwner">
          <h3 className="text-2xl">LOGIN</h3>
          <div className='mt-2 font-sans text-xl'>
            <small>Please enter the Usename and Password</small>
          </div>
          
          <p></p>
          <form>
            <input className="signupInputowner " placeholder="Email"></input>
            <input className="signupInputowner" placeholder="Password"></input>
            <button className="submitbtn">Submit</button>
            
          </form>
        </div>
  
        </div>
  
      </div>
    )
  }


export default Form
