import React,{useState} from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../../../api_Integration/User/users";

function ProtectedRoute(props) {
  const [user,setUser] = useState("")
  const jwtToken =  localStorage.getItem("token")
 

  const GetCurrentUser = async() => {
    try {
      const response = await getCurrentUser({jwtToken})
      if(response.success){
        setUser(response.data)
         
      }else{
        setUser(null)
        console.log(response.message)
      }

    } catch (error) {
      setUser(null)
      console.log(error.message)
    }
  }

  useEffect(()=>{
    GetCurrentUser()
  },[])

    if (localStorage.getItem("token")){
        console.log('User is loggedIn')
        return props.children;
      } else {
        console.log('User is Not LoggedIn')
        return <Navigate to={"/login"}/>;
    }
  
    
}

export default ProtectedRoute;
