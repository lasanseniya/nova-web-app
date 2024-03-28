import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes() {
  let auth = localStorage.getItem("token");

  return auth ? <Outlet /> : <Navigate to="/error" />;
}

export default ProtectedRoutes;
