import React from "react";
import { authUser } from "./Components/User";
import { Navigate } from "react-router-dom";


export function PrivateRoute({ children }) {
    const auth = authUser();
    return auth ? children : <Navigate to="/" />;
  }