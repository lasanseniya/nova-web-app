import { useState } from "react";
import InputBox from "../components/forms/InputBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import IMAGE from "../assets/robot.png";

function ImageCard() {
  return (
    <div className="ml-[80px] mt-[-60px] flex items-center justify-center">
      <img
        src={IMAGE}
        className="mb-[40px] ml-[140px] h-[150px] max-w-full"
        alt="logo Logo"
      />
    </div>
  );
}

function ResetPassword() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: localStorage.getItem("email"),
    password: "",
    conf_pwd: "",
  });

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    const { email, password, conf_pwd } = data;

    if (password == "" || conf_pwd == "") {
      toast.error("Please fill in both fields!", {
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "rgba(51.41, 51.41, 51.41, 0.78)",
          color: "#fff",
        },
      });
      return;
    }

    if (password !== conf_pwd) {
      toast.error("Passwords do not match", {
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "rgba(51.41, 51.41, 51.41, 0.78)",
          color: "#fff",
        },
      });
      return;
    }

    try {
      const resetPasswordResponse = await axios.post("/reset-password", {
        email,
        password,
      });

      if (resetPasswordResponse.data.error) {
        toast.error(resetPasswordResponse.data.error, {
          position: "top-center",
          style: {
            borderRadius: "10px",
            background: "rgba(51.41, 51.41, 51.41, 0.78)",
            color: "#fff",
          },
        });
        return;
      }

      // Remove the OTP from the DB
      await axios.delete(`/delete-otp/${email}`);

      toast.success("Password reset successfully!", {
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "rgba(51.41, 51.41, 51.41, 0.78)",
          color: "#fff",
        },
      });
      localStorage.removeItem("email");
      localStorage.removeItem("verified");
      navigate("/login");
    } catch (error) {
      toast.error("An error occurred", {
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "rgba(51.41, 51.41, 51.41, 0.78)",
          color: "#fff",
        },
      });
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-b from-slate-900 via-indigo-900 to-slate-900 py-8 md:py-16">
      <div className="flex h-auto w-full max-w-[600px] flex-col items-center justify-center rounded-lg bg-gray-400 p-4 md:h-[500px] md:w-[450px] md:p-8">
        <div className="mr-0 mt-[50px] h-[50px] w-[220px] rounded-md bg-blue-400 text-center text-sm text-black md:mr-[150px] md:mt-[100px] md:h-auto md:w-[200px]">
          Please enter your new <br /> password below and confirm
        </div>
        <ImageCard />

        <form
          className="mb-4 flex w-full flex-col items-center text-sm md:mb-[100px] md:w-[300px]"
          onSubmit={handlePasswordReset}
        >
          <InputBox
            class="focus:shadow-outline mb-4 w-full rounded border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:outline-none"
            id="password"
            placeholder="Enter your new password"
            name="password"
            type="password"
            value={data.password}
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
          ></InputBox>
          <br />
          <InputBox
            class="focus:shadow-outline mb-4 w-full rounded border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:outline-none"
            id="conf_pwd"
            placeholder="Enter confirm password"
            name="confirm"
            type="password"
            value={data.conf_pwd}
            onChange={(e) => setData({ ...data, conf_pwd: e.target.value })}
          />
          <br />
          <button
            className="focus:shadow-outline w-full rounded bg-black px-6 py-2 text-xs font-bold text-white hover:bg-black focus:outline-none"
            type="submit"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
