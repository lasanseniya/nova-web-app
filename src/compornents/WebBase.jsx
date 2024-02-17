import { useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import "../compornent-css/WebBase.css";

const WebBase = () => {
  const [newNoteButnClicked, setNewNoteButnClicked] = useState(false);
  const [myNotesButnClicked, setMyNotesButnClicked] = useState(false);
  const [userName] = useState("<user name>");

  function handleNewNoteClick() {
    setNewNoteButnClicked(true);
  }

  function handleMyNotesClick() {
    setMyNotesButnClicked(true);
    setNewNoteButnClicked(false);
  }

  return (
    <div>
      <div className="right-panel-container">
        <div className="left-panel-container">
          <div className="logo-section">
            <img src={logo} alt="logo" />
            <span className="logo-text">Nova</span>

            <div
              className={`new-note-btn ${newNoteButnClicked ? "clicked" : ""}`}
              onClick={() => {
                setMyNotesButnClicked(false);
                handleNewNoteClick();
              }}
            >
              New Note
            </div>
            <div
              className={`my-notes-btn ${myNotesButnClicked ? "clicked" : ""}`}
              onClick={handleMyNotesClick}
            >
              My Notes
            </div>
            <div className="welcome-note-section">
              <span>Welcome, {userName}!</span>
              <img src={user} alt="user logo" />
            </div>
          </div>
        </div>
      </div>
      {newNoteButnClicked && <div className="new-note-container">New Note</div>}
      {myNotesButnClicked && <div className="my-notes-container">My Notes</div>}
    </div>
  );
};

export default WebBase;
