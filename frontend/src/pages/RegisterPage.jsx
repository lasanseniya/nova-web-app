import ImageCard from "../components/forms/ImageCard"
import RegisterForm from "../components/forms/RegisterForm";

function RegisterPage() {
  return (
    <div className="flex py-16 bg-gradient-to-b from-slate-900 via-indigo-900 to-slate-900 h-screen justify-center items-center">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="hidden lg:block lg:w-1/2 bg-cover bg-[#01142A]">
          <ImageCard></ImageCard>

          <p className="text-white text-center text-6xl font-semibold">NOVA</p>
          <p className="text-slate-400 text-center text-sm font-normal">
            Your note generating partner
          </p>
        </div>
        <div className="w-full p-8 lg:w-1/2 ">
          <h2 className=" text-3xl font-semibold text-gray-700 text-center mt-7 ">
            SignUP
          </h2>
          <RegisterForm />

        </div>
      </div>
    </div>
  )
}

export default RegisterPage