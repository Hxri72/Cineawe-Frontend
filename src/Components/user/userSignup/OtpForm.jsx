import React,{Fragment, useEffect} from "react";
import { toast } from "react-toast";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {signupUser} from '../../../api_Integration/User/users'
import { signupOTP } from "../../../api_Integration/User/users";
import { useState } from "react";


function OtpForm(props) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(59);

  const [num1,setNum1] = useState("")
  const [num2,setNum2] = useState("")
  const [num3,setNum3] = useState("")
  const [num4,setNum4] = useState("")
  const [resendData,setResendData] = useState("")

  const navigate = useNavigate()
  const location = useLocation()
  const userDetails = location.state.signupData
  const signupOtp = location.state.otp

  const inputData = {
    num:num1+num2+num3+num4
  }

  const handleOTP = async(e) => {
    try {
      console.log('here Calling');
      console.log(inputData.num)
      console.log(signupOtp)
      console.log(resendData)
      if(inputData.num!==""){
        if(signupOtp===inputData.num || resendData===inputData.num){
          e.preventDefault()
          const response = await signupUser(userDetails);
          if (response.success) {
            toast.success("User Created successfuly");
            setTimeout(() => {
              navigate('/');
            }, 3000);
          } else {
            toast.error("Failed");
          }
        }else{
          toast.error('Incorrect OTP')
          e.preventDefault()
        }
      }else{
        toast.error('Incorrect OTP')
        e.preventDefault()
      }
        
    } catch (error) {
      console.log(error.message)
    }
    
  }

  const resendOtp = async(e)=>{
    setMinutes(0);
    setSeconds(59);
    const response = await signupOTP() 
    setResendData(response.data)
    if(response.success){
      toast.success('OTP resended Successfully')
    }else{
      toast.error('OTP resend is failed')
      navigate('/signup')
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
  
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
  
    return () => {
      clearInterval(interval);
    };
  }, );
    
  
  return (
    <Fragment>
    <div className="flex w-full h-96 justify-center" >
      <div className="otpformdiv shadow-lg">
        <div className="p-10">
        <h1 className="font-sans  text-black text-lg text-center font-medium">An <span className="font-bold">OTP </span>is sent to your Email Please verify it below</h1><br>
        </br>
        <h1 className="text-center font-medium">Enter the OTP</h1>
        <form onSubmit={handleOTP}>
          <div className="flex mt-10 justify-center">
            <input 
            className="otpInput text-center" 
            maxLength={1}  
            type='text' 
            name='num1'
            id="field1"
            onChange={(e)=>setNum1(e.target.value)}>
            </input>
            <input 
            className="otpInput text-center" 
            maxLength={1} 
            type='number' 
            name='num2'
            id="field2"
            onChange={(e)=>setNum2(e.target.value)}>
            </input>
            <input 
            className="otpInput text-center" 
            maxLength={1} 
            type='number' 
            name="num3"
            id="field3"
            onChange={(e)=>setNum3(e.target.value)}>
            </input>
            <input 
            className="otpInput text-center" 
            maxLength={1} 
            type='number' 
            name="num4"
            id="field3"
            onChange={(e)=>setNum4(e.target.value)}>
            </input>
          <br/>
          </div>
          <div className="flex justify-start mt-3 ml-14">
            {seconds > 0 || minutes > 0 ? (
            <p className="font-medium text-gray-800">Time Remaining : {minutes < 10 ? `0${minutes}` :minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}</p>
            ) : <p  className=" rounded-md text-red-800 w-48 h-5 font-semibold">Didn't Recieve the Code?</p>
            }
          </div>
          <div className="flex border-solid justify-center mt-5">
            <button type="submit" className="bg-slate-800 rounded-md w-48 h-10 text-slate-300 font-semibold">Verify OTP</button>
          </div>
          
        </form>
        {seconds > 0 || minutes > 0 ? <div className="flex border-solid justify-center mt-2">
              <button className=" bg-slate-700 rounded-md w-48 h-10 text-slate-500 font-semibold">Resend OTP</button>
          </div> : <div className="flex border-solid justify-center mt-2" 
          >
              <button 
              onClick={resendOtp} 
              className=" bg-slate-800 rounded-md w-48 h-10 text-slate-300 font-semibold">Resend OTP</button>
          </div>}
        
        </div>
        
      </div>
      
    </div>
    </Fragment>
  );
}

export default OtpForm;
