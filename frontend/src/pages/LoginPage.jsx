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
