function NewNote() {
  return (
    <div className=" sm:ml-64">
      {/* New note container */}
      <div className="mt-20 h-[calc(100vh-5rem)] bg-gradient-to-b from-slate-900 via-slate-900 to-sky-950 p-4 text-white">
        {/* Container */}
        <div className="h-full flex-row border-2 border-dashed border-blue-300">
          {/*Youtube link and Generate button container*/}
          <div className="flex place-content-center bg-[#2424245a]">
            <input
              type="text"
              placeholder="YouTube link goes here..."
              className="h-10 w-full p-2 text-slate-900 sm:w-4/5 lg:w-3/5"
            />
            <button className="w-24 bg-blue-500 shadow-lg shadow-blue-500/50">
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewNote;
