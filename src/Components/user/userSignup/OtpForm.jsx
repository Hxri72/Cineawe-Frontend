import React,{Fragment, useEffect, useRef} from "react";
import { toast } from "react-toast";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {signupUser} from '../../../api_Integration/User/users'
import { signupOTP } from "../../../api_Integration/User/users";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../../Redux/loadersSlice";


function OtpForm(props) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(59);

  const [num1,setNum1] = useState("")
  const [num2,setNum2] = useState("")
  const [num3,setNum3] = useState("")
  const [num4,setNum4] = useState("")
  const [resendData,setResendData] = useState("")

  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const thirdNameRef = useRef(null)
  const fourthNameRef = useRef(null)

  const navigate = useNavigate()
  const location = useLocation()
  const userDetails = location.state.signupData
  const signupOtp = location.state.otp
  const dispatch = useDispatch();
  const inputData = {
    num:num1+num2+num3+num4
  }

  const handleOTP = async(e) => {
    try {
      if(inputData.num!==""){
        if(signupOtp===inputData.num || resendData===inputData.num){
          e.preventDefault()
          dispatch(showLoading())
          const response = await signupUser(userDetails);

          if (response.success) {
            toast.success("User Created successfuly");
            setTimeout(() => {
              navigate('/');
              dispatch(hideLoading())
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
    dispatch(showLoading())
    const response = await signupOTP() 
    setResendData(response.data)
    if(response.success){
      toast.success('OTP resended Successfully')
    }else{
      toast.error('OTP resend is failed')
      navigate('/signup')
    }
    dispatch(hideLoading())
  }

  const handleFirstInput = (event) => {
      setNum1(event.target.value)
      if(event.target.value.length>0){
        lastNameRef.current.focus()
      }
  }

  const handleSecondInput = (event) => {
    setNum2(event.target.value)
    if(event.target.value.length>0){
      thirdNameRef.current.focus()
    }else{
      firstNameRef.current.focus()
    }
  }

  const handelThirdInput = (event) => {
    setNum3(event.target.value)
    if(event.target.value.length>0){
      fourthNameRef.current.focus()
    }else{
      lastNameRef.current.focus()
    }
  }

  const handleFourthInput = (event) => {
    setNum4(event.target.value)
    if(event.target.value.length<=0){
      thirdNameRef.current.focus()
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
            onChange={handleFirstInput}
            ref={firstNameRef}
            >
            </input>
            <input 
            className="otpInput text-center" 
            maxLength={1} 
            type='number' 
            name='num2'
            id="field2"
            onChange={handleSecondInput}
            ref={lastNameRef}
            >
            </input>
            <input 
            className="otpInput text-center" 
            maxLength={1} 
            type='number' 
            name="num3"
            id="field3"
            onChange={handelThirdInput}
            ref={thirdNameRef}
            >
            </input>
            <input 
            className="otpInput text-center" 
            maxLength={1} 
            type='number' 
            name="num4"
            id="field3"
            onChange={handleFourthInput}
            ref={fourthNameRef}
            >
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
