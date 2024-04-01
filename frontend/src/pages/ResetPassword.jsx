import { useState } from "react";
import InputBox from "../components/forms/InputBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import IMAGE from "../assets/robot.png";

function ImageCard() {
  return (
    <div className="flex items-center justify-center mt-[-60px] ml-[80px]">
      <img src={IMAGE} className="max-w-full h-[150px] ml-[140px] mb-[40px]" alt="logo Logo" />
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
      toast.error("Please fill in both fields!");
      return;
    }

    if (password !== conf_pwd) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const resetPasswordResponse = await axios.post("/reset-password", {
        email,
        password,
      });

      if (resetPasswordResponse.data.error) {
        toast.error(resetPasswordResponse.data.error);
        return;
      }

      // Remove the OTP from the DB
      await axios.delete(`/delete-otp/${email}`);

      toast.success("Password reset successfully!");
      localStorage.removeItem("email");
      localStorage.removeItem("verified");
      navigate("/login");
    } catch (error) {
      toast.error("An error occurred");
      console.error("Error:", error);
    }
  };

  return (  
    <div className="flex py-8 md:py-16 bg-gradient-to-b from-slate-900 via-indigo-900 to-slate-900 h-screen justify-center items-center">
  <div className="flex flex-col justify-center items-center bg-gray-400 rounded-lg w-full max-w-[600px] md:w-[450px] h-auto md:h-[500px] p-4 md:p-8">
    <div className="bg-blue-400 text-sm text-black w-[220px] md:w-[200px] h-[50px] md:h-auto rounded-md mt-[50px] md:mt-[100px] mr-0 md:mr-[150px] text-center">
      Please enter your new <br/> password below and confirm
    </div>
    <ImageCard />

    <form className="flex flex-col items-center text-sm w-full md:w-[300px] mb-4 md:mb-[100px]" onSubmit={handlePasswordReset}>
      <InputBox
        class="bg-white text-gray-900 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full mb-4"
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
      <br/>
      <InputBox 
        class="bg-white text-gray-900 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 w-full mb-4"
        id="conf_pwd"
        placeholder="Enter confirm password"
        name="confirm"
        type="password"
        value={data.conf_pwd}
        onChange={(e) => setData({ ...data, conf_pwd: e.target.value })}
      />
      <br/>
      <button className="bg-black hover:bg-black text-white font-bold py-2 px-6 w-full rounded focus:outline-none focus:shadow-outline text-xs" type="submit">
        Change Password
      </button>
    </form>
  </div>
</div>
           
  
  );
}

export default ResetPassword;


