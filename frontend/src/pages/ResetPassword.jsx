import { useState } from "react";
import InputBox from "../components/forms/InputBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

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

    if (password !== conf_pwd) {
      toast.error("Passwords do not match");
      return;
    }

    const response = await axios.put("/reset-password", {
      email,
      password,
    });

    if (response.data.error) {
      toast.error(response.data.error);
    } else {
      // remove the OTP from the DB
      const response = await axios.delete("/delete-otp", {
        data: { email },
      });

      if (response.data.error) {
        toast.error(response.data.error);
      }

      toast.success("Password reset successfully!");
      localStorage.removeItem("email");
      localStorage.removeItem("verified");
      navigate("/login");
    }
  };

  return (
    <div>
      <h2> Reset password </h2>
      <form onSubmit={handlePasswordReset}>
        <InputBox
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
        <InputBox
          id="conf_pwd"
          placeholder="Enter confirm password"
          name="confirm"
          type="password"
          value={data.conf_pwd}
          onChange={(e) => setData({ ...data, conf_pwd: e.target.value })}
        />
        <button type="submit">All set!</button>
      </form>
    </div>
  );
}

export default ResetPassword;
