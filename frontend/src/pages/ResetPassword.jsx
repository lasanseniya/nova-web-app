import { useState } from "react";
import InputBox from "../components/forms/InputBox";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

function ResetPassword() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    password: "",
  });

  const { id, token } = useParams();

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    const res = await axios.post(`/reset-password/${id}/${token}`, data);

    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success("Password reset successful!");
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
        <button type="submit">All set!</button>
      </form>
    </div>
  );
}

export default ResetPassword;
