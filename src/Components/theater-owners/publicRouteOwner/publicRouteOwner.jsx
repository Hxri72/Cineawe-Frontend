import React from 'react'
import { Navigate } from 'react-router';

function PublicRouteOwner(props) { 
    if (localStorage.getItem("ownerToken")){
        return <Navigate to={'/owner/owner-Home'}/>
      } else {
        return props.children
    }
}

export default PublicRouteOwner;
