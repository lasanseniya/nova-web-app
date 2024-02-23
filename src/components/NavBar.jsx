function NavBar({ userName }) {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      {/* Navbar content */}
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
              Nova
            </span>
          </div>

          <div className="flex items-center">
            <div className="flex items-center ms-3">
              <span className=" text-neutral-200"> Welcome {userName}! </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
