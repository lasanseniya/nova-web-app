import InputBox from "./InputBox";

function LoginForm() {
    const handleUserLogin = (e) => {
      e.preventDefault();
    };
    return (
      <form onSubmit={handleUserLogin}>
        <div className="mt-6">
          <InputBox
            id="username"
            placeholder="username/email..."
            name="username"
            type="email"
          ></InputBox>
        </div>
        <div className="mt-4">
          <InputBox
            id="password"
            placeholder="password.."
            name="password"
            type="password"
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