import React, { Fragment, useState } from "react";
import { toast } from "react-toast";

import { Link, useNavigate } from "react-router-dom";
import applogo from "../../../Assets/user/userSignup/Cineawe.png"
import { signupOTP } from "../../../api_Integration/User/users";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); 
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const navigate = useNavigate();
  

  const signupData = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    phone: phone,
    password: password,
    confirmPassword: confirmPassword,
    isBlocked:"false"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (firstname === "") {
        return toast.warn("First name is required");
      } else if (lastname === "") {
        return toast.warn("Lastname is required");
      } else if (email === "") {
        return toast.warn("Email is required");
      } else if (phone === "") {
        return toast.warn("Phone number is required");
      } else if (password === "") {
        return toast.warn("Password is required");
      }

      if (password !== confirmPassword) {
        return toast.warn("Password not matched");
      }

      const response = await signupOTP()  
      const otp = response.data

      navigate('/otp',{state:{signupData,otp}})
      
    } catch (error) {
      toast.error("failed");
    }
  };

  

  return (
    <Fragment>
    <div className="divwrapper grid lg:grid-cols-1">
      <div className="flex justify-between">
        <div className="appLogo">
          <img src={applogo} alt="applogo" />
        </div>
        <div>
          <Link to="/signup"><button className="signupBtn mr-6 mt-9">Signup</button></Link>
          <Link to="/login"><button className="signupBtn mr-10 mt-9">Login</button></Link>
        </div>
      </div>
      <div className="grid lg:flex justify-between">
        <div className="flex -ml-24 sm:-mt-10 ">
          <div className="cinedivone w-60 ">
            <img
              className="rounded-3xl"
              src="https://m.media-amazon.com/images/M/MV5BYzZkOGUwMzMtMTgyNS00YjFlLTg5NzYtZTE3Y2E5YTA5NWIyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
              alt="filmpic"
            ></img>
          </div>
          <div className="cinedivtwo w-60 ">
            <img
              className="rounded-3xl"
              src="https://flxt.tmsimg.com/assets/p7825626_p_v8_af.jpg"
              alt="filmpic"
            ></img>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="formDiv mt-20 sm:mt-20 md:mt-20 lg:-mt-20">
            <h3 className="text-2xl font-medium">Create a new account.</h3>
            <form onSubmit={handleSubmit}>
              <div className="flex">
                <input
                  className="signupInput "
                  placeholder="Firstname "
                  name="firstname"
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                ></input>
                <input
                  className="signupInput "
                  placeholder="Lastname"
                  name="lastname"
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  ></input>
              </div>
              <input
                className="signupInput "
                placeholder="Email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ></input>
              <input
                className="signupInput "
                placeholder="Phone"
                name="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></input>
              <input
                className="signupInput"
                placeholder="Password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              ></input>
              <input
                className="signupInput"
                placeholder="Confirm Password"
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
              ></input>
               
             
              <div className="flex justify-center w-full py-5">
                <button className="submitbtn" type="submit">
                  Submit
                </button>
              </div>
              <br />
              <div className="ml-3 font-medium">
                <Link to="/login"> Already have an account?Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default Signup;
