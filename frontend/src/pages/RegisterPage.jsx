import ImageCard from "../components/forms/ImageCard";
import RegisterForm from "../components/forms/RegisterForm";

function RegisterPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2a4472] via-[#031f54] to-[#000714] py-16">
      <div className="mx-auto flex max-w-sm overflow-hidden rounded-lg bg-white shadow-lg lg:max-w-4xl">
          <ImageCard></ImageCard>
        <div className="w-full p-8 lg:w-1/2 ">
          <h2 className=" mt-7 text-center text-3xl font-semibold text-gray-700 ">
            SignUP
          </h2>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
