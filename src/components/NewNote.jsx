function NewNote() {
  return (
    <div className=" sm:ml-64">
      {/* New note container */}
      <div className="mt-20 h-[calc(100vh-5rem)] bg-gradient-to-b from-slate-900 via-slate-900 to-sky-950 p-4 text-white">
        {/* Container */}
        <div className="h-full flex-row border-2 border-dashed border-[#2e2e2e]">
          {/*Youtube link and Generate button container*/}
          <div className="flex place-content-center">
            <div className="lg:3/5 relative w-full flex-col rounded-lg bg-slate-100 p-2 sm:w-4/5">
              <input
                type="text"
                placeholder="YouTube link goes here..."
                className="w-full bg-slate-100 text-slate-900"
              />
              <button className="absolute right-1 top-1 rounded-lg bg-blue-500 px-3.5 py-1 shadow-lg shadow-blue-500/50">
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewNote;
