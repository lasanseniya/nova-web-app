import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function MyNotes() {
  const [activeTab, setActiveTab] = useState("styled-home");
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const [buttons, setButtons] = useState([]); //array to store buttons

  useEffect(() => {
    // Fetch notes from backend when component mounts and whenever buttons state changes
    const fetchNotes = async () => {
      try {
        const response = await axios.get("/api/notes");
        setButtons(response.data); // Assuming response.data is an array of notes
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes(); // Call the function
  }, [buttons]); // Run effect whenever buttons state changes to support dynamic updates on the frontend

  const handleNameClick = (buttonId) => {
    setActiveTab("styled-tab");
    console.log(`Clicked button name with ID: ${buttonId}`);
  };

  return (
    <div className="sm:ml-64">
      <div className="mt-20 h-[calc(100vh-5rem)] bg-gradient-to-b from-slate-900 via-slate-900 to-sky-950 p-4 text-white dark:border-gray-700">
        <div className="h-full flex-row overflow-y-scroll">
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul
              className="-mb-px flex flex-wrap text-center text-sm font-medium"
              id="default-styled-tab"
              role="tablist"
            >
              <li className="me-2" role="presentation">
                <button
                  className={`inline-block rounded-t-lg border-b-2 p-4 ${
                    activeTab === "styled-profile" &&
                    "border-purple-600 text-purple-600 hover:text-purple-600 dark:border-purple-500 dark:text-purple-500 dark:hover:text-purple-500"
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
                  className={`inline-block rounded-t-lg border-b-2 p-4 hover:border-gray-300 hover:text-gray-600 ${
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
                  {/* Note Storage */}
                  <div className="mx-auto h-[550px] w-full rounded-lg p-3 pl-10 pr-10">
                    {buttons
                      .slice()
                      .reverse()
                      .map((note) => (
                        // Note pill holding relevant information of each note
                        <div
                          className="mb-5 flex w-full items-center justify-between rounded bg-slate-100 px-4 py-2 text-black shadow-md focus:outline-none"
                          key={note._id}
                        >
                          <button
                            className="w-full rounded bg-slate-100 px-2 py-1 text-xs text-black hover:bg-slate-200 focus:outline-none lg:text-base"
                            onClick={() => handleNameClick(note.id)}
                          >
                            <span className="flex flex-col lg:flex-row">
                              <span className="mr-12">{note.createdAt}</span>
                              <span className="mr-12 text-xs lg:text-base">
                                {note.title}
                              </span>
                            </span>
                          </button>

                          <button
                            className="rounded bg-slate-200 px-2 py-1 text-black shadow-md hover:bg-red-100 focus:outline-none"
                            // onClick={}
                            // TODO: Implement delete functionality via backend endpoint
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-6 w-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      ))}
                  </div>
                </strong>
              </div>
              <div
                className={`${activeTab === "styled-tab" ? "" : "hidden"} overflow-y-scroll p-4`}
                id="styled-tab"
                role="tabpanel"
                aria-labelledby="tab"
              >
                <strong className="font-medium text-gray-800 dark:text-white"></strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyNotes;
