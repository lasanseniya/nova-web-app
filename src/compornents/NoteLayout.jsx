import "../compornent-css/NoteLayout.css";

function NoteLayout() {
  return (
    <>
      <div className="nav"></div>
      <div className="note-area"></div>
      <div className="sidePane">
        <button id="btn-generate"></button>
      </div>
    </>
  );
}

export default NoteLayout;
