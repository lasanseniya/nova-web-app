import InputBox from "./InputBox";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();
  /*
       Create a useState hook to create and manage the form data
       data -> holds the data entered by the user. Each property is
               Initialized to an empty string " ".
    
       setData -> function to update the data object
     */
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    conf_pwd: "",
  });
  /* e -> associated event object with the form submission
     e.preventDefault() -> prevents the default form submission behavior
     
    
     */
  const handleUserRegister = async (e) => {
    /* 
       Prevent the default form submission behavior
       which is to reload the page and clear the form.
       This is a coding best practice.
     */
    e.preventDefault();
    const { username, email, password, conf_pwd } = data;

    if (password !== conf_pwd) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const { data } = await axios.post("/register", {
        username,
        email,
        password,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("User registered successfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleUserRegister}>
      <div className="mt-6">
        <InputBox
          id="username"
          placeholder="Enter username"
          name="username"
          type="text"
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
      </div>

      <div className="mt-6">
        <InputBox
          id="email"
          placeholder="Enter email address"
          name="email"
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
      </div>

      <div className="mt-6">
        <InputBox
          id="pwd"
          placeholder="Enter password"
          name="password"
          type="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
      </div>

      <div className="mt-6">
        <InputBox
          id="conf_pwd"
          placeholder="Enter confirm password"
          name="confirm"
          type="password"
          value={data.conf_pwd}
          onChange={(e) => setData({ ...data, conf_pwd: e.target.value })}
        />
      </div>
      <h3 className="cursor-pointer py-5 text-right text-[13px] underline underline-offset-1">
        <a href="/">Already have an account?</a>
      </h3>

      <div>
        <button
          type="submit"
          className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-gray-100 hover:bg-blue-400"
        >
          SignUp
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
