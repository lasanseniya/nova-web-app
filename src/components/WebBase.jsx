import { useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import "../component-css/WebBase.css";

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
      {/*{Adding new-note window to the web base}*/}
      {newNoteButnClicked && (
        <div className="new-note-container">
          <div className="div1"> </div>
          <div className="div2"> </div>
          <div className="div3"> </div>
        </div>
      )}{" "}
      {/*{Adding my-notes window to the web base}*/}
      {myNotesButnClicked && (
        <div className="my-notes-container">My Notes</div>
      )}{" "}
    </div>
  );
};

export default WebBase;
