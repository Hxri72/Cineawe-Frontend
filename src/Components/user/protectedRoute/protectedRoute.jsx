import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../../../api_Integration/User/users";
import {setUser} from '../../../Redux/usersSlice'

function ProtectedRoute(props) { 
  const jwtToken =  localStorage.getItem("token")
  const dispatch = useDispatch();

  const GetCurrentUser = async() => {
    try {
      const response = await getCurrentUser({jwtToken})
      if(response.success){
        dispatch(setUser(response.data))
      }else{
        dispatch(setUser(null))
        console.log(response.message)
      }

    } catch (error) {
      dispatch(setUser(null))
      console.log(error.message)
    }
  }

  useEffect(()=>{
     GetCurrentUser()
  })

    if (localStorage.getItem("token")){
        console.log('User is loggedIn')
        return props.children;
      } else {
        console.log('User is Not LoggedIn')
        return <Navigate to={"/login"}/>;
    }
    
}

export default ProtectedRoute;
