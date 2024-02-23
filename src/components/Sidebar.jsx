import React, { useState } from "react";

// Importing react-router-dom
import { Link } from "react-router-dom";

// Importing icons
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { VscAdd } from "react-icons/vsc";
import { TfiFiles } from "react-icons/tfi";

function Sidebar() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 w-64 h-screen transition-transform -translate-x-full pt-60 sm:translate-x-0 bg-gradient-to-b from-[rgb(1,20,42)] from-20% to-[#00387B]
      ${isVisible ? "translate-x-0" : "-translate-x-full"} 
      `}
      aria-label="Sidebar"
    >
      {/* Sidebar content */}
      <div className="h-full px-3 pb-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="NewNote"
              className="flex items-right p-2 mt-4 py-4 text-[#F3F3F3] rounded-l-lg hover:bg-gray-600 focus:drop-shadow-[1px_0_8px_rgba(0,132,255,0.2)]  focus:bg-[#01142A] focus:text-[#0084FF] relative left-3"
            >
              <div className="flex flex-row justify-between gap-5 ms-3 float-end">
                {<VscAdd className="mt-1" />}
                New Note
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="MyNotes"
              className="flex items-right p-2 mt-4 py-4 text-[#F3F3F3] rounded-l-lg hover:bg-gray-700 group focus:drop-shadow-[1px_0_8px_rgba(0,132,255,0.2)] focus:bg-[#01142A] focus:text-[#0084FF] relative left-3"
            >
              <div className="flex flex-row justify-between gap-5 ms-3 float-end">
                {<TfiFiles className="mt-1" />}
                My Notes
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={`absolute text-white left-56 top-1/2 bg-[#040D12] p-4 rounded-full cursor-pointer  sm:hidden
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
