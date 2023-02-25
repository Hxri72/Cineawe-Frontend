import React, { Fragment } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toast'
import { signupOwner } from '../../../../api_Integration/owner/ownerInstance'
import '.././../../../stylesheets/theater_owners/ownersSignup.css'
import Swal from 'sweetalert2'


function Form() {

  const [fullname,setFullname] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setconfirmPassword] = useState("")

  const signupData = {
    fullname:fullname,
    email:email,
    password:password,
    confirmPassword:confirmPassword,
    isAdminApprove:"false"
  }

  const handleSignup = async(e) => {
    e.preventDefault()
    if(fullname === ""){
      return toast.error('Fullname is required')
    }else if(email === ""){
      return toast.error("Email is required")
    }else if(password === ""){
      return toast.error("Password is required")
    }else if(confirmPassword !== password){
      return toast.error("Password is not matched")
    }

    const response = await signupOwner(signupData)
    console.log(response)
    if(response.success){
      Swal.fire({
        icon:'success',
        title:'Success!',
        text:'Signup successfully, Admin want to approve the account, Please wait for the Email,Thankyou!',
        background:'#171717',
        confirmButtonColor:'#000000',
        color:'#AFACAB'
      })
    }else{
      toast.error('User Already exist')
    }

  }

  return (
    <Fragment>
    <div className='ownerSignupformdiv'>
      <div className='flex justify-center lg:justify-center mr-32 md:justify-center ml-32 sm:justify-center'>
        <div className='ownerSignupForm'>
            <div className='grid justify-center p-12 gap-11'>
            <h1 className='text-2xl font-medium text-white'>SIGN UP</h1>
            <form className='grid gap-4' onSubmit={handleSignup}>
              <input 
              className='ownerSignupInputField' 
              type='text' 
              name='fullname' 
              placeholder='Fullname'
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              >
              </input>
              <input 
              className='ownerSignupInputField' 
              type='email' 
              name='email' 
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input 
              className='ownerSignupInputField' 
              type='password' 
              name='password' 
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ></input>
              <input 
              className='ownerSignupInputField' 
              type='password' 
              name='confirmPassword' 
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
              ></input>
              <small className='text-gray-400'> you are accepted to all terms and conditions</small>
              <div className='flex justify-center '>
              <button type='submit' className='border-2 mt-4 w-24 rounded-md h-10 font-medium border-gray-900 text-white hover:bg-gray-900'>
                Signup
              </button>
              </div>
            </form>
            <Link to={'/owner'}>
            <div>
            <h1 className='text-white font-medium text-sm'>Already have an account? <span className='text-red-400'>Login here</span></h1>
            </div>
            </Link>
          </div>
              
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default Form
