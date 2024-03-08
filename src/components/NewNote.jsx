import NoteContainer from "./NoteContainer";

function NewNote() {
  return (
    <div className="sm:ml-64">
      {/* New note container */}
      <div className="mt-20 h-[calc(100vh-5rem)] bg-gradient-to-b from-slate-900 via-slate-900 to-sky-950 p-4 text-white">
        {/* Container */}
        <div className="flex h-full flex-col">
          {/*Youtube link and Generate button container*/}
          <div className="flex place-content-center">
            <div className="relative w-full flex-col rounded-lg bg-slate-100 p-2 sm:w-4/5 lg:w-2/5">
              <input
                type="text"
                placeholder="YouTube link goes here..."
                className="w-full bg-slate-100 text-slate-900 focus:outline-none"
              />
              <button className="absolute right-1 top-1 rounded-lg bg-blue-600 px-3.5 py-1 shadow-lg hover:bg-blue-500 hover:shadow-blue-500/40">
                Generate
              </button>
            </div>
          </div>
          {/* Note Containers */}
          <NoteContainer />
        </div>
      </div>
    </div>
  );
}

export default NewNote;
