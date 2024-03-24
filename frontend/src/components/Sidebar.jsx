import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { VscAdd } from "react-icons/vsc";
import { TfiFiles } from "react-icons/tfi";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

function Sidebar() {
  const [isVisible, setIsVisible] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    axios.post("/logout");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <aside
      id="logo-sidebar"
      className={`fixed left-0 top-0 z-10 h-screen w-64 -translate-x-full bg-gradient-to-b from-[rgb(1,20,42)] from-20% to-[#00387B] pt-60 transition-transform sm:translate-x-0
      ${isVisible ? "translate-x-0" : "-translate-x-full"} 
      `}
      aria-label="Sidebar"
    >
      {/* Sidebar content */}
      <div className="h-full overflow-y-auto px-3 pb-4">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to=""
              className="items-right relative left-3 mt-4 flex rounded-l-lg p-2 py-4 text-[#F3F3F3]  hover:bg-gray-600 focus:bg-[#01142A] focus:text-[#0084FF] focus:drop-shadow-[1px_0_8px_rgba(0,132,255,0.2)]"
            >
              <div className="float-end ms-3 flex flex-row justify-between gap-5">
                {<VscAdd className="mt-1" />}
                New Note
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="my-Notes"
              className="items-right group relative left-3 mt-4 flex rounded-l-lg p-2 py-4 text-[#F3F3F3] hover:bg-gray-700 focus:bg-[#01142A] focus:text-[#0084FF] focus:drop-shadow-[1px_0_8px_rgba(0,132,255,0.2)]"
            >
              <div className="float-end ms-3 flex flex-row justify-between gap-5">
                {<TfiFiles className="mt-1" />}
                My Notes
              </div>
            </Link>
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className="rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
        >
          Logout
        </button>
      </div>

      <div
        className={`absolute left-56 top-1/2 cursor-pointer rounded-full bg-[#040D12] p-4 text-white  sm:hidden
        ${isVisible ? "ml-0" : "ml-7"}`}
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        <div>{isVisible ? <SlArrowLeft /> : <SlArrowRight />}</div>
      </div>
    </aside>
  );
}

export default Sidebar;
