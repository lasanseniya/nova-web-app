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

    if (!email) {
      toast(
        <button
          onClick={() => {
            navigate("/forgot-password");
          }}
          className="rounded-lg bg-blue-600 px-3.5 py-1 text-blue-50 shadow-lg hover:bg-blue-500 hover:shadow-blue-500/40 active:bg-blue-700"
        >
          Click me!
        </button>,
        {
          icon: "👉🏼 Provide email",
          position: "top-center",
          style: {
            borderRadius: "10px",
            background: "rgba(51.41, 51.41, 51.41, 0.78)",
            color: "#fff",
          },
        },
      );
    }

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
