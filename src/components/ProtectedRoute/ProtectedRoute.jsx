import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ element: Component,  ...props }) => {
  console.log(props.loggedIn)
  return props.loggedIn ? (
    
    <Component {...props} />
  ) : (
    <Navigate to="/signin" replace />
  );
};

export default ProtectedRouteElement;
