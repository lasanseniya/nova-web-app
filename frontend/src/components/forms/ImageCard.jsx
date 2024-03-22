import IMAGE from "../../assets/nova.png";

function ImageCard() {
    return (
      
    <div className="hidden bg-[#01142A] bg-cover lg:block lg:w-1/2">
        <div className="flex items-center justify-center h-2/3">
          <img src={IMAGE} className="w-3/4" alt="Nova Logo" />
        </div>

      <p className="text-center text-6xl font-semibold text-white">NOVA</p>
      <p className="text-center text-sm font-normal text-slate-400">
        Your note generating partner
      </p>
    </div>
    );
  }

export default ImageCard