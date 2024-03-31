// import parse from "html-react-parser";
import { toast } from "react-hot-toast";
// import axios from "axios";
import { useState } from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import parse from "html-react-parser";

import PropTypes from "prop-types";

function NoteViewer({
  structuredNote,
  cueQuestions,
  summary,
  selectedNoteId,
  title,
}) {
  // Parse the structured note, summary, and questions to display the HTML content
  const structuredNoteWithStyles = parse(structuredNote);
  const questionsWithStyles = parse(cueQuestions);
  const summaryWithStyles = parse(summary);

  // State to hold the edited note values
  const [editedStructuredNote, setEditedStructuredNote] =
    useState(structuredNote);
  const [editedcueQuestions, setEditedCueQuestions] = useState(cueQuestions);
  const [editedSummary, setEditedSummary] = useState(summary);
  const [editedTitle, setEditedTitle] = useState(title);

  // Function to handle saving the note to mongoDB
  const handleSaveNote = async () => {
    const token = localStorage.getItem("token");

    const { data } = await axios.put(
      "/api/notes/" + selectedNoteId,
      {
        structuredNote: editedStructuredNote
          ? editedStructuredNote
          : structuredNote,
        summary: editedSummary ? editedSummary : summary,
        cueQuestions: editedcueQuestions ? editedcueQuestions : cueQuestions,
        title: editedTitle ? editedTitle : title,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (data.error) {
      toast.error(data.error);
    } else {
      // Display the success message on a toast
      toast.success("Successfully Updated the note. 🫡");
    }
  };
  return (
    <>
      <div className="mr-12 mt-3 flex items-center justify-end">
        <input
          type="text"
          placeholder="Enter note title..."
          className="mr-2 rounded-md p-1 text-black"
          // Set the title value to the input value
          value={editedTitle ? editedTitle : title}
          // Update the title value when the input box's value changes
          onChange={(e) => setEditedTitle(e.target.value)}
        />

        {/* Button to save the note */}
        <button
          onClick={handleSaveNote}
          className="top-1 rounded-lg bg-blue-600 px-3.5 py-1 shadow-lg hover:bg-blue-500 hover:shadow-blue-500/40"
        >
          Save Note
        </button>
      </div>
      <div className="flex-1 overflow-y-scroll p-6 sm:grid sm:grid-cols-3 sm:grid-rows-10 sm:gap-4">
        <div
          contentEditable
          onInput={(e) => {
            setEditedCueQuestions(e.target.textContent);
          }}
          className="col-span-1 row-span-10 overflow-y-scroll rounded-md border border-dashed bg-[#F5F7F8] p-2 text-slate-900"
        >
          <div
            className="text-center text-2xl font-bold leading-loose text-slate-900"
            contentEditable="false"
          >
            Questions
          </div>
          {questionsWithStyles}
        </div>
        <div
          contentEditable
          onInput={(e) => {
            setEditedStructuredNote(e.target.textContent);
          }}
          className="col-span-2 row-span-7 overflow-y-scroll rounded-md border border-dashed bg-[#F5F7F8] p-2 text-slate-900"
        >
          <div
            className="text-center text-2xl font-bold leading-loose text-slate-900"
            contentEditable="false"
          >
            Structured Note
          </div>
          {structuredNoteWithStyles}
        </div>
        <div
          contentEditable
          onInput={(e) => {
            setEditedSummary(e.target.textContent);
          }}
          className="col-span-2 col-start-2 row-span-3 row-start-8 overflow-y-scroll rounded-md border  border-dashed bg-[#F5F7F8] p-2 text-slate-900"
        >
          <div
            className="text-center text-2xl font-bold leading-loose text-slate-900"
            contentEditable="false"
          >
            Summary
          </div>
          {summaryWithStyles}
        </div>
      </div>
    </>
  );
}

NoteViewer.propTypes = {
  structuredNote: PropTypes.string.isRequired,
  cueQuestions: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  selectedNoteId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NoteViewer;
