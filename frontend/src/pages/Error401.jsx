import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/stop_img_401.png";
import { PropagateLoader } from "react-spinners";

function Error401() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/");
    }, 4000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <div className="h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#002467] via-[#001438] to-[#000714]">
      <div className="flex h-screen items-center justify-center">
        <div className="w-96">
          <div className="text-center">
            <h1 className=" text-2xl font-normal text-white sm:text-4xl">
              Oops! access denied!
            </h1>
            <p className="sm:text-1xl text-base text-blue-300">
              ERROR 401: Unauthorized
            </p>
          </div>
          <div className="mt-5 flex justify-center">
            <img src={Image} alt="" width={200} />
          </div>
          <div className=" mt-10 flex justify-center">
            <PropagateLoader color="#9BB0C1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error401;
