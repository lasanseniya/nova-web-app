import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/stop_img_401.png";
import { RotateLoader } from "react-spinners";

function Error401() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <div className="h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#002467] via-[#001438] to-[#000714]">
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-normal text-white">
            Oops! access denied!
          </h1>
          <p className=" text-blue-300">ERROR 401: Unauthorized</p>
        </div>
        <img src={Image} alt="" width={200} />
        <RotateLoader color={"#FFFFFF"} loading={true} size={15} />
      </div>
    </div>
  );
}

export default Error401;
