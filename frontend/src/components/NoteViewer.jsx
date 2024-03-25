// import parse from "html-react-parser";
// import { toast } from "react-hot-toast";
// import axios from "axios";
// import { useState } from "react";
// import PropTypes from "prop-types";

function NoteViewer() {
  return (
    <>
      <div className="mr-12 mt-3 flex items-center justify-end">
        <input
          type="text"
          placeholder="Enter note title..."
          className="mr-2 rounded-md p-1 text-black"
          // Set the title value to the input value
          //   value={title}
          // Update the title value when the input box's value changes
          //   onChange={(e) => setTitle(e.target.value)}
        />

        {/* Button to save the note */}
        <button
          //   onClick={handleSaveNote}
          className="top-1 rounded-lg bg-blue-600 px-3.5 py-1 shadow-lg hover:bg-blue-500 hover:shadow-blue-500/40"
        >
          Save Note
        </button>
      </div>
      <div className="flex-1 overflow-y-scroll p-6 sm:grid sm:grid-cols-3 sm:grid-rows-10 sm:gap-4">
        <div
          contentEditable
          className="col-span-1 row-span-10 overflow-y-scroll rounded-md border border-dashed bg-[#F5F7F8] p-2 text-slate-900"
        >
          <div className="text-center text-2xl font-bold leading-loose text-slate-900">
            Questions
          </div>
          {/* {questionsWithStyles} */}
        </div>
        <div
          contentEditable
          className="col-span-2 row-span-7 overflow-y-scroll rounded-md border border-dashed bg-[#F5F7F8] p-2 text-slate-900"
        >
          <div className="text-center text-2xl font-bold leading-loose text-slate-900">
            Structured Note
          </div>
          {/* {structuredNoteWithStyles} */}
        </div>
        <div
          contentEditable
          className="col-span-2 col-start-2 row-span-3 row-start-8 overflow-y-scroll rounded-md border  border-dashed bg-[#F5F7F8] p-2 text-slate-900"
        >
          <div className="text-center text-2xl font-bold leading-loose text-slate-900">
            Summary
          </div>
          {/* {summaryWithStyles} */}
        </div>
      </div>
    </>
  );
}

export default NoteViewer;
