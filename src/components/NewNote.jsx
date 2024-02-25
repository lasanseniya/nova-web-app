function NewNote() {
  return (
    <div className=" sm:ml-64">
      {/* New note container */}
      <div className=" mt-20 h-[calc(100vh-5rem)] border-2 border-dashed border-gray-200 bg-gradient-to-b from-slate-900 via-slate-900 to-sky-950 p-4 text-white dark:border-gray-700">
        New note area
        {/* Content area */}
      </div>
    </div>
  );
}

export default NewNote;
