import parse from "html-react-parser";

import PropTypes from "prop-types";

function NoteContainer({ structuredNote = "", summary = "", questions = "" }) {
  const structuredNoteWithStyls = parse(structuredNote);
  const questionsWithStyles = parse(questions);
  const summaryWithStyles = parse(summary);
  return (
    <>
      <div className="flex-1 p-10 overflow-y-scroll sm:grid sm:grid-cols-3 sm:grid-rows-10 sm:gap-4">
        <div
          contentEditable
          className="col-span-1 row-span-10 overflow-y-scroll rounded-md border border-dashed bg-[#F5F7F8] p-2 text-slate-900"
        >
          <div className="text-2xl font-bold leading-loose text-center text-slate-900">
            Questions
          </div>
          {questionsWithStyles}
        </div>
        <div
          contentEditable
          className="col-span-2 row-span-7 overflow-y-scroll rounded-md border border-dashed bg-[#F5F7F8] p-2 text-slate-900"
        >
          <div className="text-2xl font-bold leading-loose text-center text-slate-900">
            Structured Note
          </div>
          {structuredNoteWithStyls}
        </div>
        <div
          contentEditable
          className="col-span-2 col-start-2 row-span-3 row-start-8 overflow-y-scroll rounded-md border  border-dashed bg-[#F5F7F8] p-2 text-slate-900"
        >
          <div className="text-2xl font-bold leading-loose text-center text-slate-900">
            Summary
          </div>
          {summaryWithStyles}
        </div>
      </div>
    </>
  );
}

NoteContainer.propTypes = {
  structuredNote: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  questions: PropTypes.string.isRequired,
};

export default NoteContainer;
