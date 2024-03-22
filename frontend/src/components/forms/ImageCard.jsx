import IMAGE from "../../assets/nova.png";

function ImageCard() {
    return (
      <div className="flex h-2/3">
        <img src={IMAGE} className="w-3/4" alt="Nova Logo" />
      </div>
    );
  }

export default ImageCard