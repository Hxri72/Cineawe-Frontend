import React, { Fragment } from "react";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import { toast } from "react-toast";
import { LoginUser } from "../../../../api_Integration/User/users";
import { setUser } from "../../../../Redux/usersSlice";


function Form() {
  const dispatch = useDispatch();

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()

  const loginData = {
    email : email,
    password : password
  }

  const handleSubmit = async(e)=> {
      e.preventDefault()
      if(email === ""){
        return toast.warn('Email is required')
      }else if(password === ""){
        return toast.warn('Password is required')
      }

      const response = await LoginUser(loginData)
      const {userData,data,message}=response
      if(response.success){
        dispatch(setUser(userData))
            navigate('/')
        localStorage.setItem("token",data)
      }else{
        toast(message,{
          backgroundColor:'darkred' ,
          color: 'ffffff'
        })
      }
  }
  return (
    <Fragment>

    <div>
      <div className="grid lg:flex justify-between">
        <div className="flex -ml-24 mt-16">
          <div className="cinedivonelog w-60 ">
            <img
              className="rounded-3xl"
              src="https://www.indiewire.com/wp-content/uploads/2019/12/JokerPoster1200_5ca3c435318d42.29270548.jpg?w=800"
              alt="filmpic"
            ></img>
          </div>
          <div className="cinedivtwolog w-60 ">
            <img
              className="rounded-3xl"
              src="https://assets.mubicdn.net/images/notebook/post_images/31857/images-w1400.jpg?1607290863"
              alt="filmpic"
            ></img>
          </div>
        </div>

        <div className="formDiv mt-20 sm:mt-20 md:mt-20 lg:-mt-20">
          <h3 className="text-2xl">Welcome Back!</h3>
          <small>Please enter the Email and Password</small>
          <p></p>
          <form onSubmit={handleSubmit}>
            <input className="signupInput"
             placeholder="Email"
             type='email'
             name="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             ></input>

            <input 
            className="signupInput" 
            placeholder="Password"
            type='password'
            name="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            ></input>
            <small className="ml-2 mt-1 text-slate-800">By clicking submit you are accepted to terms and conditions</small>
            <div className="flex justify-center">
              <button className="submitbtn">Submit</button>
            </div>
            <br />
            <div className="ml-2 mt-4 font-medium">
              <Link to="/signup">Don't have an account? Signup</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default Form
