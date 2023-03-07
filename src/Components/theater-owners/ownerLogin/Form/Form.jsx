import React, { useState,Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toast";
import { loginOwner } from "../../../../api_Integration/owner/ownerInstance";

function Form() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginData = {
    email:email,
    password:password
  }

  const handleLogin = async(e) => {
    e.preventDefault()
    const response = await loginOwner(loginData)
    if(response.success){
      localStorage.setItem("ownerToken",response.data)
      navigate('/owner/owner-Home')
    }else{
      toast.error(response.message)
    }
  }

  return (
    <Fragment>
      <div>
        <div className="grid lg:flex justify-center">
          <div className="formdivOwner">
            <h3 className="text-2xl font-medium text-white">LOGIN</h3>
            <div className="mt-2 font-sans text-xl">
              <small className="text-sm text-slate-400">
                Please enter the Email and Password
              </small>
            </div>

            <p></p>
            <form onSubmit={handleLogin}>
              <input
                className="signupInputowner "
                placeholder="Email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input
                className="signupInputowner"
                placeholder="Password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <div className="flex justify-center mt-5">
                <button type="submit" className="border-2 mt-4 w-24 rounded-md h-10 font-medium border-gray-900 text-white hover:bg-gray-900">
                  Login
                </button>
              </div>
            </form>
            <div className="mt-7">
              <Link to={"ownersignup"}>
                <small className="text-slate-300 font-medium text-sm">
                  Didn't have an account?{" "}
                  <span className="text-red-400">Signup</span>
                </small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Form;
