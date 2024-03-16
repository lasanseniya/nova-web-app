function MyNotes() {
  return (
    <div className=" sm:ml-64">
      {/* My notes container */}
      <div className=" mt-20 h-[calc(100vh-5rem)] border-2 border-dashed border-gray-200 bg-gradient-to-b from-slate-900 via-slate-900 to-sky-950 p-4 text-white dark:border-gray-700">
        
        {/* Content area */}
        <div className=" flex-row border-2 border-dashed border-blue-300 h-full">

        <button className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">Home</button>

        </div>
      </div>
    </div>
  );
}

export default MyNotes;
