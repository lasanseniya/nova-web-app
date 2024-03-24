import React, { useState } from "react";

function MyNotes() {
  const [activeTab, setActiveTab] = useState("styled-profile");
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="sm:ml-64">
      <div className="mt-20 h-[calc(100vh-5rem)] border-2 border-dashed border-gray-200 bg-gradient-to-b from-slate-900 via-slate-900 to-sky-950 p-4 text-white dark:border-gray-700">
        <div className="flex-row border-2 border-dashed border-blue-300 h-full">
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="default-styled-tab"
              role="tablist"
            >
              <li className="me-2" role="presentation">
                <button
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${
                    activeTab === "styled-profile" &&
                    "text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
                  }`}
                  id="home"
                  data-tabs-target="#styled-home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected={activeTab === "styled-home"}
                  onClick={() => handleTabClick("styled-home")}
                >
                  Home
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 ${
                    activeTab === "styled-dashboard" &&
                    "border-gray-600 dark:border-gray-700"
                  }`}
                  id="Tab"
                  data-tabs-target="#styled-Tab"
                  type="button"
                  role="tab"
                  aria-controls="Tab"
                  aria-selected={activeTab === "styled-tab"}
                  onClick={() => handleTabClick("styled-tab")}
                >
                  Tab
                </button>
              </li>
            </ul>
            <div id="default-styled-tab-content">
              <div
                className={`${activeTab === "styled-home" ? "" : "hidden"} p-4`}
                id="styled-home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <strong className="font-medium text-gray-800 dark:text-white">
                
                </strong>
              </div>
              <div
                className={`${activeTab === "styled-tab" ? "" : "hidden"} p-4 overflow-y-scroll`}
                id="styled-tab"
                role="tabpanel"
                aria-labelledby="tab"
              >
                <strong className="font-medium text-gray-800 dark:text-white">
                  
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyNotes;
