function NavBar({ userName }) {
  return (
    <div className="fixed top-0 z-50 w-full">
      <div className=" h-20 bg-[rgb(1,20,42)] text-[#f3f3f3] ">
        <div className="relative grid grid-cols-2 border-b pb-7 top-6 sm:top-5 font-main">
          <div className="relative ml-20 text-sm sm:text-2xl">Nova</div>
          <div className="flex justify-center text-sm bg-items-center sm:text-2xl">
            Welcome, {userName}!
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;