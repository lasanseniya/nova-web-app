import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes() {
  let auth = document.cookie.includes("token");

  return auth ? <Outlet /> : <Navigate to="/error" />;
}

export default ProtectedRoutes;
