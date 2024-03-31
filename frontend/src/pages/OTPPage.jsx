import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import IMAGE from "../assets/robot.png";

function OTPPage() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: localStorage.getItem("email"),
    otp: "",
  });

  // Ref to store references to all input elements
  const inputRefs = useRef([]);

  useEffect(() => {
    // Populate the inputRefs array with references to all input elements
    inputRefs.current = inputRefs.current.slice(0, 6); // Limit to 6 inputs
  }, []);

  // Function to focus on the next input field
  const focusNextInput = (index) => {
    if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Function to focus on the previous input field
  const focusPrevInput = (index) => {
    if (index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

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
          icon: "👉🏼 Provide your email",
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
    <div className="mx-auto flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2a4472] via-[#031f54] to-[#000714]">
      <div className="mb-8 flex flex-col items-center rounded-lg bg-blue-300 px-4 py-3 shadow-md sm:flex-col sm:justify-center">
        <p className="no-wrap text-center text-xs font-semibold text-black sm:text-sm">
          We`ve sent an OTP to {data.email}
        </p>

        <button
          onClick={handleResendOtp}
          className="mt-2 flex items-center rounded-lg bg-black p-2 text-xs tracking-wider text-white sm:text-xs"
        >
          Resend OTP
          <FaPaperPlane className="ml-1" />
        </button>
      </div>

      <img
        className="mx-auto mb-8 h-48 w-48 rounded-lg md:h-full md:w-48"
        src={IMAGE}
        alt="Robot"
      />
      <div className="inputs flex flex-wrap gap-4 sm:flex-nowrap">
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            ref={(element) => (inputRefs.current[index] = element)}
            className="h-10 w-10 rounded-lg border bg-white px-2 py-2 text-center text-black sm:h-16 sm:w-16"
            type="text"
            maxLength={1}
            value={data.otp[index] || ""}
            onChange={(e) => {
              const newOtp = [...data.otp];
              newOtp[index] = e.target.value;
              setData({
                ...data,
                otp: newOtp.join(""),
              });

              // Move focus to the next input
              if (
                e.target.value !== "" &&
                index < inputRefs.current.length - 1
              ) {
                focusNextInput(index);
              }

              // Move focus to the previous input on backspace
              if (
                e.target.value === "" &&
                e.nativeEvent.inputType === "deleteContentBackward"
              ) {
                focusPrevInput(index);
              }
            }}
          />
        ))}
      </div>
      <button
        onClick={handleOTP}
        className="mt-9 flex items-center rounded-lg border-2 border-blue-500 bg-transparent p-2 text-xs tracking-wider text-white sm:text-sm"
      >
        Verify OTP
      </button>
    </div>
  );
}

export default OTPPage;
