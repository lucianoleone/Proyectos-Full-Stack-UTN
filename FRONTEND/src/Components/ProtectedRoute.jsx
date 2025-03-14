import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
    //llama la contexto isAuthenticatedState
    //tenemos uqe usar el hook de react useContext
    const {isAuthenticatedState} = useContext(AuthContext) //esto me devuelve un objeto con los valores de los contextos
  return (
    //Aca esta la magia
    isAuthenticatedState
    ?<Outlet/>
    :<Navigate to="/login"/>
  )
}

export default ProtectedRoute