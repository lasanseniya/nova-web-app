import React, { useState } from "react";

function MyNotes() {
  const [activeTab, setActiveTab] = useState("styled-profile");
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const [buttons, setButtons] = useState([]); //array to store buttons
  
  const handleButtonClick = () => {
    const date = new Date().toLocaleDateString();
    const buttonName = `Untitled Note ${buttons.length + 1}`; //generate name of the note
    setButtons(prevButtons => [
      ...prevButtons,
      { name: buttonName, date: date, id: Math.random().toString() },
    ]); 
  };

  const handleDeleteButtonClick = (deleteButtonId) => {
    setButtons(prevButtons => prevButtons.filter((button) => button.id !== deleteButtonId));
  };

    const handleNameClick = (buttonId) => {
   setActiveTab("styled-tab");
   console.log(`Clicked button name with ID: ${buttonId}`);
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
                <div className="w-full h-[calc(88vh-5rem)] bg-white mx-auto pr-10 pl-10 p-3 rounded-lg overflow-scroll">
            <div className="flex justify-end items-center">
              <span className="mr-4">{}</span>
              <button className="bg-slate-300 hover:bg-slate-400 text-black font-bold py-2 px-4 rounded focus:outline-none w-800" onClick={handleButtonClick}>Create New Note</button>
            </div>

  
            {buttons.slice().reverse().map((button) => (
              <div className="flex justify-between items-center bg-slate-100 text-black py-2 px-4 rounded focus:outline-none shadow-md w-full mb-5" key={button.id}>
                <button className="text-black py-1 px-2 rounded focus:outline-none bg-slate-100 hover:bg-slate-200 w-full text-xs lg:text-base" onClick={() => handleNameClick(button.id)}>
                  <span className="flex flex-col lg:flex-row">
                    <span className="mr-12">{button.name}</span>
                    <span className="text-xs lg:text-base mr-12">{button.date}</span>
                  </span>
                </button>
  
                <button className="text-black hover:bg-red-100 py-1 px-2 rounded focus:outline-none shadow-md bg-slate-200" onClick={() => handleDeleteButtonClick(button.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              </div>
            ))}
</div>
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
