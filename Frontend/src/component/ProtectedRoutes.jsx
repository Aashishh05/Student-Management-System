import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const isAuthenticate = useSelector((item) => item.auth.isAuthenticated);
  // console.log(user);
  // console.log("TOKEN:", token);

  return isAuthenticate ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
