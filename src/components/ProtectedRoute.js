import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  let auth = { token: localStorage.getItem("access_token") };
  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
