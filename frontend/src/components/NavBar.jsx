import PropTypes from "prop-types";

function NavBar({ userName }) {
  return (
    <div className="fixed top-0 z-50 w-full">
      <div className=" h-20 bg-[rgb(1,20,42)] text-[#f3f3f3] ">
        <div className="relative top-6 grid grid-cols-2 border-b pb-7 font-main sm:top-5">
          <div className="relative ml-20 text-sm sm:text-2xl">Nova</div>
          <div className="bg-items-center flex justify-center text-sm sm:text-2xl">
            Welcome, {userName} !
          </div>
        </div>
      </div>
    </div>
  );
}

// Define the prop types for username
NavBar.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default NavBar;
