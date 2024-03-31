import { useNavigate } from "react-router-dom";
import InputBox from "../components/forms/InputBox";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function ForgotPassword() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
  });

  const handleForgotPwd = async (e) => {
    e.preventDefault();
    const { email } = data;

    try {
      const { data } = await axios.post("/forgot-password", {
        email,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("OTP has been sent 📨");
        localStorage.setItem("email", email);
        navigate("/OTP-page");
      }
    } catch (error) {
      toast.error("An error occured. Please try again later.");
    }
  };

  return (
    <div>
      <h2> ForgotPassword </h2>
      <form onSubmit={handleForgotPwd}>
        <InputBox
          id="email"
          placeholder="Enter your Email"
          name="email"
          type="email"
          value={data.email}
          onChange={(e) =>
            setData({
              ...data,
              email: e.target.value,
            })
          }
        ></InputBox>
        <button type="submit">Get OTP</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
