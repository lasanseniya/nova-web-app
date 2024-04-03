import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const CenteredForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleForgotPwd = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/forgot-password", {
        email,
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
        toast.success("OTP has been sent 📨", {
          position: "top-center",
          style: {
            borderRadius: "10px",
            background: "rgba(51.41, 51.41, 51.41, 0.78)",
            color: "#fff",
          },
        });
        localStorage.setItem("email", email);
        navigate("/OTP-page");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.", {
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
    <div className="min-h-screen items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2a4472] via-[#031f54] to-[#000714]">
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-xl bg-blue-200 p-12"
        style={{
          width: "90%",
          maxWidth: "410px",
          height: "340px",
          margin: "20px auto",
        }}
      >
        <h1 className="mb-4 text-center text-2xl font-bold">
          OTP verification
        </h1>
        <p className="mb-4 text-center">
          A 6-digit verification code will be sent to the provided email below.
        </p>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="User Name/ Email"
          className="mb-4 mt-4 w-full rounded-md border border-gray-300 px-3 py-2"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full rounded-md bg-black px-4 py-2 text-white"
          onClick={handleForgotPwd}
        >
          Request OTP
        </button>
      </div>
    </div>
  );
};

export default CenteredForm;
