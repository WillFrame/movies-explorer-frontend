import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
    console.log(isLoggedIn);
    return (
        isLoggedIn ? children : <Navigate to='/' replace />
    )
}

export default ProtectedRoute;