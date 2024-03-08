function NoteContainer() {
  return (
    <>
      <div className="flex-1 p-10 sm:grid sm:grid-cols-3 sm:grid-rows-10 sm:gap-4">
        <div
          contentEditable
          className="col-span-1 row-span-10 rounded-md border border-dashed"
        ></div>
        <div
          contentEditable
          className="col-span-2 row-span-7 rounded-md border border-dashed"
        ></div>
        <div
          contentEditable
          className="col-span-2 col-start-2 row-span-3 row-start-8 rounded-md border border-dashed"
        ></div>
      </div>
    </>
  );
}

export default NoteContainer;
