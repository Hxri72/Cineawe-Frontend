import React from 'react'
import { useEffect } from 'react';
import { Navigate } from 'react-router';
import { getCurrentOwner } from '../../../api_Integration/owner/ownerInstance';
import { setOwner } from "../../../Redux/ownerSlice";
import { useDispatch } from 'react-redux';

function ProtectedRouteOwner(props) {

  const dispatch = useDispatch()

  const jwtToken = localStorage.getItem('ownerToken')

  const GetCurrentOwner = async()=>{
    try {
      
      const response = await getCurrentOwner({jwtToken})
      if(response.success){
        dispatch(setOwner(response.data))
      }else{
        dispatch(setOwner(null))
        console.log(response.message)
      }
   
    } catch (error) {
      console.log(error.message)
    }
  } 

  useEffect(()=>{
    GetCurrentOwner();
  })
  
    if (localStorage.getItem("ownerToken")){
        return props.children;
      } else {
        return <Navigate to={"/owner"}/>;
    }
}

export default ProtectedRouteOwner
