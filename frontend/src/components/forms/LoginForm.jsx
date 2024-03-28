import InputBox from "./InputBox";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleUserLogin = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        // store token in local storage
        localStorage.setItem("token", data.token);

        toast.success("Successfully logged in!");
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("An error occured. Please try again later.");
    }
  };

  const handleForgotPwd = async () => {
    // Get email from state data
    const { email } = data;

    try {
      // send the email to backend's endpoint
      // catch the response in data
      const { data } = await axios.post("/forgot-password", {
        email,
      });

      // if there is an error, show the error message
      if (data.error) {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error("An error occured. Please try again later.");
    }
  };
  return (
    <form onSubmit={handleUserLogin}>
      <div className="mt-6">
        <InputBox
          id="email"
          placeholder="Enter Email"
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
      </div>
      <div className="mt-4">
        <InputBox
          id="password"
          placeholder="Enter Password"
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
      </div>

      <h3
        onClick={handleForgotPwd}
        className="cursor-pointer py-5 text-right text-[13px] underline underline-offset-1"
      >
        Forgot Password?
      </h3>

      <div>
        <button
          type="submit"
          className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-gray-100 hover:bg-blue-400"
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
