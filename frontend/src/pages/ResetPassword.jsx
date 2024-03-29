import { useState } from "react";
import InputBox from "../components/forms/InputBox";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    password: "",
  });

  const handlePasswordReset = (e) => {
    e.preventDefault();
    console.log("Reset Password");
    navigate("/login");
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
              email: e.target.value,
            })
          }
        ></InputBox>
        <button type="submit">All set!</button>
      </form>
    </div>
  );
}

export default ResetPassword;
