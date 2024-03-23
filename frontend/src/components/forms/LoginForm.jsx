import InputBox from "./InputBox";
import axios from "axios";
import {toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import { useState } from "react";

function LoginForm() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

    const handleUserLogin = async (e) => {
      e.preventDefault();
      const {email, password} = data;

      try {
        const {data} = await axios.post("/login", {
          email, 
          password
        });
        if (data.error) {
          toast.error(data.error);
        } else {
          setData({});
          toast.success("Successfully logged in!");
          window.location.href = "/dashboard";
        }
      } catch (error) {
        toast.error("An error occurd. Please try again later.");
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
            value= {data.email}
            onChange={(e) => setData({
              ...data, email: e.target.value
            })}
          ></InputBox>
        </div>
        <div className="mt-4">
          <InputBox
            id="password"
            placeholder="Enter Password"
            name="password"
            type="password"
            value= {data.password}
            onChange={(e) => setData({
              ...data, password: e.target.value
            })}
          ></InputBox>
        </div>
  
        <h3 className="text-[13px] text-right py-5 underline underline-offset-1 cursor-pointer">
          Forgot Password?
        </h3>
  
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-gray-100 font-bold py-2 px-4 w-full rounded hover:bg-blue-400"
          >
            Login
          </button>
        </div>
      </form>
    );
  }

export default LoginForm