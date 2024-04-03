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
        toast.error(data.error, {
          position: "top-center",
          style: {
            borderRadius: "10px",
            background: "rgba(51.41, 51.41, 51.41, 0.78)",
            color: "#fff",
          },
        });
      } else {
        setData({});
        // store token in local storage
        localStorage.setItem("token", data.token);

        toast.success("Successfully logged in!", {
          position: "top-center",
          style: {
            borderRadius: "10px",
            background: "rgba(51.41, 51.41, 51.41, 0.78)",
            color: "#fff",
          },
        });
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("An error occured. Please try again later.", {
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "rgba(51.41, 51.41, 51.41, 0.78)",
          color: "#fff",
        },
      });
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

      <h3 className="cursor-pointer py-5 text-right text-[13px] underline underline-offset-1">
        <a href="/forgot-password">Forgot Password?</a>
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
