import { useState } from "react";
import InputBox from "../components/forms/InputBox";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function OTPPage() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: localStorage.getItem("email"),
    otp: "",
  });

  const handleOTP = async (e) => {
    e.preventDefault();
    const { email, otp } = data;

    const response = await axios.post("/verify-otp", {
      email,
      code: otp,
    });

    if (response.data.error) {
      toast.error(response.data.error);
    } else {
      // Upon successful OTP verification,
      toast.success(response.data.message);
      localStorage.setItem("verified", true);
      navigate("/password-reset");
    }
  };

  const handleResendOtp = async (e) => {
    e.preventDefault();
    const email = localStorage.getItem("email");
    // remove the existing OTP from database
    try {
      const response = await axios.delete(`/delete-otp/${email}`);

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        // resend a new otp to email
        const resendResponse = await axios.post("/forgot-password", {
          email,
        });

        if (resendResponse.data.error) {
          toast.error(resendResponse.data.error);
        } else {
          toast.success("OTP has been sent 📨");
        }
      }
    } catch (error) {
      toast.error("error");
    }
  };

  return (
    <>
      <form onSubmit={handleOTP}>
        <InputBox
          id="otp"
          placeholder="Enter your OTP"
          name="otp"
          type="text"
          value={data.otp}
          onChange={(e) =>
            setData({
              ...data,
              otp: e.target.value,
            })
          }
        ></InputBox>
        <button type="submit">Verify OTP</button>
      </form>
      <button onClick={handleResendOtp}>Resend OTP</button>
    </>
  );
}

export default OTPPage;
