function NavBar({ userName }) {
  return (
    <div className="z-10 h-screen bg-[rgb(1,20,42)] text-[#f3f3f3] ">
      <div className="relative grid grid-cols-2 pb-6 border-b top-5 font-main">
        <div className="relative ml-20 text-sm sm:text-2xl">Nova</div>
        <div className="flex justify-center text-sm bg-items-center sm:text-2xl">Welcome, {userName}!</div>
      </div>
    </div>
  );
}

export default NavBar;
