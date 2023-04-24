import React from 'react'
import { Navigate } from "react-router-dom";

function PublicRouteAdmin(props) {
    if(localStorage.getItem("adminToken")){
        return <Navigate to={'/admin/adminhome'}/>
      }else{
        return props.children
      }
}

export default PublicRouteAdmin