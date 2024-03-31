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

  const handleOTP = async () => {
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

  const handleResendOtp = async () => {
    const email = localStorage.getItem("email");

    const { data } = await axios.post("/resend-otp", {
      email,
    });

    if (data.error) {
      toast.error("Cannot resend atm. Please try again later.");
    } else {
      toast.success(data.message);
    }
  };

  return (
    <>
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
      <button onClick={handleOTP}>Verify OTP</button>
      <button onClick={handleResendOtp}>Resend OTP</button>
    </>
  );
}

export default OTPPage;
