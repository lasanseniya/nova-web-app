import { Outlet, Navigate } from "react-router-dom";

function ProtectedOTP() {
  let OTPverified = localStorage.getItem("verified");

  return OTPverified ? <Outlet /> : <Navigate to="/error" />;
}

export default ProtectedOTP;
