function NavBar({ userName }) {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      {/* Navbar content */}
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <span className="self-center whitespace-nowrap text-xl font-semibold sm:text-2xl dark:text-white">
              Nova
            </span>
          </div>

          <div className="flex items-center">
            <div className="ms-3 flex items-center">
              <span className=" text-neutral-200"> Welcome {userName}! </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
