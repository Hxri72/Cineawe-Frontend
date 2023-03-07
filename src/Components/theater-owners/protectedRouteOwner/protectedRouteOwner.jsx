import React from 'react'
import { Navigate } from 'react-router';

function ProtectedRouteOwner(props) {
  
    if (localStorage.getItem("ownerToken")){
        console.log('owner is loggedIn')
        return props.children;
      } else {
        console.log('owner is Not LoggedIn')
        return <Navigate to={"/owner"}/>;
    }
}

export default ProtectedRouteOwner
