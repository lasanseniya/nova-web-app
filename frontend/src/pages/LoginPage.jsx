import LoginForm from "../components/forms/LoginForm";
import ImageCard from "../components/forms/ImageCard";

function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2a4472] via-[#031f54] to-[#000714] py-16">
      <div className="mx-auto flex max-w-sm overflow-hidden rounded-lg bg-white shadow-lg lg:max-w-4xl">
        <ImageCard></ImageCard>

        <div className="w-full p-8 lg:w-1/2">
          <h2 className=" mt-7 text-center text-3xl font-semibold text-gray-700">
            Login
          </h2>

          <LoginForm></LoginForm>

          <div className="mt-5 flex items-center justify-between">
            <span className="w-1/5 border-b lg:w-1/4"></span>
            <p className="text-center text-xs uppercase text-gray-500">OR</p>
            <span className="w-1/5 border-b lg:w-1/4"></span>
          </div>

          <button className="mt-5 flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 text-sm">
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25px"
              height="25px"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Continue with Google
          </button>

          <div className="mt-7 flex w-full items-center justify-center text-xs">
            <p className="mb-6 px-3">
              <a href="/register">Don`t have an account? Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
